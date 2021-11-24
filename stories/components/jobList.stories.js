import { createComponent } from "../../.storybook/templates";
import jobListTemplate from "../../includes/job-list.html";

export default {
  title: "Components/Job List",
};

const Template = (args) => createComponent(args, jobListTemplate);

export const JobList = Template.bind({});

JobList.args = {
  client_name: "glueckkanja",
};
