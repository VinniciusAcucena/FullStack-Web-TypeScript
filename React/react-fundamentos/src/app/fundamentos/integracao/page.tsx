import { Acomodacao, Cabecalho } from "@/components/interface"

export default function Page() {

    const regra = <h1>Maior de idade</h1>
    const nome = 'Vinnicius'

    const usuario = {
        nome: 'Vinnicius',
        idade: 25
    }

    function Botao() {
        return (
            <button>Clique</button>
        )
    }

    return (
        <div>
            Olá, {nome}
            {usuario.nome} idade: {usuario.idade}
            {Botao()}
        </div>
    )
}