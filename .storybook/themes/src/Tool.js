import React, { Fragment } from "react";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { useStorybookApi, useParameter, useAddonState } from "@storybook/api";
import { TOOL_ID, ADDON_ID, PARAM_KEY, EVENTS, THEME_LIST } from "./themes";

const defaultTheme = {
  id: "reset",
  title: "Reset Theme",
  type: "gkgab",
};

const baseThemes = [defaultTheme];

const toList = (items) => [
  ...baseThemes,
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
        case defaultTheme.id: {
          if (active.id === i.id) {
            return null;
          }
        }
        default: {
          return {
            ...i,
            onClick: () => {
              api.getChannel().emit(EVENTS.CHANGE, i.type);

              set({ ...state, selected: i.id });
              close();
            },
          };
        }
      }
    })
    .filter(Boolean);
};

export const Tool = function () {
  const {
    viewports = THEME_LIST,
    defaultThemeId = defaultTheme.id,
  } = useParameter(PARAM_KEY, {});

  const list = toList(viewports);
  const api = useStorybookApi();

  const [state, setState] = useAddonState(ADDON_ID, {
    selected: defaultThemeId,
    api,
  });

  const { selected } = state;

  const item =
    list.find((i) => i.id === selected) ||
    list.find((i) => i.id === defaultThemeId) ||
    list.find((i) => i.default) ||
    defaultTheme;

  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => {
          return (
            <TooltipLinkList
              links={toLinks(list, item, setState, state, api, onHide)}
            />
          );
        }}
      >
        <IconButton key={TOOL_ID} active={true} title="Pick a Theme">
          <Icons icon="switchalt" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
};

/*
  Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
  for the full list of icons
*/
