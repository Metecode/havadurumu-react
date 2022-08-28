import React, { useState } from 'react'

function SearchingInput({specifyWeatherForecast}) {
  const api= {
    key:"69ba74827a06fde9def6a236317869c6",
    base:"https://api.openweathermap.org/data/2.5/weather",
  };

  const[searchParameter , specifySearchParameter]= useState("");

  const search = (e) =>{
    if(e.key === "Enter"){
      fetch(`${api.base}?q=${searchParameter}&units=metric&lang=tr&appid=${api.key}`)
      .then((veri)=> veri.json())
      .then((sonuc) =>{
        specifySearchParameter("");
        specifyWeatherForecast(sonuc);
        console.log(sonuc)
      });
    }
  };
  return (
    <div className='searching'>
        <input 
        type="text" 
        className="searching-input" 
        placeholder='Sehir'
        onChange={(e) => specifySearchParameter(e.target.value)}
        value={searchParameter}
        onKeyPress={search}
        />
    </div>
  )
}

export default SearchingInput;