var first_name = document.querySelector(".first-name")
var second_name = document.querySelector(".second-name")
var third_name = document.querySelector(".third-name")
var forth_name = document.querySelector(".forth-name")
var fifth_name = document.querySelector(".fifth-name")
var first_value = document.querySelector(".first-value")
var second_value = document.querySelector(".second-value")
var third_value = document.querySelector(".third-value")
var forth_value = document.querySelector(".forth-value")
var fifth_value = document.querySelector(".fifth-value")
const amount = document.getElementById("amount").innerHTML
const level = document.getElementById("level").innerHTML
const diamondspreading = document.getElementById("diamondspreading").innerHTML
const afk = document.getElementById("afk").innerHTML
const fuel = document.getElementById("fuel").innerHTML
const url = "http://infagsuso.bplaced.net/project/index.php"

console.log(amount)
console.log(level)
console.log(afk)
console.log(fuel)
console.log(diamondspreading)

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

try {
    console.log(httpGet(url))
} catch(exception) {
    console.log(exception.code)
}
