"use client"
import React from 'react';
import { Delete } from './delete';


interface CityProps {
  city: {
    name: string;
    description: string;
    temperature: number;
    wind_speed: number;
    pressure: number;
    uv_index: number;
    humidity: number;
    feelslike: number;
    visibility: number;
  };
}

export const City: React.FC<CityProps> = ({ city }) => {
  

  const temp: Function = () => {
    if (city.temperature < 10)
      return 'Temperatura muito baixa';
    else if (city.temperature >= 10 && city.temperature < 20)
      return 'Temperatura baixa';
    else if (city.temperature >= 20 && city.temperature < 30)
      return 'Temperatura mediana';
    else if (city.temperature >= 30 && city.temperature < 40)
      return 'Temperatura alta';
    else if (city.temperature >= 40)
      return 'Temperatura muito alta';
  }


  const wind: Function = () =>{
    if (city.wind_speed < 6)
      return 'Sem vento';
    else if (city.wind_speed >= 6 && city.wind_speed < 20)
      return 'Brisa';
    else if (city.wind_speed >= 20 && city.wind_speed < 40)
      return 'Forte Brisa';
    else if (city.wind_speed >= 40 && city.wind_speed < 60)
      return 'Vento forte';
    else if (city.wind_speed >= 60)
      return 'Ventania, fique em casa';  
  }

  const UV: Function = () =>{
    if (city.uv_index < 3)
      return 'Baixo';
    else if (city.uv_index >= 3 && city.uv_index < 6)
      return 'Moderado';
    else if (city.uv_index >= 6 && city.uv_index < 8)
      return 'Alto';
    else if (city.uv_index >= 8 && city.uv_index < 10)
      return 'Muito alto';
    else if (city.uv_index >= 10)
      return 'Extremo';  
  }

  const hum: Function = () => {
    if (city.humidity < 30)
      return 'Humidade muito baixa';
    else if (city.humidity >= 30 && city.humidity < 50)
      return 'Humidade baixa';
    else if (city.humidity >= 50 && city.humidity < 60)
      return 'Humidade ideal';
    else if (city.humidity >= 70 && city.humidity < 80)
      return 'Humidade alta';
    else if (city.humidity >= 80)
      return 'Humidade muito alta';
  }

  const feel: Function = () => {
    if (city.feelslike < 10)
      return 'Sensação de temperatura muito baixa';
    else if (city.feelslike >= 10 && city.feelslike < 20)
      return 'Sensação de temperatura baixa';
    else if (city.feelslike >= 20 && city.feelslike < 30)
      return 'Sensação de temperatura mediana';
    else if (city.feelslike >= 30 && city.feelslike < 40)
      return 'Sensação de temperatura alta';
    else if (city.feelslike >= 40)
      return 'Sensação de temperatura muito alta';
  }

  return (
    <div className="city-card" style={{ width: '1000px', height: '300px', paddingTop: '10px', paddingLeft: '10px' }}>
      <div style={{ display: 'flex' }}>
        <div style={Block.cityBlock}>
          <p style={Block.headline}>CIDADE </p>
          <h2 style={Block.cityTitle}>{city.name}</h2>
          <p style={Block.cityDesc}>{city.description}</p>
        </div>
        <div style={Block.infoBlockNext}>
          <p style={Block.headline}>TEMPERATURA </p>
          <h2 style={Block.cityTitle}>{city.temperature}ºC</h2>
          <p style={Block.cityDesc}>{temp()}</p>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={Block.infoBlock}>
          <p style={Block.headline}>VELOCIDADE DO VENTO </p>
          <h2 style={Block.cityTitle}>{city.wind_speed} km/h</h2>
          <p style={Block.cityDesc}>{wind()}</p>
        </div>

        <div style={Block.infoBlockNext}>
          <p style={Block.headline}>PRESSÃO </p>
          <h2 style={Block.cityTitle}>{city.pressure} hPa</h2>
          <p style={Block.cityDesc}></p>
        </div>

        <div style={Block.infoBlockNext}>
          <p style={Block.headline}>UV INDEX </p>
          <h2 style={Block.cityTitle}>{city.uv_index}</h2>
          <p style={Block.cityDesc}>{UV()}</p>
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={Block.infoBlock}>
          <p style={Block.headline}>HUMIDADE </p>
          <h2 style={Block.cityTitle}>{city.humidity}%</h2>
          <p style={Block.cityDesc}>{hum()}</p>
        </div>

        <div style={Block.infoBlockNext}>
          <p style={Block.headline}>SENSAÇÃO </p>
          <h2 style={Block.cityTitle}>{city.feelslike}ºC</h2>
          <p style={Block.cityDesc}>{feel()}</p>
        </div>

        <div style={Block.infoBlockNext}>
          <p style={Block.headline}>VISIBILIDADE </p>
          <h2 style={Block.cityTitle}>{city.visibility} km</h2>
          <p style={Block.cityDesc}></p>
        </div>
      </div>

      <Delete cityname={city.name}></Delete>
    </div>
  );
}

const Block = {
  cityBlock: { width: '600px', height: '160px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.2)' },
  cityTitle: { paddingTop: '10px', paddingLeft: '50px', fontSize: '48px', color: 'white' },
  cityDesc: { marginTop: '-40px', paddingLeft: '30px', fontSize: '16px', color: 'white' },
  infoBlock: { width: '290px', height: '160px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.2)' },
  infoBlockNext: { width: '290px', height: '160px', marginLeft: '20px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.2)' },
  headline: { color: 'white', fontSize: '16px', marginLeft: '20px', marginTop: '35px', marginBottom: '-50px' }
}
const Marg = { margin: "4px" };
