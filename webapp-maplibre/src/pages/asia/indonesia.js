import {Map, AttributionControl} from 'maplibre-gl';
import {addKotalayer, addAreaLayer} from "../../layers/vector.js";
import 'maplibre-gl/dist/maplibre-gl.css';
import {addAttribution} from "../../controls/basicControls.js";
import {logosmadavcontrol} from "../controls/CustomLogoControls.js";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.83, -6.19],
    zoom: 3,
    customAttribution: false
});



map.on('load', () => {
addKotalayer(map);
addAreaLayer(map);
})

addAttribution(map, "Natural Earth");
map.addControl(new logosmadavcontrol(), "top-left");