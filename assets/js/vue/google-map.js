import Tools from '../tools.js';

export default {
  tagName: 'google-map',
  computed: {
    classList() {
      return ['position-relative mx-3 mx-md-8 vue-component'];
    },
    leafletOptions() {
      const coordinates = this.location.coordinates;
      const iconSize = [50, 45];

      const obj = {
        map: {
          scrollWheelZoom: false,
          coords: coordinates,
        },
        marker: [
          {
            coords: coordinates,
            icon: {
              iconUrl: Tools.getAssetPath('svg/icons/map-pin.svg'),
              iconSize: iconSize,
            },
            popup: {
              text: `${this.location.street}, ${this.location.city}`,
              title: 'Address',
            },
          },
        ],
      };

      return JSON.stringify(obj);
    },
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      const mapRef = this.$refs.map;
      const LeafletLib = $?.HSCore?.components?.HSLeaflet;

      if (LeafletLib === null || L === null) return;
      LeafletLib.init(mapRef);
    },
  },
  props: {
    location: {
      default: null,
    },
    entries: {
      default: null,
    },
  },
  template: `
  <div :class="classList">
    <div class="container space-1 space-lg-3">
      <div class="row justify-content-md-end">
        <div class="col-md-6 col-lg-5">
          <div class="bg-white position-relative z-index-999 p-5 p-sm-7">
            <div class="mb-5">
              <span class="d-block font-size-2 text-dark text-lh-sm">{{ this.location.office }},</span>
              <span class="d-block font-size-4 text-dark font-weight-bold text-lh-sm">{{ this.location.city }}</span>
            </div>

            <template v-for="entry in entries">
              <google-map-entry :entry="entry" />
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="position-md-absolute top-0 right-0 bottom-0 left-0">
      <div class="gmap min-h-300rem h-100 rounded-lg" ref="map" :data-hs-leaflet-options='leafletOptions'></div>
    </div>
  </div>
  `,
};
