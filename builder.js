function addStyle() {
document.head.innerHTML = `
<style>
html {
  overflow-y: scroll;
}
</style>
` + document.head.innerHTML;
}

function addHeader() {
  var header = `
<header style="background-color: rgb(66,66,66); color: white;">`;
}

function addContainer() {}


var pages = [
["404", `
<h1>Page not found</h1>
<p>It seems that the page couldn't be found. Try looking through the <a href="map/">site map</a> to find what you're looking for</p>
<p class="cat">In the meantime, here's a random cat gif:<br><br>
<img src="https://thecatapi.com/api/images/get?format=src&type=gif">
</p>
`, function () {
document.title = "Page not found - Matt Pattok";
document.head.innerHTML += `
<style>
p {
  font-size: 2em;
}
.cat {
  text-align: center;
  font-family: trebuchet;
  font-size: 1.5em;
}
.cat img {
  position: inline-block;
}
</style>
`;
addStyle();
addHeader();
addContainer();
}, []],


["home", `

`, function () {

}, []],


["schedule", `
<div width="100%" style="text-align: center;">
<div class="calendarClass" style=" display: inline-block; width: 80%"></div>
</div>
`, function () {
document.title = "Schedule - Matt Pattok";
var calEvents = document.createElement("script");
calEvents.type = "text/javascript";
calEvents.src = "calendar-events.js";
document.body.appendChild(calEvents);
var calScript = document.createElement("script");
calScript.type = "text/javascript";
calScript.src = "calendar-script.js";
document.body.appendChild(calScript);
addStyle();
addHeader();
addContainer();
}, []],


["school", `

`, function () {

}, []],


["map", `

`, function () {

}, []]
];

var page = document.title;
for(var i = 0; i < pages.length; i++) {
  if(page == pages[i][0]) {
    document.body.innerHTML += pages[i][1];
    pages[i][2]();
  }
}
