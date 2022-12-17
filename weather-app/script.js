const searchinput= document.getElementById("search_input")
const searchButton=document.getElementById("search_button");
const temperature= document.getElementById('temperature');
const weatherImage=document.getElementById('weather_image');
const windInfo=document.getElementById('wind_speed');
const humidityInfo=document.getElementById('humidity_speed');
const precipitationInfo=document.getElementById('precipitation_speed');
const cityLocation=document.getElementById('city_location');

searchButton.addEventListener('click',fetchweather)

async function fetchweather(){
    const location = searchinput.value
    const streamResponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd`);
    const JSONtext = await streamResponse.text();
    const JSONData =  JSON.parse(JSONtext);
    console.log(JSONData);

    const weatherIcon=JSONData.weather[0].icon
    const temperatureBlock=JSONData.main.temp;
    const windSpeed=JSONData.wind.speed
    const humiditySpeed=JSONData.main.humidity;
    const precipitationSpeed=JSONData.clouds.all
    const cityName=JSONData.name
     weatherImage.setAttribute('src',`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
     temperature.innerHTML=temperatureBlock;
     windInfo.innerHTML=windSpeed
     humidityInfo.innerHTML=humiditySpeed;
     precipitationInfo.innerHTML=precipitationSpeed
     cityLocation.innerText=cityName
}
