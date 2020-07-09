pipeline {
    agent any
    parameters {
        string(name: 'DOCKER_TAG', defaultValue: 'latest', description: 'Version of docker image')
        string(name: 'TIER', defaultValue: 'frontend', description: 'Target portion of application: frontend,admin,database')
        string(name: 'TARGET', defaultValue: 'dev', description: 'Target environment of application: dev,staging,etc')
    }
    environment {
        JENKINS_SPN     = credentials('JENKINS_SPN_ID')
        JENKINS_SPN_PASS = credentials('JENKINS_SPN_PASS')
        AZURE_TENANT_ID = credentials('AZURE_TENANT_ID')
    }    
    stages {
        stage('Deploy') {
            steps {
               sh 'az login --service-principal -u $JENKINS_SPN -p $JENKINS_SPN_PASS --tenant $AZURE_TENANT_ID'
               sh '''
                    helm delete rmp-db-$TARGET --namespace rmp-$TARGET
                    cd ./helmfile
                    set +x
                    . ./context-dev.sh
                    set -x
                    helmfile --environment $TARGET --selector app=rmp,tier=database apply
                    while [[ $(kubectl get pods -l release=rmp-db-$TARGET -n rmp-$TARGET -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]; do echo "waiting for pod" && sleep 1; done
               '''
               sh '''
                    cd ./helmfile
                    echo "Setting Environment Secrets. This is obfuscated"
                    set +x
                    . ./context-dev.sh > /dev/null
                    set -x
                    echo "Done."
                    helmfile --environment $TARGET --selector tier=$TIER apply
                '''
               sh '''
                    while [[ $(kubectl get pods -l app.kubernetes.io/instance=rmp-$TARGET -n rmp-$TARGET -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]; do echo "waiting for pod" && sleep 1; done
                    kubectl exec deployment.apps/rmp-$TARGET-dts-rmp -n rmp-$TARGET npm run seed
               '''

            }
        }
    }
}