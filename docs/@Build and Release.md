# @Build and Release

## Tag a Plugin Release
```
git tag v1.2.0
git push origin v1.2.0
```

## Package a Plugin
https://grafana.com/developers/plugin-tools/publish-a-plugin/package-a-plugin
  
```
cd ~/Developer/Work/reflector-health-grafana
yarn build
cp -R dist /tmp/reflector-health-activitysummary-panel
cd /tmp
zip reflector-health-activitysummary-panel-1.2.0.zip reflector-health-activitysummary-panel -r
rm -rf /tmp/reflector-health-activitysummary-panel
```

- Upload to server for sharing
- md5sum:

```
md5 /tmp/reflector-health-activitysummary-panel-1.2.0.zip
```

- Source url:
https://github.com/gordonturner/reflector-health-grafana


## Setup an Account
- 1 time task

https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/

- Public plugin. 
- Need a community or commercial signature level. 
    
- Generate an API key. 
- Create a Grafana Cloud API key with the PluginPublisher role. 
- https://grafana.com/docs/grafana-cloud/reference/create-api-key/

- API key:
https://grafana.com/orgs/reflector-health/api-keys
https://grafana.com/orgs/dangerboard/api-keys