let cities = [
  {
    name: "Colombus, Ohio ",
    latitude: 39.962524,
    longitude: -82.99796,
  },
  {
    name: "San Diego, California ",
    latitude: 32.715736,
    longitude: -117.161087,
  },
];

periods = [
  {
    number: 1,
    name: "Today",
    startTime: "2022-12-02T11:00:00-06:00",
    endTime: "2022-12-02T18:00:00-06:00",
    isDaytime: true,
    temperature: 72,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "15 mph",
    windDirection: "SSW",
    icon: "https://api.weather.gov/icons/land/day/bkn?size=medium",
    shortForecast: "Partly Sunny",
    detailedForecast:
      "Partly sunny, with a high near 72. South southwest wind around 15 mph, with gusts as high as 25 mph.",
  },
  {
    number: 2,
    name: "Tonight",
    startTime: "2022-12-02T18:00:00-06:00",
    endTime: "2022-12-03T06:00:00-06:00",
    isDaytime: false,
    temperature: 45,
    temperatureUnit: "F",
    temperatureTrend: "rising",
    windSpeed: "10 to 15 mph",
    windDirection: "SW",
    icon: "https://api.weather.gov/icons/land/night/few?size=medium",
    shortForecast: "Mostly Clear",
    detailedForecast:
      "Mostly clear. Low around 45, with temperatures rising to around 51 overnight. Southwest wind 10 to 15 mph, with gusts as high as 25 mph.",
  },
  {
    number: 3,
    name: "Saturday",
    startTime: "2022-12-03T06:00:00-06:00",
    endTime: "2022-12-03T18:00:00-06:00",
    isDaytime: true,
    temperature: 53,
    temperatureUnit: "F",
    temperatureTrend: "falling",
    windSpeed: "10 to 15 mph",
    windDirection: "NNE",
    icon: "https://api.weather.gov/icons/land/day/sct?size=medium",
    shortForecast: "Mostly Sunny",
    detailedForecast:
      "Mostly sunny. High near 53, with temperatures falling to around 51 in the afternoon. North northeast wind 10 to 15 mph, with gusts as high as 25 mph.",
  },
  {
    number: 4,
    name: "Saturday Night",
    startTime: "2022-12-03T18:00:00-06:00",
    endTime: "2022-12-04T06:00:00-06:00",
    isDaytime: false,
    temperature: 44,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "0 to 5 mph",
    windDirection: "NNE",
    icon: "https://api.weather.gov/icons/land/night/bkn?size=medium",
    shortForecast: "Mostly Cloudy",
    detailedForecast:
      "Mostly cloudy, with a low around 44. North northeast wind 0 to 5 mph.",
  },
  {
    number: 5,
    name: "Sunday",
    startTime: "2022-12-04T06:00:00-06:00",
    endTime: "2022-12-04T18:00:00-06:00",
    isDaytime: true,
    temperature: 59,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "0 to 5 mph",
    windDirection: "S",
    icon: "https://api.weather.gov/icons/land/day/rain,20?size=medium",
    shortForecast: "Slight Chance Light Rain",
    detailedForecast:
      "A slight chance of rain. Mostly cloudy, with a high near 59. South wind 0 to 5 mph. Chance of precipitation is 20%.",
  },
  {
    number: 6,
    name: "Sunday Night",
    startTime: "2022-12-04T18:00:00-06:00",
    endTime: "2022-12-05T06:00:00-06:00",
    isDaytime: false,
    temperature: 54,
    temperatureUnit: "F",
    temperatureTrend: "rising",
    windSpeed: "5 to 10 mph",
    windDirection: "SSE",
    icon: "https://api.weather.gov/icons/land/night/rain,20?size=medium",
    shortForecast: "Slight Chance Light Rain",
    detailedForecast:
      "A slight chance of rain. Mostly cloudy. Low around 54, with temperatures rising to around 58 overnight. South southeast wind 5 to 10 mph. Chance of precipitation is 20%.",
  },
  {
    number: 7,
    name: "Monday",
    startTime: "2022-12-05T06:00:00-06:00",
    endTime: "2022-12-05T18:00:00-06:00",
    isDaytime: true,
    temperature: 75,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "10 to 15 mph",
    windDirection: "SSW",
    icon: "https://api.weather.gov/icons/land/day/bkn?size=medium",
    shortForecast: "Mostly Cloudy",
    detailedForecast:
      "Mostly cloudy, with a high near 75. South southwest wind 10 to 15 mph, with gusts as high as 30 mph.",
  },
  {
    number: 8,
    name: "Monday Night",
    startTime: "2022-12-05T18:00:00-06:00",
    endTime: "2022-12-06T06:00:00-06:00",
    isDaytime: false,
    temperature: 60,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "10 to 15 mph",
    windDirection: "SSW",
    icon: "https://api.weather.gov/icons/land/night/bkn?size=medium",
    shortForecast: "Mostly Cloudy",
    detailedForecast:
      "Mostly cloudy, with a low around 60. South southwest wind 10 to 15 mph, with gusts as high as 25 mph.",
  },
  {
    number: 9,
    name: "Tuesday",
    startTime: "2022-12-06T06:00:00-06:00",
    endTime: "2022-12-06T18:00:00-06:00",
    isDaytime: true,
    temperature: 71,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "5 to 10 mph",
    windDirection: "WSW",
    icon: "https://api.weather.gov/icons/land/day/bkn/rain,20?size=medium",
    shortForecast: "Mostly Cloudy then Slight Chance Light Rain",
    detailedForecast:
      "A slight chance of rain after noon. Mostly cloudy, with a high near 71. West southwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 20%.",
  },
  {
    number: 10,
    name: "Tuesday Night",
    startTime: "2022-12-06T18:00:00-06:00",
    endTime: "2022-12-07T06:00:00-06:00",
    isDaytime: false,
    temperature: 54,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "5 mph",
    windDirection: "NNE",
    icon: "https://api.weather.gov/icons/land/night/rain,20/rain,30?size=medium",
    shortForecast: "Chance Light Rain",
    detailedForecast:
      "A chance of rain. Mostly cloudy, with a low around 54. Chance of precipitation is 30%.",
  },
  {
    number: 11,
    name: "Wednesday",
    startTime: "2022-12-07T06:00:00-06:00",
    endTime: "2022-12-07T18:00:00-06:00",
    isDaytime: true,
    temperature: 62,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "5 mph",
    windDirection: "NNE",
    icon: "https://api.weather.gov/icons/land/day/rain,50?size=medium",
    shortForecast: "Chance Light Rain",
    detailedForecast:
      "A chance of rain. Cloudy, with a high near 62. Chance of precipitation is 50%.",
  },
  {
    number: 12,
    name: "Wednesday Night",
    startTime: "2022-12-07T18:00:00-06:00",
    endTime: "2022-12-08T06:00:00-06:00",
    isDaytime: false,
    temperature: 52,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "5 mph",
    windDirection: "E",
    icon: "https://api.weather.gov/icons/land/night/rain,50?size=medium",
    shortForecast: "Chance Light Rain",
    detailedForecast:
      "A chance of rain. Mostly cloudy, with a low around 52. Chance of precipitation is 50%.",
  },
  {
    number: 13,
    name: "Thursday",
    startTime: "2022-12-08T06:00:00-06:00",
    endTime: "2022-12-08T18:00:00-06:00",
    isDaytime: true,
    temperature: 63,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "5 to 10 mph",
    windDirection: "SW",
    icon: "https://api.weather.gov/icons/land/day/rain,50/rain,40?size=medium",
    shortForecast: "Chance Light Rain",
    detailedForecast:
      "A chance of rain. Mostly cloudy, with a high near 63. Chance of precipitation is 50%.",
  },
  {
    number: 14,
    name: "Thursday Night",
    startTime: "2022-12-08T18:00:00-06:00",
    endTime: "2022-12-09T06:00:00-06:00",
    isDaytime: false,
    temperature: 47,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "5 to 10 mph",
    windDirection: "NNE",
    icon: "https://api.weather.gov/icons/land/night/rain,30?size=medium",
    shortForecast: "Chance Light Rain",
    detailedForecast:
      "A chance of rain. Mostly cloudy, with a low around 47. Chance of precipitation is 30%.",
  },
];

const citySelect = document.querySelector("#selectDrop");
const output = document.querySelector("output");

console.log(periods);

createForecastTable(periods);

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
