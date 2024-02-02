
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60b690672emsh7218f6e69294d69p17b6eejsn13dea83f5755',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cities = ["Delhi", "Mathura", "Jaipur", "Seattle", "New York", "Mumbai"];


const getWeather=(city)=>{
Cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options).then((data)=>data.json()).then((response)=>{console.log(response);

//Cloud_pct.innerHtml=response.cloud_pct
 
Temp.innerHTML=response.temp+" ℃"
Temp2.innerHTML=response.temp+" ℃"
Feels_like.innerHTML=response.feels_like
Humidity.innerHTML=response.humidity
Humidity2.innerHTML=response.humidity
Min_temp.innerHTML=response.min_temp
Max_temp.innerHTML=response.max_temp
Wind_speed.innerHTML=response.wind_speed
Wind_speed2.innerHTML=response.wind_speed
Wind_degrees.innerHTML=response.wind_degrees
Sunrise.innerHTML=response.sunrise
Sunset.innerHTML=response.sunset


}).catch((error)=>console.log(error))}

//getWeather("New york")
submit.addEventListener("click",(e)=>{
    e.preventDefault()
   getWeather(city.value)
 })



   function getWeather2(city)  {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then((data) => data.json())
      .then((response) => {
        console.log(response);

        // Set the API values in the specified row
        const row = document.getElementById(city);
        row.querySelector(".text-start").innerHTML = city;
        row.querySelector("td:nth-child(2)").innerHTML = response.temp + "℃";
        row.querySelector("td:nth-child(3)").innerHTML = response.feels_like;
        row.querySelector("td:nth-child(4)").innerHTML = response.humidity + "%";
        row.querySelector("td:nth-child(5)").innerHTML = response.min_temp + "℃";
        row.querySelector("td:nth-child(6)").innerHTML = response.max_temp + "℃";
        row.querySelector("td:nth-child(7)").innerHTML = response.wind_speed;
        row.querySelector("td:nth-child(8)").innerHTML = response.wind_degrees;
        row.querySelector("td:nth-child(9)").innerHTML = response.sunrise;
        row.querySelector("td:nth-child(10)").innerHTML = response.sunset;
      })
      .catch((error) => console.log(error));
  }

  // Loop through the cities and get weather data for each one
  cities.forEach(getWeather2)

  
