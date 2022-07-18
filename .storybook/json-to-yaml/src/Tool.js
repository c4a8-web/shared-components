import React, { Fragment } from 'react';
import { Icons, IconButton } from '@storybook/components';
import { useStorybookApi, useAddonState } from '@storybook/api';
import { TOOL_ID, ADDON_ID, JSON_TO_YAML_EVENTS, LOCALIZATION } from './exports';

let hasEventListener = false;
let storyData = '';

const onClick = function (setState, state) {
  navigator.clipboard.writeText(storyData);

  const delay = 2000;

  setState({
    ...state,
    copied: true,
  });

  setTimeout(() => {
    setState({
      ...state,
      copied: false,
    });
  }, delay);
};

const IconButtonLabel = function (props) {
  return <div style={{ marginLeft: 10 }}>{props.children}</div>;
};

export const Tool = function () {
  const api = useStorybookApi();

  if (!hasEventListener) {
    const channel = api.getChannel();

    channel?.on(JSON_TO_YAML_EVENTS.CHANGE, (e) => {
      storyData = e;
    });

    hasEventListener = true;
  }

  const [state, setState] = useAddonState(ADDON_ID, {
    copied,
  });

  const { copied } = state;

  const label = copied ? `${LOCALIZATION.copied}` : `${LOCALIZATION.download}`;

  return (
    <Fragment>
      <IconButton key={TOOL_ID} title={LOCALIZATION.tooltip} onClick={onClick.bind(this, setState, state)}>
        <Icons icon="copy" />
        <IconButtonLabel>{label}</IconButtonLabel>
      </IconButton>
    </Fragment>
  );
};
