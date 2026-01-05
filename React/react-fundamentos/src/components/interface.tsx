export function Acomodacao() {
    return (
        <div>
            <span>Imagem</span>
            <h1>Local</h1>
        </div>
    )
}

export function Cabecalho( props: any) {
    return (
        <div className="bg-blue-700">
            <h1>Logo</h1>
            <p>{props.titulo}</p>
            <p>{props.preco}</p>
            {Menu()}
        </div>
    )
}

export function Menu() {
    return (
        <div className="bg-yellow-500">
           <div>Acomodações | Experiências</div>
        </div>
    )
}