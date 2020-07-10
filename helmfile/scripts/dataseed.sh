#!/bin/bash
cd $WORKSPACE/helmfile
pwd
while [ $(kubectl get pods -l app.kubernetes.io/instance=rmp-$TARGET,docker_tag=$DOCKER_TAG -n rmp-$TARGET -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]; do 
    echo "waiting for pod" && sleep 1; 
done
PODNAME=$(kubectl get pods --namespace rmp-$TARGET | grep rmp-$TARGET-dts-rmp | awk '{print $1}')
kubectl exec $PODNAME -n rmp-$TARGET -- npm run seed