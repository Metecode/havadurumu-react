import React, { useState } from 'react';
import './App.css';
import Background from './components/Background'
import Result from './components/Result';
import SearchingInput from './components/Searching/SearchingInput';
import './index.css';
function App() {
  const [weatherForecast, specifyWeatherForecast] = useState({})
  return (
    <section className='app'>
      <Background background={weatherForecast.weather && weatherForecast.weather[0].main }></Background>
      <div id="header">Hava Durumu</div>
      <SearchingInput specifyWeatherForecast={specifyWeatherForecast}></SearchingInput>
      <Result weather={weatherForecast} ></Result>
    </section>
  );
}

export default App;
