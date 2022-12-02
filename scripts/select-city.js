     //declare html elements
     
let cityList = document.getElementById('selectDrop')


let cityArrayLength = cities.length;
console.log(`number of cities is ${cityArrayLength}`);
for (i = 0; i < cityArrayLength; i++) {
  let theOption = new Option(cities[i].name);
  // console.log(theOption);
  cityList.appendChild(theOption);
}
     