import BaseComponent from './base-component.js';

class GoogleMaps extends BaseComponent {
  static rootSelector = '.google-maps';

  constructor(root, options) {
    super(root, options);

    this.mapsSelector = '.google-maps__map';

    this.maps = this.root.querySelector(this.mapsSelector);

    this.init();
  }

  init() {
    const LeafletLib = $?.HSCore?.components?.HSLeaflet;

    if (LeafletLib === null || L === null) return;

    const leaflet = LeafletLib.init(this.maps);

    leaflet.fire('movestart');
    leaflet._rawPanBy([leaflet.getCenter().lng, leaflet.getCenter().lat]);
    leaflet.fire('move');
    leaflet.fire('moveend');

    // TODO extract token
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
      {
        id: 'mapbox/light-v9',
      }
    ).addTo(leaflet);
  }
}

export default GoogleMaps;
