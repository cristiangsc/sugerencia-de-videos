let pModulo = (() => {
    const fnPrivada = (url, id) => {
        id.setAttribute("src", url);
    };
    return {
        fnPublica: (url, id) => fnPrivada(url, id),
    };
})();

class Multimedia {
    constructor(url) {
        this._url = () => url;
    }

    get url() {
        return this._url();
    }
    setInicio() {
        console.log("Este método es para realizar un cambio en la URL del video");
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = () => id;
    }

    get id() {
        return this._id();
    }

    playMultimedia() {
        pModulo.fnPublica(this.url, this.id);
    }

    setInicio(tiempo) {
        this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
}

let musicReproductor = new Reproductor("https://www.youtube.com/embed/EdeC2ys2sNI", musica);
let movieReproductor = new Reproductor("https://youtube.com/embed/CSp5xcEK6T8", peliculas);
let serieReproductor = new Reproductor("https://www.youtube.com/embed/D96dxkam6ZE", series);

musicReproductor.playMultimedia();
movieReproductor.playMultimedia();
serieReproductor.playMultimedia();

musicReproductor.setInicio(100);

console.log(pModulo);