#!/bin/bash
cd $WORKSPACE/helmfile
pwd
helm delete rmp-db-$TARGET --namespace rmp-$TARGET
set +x
if [ "$TARGET" = "prod-blue" ] || [ "$TARGET"= "prod-green" ]
    then
    echo "Prod"
    set +x
    echo "Setting Environment Secrets. This is obfuscated"
    . ./context-prod.sh > /dev/null
    set -x
else
    echo "Dev"
    set +x
    echo "Setting Environment Secrets. This is obfuscated"
    . ./context-dev.sh > /dev/null
    set -x
fi 
set -x
helmfile --environment $TARGET --selector app=rmp,tier=database apply
while [[ $(kubectl get pods -l release=rmp-db-$TARGET -n rmp-$TARGET -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]; do echo "waiting for pod" && sleep 1; done
