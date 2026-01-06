import { Conteudo, Cabecalho, Rodape, Menu } from "@/components/interface"
import PaginaSite from "@/components/PaginaSite"

export default function Page() {
    return (
        <PaginaSite
        titulo="Localização"
        subtitulo="Inicio"
        >
            <h1>Página de Inicio</h1>
            <img 
                src="/img/gatinho.jpg"
                style={ {width: 100, height:100 } }  
            />
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Autem repellendus asperiores 
                incidunt quibusdam amet. Ad, commodi. Corrupti 
                aspernatur, asperiores quis aperiam nobis, repellendus 
                ipsa, blanditiis mollitia ex necessitatibus perspiciatis amet!
            </p>
        </PaginaSite>
        
    )
}