 const requestURLevents = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURLevents)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
		// console.table(jsonObject);	// temporary checking for valid response and data parsing
	const towns = jsonObject['towns'];
	console.log(towns);


for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == "Soda Springs"){
		
let card = document.createElement('section');
let h2 = document.createElement('h2');
let p = document.createElement("p");
let mot = document.createElement("p");
let yr = document.createElement("p");
let pop = document.createElement("p");
let four = document.createElement("p");
let three = document.createElement("p");

mot.textContent = towns[i].events[0];
yr.textContent = towns[i].events[1];
pop.textContent = towns[i].events[2];
three.textContent = towns[i].events[3];
four.textContent = towns[i].events[4];


card.appendChild(mot);
card.appendChild(yr);
card.appendChild(pop);
card.appendChild(three);
card.appendChild(four);

document.querySelector('div.events').appendChild(card);
	}
}
  });