import { site } from "../../../.storybook/templates";
import FilterBarComponent from "../../components/filter-bar";

export default {
  component: FilterBarComponent,
  argTypes: {
    items: {
      description: "The list of items to display",
      type: "array",
    },
  },
  title: "Components/Filter Bar",
};

export const FilterBar = {
  args: {
    items: site.posts,
  },
};
