import {Map} from 'maplibre-gl';
import naturalEarthData from "./data/ne_populated.geojson?url";

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



map.on('load', () => {
map.addSource("Kota", {
    type: "geojson",
    data: naturalEarthData
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