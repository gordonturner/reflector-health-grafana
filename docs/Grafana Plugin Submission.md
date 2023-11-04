# Grafana Plugin Submission

## Tag a Plugin Release
```
git tag v1.2.0
git push origin v1.2.0
```

## Package a Plugin
https://grafana.com/developers/plugin-tools/publish-a-plugin/package-a-plugin
  
```
cd ~/Developer/Work/dangerboard-grafana
yarn build
cp -R dist /tmp/dangerboard-dangerboardactivitysummary-panel
cd /tmp
zip dangerboard-dangerboardactivitysummary-panel-1.2.0.zip dangerboard-dangerboardactivitysummary-panel -r
rm -rf /tmp/dangerboard-activity-summary
```

- Upload to server for sharing
- md5sum:

```
md5 /tmp/dangerboard-dangerboardactivitysummary-panel-1.2.0.zip
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

- API key:
https://grafana.com/orgs/dangerboard/api-keys