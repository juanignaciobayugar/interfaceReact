

interface CardProps {
  image1: string
  name: string
  estilo: string
  image2:string
}

function Card({ image1,name, estilo,image2 }: CardProps) {

  return (
    <div className="card">
       <img className="logo" src={image1} alt={name} />
      <h2 className="nombreBanda">{name}</h2>
      <p className="estilo">{estilo}</p>
      <img className="imagenBanda" src={image2} alt={name} />
    </div>
  )
}

export default Card