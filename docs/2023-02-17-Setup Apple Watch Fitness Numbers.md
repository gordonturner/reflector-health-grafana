# 2023-02-17-Setup Apple Watch Fitness Numbers 

https://grafana.com/tutorials/build-a-panel-plugin/#3

- Run:
```
cd reactor-dashboard-grafana
mkdir dist
```

- Create the plugin:
```
npx @grafana/toolkit plugin:create
```

```
? What is going to be the name of your plugin?
Apple Watch Fitness Numbers

? What is the organization name of your plugin?
Reactor Dashboard

? How would you describe your plugin?
Displays the Apple Watch Fitness Numbers (rings) from the Reactor Dashboard API.

? What type of plugin would you like? (Use arrow keys)
  app 
  datasource 
❯ panel 
? Do you want to add Github CI and Release workflows? Yes
? Do you want to add a Github workflow for automatically checking "Grafana API compatibility" on PRs? Yes
```

```
cd reactordashboard-applewatchfitnessnumbers-panel
yarn install
yarn dev
````

- Start a detached Grafana dock image, using the local directory as the plugins home:

```
cd reactordashboard-applewatchfitnessnumbers-panel
docker run -d -p 3000:3000 \
-v "$(pwd)"/dist:/var/lib/grafana/plugins \
--name=reactor-dashboard-grafana \
-e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=reactordashboard-applewatchfitnessnumbers-panel" \
grafana/grafana:8.3.3
```

- NOTE: Updated to match version in prod, 8.3.3

- NOTE: Need to update GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS to match plugin name




