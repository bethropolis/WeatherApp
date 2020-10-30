var cityName = document.getElementById("cityname");
var weather = document.getElementById("weather");
var icons = document.getElementById("icon");
var temperature = document.getElementById("temperature");
var icon;

var a = "";
var b = "";
var c = ""; 
function getWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71c69b1a015c18da81c2d8ceb7ed4adb&units=metric`) 
        .then(response => response.json())
        .then(data => {
            cityName.innerHTML = data.name;
            weather.innerHTML = data.weather[0].description;
            icon = data.weather[0].icon;
            icons.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
            temperature.innerHTML = data.main.temp + " &#8451;";
            a = data.name;
            b = data.weather[0].description;
            c =  data.main.temp;
        }).catch(error => ("City Not Found!"));
        htu();
}



var date = new Date();
var f = date.getDate();
var g = date.getHours();
var h = date.getMinutes();
if (h < 10){
    h = '0'+h; 
}

 document.getElementById('day').innerHTML = f;
 document.getElementById('time').innerHTML =  g + ':' + h;

var p = "https://pinterest.com/pin/create/button/?url=http://weather.bethlton.ga&media=&description=the #bethlton app says the weather in "+a+" is "+b+" and a temp of "+c+" degC";
var t  = "https://twitter.com/home?status=http://weather.bethlton.ga the #bethlton app says the weather in "+a+" is "+b+" and a temp of "+c+" degC";
var fa = "https://www.facebook.com/sharer/sharer.php?u=http://weather.bethlton.ga";
var m = "mailto:info@example.com?&subject=&body=https://bit.ly/2HEImBu";
var l = "https://www.linkedin.com/shareArticle?mini=true&url=http://weather.bethlton.ga&title=&summary=the #bethlton app says the weather in "+a+" is "+b+" and a temp of "+c+" degC"; 

function htu() {
    console.log(p);
    console.log(t);
    console.log(fa);
    console.log(m);
    console.log(l);
}
