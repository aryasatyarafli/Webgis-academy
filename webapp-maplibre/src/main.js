import {Map, FullscreenControl, GlobeControl, LogoControl, } from 'maplibre-gl';
import {addKotalayer, addAreaLayer} from "./layers/vector.js";
import {addrasterLayer} from "./layers/raster.js";
import 'maplibre-gl/dist/maplibre-gl.css';
import {addAttribution} from "./controls/basicControls.js";
import {logosmadavcontrol} from "./controls/CustomLogoControls.js";
import { addKotaPopup } from './popups/layerPopups.js';


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [106.83, -6.19],
    zoom: 2,
    attributionControl: false,
});



map.on('load', () => {
addKotalayer(map);
addAreaLayer(map);
addrasterLayer(map);


});


map.on("click", "titik-kota", function(event){
addKotaPopup(map, event);

})


// CControls Settings (Attribution)
addAttribution(map, "Natural Earth, Nickelodeon");
map.addControl(new FullscreenControl());
map.addControl(new GlobeControl());
map.addControl(new LogoControl({compact: false}));
map.addControl(new logosmadavcontrol(), "top-left");

