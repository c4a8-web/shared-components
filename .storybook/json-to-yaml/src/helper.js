const yaml = require('js-yaml');

const getStoryData = (channel, storyId) => {
  if (!channel || !storyId) return;

  const data = channel.data;

  if (!data) return;

  const stories = data.setStories[0].stories;

  if (!stories) return;

  const story = stories[storyId];

  if (!story) return;

  const { args } = story;

  if (!args) return;

  const options = {
    forceQuotes: true,
  };

  return yaml.dump(args, options);
};

export { getStoryData };
