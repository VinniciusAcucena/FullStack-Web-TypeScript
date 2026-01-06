import { Conteudo, Cabecalho, Rodape, Menu } from "@/components/interface"

export default function Page() {
    return (
        <div>
            <Cabecalho 
            titulo="Localização" 
            subtitulo="Acomodações" 
            />

            <Menu />
            
            <Conteudo>
                <h1>Página de acomodações</h1>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Autem repellendus asperiores 
                    incidunt quibusdam amet. Ad, commodi. Corrupti 
                    aspernatur, asperiores quis aperiam nobis, repellendus 
                    ipsa, blanditiis mollitia ex necessitatibus perspiciatis amet!</p>
            </Conteudo>
            <Rodape />
        </div>
    )
}