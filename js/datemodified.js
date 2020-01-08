const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
//document.lastModified;



/*document.getElementById("datemodified").textContent = new Date()document.lastModified("en-US", options);*/

/*const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};*/

document.getElementById("datemodified").textContent = new Date(document.lastModified).toUTCString("en-US", options);