#!/bin/bash
cd $WORKSPACE/helmfile
pwd
helm delete rmp-db-$TARGET --namespace rmp-$TARGET
set +x
. ./context-dev.sh
set -x
helmfile --environment $TARGET --selector app=rmp,tier=database apply
while [[ $(kubectl get pods -l release=rmp-db-$TARGET -n rmp-$TARGET -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]; do echo "waiting for pod" && sleep 1; done
