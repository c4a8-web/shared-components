import { createComponent } from "../../.storybook/templates";
import jobListEntryTemplate from "../../includes/job-list-entry.html";

export default {
  title: "Components/Job/List Entry",
};

const Template = (args) => createComponent(args, jobListEntryTemplate);

export const ListEntry = Template.bind({});

ListEntry.args = {
  title:
    "Lust auf ein IT Trainee-Programm mit umfassenden Microsoft Trainings?",
  city: "Offenbach am Main",
};
