'use client'

import { useState } from "react"

export default function Entrada() {

    const [valor, setValor] = useState('Digite algo')

    function alterarValor( e: any) {
        setValor( e.target.value )
    }

    return (
        <div className="p-2">
            <h1>Entrada de dados</h1>
            <input 
            value={valor}
            className="campo-texto"
            onChange={alterarValor}
            type="text" />

            <h4>{valor}</h4>
        </div>
    )
}