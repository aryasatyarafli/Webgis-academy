import {Map} from 'maplibre-gl';
import naturalEarthData from "./data/ne_populated.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.83, -6.19],
    zoom: 8,
});


map.on('load', () => {
map.addSource("Kota", {
    type: "geojson",
    data: "https://geoserver.mapid.io/layers_new/get_layer?api_key=42a17dc7d53c49c3807ee35b6e56ee11&layer_id=6a54dbd27361c8b74fb8b74b&project_id=6a2d071bbccdad7e1b06220a"
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