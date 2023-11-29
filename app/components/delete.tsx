"use client"
import { useState } from 'react';

export const Delete = (cityname: any) => {

    const [color, setColor] = useState('rgba(255,255,255,0.2)');

        const DeleteCity: Function = () => {

        if (cityname.cityname) {
            console.log(cityname.cityname);
            fetch("https://temperatur.onrender.com/city").then(
                data => {
                    return data.json();
                }).then(post => {
                    for (var i: number = 0; i < post.length; i++) {
                        if (cityname.cityname == post[i].name) {
                            const id: string = post[i].id

                            fetch('https://temperatur.onrender.com/city/' + id, {
                                method: 'DELETE',
                            })
                                .then(res => res.text()) // or res.json()
                                .then(res => {console.log(res);
                                    alert("A cidade "+cityname.cityname+" foi DELETADA com sucesso, recarregue a página");})
                            

                            i = post.length;


                        }
                    }
                });
        }
    }

    const Block = {
        deleteBlock: { marginTop: '20px', width: '910px', height:'60px', borderRadius: '10px', backgroundColor: color, cursor: 'pointer' },   
        deleteText: { paddingTop: '2px', userSelect:'none', textAlign: 'center', fontSize: '48px', color: 'white', fontWeight:'bold' }     
      }

    return (
        <>
            <div onMouseEnter={() => setColor('rgba(255,255,255,0.5)')} onMouseLeave={() => setColor('rgba(255,255,255,0.2)')} style={Block.deleteBlock} onClick={() => {setColor('rgba(255,255,255,0.8)'), DeleteCity()}}>
                <div style={Block.deleteText}>DELETAR CIDADE</div>
            </div>
        </>
    )

    
}

