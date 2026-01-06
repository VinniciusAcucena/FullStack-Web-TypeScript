interface ConteudoProps {
    nome: string
}

export default function Conteudo( props: ConteudoProps) {
    return (
        <div>
            <span>{props.nome}</span>
        </div>
    )
}