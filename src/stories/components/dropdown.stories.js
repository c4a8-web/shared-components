import DropdownComponent from "../../components/dropdown";

export default {
  component: DropdownComponent,
  argTypes: {},
  title: "Components/Dropdown",
};

export const Default = {
  args: {
    label: "Dropdown",
    items: [
      {
        text: "Azure",
        value: "azure",
        count: 1,
      },
      {
        text: "Azure",
        value: "azure",
        count: 1,
      },
      {
        text: "Azure",
        value: "azure",
        count: 3,
        checked: true,
      },
      {
        text: "Maximilian Mustermann-Schulz",
        value: "azure",
        count: 6,
      },
      {
        text: "Maximilian Mustermann",
        value: "azure",
        count: 263,
      },
    ],
  },
};

export const Filterable = {
  args: {
    label: "Dropdown",
    filterable: true,
    items: [
      {
        text: "Azure",
        value: "azure",
        count: 1,
      },
      {
        text: "Azure",
        value: "azure",
        count: 1,
      },
      {
        text: "Azure",
        value: "azure",
        count: 3,
        checked: true,
      },
      {
        text: "Maximilian Mustermann-Schulz",
        value: "azure",
        count: 6,
      },
      {
        text: "Maximilian Mustermann",
        value: "azure",
        count: 263,
        checked: true,
      },
    ],
  },
};
