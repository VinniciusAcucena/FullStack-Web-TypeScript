import { Acomodacao, Cabecalho } from "@/components/interface"

export default function Page() {
    return (
        <div>
            {Cabecalho()}
            {Acomodacao()}
        </div>
    )
}