import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Page() {
    return(
        <div>
            <Cabecalho 
            titulo="Localização, Brasil" 
            preco="R$ 350.00"/>
            <Menu />
            <hr />
            <Acomodacao />
        </div>
    )
}