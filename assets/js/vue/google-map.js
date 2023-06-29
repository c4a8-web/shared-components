import Tools from "../tools.js";

export default {
  tagName: 'google-map',
  data() {
    return {
      city: '',
      street: '',
      state: '',
    }
  },
  computed: {
    classList() {
      return ['position-relative mx-3 mx-md-8 vue-component']
    },
    contactVal() {
      return Tools.getJSON(this.contact);
    },
    items(){
      const objects = [
        {
          margin: 'mb-5',
          icon: 'fa-phone',
          truncate: '',
          text: 'Call us',
          info: this.contactVal.phone
        },
        {
          margin: 'mb-5',
          icon: 'fa-envelope',
          truncate: 'text-truncate',
          text: 'Email us',
          info: this.contactVal.email
        },
        {
          margin: '',
          icon: 'fa-map-marker-alt',
          truncate: '',
          text: 'Visit us',
          info: this.contactVal.street ? this.contactVal.street : this.street
        }
      ]
      return objects
    },
    leafletOptions(){
      const coordinates = this.coordinates.split(',')

      const street = Tools.isTrue(this.contactVal.street) ? this.contactVal.street : this.street
      const state = this.state

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
              iconSize: [50, 45]
            },
            popup: {
              text: `${street}, ${state}`,
              title: 'Address'
            }
          }
        ]
      }

      return JSON.stringify(obj);
    }
  },
  mounted() {
    this.loadMap()
  },
  methods: {
    async setAddress(latitude, longitude){
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
      const response = await fetch(apiUrl)
      const data = await response.json()
      const address = data.address;
      this.city = address.city;
      this.state = address.state;
      this.street = address.road;

    },
    async loadMap(){
      const mapRef = this.$refs.map;
      const LeafletLib = $?.HSCore?.components?.HSLeaflet;

      if (LeafletLib === null || L === null) return;
      LeafletLib.init(mapRef);

      const coordinates = this.coordinates.split(',')
      await this.setAddress(coordinates[0], coordinates[1])
    },
  },
  props: {
    coordinates: {
      default: null,
    },
    contact: {
      default: null
    },
  },
  template: `
  <div id="contactsSection" :class="classList">
    <div class="container space-1 space-lg-3">
      <div class="row justify-content-md-end">
        <div class="col-md-6 col-lg-5">
          <div class="card bg-white position-relative z-index-999 p-5 p-sm-7">

            <div class="mb-5">
              <span class="d-block font-size-2 text-dark text-lh-sm">{{ this.city }},</span>
              <span class="d-block font-size-4 text-dark font-weight-bold text-lh-sm">{{ this.state }}</span>
            </div>

            <template v-for="item in items">
              <div class="media" :class="item.margin">
                <span class="icon icon-xs icon-soft-primary icon-circle mr-3">
                  <i class="fas" :class="item.icon"></i>
                </span>
                <div class="media-body" :class="item.truncate">
                  <h5 class="mb-1">{{ item.text }}</h5>
                  <span class="d-block text-body font-size-1">{{ item.info }}</span>
                </div>
              </div>
            </template>
         </div>
        </div>
      </div>
    </div>

    <div class="position-md-absolute top-0 right-0 bottom-0 left-0">
      <div id="map" class="gmap min-h-300rem h-100 rounded-lg" ref="map" :data-hs-leaflet-options='leafletOptions'></div>
    </div>
  </div>
  `,
}
