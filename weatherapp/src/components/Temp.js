import { useEffect, useState } from 'react';
import './css/style.css';

const Temp = () => {
    const [city, setCity]=useState(null);
    const [search, setSearch]=useState('Pune');
    const [weather, setWeather]=useState('');

    useEffect(() => {
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e6a25ed27414797f924ba45c91a02ce6`
                const response=await fetch(url);
                const resJson= await response.json();
                setCity(resJson.main);
                let value=resJson.weather;
                // let values = value.map((item) => item.main);
                // setWeather(values);
        }    
        fetchApi();
    },[search]) //[] used for , when page refreshed then useEffect hook is run
    
    
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" value={search}
                        onChange={(e)=>{setSearch(e.target.value)}} />
                </div> 

                {
                    !city ? (
                        <p className="errorMsg">No Data Found</p>
                    ): (
                        <>
                            <div className="info">
                                <h2 className="location"><i className="fas fa-map-marker-alt"></i>{search}</h2>
                                <h1 className="temp">{city.temp}&deg;C <br/>{weather}</h1>
                                <h3 className="tempmin_max">Min:{city.temp_min}&deg;C / Max:{city.temp_max}&deg;C</h3>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}
export default Temp;

//api.openweathermap.org/data/2.5/weather?q=Pune&appid=18ae63bfa0de467ce65b54653f3c6658