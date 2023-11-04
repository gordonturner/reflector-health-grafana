import { PanelPlugin } from '@grafana/data';
import { ReactDashboardOptions } from './types';
import { DangerBoardActivityPanel } from './DangerboardActivitySummary';
import { DEFAULT_INSTALL_ID, DEFAULT_REFRESH_IN_MS } from './constants';

export const plugin = new PanelPlugin<ReactDashboardOptions>(DangerBoardActivityPanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'installId',
      name: 'Install Id',
      description: 'To find your Install Id, please visit the \'Install Id Lookup\' page, and enter a Quickcode from the iOS app.',
      settings: {
        placeholder: DEFAULT_INSTALL_ID,
      },
    })
    .addTextInput({
      path: 'refreshInMs',
      name: 'Refresh',
      description: 'Refresh in Milliseconds.',
      settings: {
        placeholder: DEFAULT_REFRESH_IN_MS.toString(),
      },
    });
});
