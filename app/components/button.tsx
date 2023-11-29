"use client"
import { useState } from 'react';

export const Button = ( valu:any ) => {

    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [color, setColor] = useState('rgba(255,255,255,0.2)');
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValor1(event.target.value);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValor2(event.target.value);
    };

    const verification = () => {
        fetch("https://temperatur.onrender.com/city").then(
                data => {
                    return data.json();
                }).then(post => {
                    if (valu.valu < post.length){
                        console.log(valu.valu+'<'+post.length);
                        alert("A cidade "+valor1+" foi adicionada com sucesso, recarregue a página");
                        
                    }else
                        console.log('fracass 1')
                    
                });
    }

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
                    verification();


                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        }
    }

    const Block = {
        infoBlock: { cursor: 'pointer', userSelect:'none', width: '340px', height: '50px', borderRadius: '10px', backgroundColor: color },
        infoBlockNext: { width: '240px', height: '50px', marginLeft: '10px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.2)' },
        infoBlockNext2: { width: '280px', height: '50px', marginLeft: '10px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.2)' },
        headline: { color: 'white', fontSize: '40px', marginLeft: '20px', fontWeight:'bold', },
        text: { color: 'white', fontSize: '30px', marginLeft: '20px', marginTop: '5px' }
    }


    return (
        <>
            <div style={{ display: 'flex' }}>

                <div onMouseEnter={() => setColor('rgba(255,255,255,0.5)')} onMouseLeave={() => setColor('rgba(255,255,255,0.2)')} onClick={() => {setColor('rgba(255,255,255,0.8)'), CreateCity()}} style={Block.infoBlock}>
                    <div style={Block.headline}>Adicionar cidade: </div>
                </div>

                <div style={Block.infoBlockNext}>
                    <div style={Block.text}>Nome da cidade:</div>
                </div>

                <input style={{ height: '40px', marginTop: '3px', marginLeft: '10px' }} type="text" value={valor1} onChange={handleChange1} ></input>

                <div style={Block.infoBlockNext2}>
                    <div style={Block.text}>Descrição da cidade:</div>
                </div>

                <input style={{ height: '40px', width: '240px', marginTop: '3px', marginLeft: '10px' }} type="text" value={valor2} onChange={handleChange2}></input>


            </div>
        </>
    )
}
