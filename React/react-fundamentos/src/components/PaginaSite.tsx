import { Cabecalho, Menu, Conteudo, Rodape } from "./interface"

export default function PaginaSite( props: any ) {
    return (
        <div>
            <Cabecalho 
            titulo={props.titulo}
            subtitulo={props.subtitulo}
            className="bg-blue-300"
            />

            <Menu />

            <Conteudo>
                {props.children}

            </Conteudo>
            
            <Rodape/>
        </div>
    )
}