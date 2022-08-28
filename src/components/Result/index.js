import React from 'react'

function index({weather}) {
  return (
    <>
  {typeof weather.main != "undefined" && (
    <div className="sonuc">
        <div className="sehir">{weather.name},{weather.sys.country}</div>
        <div className="detay">
            <div className="derece">{Math.round(weather.main.temp)} °C</div>
            <div className="statu">{weather.weather[0].description}</div>
        </div>
    </div>
  ) }
    </>
  )
}

export default index