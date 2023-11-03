# 2023-11-03-Plugin Status
Preparing for plugin submission, it appears that there are some updates to the plugins.

1) Based on https://grafana.com/developers/plugin-tools/get-started/folder-structure, the `./go.mod` file is missing

2) There is now an app type plugin, currently we created a panel type, should we change?

3) Based on 1) and 2) was there a refactor or update of how plugins are implemented?

Looking at the documentation below, there is no reference to the app type plugin:
https://grafana.com/developers/plugin-tools/tutorials/

## Example Plugin
The example plugins are here:
https://github.com/grafana/grafana-plugin-examples/tree/master/examples

Specifically example app basic plugin is here:
https://github.com/grafana/grafana-plugin-examples/tree/main/examples/app-basic

## Recommendation
Based on the description of what a panel type is and what an app type is, the plugin type that should be used is app type.

## Create a new App plugin
Create a new App plugin using the CLI tool:

```

```