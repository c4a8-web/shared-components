import Tools from '../tools.js';

export default {
  tagName: 'google-map',
  data() {
    return {
      city: '',
      street: null,
      state: '',
      postalCode: '',
    };
  },
  computed: {
    classList() {
      return ['position-relative mx-3 mx-md-8 vue-component'];
    },
    contactVal() {
      return Tools.getJSON(this.contact);
    },
    leafletOptions() {
      const coordinates = this.coordinates.split(',');
      const street = Tools.isTrue(this.contactVal.street) ? this.contactVal.street : this.street;

      console.log(street, this.postalCode);

      const obj = {
        map: {
          scrollWheelZoom: false,
          coords: coordinates,
        },
        marker: [
          {
            coords: coordinates,
            icon: {
              iconUrl: 'https://front.trustedroot.net/dist/assets/svg/components/map-pin.svg',
              iconSize: [50, 45],
            },
            popup: {
              text: `${street}, ${this.postalCode} ${this.state}`,
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
    async setAddress(latitude, longitude) {
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const address = data.address;
      this.city = address.city;
      this.state = address.state;
      this.street = address.road;
      this.postalCode = address.postcode;
    },
    loadMap() {
      const mapRef = this.$refs.map;
      const LeafletLib = $?.HSCore?.components?.HSLeaflet;

      if (LeafletLib === null || L === null) return;
      LeafletLib.init(mapRef);

      const coordinates = this.coordinates.split(',');
      this.setAddress(coordinates[0], coordinates[1]);
    },
  },
  props: {
    coordinates: {
      default: null,
    },
    contact: {
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
              <span class="d-block font-size-2 text-dark text-lh-sm">{{ this.contact.office }},</span>
              <span class="d-block font-size-4 text-dark font-weight-bold text-lh-sm">{{ this.city }}</span>
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
