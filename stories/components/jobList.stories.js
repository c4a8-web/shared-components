import { createComponent } from "../../.storybook/templates";
import jobListTemplate from "../../includes/job-list.html";

export default {
  title: "Components/Job/List",
};

const Template = (args) => createComponent(args, jobListTemplate);

export const List = Template.bind({});

const baseArgs = {
  clientName: "glueckkanja",
};

List.args = {
  ...baseArgs,
};

export const FilteredList = Template.bind({});

FilteredList.args = {
  ...baseArgs,
};
