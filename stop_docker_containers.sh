#!/bin/bash
#kill all running Docker containers
sudo docker stop $(docker ps -a -q)
