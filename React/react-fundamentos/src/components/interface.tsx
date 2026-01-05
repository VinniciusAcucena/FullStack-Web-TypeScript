export function Acomodacao() {
    return (
        <div>
            <span>Imagem</span>
            <h1>Local</h1>
        </div>
    )
}

export function Cabecalho() {
    return (
        <div className="bg-blue-700">
            <h1>Logo</h1>
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