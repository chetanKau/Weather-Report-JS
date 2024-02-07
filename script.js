const searchBtn = document.getElementById("weatherData");
const cityName = document.getElementById("cityName");

const weatherIcon = document.querySelector(".weather-icon")


const apiKey = `5a83d5fc2655f616a6da1b2f8526b1d8`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

async function checkWeather(cityName) {

    const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`);
    // const response = await fetch(apiUrl+ "Delhi" + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data)

        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        ocument.querySelector(".error").style.display = "none";


    }


}
// checkWeather(cityName)

searchBtn.addEventListener("click", () => {
    checkWeather(cityName.value);
});