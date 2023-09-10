const api = 'a14186e30bb8471686763140230609';
let cityDesc = document.querySelector('.city_desc');
let searchBtn = document.querySelector('.btn');
let searchInput = dcument.querySelector('.search-input');
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

}