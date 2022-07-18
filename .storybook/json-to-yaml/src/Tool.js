import React, { Fragment } from 'react';
import { Icons, IconButton } from '@storybook/components';
import { useStorybookApi } from '@storybook/api';
import { TOOL_ID, JSON_TO_YAML_EVENTS, LOCALIZATION } from './exports';

let hasEventListener = false;
let storyData = '';

const onClick = function () {
  navigator.clipboard.writeText(storyData);
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

  const label = `${LOCALIZATION.download}`;

  return (
    <Fragment>
      <IconButton key={TOOL_ID} title={LOCALIZATION.tooltip} onClick={onClick}>
        <Icons icon="copy" />
        <IconButtonLabel>{label}</IconButtonLabel>
      </IconButton>
    </Fragment>
  );
};
