alert("Welcome to Mrcs Weather App 😎");
//Here we get Api for get Tampreture and Other Information

const apiKey = "00ca8186f85173c97cec0b28678c0d17";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('#search-box');
const searchBtn = document.querySelector('#search-button');
const weatherIcon = document.querySelector('#src');
const descp = document.querySelector('#discp');

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    //here we set our data for Elements
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#tamp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('#humidity-persentage').innerHTML = data.main.humidity + "%";
    document.querySelector('#discp').innerHTML = data.weather.description;
    document.querySelector('#wind-speed').innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Assets/Cloudy.webp";
        descp.innerHTML = "Cloudy Sky";
        console.log("01");
    } else if (data.weather[0].main == "Sunny" ){
        weatherIcon.src = "Assets/Sunny.jpg";
        descp.innerHTML = "Sunny Day";
        console.log("02");
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Assets/Rain.jpg";
        descp.innerHTML = "it's Raining";
        console.log("03");
    } else if(data.weather[0].main == "Drizzle"){
       weatherIcon.src = "Assets/Drizzle.webp";
       descp.innerHTML = "Wind Drizzle";
       console.log("04");
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Assets/Clear.png";
        descp.innerHTML = "Clear Sky";
        console.log("05");
    } else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "Assets/Clear.png";
        descp.innerHTML = "Clear Sky";
        console.log("06");
    }

    //const time = toString(timezone); 
    //document.querySelector('#time').innerHTML = time;
}

//checkWeather();

searchBtn.addEventListener('click', function(){
    checkWeather(searchBox.value)
})