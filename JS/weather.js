//The functionalities that makes the weather app work properly

let weather = {
    'apiKey': '94f846d93b63d3c510c6d0b230ccbebe',
    getWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.displayWeather();
            })
    },
    //Accessing some of the values in the API that we'll need for our weather apps
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        //Accessing the DOM Elements
        document.querySelector('.City').innerText = name;
        document.querySelector('.temperature').innerText = temp + "°C";
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = "Humidity" + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed" + speed + "km/h";
        document.querySelector('.weatherForecast').classList.remove('loading');
        document.body.backgroundImage = url
    },
    //Search Bar function
    search: function() {
        this.getWeather(document.querySelector('.search-bar').value);
    }
}

document.querySelector('.searchBar button').addEventListener('click', function() {
    weather.search();
});

//Input bar when we press enter on our Keyboard 
document.querySelector('.search-bar').addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        weather.search();
    }
});