const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);	// temporary checking for valid response and data parsing
	const towns = jsonObject['towns'];
	
	let hometown = [towns[1], towns[4], towns[5]];

for (let i = 0; i < hometown.length; i++ ) {
let card = document.createElement('section');
let h2 = document.createElement('h2');
let p = document.createElement("p");
let mot = document.createElement("h3");
let yr = document.createElement("p");
let pop = document.createElement("p");
let rain = document.createElement("p");
let img = document.createElement("img");


h2.textContent = hometown[i].name; 
mot.textContent = hometown[i].motto;
yr.textContent = "Year Founded: " + hometown[i].yearFounded;
pop.textContent = "Population: " + hometown[i].currentPopulation;
rain.textContent = "Annual Rainfall: " + hometown[i].averageRainfall;

img.setAttribute('src', 'images/' + hometown[i].photo);
img.setAttribute('alt', hometown[i].name + '-' + hometown[i].motto);

card.appendChild(h2);
card.appendChild(mot);
card.appendChild(yr);
card.appendChild(pop);
card.appendChild(rain);
card.appendChild(img);


  
document.querySelector('div.cities').appendChild(card);

}
  });

