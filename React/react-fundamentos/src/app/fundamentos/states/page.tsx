'use client'

import { useState } from "react"

export default function Page() {

    let [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero( numero + 1)
        console.log(numero)
    }

    function decrementar() {
        setNumero( numero - 1)
        console.log(numero)
    }

    return (
        <div>
            <h1 className="texto">States</h1>
            <button 
            onClick={incrementar}
            className="bg-orange-300 p-2">
                Incrementar
            </button>

            <br />

            <button 
            onClick={decrementar}
            className="bg-orange-300 p-2">
                Decrementar
            </button>

            <p>Numero: {numero}</p>
        </div>
    )
}