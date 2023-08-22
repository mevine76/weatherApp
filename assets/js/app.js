
// Path: assets\js\app.js
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '01ed09787471c3c54b3e051988071182'
    }
};

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toulouse&appid=01ed09787471c3c54b3e051988071182&units=metric&lang=fr`)
  .then(response => response.json())
  .then(data => {
    console.log(data.name)
}
 )
//  .catch(err => console.error(err));


async function getWeatherByLocation(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=01ed09787471c3c54b3e051988071182&units=metric&lang=fr`)
    const responseData = await response.json()
    console.log(responseData)
    // addWeatherToPage(responseData)
}


getWeatherByLocation('Toulouse') 

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp)
    const weather = document.createElement('div')
    weather.classList.add('weather')
    weather.innerHTML = `
        <h2>${temp}°C</h2>
        <small>${data.weather[0].main}</small>
    `
    // cleanup
    main.innerHTML = ''
    main.appendChild(weather)
}

function KtoC(K) {
    return Math.floor(K - 273.15)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const city = search.value

    if (city) {
        getWeatherByLocation(city)
    } else {
        window.location.reload()
    }
})






















