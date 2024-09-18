import AuthorAvatarTemplate from "../../components/author-avatar";

export default {
  component: AuthorAvatarTemplate,
  argTypes: {
    author: {
      description: "Author Object",
      type: "object",
    },
    classes: {
      description: "Option to add Additional Css Classes",
      type: "string",
    },
    imgUrl: {
      description: "Author Image",
      type: "string",
    },
  },
  title: "Components/Author Avatar",
};

export const AuthorAvatar = {
  args: {
    author: {
      display_name: "Lorem Ipsum",
    },
    imgUrl: "/people/people-michael-breither.jpg",
  },
};
