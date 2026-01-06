'use client'

import { useState } from "react"

export default function IMC() {

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    
    let [IMC, setIMC] = useState('')
    
    function calcularIMC() {
        const p = parseFloat(peso)
        const a = parseFloat(altura)

        const imc = p / (a * a)

        if( imc <= 18) {
            setIMC("Abaixo do peso")
        } else if( imc>18 && imc < 25) {
            setIMC("Peso normal")
        } else {
            setIMC("Sobrepeso")
        }
    }

    return (
        <div className="p-5">
            <h1>Cálculo IMC</h1>

            <hr />

            <h4>Digite seu peso</h4>

            <input 
            value={peso}
            onChange={e=>setPeso(e.target.value)}
            className="campo-texto"
            placeholder="ex: 90"
            type="text" /> KG

            <br />

            <h4>Digite sua altura</h4>
            <input 
            value={altura}
            onChange={e=>setAltura(e.target.value)}
            className="campo-texto"
            placeholder="ex: 1.80"
            type="text" /> m

            <br /><br />

            <button 
            className="botao"
            onClick={calcularIMC}
            >Calcular
            </button>

            <br />

            <span>Resultado: {IMC}</span>
        </div>
    )
}