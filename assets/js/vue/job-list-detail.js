export default {
  tagName: 'job-list-detail',
  computed: {
    // required() {
    //   return this.field?.required ? 'required' : null;
    // },
  },
  props: {
    // options: Array,
    // field: Object,
    // label: String,
    // id: String,
    /*

      detail-color="{{ jobListDetailColor }}"
  client-name="{{ jobListDetailClientName }}"
  job-id="{{ jobListDetailJobId }}"
  api-url="{{ jobListDetailApiUrl }}"
  base="{{ jobListDetailBase }}"
  title="{{ jobListDetailTitle }}"
  headline-level="{{ jobListDetailHeadlineLevel }}"
  headline-classes="{{ jobListDetailHeadlineClasses }}"
  gender="{{ jobListDetailGender }}"
  cta-text="{{ jobListDetailCtaText }}"
  cta-button="{{ jobListDetailCtaButton }}"
  description="{{ jobListDetailDescription }}"
  form="{{ jobListDetailForm | jsonify | escape }}"
  person-quote="{{ jobListDetailPersonQuote | jsonify | escape }}"
  google-maps="{{ jobListDetailGoogleMaps | jsonify | escape }}"
  modal-success="{{ jobListDetailModalSuccess | jsonify | escape }}"

    */
  },
  template: `
    job-list-detail
  `,
};
