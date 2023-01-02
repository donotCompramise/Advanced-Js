
const searchButton=document.getElementById("search_button");
const searchinput=document.getElementById('search_input');

searchButton.addEventListener('click',getWeatherDetailes)

let html=''
async function getWeatherDetailes(){

// const value=searchInput.value
const streamData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=+&appid=d8ab14f7e93c56cbe84562d28e8202bd`)
const textData=await streamData.text();
const jsonData= JSON.parse(textData);
console.log(jsonData)
}

