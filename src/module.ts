import { PanelPlugin } from '@grafana/data';
import { ReflectorHealthOptions } from './types';
import { ReflectorHealthActivityPanel } from './ReflectorHealthActivityPanel';
import { DEFAULT_INSTALL_ID, DEFAULT_REFRESH_IN_MS } from './constants';

export const plugin = new PanelPlugin<ReflectorHealthOptions>(ReflectorHealthActivityPanel).setPanelOptions(builder => {
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
