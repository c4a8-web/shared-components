import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'job-list-entry',
  computed: {
    classList() {
      return ['job-list__entry', `${Tools.isTrue(this.isInvisible) === true ? State.HIDDEN : ''}`, 'vue-component'];
    },
  },
  props: {
    title: String,
    gender: String,
    city: String,
    team: String,
    positionType: String,
    isInvisible: {
      default: null,
    },
    id: Number,
  },
  template: `
    <div :class="classList" :data-id="id">
      <div class="job-list__entry-header">
        <template v-if="team && team !== ''"> {{team}} / </template><template v-if="positionType && positionType !== ''"> {{positionType}} / </template> {{city}}
      </div>
      <div class="job-list__entry-content">
        <div class="job-list__entry-title">
          {{title}}
          <span class="job-list__entry-gender">{{gender}}</span>
        </div>
      </div>
    </div>
  `,
};
