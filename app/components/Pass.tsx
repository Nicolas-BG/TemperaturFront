"use client"
import React from 'react';
import { useState } from 'react';

export const Pass = ( valu:any ) => {
    
    const [val, setVal] = useState(0);
    const [color1, setColor1] = useState('rgba(255,255,255,0.2)');
    const [color2, setColor2] = useState('rgba(255,255,255,0.2)');

    const setValueProx = () => {
        let valuee: number = valu.valu;
        if (val != valuee - 1 ) {
            setVal(val + 1);
        }
    }

    const setValuePrev = () => {        
        if (val != 0 ) {
            setVal(val - 1);
        }
    }

    const Block = {
        passBlockVal: { width: '60px', height: '45px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.2)', marginTop: '10px', paddingTop: '15px', textAlign:'center', fontSize: '20px', color: 'white' },
        PassBlock1: { cursor: 'pointer', userSelect:'none', width: '60px', height: '210px', borderRadius: '10px', backgroundColor: color1, marginTop: '10px', paddingTop: '10px', textAlign:'center', fontSize: '30px', color: 'white', fontWeight:'bold'  },
        PassBlock2: { cursor: 'pointer', userSelect:'none', width: '60px', height: '210px', borderRadius: '10px', backgroundColor: color2, marginTop: '10px', paddingTop: '10px', textAlign:'center', fontSize: '30px', color: 'white', fontWeight:'bold'  },

        
      }

    return (
        <>        
            <div style={{ display: 'flex' }}>
                <div style={{ height: '540px', width: '60px', zIndex: 1}}>
                    
                    <div style={Block.passBlockVal}>{val+1}/{valu.valu} </div>
                    <div style={Block.PassBlock1} onMouseEnter={() => setColor1('rgba(255,255,255,0.5)')} onMouseLeave={() => setColor1('rgba(255,255,255,0.2)')} onClick={() => { setValueProx() }} >
                        <div style={{height:'80px'}}></div>
                        {'>'}           
                        
                    </div>
                    <div style={Block.PassBlock2} onMouseEnter={() => setColor2('rgba(255,255,255,0.5)')} onMouseLeave={() => setColor2('rgba(255,255,255,0.2)')}onClick={() => { setValuePrev() }} >
                        <div style={{height:'80px'}}></div>
                        {'<'}   
                    </div>
                </div>             

            </div>
            <div style={{height:'300px', marginLeft: val * -1010}}></div>
        </>
    );

    
}

