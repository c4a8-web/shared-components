import SearchComponent from "../../components/search";

export default {
  title: "Components/Search",
  component: SearchComponent,
};

export const Default = {
  args: {
    endpoint: "mock/search.json",
  },
};

export const ScoreTest = {
  args: {
    endpoint: "mock/searchScoreTest.json",
  },
};
