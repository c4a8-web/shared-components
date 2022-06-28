import React, { Fragment } from 'react';
import { Icons, IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { useStorybookApi, useParameter, useAddonState } from '@storybook/api';
import { TOOL_ID, ADDON_ID, PARAM_KEY, HTML_DOWNLOAD_EVENTS, FILE_LIST, LOCALIZATION } from './exports';

const defaultFile = {
  id: 'reset',
  title: 'reset',
  type: 'svg',
};

const baseFile = [defaultFile];

const toList = (items) => [
  ...baseFile,
  ...Object.entries(items).map(([id, { name, ...rest }]) => ({
    ...rest,
    id,
    title: name,
  })),
];

const toLinks = (list, active, set, state, api, close) => {
  return list
    .map((i) => {
      switch (i.id) {
        case defaultFile.id: {
          if (active.id === i.id) {
            console.log('active');

            return null;
          }
        }
        default: {
          console.log('default');

          return {
            ...i,
            onClick: () => {
              api.getChannel().emit(HTML_DOWNLOAD_EVENTS.CHANGE, i.type);

              console.log('.map ~ state', state);
              set({ ...state, selected: i.id });
              close();
            },
          };
        }
      }
    })
    .filter(Boolean);
};

const IconButtonLabel = function (props) {
  return <div style={{ marginLeft: 10 }}>{props.children}</div>;
};

export const Tool = function () {
  const { files = FILE_LIST, defaultFileId = defaultFile.id } = useParameter(PARAM_KEY, {});

  const list = toList(files);
  const api = useStorybookApi();

  const [state, setState] = useAddonState(ADDON_ID, {
    selected: defaultFileId,
    api,
  });

  const { selected } = state;

  const item = list.find((i) => i.id === selected);

  const active = false;
  const label = `${LOCALIZATION.download}`;

  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => {
          return <TooltipLinkList links={toLinks(list, item, setState, state, api, onHide)} />;
        }}
      >
        <IconButton key={TOOL_ID} active={active} title={LOCALIZATION.pickFileType}>
          <Icons icon="download" />
          <IconButtonLabel>{label}</IconButtonLabel>
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
};
