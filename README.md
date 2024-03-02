# README

## Setup and Build
The build requires node/npm and yarn.

- Install node, please see:  
https://nodejs.org/en/download
  
- Install yarn:  
```
npm install --global yarn
```
  
- First, build the project:
```
cd dangerboard-grafana
yarn install
yarn dev
```

## Development Docker
The easiest way to do plugin development is to use a Docker image.  
  
- Install Docker:  
https://docs.docker.com/get-docker/

- Start docker

- Start a detached Grafana dock image, using the local directory as the plugins home:
```
docker run -d -p 3000:3000 \
-v "$(pwd)"/dist:/var/lib/grafana/plugins/dangerboard-dangerboardactivitysummary-panel \
--name=dangerboardactivitysummary \
-e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=dangerboardactivitysummary" \
-e "GF_DEFAULT_APP_MODE=development" \
-e "GF_LOG_LEVEL=debug" \
grafana/grafana:10.2.0
```

- Open and login with admin/admin:  
http://localhost:3000/

## Installed Instance Enabling Unsigned Plugins
If you have an installed Grafana instance, the following will allow the unsigned plugin to be available.  
  
- Edit:  
`sudo vi /etc/grafana/grafana.ini`

- Add to:  
`allow_loading_unsigned_plugins = dangerboard-activity-panel`

## Deploying Test Build to Server 
- Create release and deploy:  
```
cd ~/Developer/Work/dangerboard-grafana
yarn dev
cp -R dist /tmp/dangerboard-dangerboardactivitysummary-panel
cd /tmp
zip dangerboard-dangerboardactivitysummary-panel-1.3.0.zip dangerboard-dangerboardactivitysummary-panel -r
rm -rf /tmp/dangerboard-dangerboardactivitysummary-panel
scp dangerboard-dangerboardactivitysummary-panel-1.3.0.zip gturner@monitor.localdomain:~/Downloads
```

- On server, deploy plugin:
```
sudo su -
cp /home/gturner/Downloads/dangerboard-dangerboardactivitysummary-panel-1.3.0.zip /var/lib/grafana/plugins
cd /var/lib/grafana/plugins
rm -rf dangerboard-dangerboardactivitysummary-panel
unzip dangerboard-dangerboardactivitysummary-panel-1.3.0.zip
chown -R grafana.grafana dangerboard-dangerboardactivitysummary-panel
sudo systemctl restart grafana-server
```
  
- Tail logs:
```
sudo tail -F /var/log/grafana/grafana.log
journalctl -u grafana-server.service -f
```
  
## Using Unsigned Plugins
By default Grafana will not load unsigned plugins.

If you are developing plugins and want to test the changes, you will have to add the name of the unsigned plugin to the `allow_loading_unsigned_plugins` parameter.
