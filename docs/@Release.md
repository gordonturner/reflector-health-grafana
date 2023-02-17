# @Release

## Adding New Unsigned Plugins
- Edit:
```
sudo vi /etc/grafana/grafana.ini
```

- Add to:
```
allow_loading_unsigned_plugins = gordonturner-bigboard-weather-gc-current-panel,gordonturner-bigboard-weather-gc-forecast-panel,gordonturner-listlist-panel,gordonturner-bigboard-twitter-multi-user-panel,gordonturner-bigboard-twitter-trending-panel,gordonturner-bigboard-twitter-single-user-panel,reactordashboard-applewatchfitnessnumbers-panel
```


## Release

- Create release and deploy:

```
cd /Users/gturner/Developer/Work/reactor-dashboard-grafana/reactordashboard-applewatchfitnessnumbers-panel
yarn build
cp -R dist /tmp/reactordashboard-applewatchfitnessnumbers-panel
cd /tmp
zip reactordashboard-applewatchfitnessnumbers-panel-1.0.zip reactordashboard-applewatchfitnessnumbers-panel -r
rm -rf /tmp/reactordashboard-applewatchfitnessnumbers-panel
scp reactordashboard-applewatchfitnessnumbers-panel-1.0.zip gturner@monitor.localdomain:/home/gturner/Downloads
```

- On server, deploy plugin:

```
sudo su -
cp /home/gturner/Downloads/reactordashboard-applewatchfitnessnumbers-panel-1.0.zip  /var/lib/grafana/plugins
cd /var/lib/grafana/plugins
rm -rf reactordashboard-applewatchfitnessnumbers-panel
unzip reactordashboard-applewatchfitnessnumbers-panel-1.0.zip
chown -R grafana.grafana reactordashboard-applewatchfitnessnumbers-panel
exit
```

- Restart Grafana:

```
sudo systemctl restart grafana-server
```

- Tail logs:

```
tail -F /var/log/grafana/grafana.log
```
