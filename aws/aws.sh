#!/bin/bash 
VBoxmanage export gltc_default_1436816400578_33919 --output gltc_default_1436816400578_33919.ovf
ec2-import-instance gltc_default_1436816400578_33919-disk1.vmdk -f VMDK -t m1.small -a x86_64 -b gltc -o $AWS_ACCESS_KEY -w $AWS_SECRET_KEY --region us-west-2
ec2-describe-conversion-tasks import-i-fg63jjs9 --region us-west-2
