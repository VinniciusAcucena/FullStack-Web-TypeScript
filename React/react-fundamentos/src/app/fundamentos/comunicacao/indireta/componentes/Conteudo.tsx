'use client'

import { useState } from "react";
import Aba from "./Aba";

export default function Conteudo( ) {

    const [aba, setAba] = useState('')

    function alterarNome(nome: string) {
        setAba(nome)
    }

    return (
        <div>
            <span>{aba}</span>
            <hr />
            <Aba atualizar={alterarNome}/>
        </div>
    )
}