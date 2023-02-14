import "./styles/Revuelta.css"

const Revuelta = ({title})=>{

    return(
<section className="revuelta-slide-1">
    <div className="revuelta-container">
<article className="revuelta-container__text-box">
    <h1>{title}</h1>
    <p>
        <h2>Revoluciona tus espacios</h2>
        
        <p>Encontrá el objeto perfecto para revolucionar tus espacios</p>
    </p>
<button type="submit" className="button-primary">COMPRAR</button>
</article>
    </div>
</section>
)
}

export default Revuelta