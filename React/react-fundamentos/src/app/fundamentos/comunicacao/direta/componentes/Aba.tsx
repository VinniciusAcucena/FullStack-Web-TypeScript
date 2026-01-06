'use client'

import { useState } from "react";
import Conteudo from "./Conteudo";

export default function Aba() {

    const [aba, setAba] = useState('')

    return(
        <div>
            <button onClick={() => setAba('Conversas')}>Conversas</button>
            <button onClick={() => setAba('Atualizações')}>Atualizações</button>
            <button onClick={() => setAba('Chamadas')}>Chamadas</button>

            <Conteudo nome={aba}/>
        </div>
    )
}