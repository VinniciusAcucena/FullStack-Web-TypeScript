import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Page() {
    return(
        <div>
            <h1 className="bg-blue-400">Propriedades (APP)</h1>
            <Cabecalho 
            titulo="Localização, Brasil" 
            preco="R$ 350.00"/>
            <Menu />
            <hr />
            <Acomodacao />
        </div>
    )
}