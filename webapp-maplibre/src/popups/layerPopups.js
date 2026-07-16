import {Popup} from 'maplibre-gl';

const popup = new Popup();

export function addKotaPopup(map, event){
    const coordinate = event.lngLat
    const longitude = coordinate.lng.toFixed(2)
    const latitude = coordinate.lat.toFixed(2)
    const properties = event.features[0].properties
    const cityName = properties.NAME
    console.log(cityName)


    return new Popup()
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
                <h4>${cityName}</h4>
                <div>Bujur: ${longitude}</div>
                <div>Lintang: ${latitude}</div>
            </div>
            `)
        .addTo(map)
}