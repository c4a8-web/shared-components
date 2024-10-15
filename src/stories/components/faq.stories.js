import FaqComponent from '../../components/faq.vue';

export default {
  component: FaqComponent,
  argTypes: {
    headline: {
      description: 'Adds a Headline to the component',
      type: 'object',
    },
    entries: {
      description: 'List of Summaries with corresponding text',
      type: 'object',
    },
  },
  title: 'Components/Faq',
};

export const OneEntry = {
  args: {
    headline: {
      level: 'h3',
      text: 'FAQs 1 Entry',
    },
    entries: [
      {
        summary: 'Lorem ipsum dolor sit amet, consectet',
        text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p> ',
      },
    ],
  },
};

export const MultipleEntries = {
  args: {
    headline: {
      text: 'FAQs X Entries',
    },
    entries: [
      {
        summary:
          'Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet',
        text: '<p>Lorem ipsum dolor sit amet <a class="is" data-trigger-id="bewerbung2" data-trigger="modal">Initiativbewerbung</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'sit amet, consectet',
        text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor sit amet',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
    ],
  },
};
