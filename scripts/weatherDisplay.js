let cities = [
    {
       "name":"Colombus, Ohio ",
       "latitude":39.962524,
       "longitude":-82.99796
    },
    {
       "name":"San Diego, California ",
       "latitude":32.715736,
       "longitude":-117.161087
    }
 ]

 let resultEX = [
    {
        day:"Monday",
        morning:"",
        night:"",
    },
    {
        day:"Sunday",
        morning:"",
        night:"",
    },
    {
        day:"Tuesday",
        morning:"",
        night:"",
    },
    {
        day:"Wednesday",
        morning:"",
        night:"",
    },
    {
        day:"Thursday",
        morning:"",
        night:"",
    },
    {
        day:"Friday",
        morning:"",
        night:"",
    },
 ]
const citySelect = document.querySelector('#selectDrop');
const output = document.querySelector('output');

//Create Table
let table = document.createElement("table");

for
