const tempNumber = (document.getElementById("currentTemp")); 
	console.log(tempNumber);
	
	const speedNumber = (document.getElementById("windSpeed")); 
	console.log(speedNumber);
	
	let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
	console.log(windchill);
	freeze = Math.round(windchill);
	console.log(freeze);
	
	if(tempNumber<=50  &&  speedNumber >3) {
		document.getElementById("chill").textContent = "Wind Chill: "+freeze+"\xB0F";
	}
		else {
		document.getElementById("chill").textContent = "Wind Chill: N/A";
		}