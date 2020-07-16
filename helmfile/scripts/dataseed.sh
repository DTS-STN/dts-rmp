#!/bin/bash
cd $WORKSPACE/helmfile
pwd
PODNAME=$(kubectl get pod -l app.kubernetes.io/instance=rmp-$TARGET,docker_tag=$DOCKER_TAG -n rmp-$TARGET | grep rmp-$TARGET-dts-rmp | awk '{print $1}')
echo $PODNAME
while [ $(kubectl get pod $PODNAME -n rmp-$TARGET -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]; do 
    echo "waiting for pod" && sleep 1; 
done
kubectl exec $PODNAME -n rmp-$TARGET -- npm run seed