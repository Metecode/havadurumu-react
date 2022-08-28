import yagmurlu from "../../img/rainy.jpg";
import bulutlu from "../../img/cloud.jpg";
import sisli from "../../img/foggy.jpeg";
import karli from "../../img/karli.jpg";
import gokkusagi from "../../img/rainbow-weather.jpg";
import firtinali from "../../img/storm.jpg";
import gunesli from "../../img/gunesli.jpg";

function ResimCek({ durum }) {
    switch (durum) {
        case "Rain":
            return <img className="background-picture" src={yagmurlu} alt="yagmurlu" />
        case "Drizzle":
            return <img className="background-picture" src={yagmurlu} alt="yagmurlu" />
        case "Clear":
            return <img className="background-picture" src={gunesli} alt="gunesli" />
        case "Mist":
            return <img className="background-picture" src={sisli} alt="sisli" />
        case "Snow":
            return <img className="background-picture" src={karli} alt="karli" />
        case "Storm":
            return <img className="background-picture" src={firtinali} alt="firtinali" />
        case "Clouds":
            return <img className="background-picture" src={bulutlu} alt="bulutlu" />
        default:
            return <img className="background-picture" src={gokkusagi} alt="gokkusagi" />
    }
}

export default ResimCek;