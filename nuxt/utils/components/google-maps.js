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

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      id: 'mapbox/streets-v11',
    }).addTo(leaflet);
  }
}

export default GoogleMaps;
