
import { useState } from 'react';
import { ListCities } from "./pages/listCities";
import { Pass } from './components/Pass';
import { Button } from './components/button';
//<ListCities />




export default async function Page() {
    const api:string | undefined = process.env.API_URL;
    if (!api)
        throw new Error('Erro ao encontrar a api');
    const res: Response = await fetch(api, { next: { revalidate: 20 } })
    const cities: any = await res.json()


    return (

        <div >

            <Button valu={cities.length}></Button>
            <div style={{ display: 'flex' }}>
                
                <div style={{ display: 'flex', width: '1000px', height: '630px', overflow: 'hidden', marginTop: '10px' }}>

                    <Pass valu={cities.length}></Pass>
                    <ListCities></ListCities>
                </div>
            </div>

        </div>




    )
}

