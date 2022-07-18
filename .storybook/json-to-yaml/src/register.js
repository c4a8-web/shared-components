import { addons, types } from '@storybook/addons';
import { ADDON_ID, TOOL_ID, getStoryData, JSON_TO_YAML_EVENTS } from './exports';
import { Tool } from './Tool';
import { STORY_RENDERED } from '@storybook/core-events';

addons.register(ADDON_ID, (api) => {
  api.on(STORY_RENDERED, (storyId) => {
    const channel = api.getChannel();

    if (!channel) return;

    const storyData = getStoryData(channel, storyId);

    if (!storyData) return;

    channel.emit(JSON_TO_YAML_EVENTS.CHANGE, storyData);
  });

  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Storybook JSON to YAML',
    match: ({ viewMode }) => viewMode === 'story',
    render: Tool,
  });
});
