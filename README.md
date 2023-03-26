# README dangerboard-grafana

## Backlog  
[ ] Read activityMoveMode and switch Move value  

## Todo  
[ ] Sign and submit plugin    
[ ] Document release notes  
[ ] Test with max values for layout  
[X] Plugin options, remove url  
[X] Remove leading space on Move, tested, not doing
[X] Clean up  
[X] Document dev Docker setup 
[X] Edit README
  
## Done  
[X] Create Grafana account  
[X] Prototype plugin
[X] Run plugin create script  
  
# Development
  
## Using Unsigned Plugins
By default Grafana will not load unsigned plugins.

If you are developing plugins and want to test the changes, you will have to add the name of the unsigned plugin to the `allow_loading_unsigned_plugins` parameter.

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
cd dangerboard-activity-panel
yarn install
yarn dev
```

## Development Docker
The easiest way to do plugin development is to use a Docker image.  
  
- Install Docker:  
https://docs.docker.com/get-docker/
  
- Start a detached Grafana dock image, using the local directory as the plugins home:  
  
```
cd dangerboard-activity-panel
docker run -d -p 3000:3000 \
-v "$(pwd)"/dist:/var/lib/grafana/plugins \
--name=dangerboard-grafana \
-e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=dangerboard-activity-panel" \
grafana/grafana:8.3.3
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
cd ~/Developer/Work/dangerboard-grafana/dangerboard-activity-panel
yarn build
cp -R dist /tmp/dangerboard-activity-panel
cd /tmp
zip dangerboard-activity-panel-2.0.zip dangerboard-activity-panel -r
rm -rf /tmp/dangerboard-activity-panel
scp dangerboard-activity-panel-2.0.zip gturner@monitor.localdomain:~/Downloads
```

- On server, deploy plugin:

```
sudo su -
cp ~/Downloads/dangerboard-activity-panel-2.0.zip  /var/lib/grafana/plugins
cd /var/lib/grafana/plugins
rm -rf dangerboard-activity-panel
unzip dangerboard-activity-panel-2.0.zip
chown -R grafana.grafana dangerboard-activity-panel
exit
```
  
- Restart Grafana:
  
```
sudo systemctl restart grafana-server
```
  
- Tail logs:
  
```
sudo tail -F /var/log/grafana/grafana.log
```
