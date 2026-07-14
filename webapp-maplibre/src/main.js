import {Map} from 'maplibre-gl';
import naturalEarthData from "./data/ne_populated.geojson?url";
import areaData from "./data/area.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.83, -6.19],
    zoom: 3,
});

//layer vector point
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
})
//layer vector polygon
map.addSource("Pulau", {
    type: "geojson",
    data: areaData
})

map.addLayer({
  id: "area-pulau",
  type: "fill",
  source: "Pulau",
  paint: {
    "fill-color": "#0000ff",
    "fill-outline-color": "black"
  }
})


//layer raster
map.addSource("spongebob", {
    type: "image",
    url: "https://static.wikia.nocookie.net/cartoons/images/e/ed/Profile_-_SpongeBob_SquarePants.png",
    coordinates: [
        [79.16, -0.40], // top left
        [94.18, -1.66], // top right
        [94.65, -14.73], // bottom right
        [72.97, -13.74] // bottom left
    ]
    });

map.addLayer({
    id: "spongebob-layer",
    type: "raster",
    source: "spongebob",
})


})