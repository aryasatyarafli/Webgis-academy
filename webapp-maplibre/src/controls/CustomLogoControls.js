import logosmadav from '../logo/logo.png';

export class logosmadavcontrol {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
            <img 
                src = "${logosmadav}"
                alt = "Logo Smadav"
                style = "width: 50px"
            >
        `
        return this._container;
    }
     onRemove() {
        this._container.remove();
        this._map = undefined;
}
}