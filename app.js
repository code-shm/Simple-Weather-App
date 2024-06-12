const apiKey = "4127f3bb62fa4672e4ce879bba01c0d0";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon")

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json()

if(response.status == 404){
    document.querySelector(".error").style.display = 'block';
    document.querySelector(".display").style.display = 'none';
} else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/cdrizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = 'none';

}

    
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})
