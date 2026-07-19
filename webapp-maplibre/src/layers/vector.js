import naturalEarthData from "../data/ne_populated.geojson?url";
import areaData from "../data/area.geojson?url";

export function addKotalayer(map){
//layer vector point
map.addSource("Kota", {
    type: "geojson",
    data: naturalEarthData
});

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

}

export function addAreaLayer(map){
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
}

export function addBufferLayer(map, data){
const fid = getRandomInt(1,1000)
//layer vector polygon
map.addSource(String(fid), {
    type: "geojson",
    data: data
})

map.addLayer({
  id: `area-${fid}`,
  type: "fill",
  source: String(fid),
  paint: {
    "fill-color": "#eaff00",
    "fill-outline-color": "black"
  }
})
}

function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;

}
