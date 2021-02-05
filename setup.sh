#!/bin/sh

#nodejs npm install and n pacage install
apt install -y nodejs npm
sudo npm install n -g

#purge nodejs npm
sudo n stable
sudo apt purge -y nodejs npm
exec $SHELL -l

#http-server install
npm install http-server