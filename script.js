const api = 'a14186e30bb8471686763140230609';
let cityDesc = document.querySelector('.city_desc');
let searchBtn = document.querySelector('.btn');
let searchInput = document.querySelector('.search-input');
let degrees = document.querySelector('.degrees');
let cloudStatus = document.querySelector('.description');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

searchBtn.addEventListener('click', () =>{
    const city = searchInput.value;

    if (city){
        getWeatherData(city);
    }
})


function getWeatherData(city){
    fetch(`https://api.weatherapi.com/v1/current.json?key=a14186e30bb8471686763140230609&q=${city}`)
        .then((response) => response.json())
        .then((data) => {
            cityDesc.textContent = `Weather in ${data.location.name}`;
            cloudStatus.textContent = data.current.condition.text;
            degrees.textContent = `${data.current.temp_c}°C`;
            wind.textContent = `Windspeed: ${data.current.wind_kph}km/h`;
            humidity.textContent = `Humidity: ${data.current.humidity}%`;
        })

        .catch((error) => {
            cityDesc.textContent = "Invalid input. Try again";
            cloudStatus.textContent = '--';
            degrees.textContent = `--°C`;
            wind.textContent = `Windspeed: --`;
            humidity.textContent = `Humidity: --`;
        })
}