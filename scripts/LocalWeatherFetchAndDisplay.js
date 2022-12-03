
let output = document.querySelector("output");

// Our Server City Data Server => http://localhost:3004/cities
fetch("http://localhost:3004/cities")
  .then((results) => results.json())
  .then((data) => {
    let cityList = document.getElementById("selectDrop");
    let cityArrayLength = data.length;

    //console.log(`number of cities is ${cityArrayLength}`);
    for (i = 0; i < cityArrayLength; i++) {
      let theOption = new Option(data[i].name);
      cityList.appendChild(theOption);
    }

    cityList.onchange = () => {
      // Clear output 
output.innerHTML = "";

      let cityOption = cityList.value;
      let selectedCity = data.find((arrItem) => arrItem.name == cityOption);

      getWeather(selectedCity.latitude, selectedCity.longitude);
    };
  });

function getWeather(lat, long) {
  fetch(`https://api.weather.gov/points/${lat},${long}`)
    .then((response) => {
      //console.log("resolved", response);
      return response.json();
    })
    .then((data) => {
      //console.log("resolved here", data);
      fetch(data.properties.forecast)
        .then((results) => {
          //console.log("resolved again", results);
          return results.json();
        })
        .then((forecastData) => {
          //console.log(forecastData.properties.periods);
          createForecastTable(forecastData.properties.periods);
        });
    })
    .catch((err) => {
      console.error("rejected", err);
    });
}

function createForecastTable(data) {


//Create Table
  let table = document.createElement("table");

  let tableHeaders = [
    "Day of the Week",
    "Temperature",
    "Wind Speed",
    "Wind Direction",
    "Forecast",
  ];

  // Create table headers
  // name | temperature & temperatureUnit | windSpeed | windDirection | shortForecast
  for (let i = 0; i < tableHeaders.length; i++) {
    let th = document.createElement("th");
    th.textContent = tableHeaders[i];
    table.appendChild(th);
  }

  //Create row and cells with content

  //console.log("cells creation start", data);
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");

    for (let n = 0; n < tableHeaders.length; n++) {
      let cell = row.insertCell();

      switch (n) {
        case 0:
          cell.textContent = data[i].name;
          break;

        case 1:
          cell.textContent = `${data[i].temperature} ${data[i].temperatureUnit}`;
          break;

        case 2:
          cell.textContent = data[i].windSpeed;
          break;

        case 3:
          cell.textContent = data[i].windDirection;
          break;

        case 4:
          cell.textContent = data[i].shortForecast;
          break;

        default:
          console.error("SOMETHING IS BUSTED");
          break;
      }
    }

    table.appendChild(row);
  }

  output.appendChild(table);
}
