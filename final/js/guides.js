const requestURL = 'https://annabyuidaho.github.io/final/guides.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
   // console.table(jsonObject);	// temporary checking for valid response and data parsing
	const guides = jsonObject['guides'];
	
for (let i = 0; i < guides.length; i++ ) {
let card = document.createElement('section');
let h2 = document.createElement('h2');
let p = document.createElement("p");
let cert = document.createElement("p");
let yrs = document.createElement("p");
let email = document.createElement("p");
let bio = document.createElement("p");
let img = document.createElement("img");

h2.textContent = "Meet " + guides[i].name;
cert.textContent = "Certification Level: " + guides[i].certLevel;
yrs.textContent = "Years Experience: " + guides[i].yearsEx;
email.textContent = "Email Address: " + guides[i].emailAdd;
bio.textContent = guides[i].biography;

img.setAttribute('src', 'images/' + guides[i].image);
img.setAttribute('alt', guides[i].name);

card.appendChild(h2);
card.appendChild(img);
card.appendChild(cert);
card.appendChild(yrs);
card.appendChild(email);
card.appendChild(bio);


document.querySelector('div.ourGuides').appendChild(card);
	}
});