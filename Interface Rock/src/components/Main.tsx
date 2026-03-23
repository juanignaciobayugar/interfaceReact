import { useEffect, useState, useRef } from "react"
import Card from "../components/Card"
import "./Card.css"
import cassette from "../imagen/1.gif"
import moustro from "../imagen/2.gif"

/*Interface de Artista*/
interface Artist {
  idArtist: string;
  strArtistLogo: string;
  strArtist: string;
  strStyle: string;
  strArtistThumb: string;
}

/*Abre funcion inicial Main y pasa paramento diciendo podria ser: febrero marzo abril*/
function Main({ mesActivo }: { mesActivo: "febrero" | "marzo" | "abril" }) {
  /*Usa useState crea constante Artists*/
  const [artists, setArtists] = useState<Artist[]>([])
  /*Usa useRef*/
  const carouselRef = useRef<HTMLDivElement>(null)

  /*Usa Use EffecT función asincrónica*/
  useEffect(() => {
    async function getBands() {
      /*Crea Costante Urls con cada mes, diciendo cada mes tiene estas urls de bandas*/
      const urls =
        mesActivo === "febrero"
          ? [
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=Maná",
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=The Clash",
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=Radiohead"
            ]
          : mesActivo === "marzo"
          ? [
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=Arctic Monkeys",
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=Blur",
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=The Strokes"
            ]
          : [
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=Queen",
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=David Bowie",
              "https://www.theaudiodb.com/api/v1/json/2/search.php?s=Pink Floyd"
            ]


            /*Creo constante responses donde hace una promesa recorre la url con map, hace fetch en cada url y convierte en json? */
      const responses = await Promise.all(urls.map(url => fetch(url).then(r => r.json())))
      /* crea una constante que es un arreglo de aristas que viene de responses json*/
      const allArtists = responses.flatMap(res => res.artists)
      /* aca conviernte le pasa el valor a la funcion use state*/
      setArtists(allArtists)

      //cada vez que cambias de mes, resetea el scroll al inicio
      carouselRef.current?.scrollTo({ left: 0, behavior: "auto" })
    }

    /*ejecuta funcion*/
    getBands()
  }, [mesActivo])/*cierra use efect*/

const scrollLeft = () => {
  if (carouselRef.current) {
    const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 300
    carouselRef.current.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" })
  }
}

const scrollRight = () => {
  if (carouselRef.current) {
    const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 300
    carouselRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" })
  }
}

  return (
    <main className="main">

      <div className="contenedorTarjeta">
      <div className="quincePorciento1">
        <h1>Elegi un mes y te recomendamos tres bandas de rock para pulir y escuchar</h1>
 <img className="moustro" src={moustro} alt="" />
      </div>

      <div className="carousel-container">
        <button onClick={scrollLeft}>◀</button>
        <div className="carousel" ref={carouselRef}>
          {artists.map(artist => (
            <Card
              key={artist.idArtist}
              image1={artist.strArtistLogo}
              name={artist.strArtist}
              estilo={artist.strStyle}
              image2={artist.strArtistThumb}
            />
          ))}
        </div>
        <button onClick={scrollRight}>▶</button>
      </div>

<div className="quincePorciento1">
 <h1>Debati sobre música en nuestro foro, danos tu vision de lo que escuchaste!</h1>
 <img className="cassette" src={cassette} alt="" />
 </div>

      </div>

    </main>
  )
}

export default Main