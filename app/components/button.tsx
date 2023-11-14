"use client"
import { useState } from 'react';

export const Button = () => {

    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const handleChange1 = (event) => {
        setValor1(event.target.value);
    };
    const handleChange2 = (event) => {
        setValor2(event.target.value);
    };

    const CreateCity = () => {

        if (valor1 && valor2) {
            const data = {
                "name": valor1,
                "description": valor2,
            }
            fetch("https://temperatur.onrender.com/city", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }

    return (
        <>
            <div style={Words}>Criar cidade: </div>
            <div>Nome da cidade:</div>
            <input type="text" value={valor1} onChange={handleChange1} ></input>
            <div>Descrição da cidade:</div>
            <input type="text" value={valor2} onChange={handleChange2}></input>
            <div></div>
            <button onClick={() => CreateCity()}>Criar Cidade</button>
        </>
    )
}

const Words = { fontSize: "20px" };