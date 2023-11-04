# 2023-11-03-Plugin Status
Preparing for plugin submission, it appears that there are some updates to the plugins.

1) Based on https://grafana.com/developers/plugin-tools/get-started/folder-structure, the `./go.mod` file is missing

2) There is now an app type plugin, currently we created a panel type, should we change?

3) Based on 1) and 2) was there a refactor or update of how plugins are implemented?

Looking at the documentation below, there is no reference to the app type plugin:
https://grafana.com/developers/plugin-tools/tutorials/

Further review of the app plugin, they seem oriented to custom pages, forms, and integration of datasources. 

The plugin functionality for displaying the activity numbers, at the moment, might be better suited to staying with the panel.

## Example Plugins
The example plugins are here:
https://github.com/grafana/grafana-plugin-examples/tree/master/examples

Specifically example app basic plugin is here:
https://github.com/grafana/grafana-plugin-examples/tree/main/examples/app-basic

## Recommendation
At the moment the recommendation is to stay with the panel plugin type.  

The approach will be to create a new panel plugin, from the latest code, and migrate the exiting plugin.

## Create a new App plugin
https://grafana.com/developers/plugin-tools/

Note: There is no tutorial for app type plugin

Update npm if required, for MacOS:
```
brew install node
```

Create a new App plugin using the CLI tool `create-plugin`:
```
cd ~/Developer/Work/dangerboard-grafana
npx @grafana/create-plugin@latest
```

```
? What is going to be the name of your plugin? dangerboard-activity-summary
? What is the organization name of your plugin? Dangerboard
? How would you describe your plugin? Displays the Apple Watch activity summary from the Dangerboard api.
? What type of plugin would you like? panel
? Do you want to add Github CI and Release workflows? Yes
? Do you want to add a Github workflow for automatically checking "Grafana API compatibility" on PRs? Yes
[...]
✔  updateGoSdkAndModules
✔  prettifyFiles Successfully ran prettier against new plugin.
✔  printSuccessMessage Congratulations on scaffolding a Grafana panel plugin! 🚀

## What's next?

Run the following commands to get started:

    * cd ./dangerboard-dangerboardactivitysummary-panel
    * npm install to install frontend dependencies.
    * npm run dev to build (and watch) the plugin frontend code.
    * docker-compose up to start a grafana development server. Restart this command after each time you run mage to run your new backend code.
    * Open http://localhost:3000 in your browser to create a dashboard to begin developing your plugin.

Note: We strongly recommend creating a new Git repository by running git init in ./dangerboard-dangerboardactivitysummary-panel before continuing.

    * Learn more about Grafana Plugin Development at https://grafana.com/developers/plugin-tools
```


## Development and Testing
Tutorial here:
https://grafana.com/developers/plugin-tools/tutorials/

- Install dependencies:
```
npm install
```

- Build and watch the code for changes:
```
npm run dev
```

- Note, if there is something using the port (eg Java app), check what is running:
```
sudo lsof -i :35729
```

- To start a grafana development server:
```
docker compose up
```
Note: Restart this command after each time you run mage to run your new backend code.

Open http://localhost:3000/ with admin/admin

## Set up GitHub workflows
https://grafana.com/developers/plugin-tools/create-a-plugin/develop-a-plugin/set-up-github-workflows






## Migration
Code and files migrated:
`src/types.ts` to `src/types.ts`
`src/DangerBoardActivityPanel.tsx` to `src/DangerboardActivitySummary.tsx`
`src/constants.ts` to `src/constants.ts`
`src/module.ts` to `src/module.ts`
`screenshot.png` to `screenshot.png`

Remove `src/components/SimplePanel.tsx`
Remove `src/components/`

Update name of imports from `DangerBoardActivityPanel` to `DangerboardActivitySummary`

Update `src/plugin.json`

Added missing dependency to package.json:
```
    "@types/axios": "^0.14.0",
```

Keep new `src/README.md`

