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
                cd ./helmfile
                if [ "$TARGET" = "prod-blue" ] || [ "$TARGET"= "prod-green" ]
                    then
                    echo "Prod"
                    . ./context-prod.sh > /dev/null
                else
                    echo "Dev"
                    . ./context-dev.sh > /dev/null
                fi 
                '''
                sh './helmfile/scripts/deleteDatabase.sh'
                sh '''
                    cd ./helmfile
                    echo "Setting Environment Secrets. This is obfuscated"
                    set +x

                    set -x
                    echo "Done."
                    helmfile --environment $TARGET --selector tier=$TIER apply
                    '''
                sh './helmfile/scripts/dataseed.sh'
            }
        }
    }
}