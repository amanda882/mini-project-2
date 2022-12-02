// fetch api


function getWeather() {
    fetch("https://api.weather.gov/points/32.6791,-97.4641").then((response) => {
        console.log('resolved', response);
        return response.json();
    }).then(data => {
        console.log(data);
        fetch(data.properties.forecast).then((results) => {
            return results.json();
        }).then(forecastData => {
            console.log(forecastData);
        })
    }).catch((err) => {
        console.log('rejected',err);
    })
    
    }
    getWeather();