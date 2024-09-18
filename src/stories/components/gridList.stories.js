import GridListComponent from "../../components/grid-list";

export default {
  component: GridListComponent,
  argTypes: {},
  title: "Components/Grid List",
};

export const ListView = {
  args: {
    items: site.posts,
    view: "list-view",
    authors: {
      "Author Name": {
        display_name: "Author Name",
        avatar: "people/people-author-name.png",
        permalink: "/authors/author-name/",
        twitter: "glueckkanjagab",
        linkedin: "../company/glueckkanja-gab",
      },
    },
  },
};

export const TileView = {
  args: {
    items: site.posts,
    view: "tile-view",
    authors: {
      display_name: "Author Name",
      avatar: "people/people-author-name.png",
      permalink: "/authors/author-name/",
      twitter: "glueckkanjagab",
      linkedin: "../company/glueckkanja-gab",
    },
  },
};
