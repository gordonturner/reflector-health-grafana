# 2023-12-21-Plugin Submission and Refactoring

Sign in with Google using gordon@dangerboard.com

## Feedback from Grafana

Thank you very much for the submission. I have reviewed the code and have the following feedback. 
 
Required changes:

1. It looks like the installId defined in the panel options is a personal id token. This is not allowed since panel options are stored as clear text in the Grafana data base and are available via the panel.json in the dashboard.

2. In DangerboardActivitySummary.tsx, you use setInterval (with the refresh defined in panel options) to call an API an fetch data. In Grafana, this is typically done in a data source plugin. You need to either 1) find a data source that can fetch this data or 2) create a new data source plugin that does this. The DangerBoardActivityPanel would then receive data through the PanelProps. You can find documentation on how to build data source plugins here and here.
 
We also noticed that you already have an unpublished plugin called dangerboard-activity-panel. Do you want to use that pluginId instead? If not we would prefer if you updated the current dangerboard-dangerboardactivitysummary-panel to dangerboard-activitysummary-panel to remove the duplicated organisation name.

Best regards
Team Grafana
Reply to this ticket (#111903) via email or in the User Portal.


## Reply to Grafana

Hey Grafana!

Sorry for the delayed response, a few things in the air.

Thanks for the review, replying to your feedback:

1. It looks like the installId defined in the panel options is a personal id token.

This is correct, the installId token is a unique value provided by the user, there is a default value of `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` which will return placeholder data.

2. I was hoping to avoid creating a second plugin for the data source.

Would it be better to implement as a 'app type' plugin?  

Based on your feedback about the plugin type, I am happy to remove the old plugin/rename to just have one.

