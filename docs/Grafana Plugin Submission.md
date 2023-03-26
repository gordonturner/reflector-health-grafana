# Grafana Plugin Submission

## Prepare Zip Archive
  
```
cd ~/Developer/Work/dangerboard-grafana/dangerboard-activity-panel
yarn build
cp -R dist /tmp/dangerboard-activity-panel
cd /tmp
zip dangerboard-activity-panel-1.0.0.zip dangerboard-activity-panel -r
rm -rf /tmp/dangerboard-activity-panel
```

- Upload to server for sharing
- md5sum:

```
md5 /tmp/dangerboard-activity-panel-1.0.0.zip
```

- Source url:
https://github.com/gordonturner/dangerboard-grafana


## Setup an Account
- 1 time task

https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/

- Public plugin. 
- Need a community or commercial signature level. 
    
- Generate an API key. 
- Create a Grafana Cloud API key with the PluginPublisher role. 
- https://grafana.com/docs/grafana-cloud/reference/create-api-key/
