var minions = {
    "wheat": {"Speed": [15, 15, 13, 13, 11, 11, 10, 10, 9, 9, 8], "Products": [{"Name": "WHEAT", "Amount": 1}, {"Name": "SEEDS", "Amount": 1}]}, 
    "potato": {"Speed": [20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10], "Products": [{"Name": "POTATO_ITEM", "Amount": 1}]}, 
    "carrot": {"Speed": [20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10], "Products": [{"Name": "CARROT_ITEM", "Amount": 1}]}, 
    "melon": {"Speed": [24, 24, 23, 23, 21, 21, 19, 19, 16, 16, 13], "Products": [{"Name": "MELON", "Amount": 1}]}, 
    "pumpkin": {"Speed": [32, 32, 30, 30, 27, 27, 24, 24, 20, 20, 16], "Products": [{"Name": "PUMPKIN", "Amount": 1}]}, 
    "mushroom": {"Speed": [30, 30, 28, 28, 26, 26, 23, 23, 20, 20, 16], "Products": [{"Name": "RED_MUSHROOM", "Amount": 0.5}, {"Name": "BROWN_MUSHROOM", "Amount": 0.5}]}, 
    "cactus": {"Speed": [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 15], "Products": [{"Name": "CACTUS", "Amount": 1}]}, 
    "cocoa-beans": {"Speed": [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 15], "Products": [{"Name": "INK_SACK:3", "Amount": 1}]}, 
    "sugar-cane": {"Speed": [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 15], "Products": [{"Name": "SUGAR_CANE", "Amount": 1}]}, 
    "cow": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "RAW_BEEF", "Amount": 1, "Afk": true}, {"Name": "LEATHER", "Amount": 1, "Afk": true}]}, 
    "pig": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "PORK", "Amount": 1, "Afk": true}]}, 
    "chicken": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 18, 18, 15], "Products": [{"Name": "RAW_CHICKEN", "Amount": 1, "Afk": true}, {"Name": "ENCHANTED_EGG", "Amount": 0.006944444, "Afk": true}, {"Name": "FEATHER", "Amount": 1, "Afk": true}]}, 
    "sheep": {"Speed": [24, 24, 22, 22, 20, 20, 18, 18, 16, 16, 12], "Products": [{"Name": "MUTTON", "Amount": 1, "Afk": true}]}, 
    "rabbit": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "RABBIT_HIDE", "Amount": 1, "Afk": true}, {"Name": "RABBIT_FOOT", "Amount": 1, "Afk": true}, {"Name": "RABBIT", "Amount": 1, "Afk": true}]}, 
    "cobblestone": {"Speed": [14, 14, 12, 12, 10, 10, 9, 9, 8, 8, 7], "Products": [{"Name": "COBBLESTONE", "Amount": 1}]}, 
    "coal": {"Speed": [15, 15, 13, 13, 12, 12, 10, 10, 9, 9, 7], "Products": [{"Name": "COAL", "Amount": 1}]}, 
    "iron": {"Speed": [17, 17, 15, 15, 14, 14, 12, 12, 10, 10, 8], "Products": [{"Name": "IRON_INGOT", "Amount": 1}]}, 
    "gold": {"Speed": [22, 22, 20, 20, 18, 18, 16, 16, 14, 14, 11], "Products": [{"Name": "GOLD_INGOT", "Amount": 1}]}, 
    "emerald": {"Speed": [28, 28, 26, 26, 24, 24, 21, 21, 18, 18, 14], "Products": [{"Name": "EMERALD", "Amount": 1}]}, 
    "diamond": {"Speed": [29, 29, 27, 27, 25, 25, 22, 22, 19, 19, 15], "Products": [{"Name": "DIAMOND", "Amount": 1}]}, 
    "lapis": {"Speed": [29, 29, 27, 27, 25, 25, 23, 23, 21, 21, 18], "Products": [{"Name": "INK_SACK:4", "Amount": 6}]}, 
    "redstone": {"Speed": [29, 29, 27, 27, 25, 25, 23, 23, 21, 21, 18], "Products": [{"Name": "REDSTONE", "Amount": 4.5}]}, 
    "quartz": {"Speed": [25, 25, 23, 23, 21, 21, 19, 19, 16, 16, 13], "Products": [{"Name": "QUARTZ", "Amount": 1}]}, 
    "end_stone": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "ENDER_STONE", "Amount": 1}]}, 
    "glowstone": {"Speed": [25, 25, 23, 23, 21, 21, 19, 19, 16, 16, 13], "Products": [{"Name": "GLOWSTONE_DUST", "Amount": 3}]}, 
    "obsidian": {"Speed": [45, 45, 42, 42, 39, 39, 35, 35, 30, 30, 24], "Products": [{"Name": "OBSIDIAN", "Amount": 1}]}, 
    "gravel_without_shovel": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "GRAVEL", "Amount": 0.9}, {"Name": "FLINT", "Amount": 0.1}]}, 
    "gravel_with_shovel": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "FLINT", "Amount": 1}]}, 
    "sand": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "SAND", "Amount": 1}]}, 
    "clay": {"Speed": [32, 32, 30, 30, 28, 28, 24, 24, 20, 20, 16], "Products": [{"Name": "CLAY_BALL", "Amount": 4}]}, 
    "ice": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "ICE", "Amount": 1}]}, 
    "zombie": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "ROTTEN_FLESH", "Amount": 1, "Afk": true}]}, 
    "skeleton": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "BONE", "Amount": 1, "Afk": true}]}, 
    "cave_spider": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "SPIDER_EYE", "Amount": 0.9, "Afk": true}, {"Name": "STRING", "Amount": 0.8, "Afk": true}]}, 
    "spider": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "STRING", "Amount": 1, "Afk": true}]}, 
    "enderman": {"Speed": [32, 32, 30, 30, 28, 28, 25, 25, 22, 22, 18], "Products": [{"Name": "ENDER_PEARL", "Amount": 1}]}, 
    "creeper": {"Speed": [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 14], "Products": [{"Name": "ENCHANTED_GUNPOWDER", "Amount": 0.00625, "Afk": true}]}, 
    "blaze": {"Speed": [30, 30, 28, 28, 26, 26, 23, 23, 19, 19, 15], "Products": [{"Name": "BLAZE_ROD", "Amount": 1, "Afk": true}]}, 
    "ghast": {"Speed": [50, 50, 47, 47, 44, 44, 41, 41, 38, 38, 32], "Products": [{"Name": "GHAST_TEAR", "Amount": 1, "Afk": true}]}, 
    "slime": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 12], "Products": [{"Name": "SLIME_BALL", "Amount": 1, "Afk": true}]}, 
    "magma_cube": {"Speed": [32, 32, 30, 30, 28, 28, 25, 25, 22, 22, 18], "Products": [{"Name": "MAGMA_CREAM", "Amount": 1, "Afk": true}]}, 
    "fishing": {"Speed": [90, 86, 82, 82, 77, 77, 71, 71, 60, 60, 40], "Products": [{"Name": "RAW_FISH", "Amount": 0.5}, {"Name": "RAW_FISH:1", "Amount": 0.25}, {"Name": "RAW_FISH:2", "Amount": 0.12}, {"Name": "PRISMARINE_SHARD", "Amount": 0.03}, {"Name": "PRISMARINE_CRYSTALS", "Amount": 0.03}, {"Name": "SPONGE", "Amount": 0.03}]}, 
    "oak": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG", "Amount": 3.5}]}, 
    "birch": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG:2", "Amount": 3.5}]}, 
    "acacia": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG_2", "Amount": 3.5}]}, 
    "dark-oak": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG_2:1", "Amount": 3.5}]}, 
    "jungle": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG:3", "Amount": 3.5}]}, 
    "spruce": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG:1", "Amount": 3.5}]}, 
    "nether_wart": {"Speed": [50, 50, 47, 47, 44, 44, 41, 41, 38, 38, 32], "Products": [{"Name": "NETHER_STALK", "Amount": 1}]}, 
    "flower": {"Speed": [30, 29, 28, 27, 26, 25, 24, 23, 22, 20, 18], "Products": [{"Name": false, "Amount": 0}]}, 
    "tarantula": {"Speed": [29, 29, 26, 26, 23, 23, 19, 19, 14.5, 14.5, 10], "Products": [{"Name": "STRING", "Amount": 3, "Afk": true}, {"Name": "SPIDER_EYE", "Amount": 1, "Afk": true}, {"Name": "IRON_INGOT", "Amount": 0.2, "Afk": true}]}, 
    "revenant": {"Speed": [29, 29, 26, 26, 23, 23, 19, 19, 14.5, 14.5, 10], "Products": [{"Name": "ROTTEN_FLESH", "Amount": 3, "Afk": true}, {"Name": "DIAMOND", "Amount": 0.2, "Afk": true}]}, 
    "snow": {"Speed": [13, 13, 12, 12, 11, 11, 9.5, 9.5, 8, 8, 6.5], "Products": [{"Name": "SNOW_BALL", "Amount": 3, "Afk": true}]}}


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

var prices_arr = Array()

prices_str_arr.forEach(function (item, index) {
    if (!(item.indexOf("<br>") >= 0)) {
        console.log(item)
        prices_arr.push(item)
    }
})

var counter = false

var prices = {}

prices_arr.shift()

prices_arr.forEach(function (item, index) {
    if (counter == false) {
        console.log(item)
        counter = true
        prices[item.replace("[", "").replace("]", "")] = 1
    } else {
        console.log(item)
        counter = false
        try {
            prices[(prices_arr[index - 1]).replace("[", "").replace("]", "")] = parseInt(item.replace("[", "").replace("]", ""), 10)
        } catch (exception) {
            raise(exception)
        }
    }
})

console.log(prices)