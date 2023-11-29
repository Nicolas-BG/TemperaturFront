
import { City } from '../components/city';
import { Pass } from '../components/Pass';



export async function ListCities() {
    const api:string | undefined = process.env.API_URL;
    if (!api)
        throw new Error('Erro ao encontrar a api');
    const res: Response = await fetch(api, { next: { revalidate: 20 } })
    const cities: any = await res.json()

    return (

        <div className="city-list">        
            <div style={{ display: 'flex' }}>      
                {cities.map((city: any, index: any) => (
                    <City key={index} city={city} />
                ))}
            </div>
        </div>

    );
}




