import Reproductor from "./Reproductor.js"
import Multimedia from "./Multimedia.js"

let pModulo = (() => {
    const fnPrivada = (url, id) => {
        id.setAttribute("src", url);
    };
    return {
        fnPublica: (url, id) => fnPrivada(url, id),
    };
})();


let musicReproductor = new Reproductor("https://www.youtube.com/embed/EdeC2ys2sNI", musica);
let movieReproductor = new Reproductor("https://youtube.com/embed/CSp5xcEK6T8", peliculas);
let serieReproductor = new Reproductor("https://www.youtube.com/embed/D96dxkam6ZE", series);

musicReproductor.playMultimedia(pModulo);
movieReproductor.playMultimedia(pModulo);
serieReproductor.playMultimedia(pModulo);

musicReproductor.setInicio(100);
console.log(pModulo)

let multiPrueba = new Multimedia("https://youtube.com/embed/CSp5xcEK6T8")
console.log(multiPrueba);
multiPrueba.setInicio()