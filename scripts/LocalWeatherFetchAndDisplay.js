//declare html elements

//Check error

// Our Server http://localhost:3004/cities

fetch("http://localhost:3004/cities")
  .then((results) => results.json())
  .then((data) => {
    console.log(data);

    let cityList = document.getElementById("selectDrop");
    let cityArrayLength = data.length;

    console.log(`number of cities is ${cityArrayLength}`);

    for (i = 0; i < cityArrayLength; i++) {
      let theOption = new Option(data[i].name);
      // console.log(theOption);
      cityList.appendChild(theOption);
    }

    cityList.onchange = () => {
        
    }
  });

//select

function getWeather() {
  fetch("https://api.weather.gov/points/32.6791,-97.4641")
    .then((response) => {
      console.log("resolved", response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      fetch(data.properties.forecast)
        .then((results) => {
          return results.json();
        })
        .then((forecastData) => {
          console.log(forecastData);
        });
    })
    .catch((err) => {
      console.log("rejected", err);
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
