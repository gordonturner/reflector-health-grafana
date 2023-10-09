# README dangerboard-grafana

## Backlog  
N/A

## Todo  
[X] Read activityMoveMode and switch Move value  
[X] Test with max values for layout  
[X] Plugin options, remove url  
[X] Remove leading space on Move, tested, not doing
[X] Clean up  
[X] Document dev Docker setup 
[X] Edit README
[X] Sign and submit plugin    
[X] Document release notes  
  
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
-v "$(pwd)"/dist:/var/lib/grafana/plugins/dangerboard-activity-panel \
--name=dangerboard-grafana \
-e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=dangerboard-activity-panel" \
-e "GF_DEFAULT_APP_MODE=development" \
-e "GF_LOG_LEVEL=debug" \
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
yarn dev
cp -R dist /tmp/dangerboard-activity-panel
cd /tmp
zip dangerboard-activity-panel-4.0.zip dangerboard-activity-panel -r
rm -rf /tmp/dangerboard-activity-panel
scp dangerboard-activity-panel-4.0.zip gturner@monitor.localdomain:~/Downloads
```

- On server, deploy plugin:
```
sudo su -
cp /home/gturner/Downloads/dangerboard-activity-panel-4.0.zip  /var/lib/grafana/plugins
cd /var/lib/grafana/plugins
rm -rf dangerboard-activity-panel
unzip dangerboard-activity-panel-4.0.zip
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
journalctl -u grafana-server.service -f
```

# Distributing your plugin

When distributing a Grafana plugin either within the community or privately the plugin must be signed so the Grafana application can verify its authenticity. This can be done with the `@grafana/sign-plugin` package.

_Note: It's not necessary to sign a plugin during development. The docker development environment that is scaffolded with `@grafana/create-plugin` caters for running the plugin without a signature._

## Initial steps

Before signing a plugin please read the Grafana [plugin publishing and signing criteria](https://grafana.com/docs/grafana/latest/developers/plugins/publishing-and-signing-criteria/) documentation carefully.

`@grafana/create-plugin` has added the necessary commands and workflows to make signing and distributing a plugin via the grafana plugins catalog as straightforward as possible.

Before signing a plugin for the first time please consult the Grafana [plugin signature levels](https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/#plugin-signature-levels) documentation to understand the differences between the types of signature level.

1. Create a [Grafana Cloud account](https://grafana.com/signup).
2. Make sure that the first part of the plugin ID matches the slug of your Grafana Cloud account.
   - _You can find the plugin ID in the plugin.json file inside your plugin directory. For example, if your account slug is `acmecorp`, you need to prefix the plugin ID with `acmecorp-`._
3. Create a Grafana Cloud API key with the `PluginPublisher` role.
4. Keep a record of this API key as it will be required for signing a plugin

## Signing a plugin

### Using Github actions release workflow

If the plugin is using the github actions supplied with `@grafana/create-plugin` signing a plugin is included out of the box. The [release workflow](./.github/workflows/release.yml) can prepare everything to make submitting your plugin to Grafana as easy as possible. Before being able to sign the plugin however a secret needs adding to the Github repository.

1. Please navigate to "settings > secrets > actions" within your repo to create secrets.
2. Click "New repository secret"
3. Name the secret "GRAFANA_API_KEY"
4. Paste your Grafana Cloud API key in the Secret field
5. Click "Add secret"

#### Push a version tag

To trigger the workflow we need to push a version tag to github. This can be achieved with the following steps:

1. Run `npm version <major|minor|patch>`
2. Run `git push origin main --follow-tags`

## Learn more

Below you can find source code for existing app plugins and other related documentation.

- [Basic panel plugin example](https://github.com/grafana/grafana-plugin-examples/tree/master/examples/panel-basic#readme)
- [Plugin.json documentation](https://grafana.com/docs/grafana/latest/developers/plugins/metadata/)
- [How to sign a plugin?](https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/)

- [Plugin json format](https://grafana.com/developers/plugin-tools/reference-plugin-json)