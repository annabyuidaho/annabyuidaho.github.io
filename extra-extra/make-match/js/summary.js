


//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=53960ecb72b049ebd8e0d762f7ac23d1&units=imperial";

//const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=53960ecb72b049ebd8e0d762f7ac23d1&units=imperial";

//const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=53960ecb72b049ebd8e0d762f7ac23d1&units=imperial";


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
		
	let windchill = 35.74 + (0.6215 * weatherInfo.main.temp) - (35.75 * Math.pow(weatherInfo.wind.speed, 0.16)) + (0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16));
//	console.log(windchill);
	freeze = Math.round(windchill);
//	console.log(freeze);
	
	if(weatherInfo.main.temp<=50  &&  weatherInfo.wind.speed >3) {
		document.getElementById("chill").textContent = "Wind Chill: "+freeze+"\xB0F";
	}
		else {
		document.getElementById("chill").textContent = "Wind Chill: N/A";
		};
	    
    document.getElementById("weatherNow").innerHTML=weatherInfo.weather[0].main;
    document.getElementById("place").innerHTML=weatherInfo.name;
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML=weatherInfo.wind.speed;
    document.getElementById("muggy").innerHTML=weatherInfo.main.humidity;
	
	const iconcode = weatherInfo.weather[0].icon;
	console.log(iconcode);
	
	const icon_path="http://openweathermap.org/img/w/" + iconcode + ".png";
	console.log(icon_path);
	
	
	
	document.getElementById("weather_icon").src = icon_path;
	
	

 }); //end of "then" fat arrow function



