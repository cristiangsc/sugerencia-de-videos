import Multimedia from "./Multimedia.js"

export default class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = () => id;
    }

    get id() {
        return this._id();
    }

    playMultimedia(pModulo) {
        pModulo.fnPublica(this.url, this.id);
    }

    setInicio(tiempo) {
        this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
}