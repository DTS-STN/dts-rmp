#!/bin/bash
while [ $(kubectl get pods -l app.kubernetes.io/instance=rmp-$TARGET -n rmp-$TARGET -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]; do 
    echo "waiting for pod" && sleep 1; 
done
kubectl exec deployment.apps/rmp-$TARGET-dts-rmp -n rmp-$TARGET npm run seed