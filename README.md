# README

## Installed Instance Enabling Unsigned Plugins
If you have an installed Grafana instance, the following will allow the unsigned plugin to be available.  
  
- Edit:  
`sudo vi /etc/grafana/grafana.ini`

- Add to:  
`allow_loading_unsigned_plugins = reflector-health-activity-panel`
  
## Using Unsigned Plugins
By default Grafana will not load unsigned plugins.

If you are developing plugins and want to test the changes, you will have to add the name of the unsigned plugin to the `allow_loading_unsigned_plugins` parameter.
