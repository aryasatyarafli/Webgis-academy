import {Map} from 'maplibre-gl';
import {addKotalayer, addAreaLayer} from "./layers/vector.js";
import {addrasterLayer} from "./layers/raster.js";


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


map.on('load', () => {
addKotalayer(map);
addAreaLayer(map);
addrasterLayer(map);


})