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
const data = document.querySelector(".data")

console.log(amount)
console.log(level)
console.log(afk)
console.log(fuel)
console.log(diamondspreading)

console.log(data.innerHTML)

var prices_str = data.innerHTML

var prices_str_arr = prices_str.split("\n")

console.log(prices_str_arr)

var prices = Array()

prices_str_arr.forEach(function (item, index) {
    if (!(item.indexOf("<br>") >= 0)) {
        console.log(item)
        prices.push(item)
    }
})

prices