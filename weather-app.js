
    async function weatherData()
    {   
                const cityData= document.querySelector("#cityname")
                const cityInfo= cityData.value
              const weatherDiv= document.querySelector("#weatherInfo");

        try{
         const packedData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&appid=771fa99984f7f60bcda45e1ae02c85c9&units=metric`)
         const CityResult = await packedData.json()
         if(!packedData.ok)
            {
                throw new Error("<br>No city data found, please try again.")
            }


         weatherDiv.innerHTML=  `<br> ${cityInfo} 🌡️ temperature is ${CityResult.main.temp} °C <br> But it feels like ${CityResult.main.feels_like} °C 
         <br> Wind Speed 🍃: ${CityResult.wind.speed} <br> Weather ☁️: ${CityResult.weather[0].description}  <br> Humidity Status: ${CityResult.main.humidity} 
         <br> Country 🌍: ${CityResult.sys.country} <br><br>Thank you for checking 😊`
  
        }
  
        catch(error)
        {
         weatherDiv.innerHTML= error.message

        } 
    }

const chocoBtn = document.querySelector("#chocoBtn");



function mouseFollow() {
  document.addEventListener("mousemove", (e) => {
    document.body.style.background =
      `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
      #eac11e, #222)`;
  });
}
mouseFollow();
