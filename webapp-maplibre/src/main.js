import {Map} from 'maplibre-gl';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.89, -6.19],
    zoom: 6,
});

const data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Tangerang"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.6601242,
          -6.2017745
        ]
      }
    }
  ]
}

map.on('load', () => {
map.addSource("Kota", {
    type: "geojson",
    data: data
})

map.addLayer({
    id: "titik-kota",
    type: "circle",
    source: "Kota",
    paint: {
        "circle-radius": 8,
        "circle-color": "#ff0000",
        "circle-stroke-width": 1,
        "circle-stroke-color": "black"
    }
})})