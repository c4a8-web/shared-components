// import * as React from "react";
import { addons, types } from '@storybook/addons';
import { ADDON_ID, TOOL_ID } from './exports';
import { Tool } from './Tool';

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'HTML Download',
    match: ({ viewMode }) => viewMode === 'story',
    render: Tool,
  });
});
