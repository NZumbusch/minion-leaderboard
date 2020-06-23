const minions = {
    "wheat": {"Speed": [15, 15, 13, 13, 11, 11, 10, 10, 9, 9, 8], "Products": [{"Name": "WHEAT", "Amount": 1, "Afk": false}, {"Name": "SEEDS", "Amount": 1, "Afk": false}]}, 
    "potato": {"Speed": [20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10], "Products": [{"Name": "POTATO_ITEM", "Amount": 3, "Afk": false}]}, 
    "carrot": {"Speed": [20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10], "Products": [{"Name": "CARROT_ITEM", "Amount": 3, "Afk": false}]}, 
    "melon": {"Speed": [24, 24, 22.5, 22.5, 21, 21, 18.5, 18.5, 16, 16, 13], "Products": [{"Name": "MELON", "Amount": 6, "Afk": false}]}, 
    "pumpkin": {"Speed": [32, 32, 30, 30, 27, 27, 24, 24, 20, 20, 16], "Products": [{"Name": "PUMPKIN", "Amount": 1, "Afk": false}]}, 
    "mushroom": {"Speed": [30, 30, 28, 28, 26, 26, 23, 23, 20, 20, 16], "Products": [{"Name": "RED_MUSHROOM", "Amount": 0.5, "Afk": false}, {"Name": "BROWN_MUSHROOM", "Amount": 0.5, "Afk": false}]}, 
    "cactus": {"Speed": [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 15], "Products": [{"Name": "CACTUS", "Amount": 1, "Afk": false}]}, 
    "cocoa-beans": {"Speed": [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 15], "Products": [{"Name": "INK_SACK:3", "Amount": 3, "Afk": false}]}, 
    "sugar-cane": {"Speed": [22, 22, 20, 20, 18, 18, 16, 16, 14.5, 14.5, 12], "Products": [{"Name": "SUGAR_CANE", "Amount": 1, "Afk": false}]}, 
    "cow": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "RAW_BEEF", "Amount": 1, "Afk": true}, {"Name": "LEATHER", "Amount": 1, "Afk": true}]}, 
    "pig": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "PORK", "Amount": 1, "Afk": true}]}, 
    "chicken": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 18, 18, 15], "Products": [{"Name": "RAW_CHICKEN", "Amount": 1, "Afk": true}, {"Name": "ENCHANTED_EGG", "Amount": 0.006944444, "Afk": true}, {"Name": "FEATHER", "Amount": 1, "Afk": true}]}, 
    "sheep": {"Speed": [24, 24, 22, 22, 20, 20, 18, 18, 16, 16, 12], "Products": [{"Name": "MUTTON", "Amount": 1, "Afk": true}]}, 
    "rabbit": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "RABBIT_HIDE", "Amount": 0.35, "Afk": true}, {"Name": "RABBIT_FOOT", "Amount": 0.35, "Afk": true}, {"Name": "RABBIT", "Amount": 1, "Afk": true}]}, 
    "cobblestone": {"Speed": [14, 14, 12, 12, 10, 10, 9, 9, 8, 8, 7], "Products": [{"Name": "COBBLESTONE", "Amount": 1, "Afk": false}]}, 
    "coal": {"Speed": [15, 15, 13, 13, 12, 12, 10, 10, 9, 9, 7], "Products": [{"Name": "COAL", "Amount": 1, "Afk": false}]}, 
    "iron": {"Speed": [17, 17, 15, 15, 14, 14, 12, 12, 10, 10, 8], "Products": [{"Name": "IRON_INGOT", "Amount": 1, "Afk": false}]}, 
    "gold": {"Speed": [20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10], "Products": [{"Name": "GOLD_INGOT", "Amount": 1, "Afk": false}]}, 
    "emerald": {"Speed": [28, 28, 26, 26, 24, 24, 21, 21, 18, 18, 14], "Products": [{"Name": "EMERALD", "Amount": 1, "Afk": false}]}, 
    "diamond": {"Speed": [29, 29, 27, 27, 25, 25, 22, 22, 19, 19, 15], "Products": [{"Name": "DIAMOND", "Amount": 1, "Afk": false}]}, 
    "lapis": {"Speed": [29, 29, 27, 27, 25, 25, 23, 23, 21, 21, 18], "Products": [{"Name": "INK_SACK:4", "Amount": 6, "Afk": false}]}, 
    "redstone": {"Speed": [29, 29, 27, 27, 25, 25, 23, 23, 21, 21, 18], "Products": [{"Name": "REDSTONE", "Amount": 4.5, "Afk": false}]}, 
    "quartz": {"Speed": [22.5, 22.5, 21, 21, 19, 19, 17, 17, 14.5, 14.5, 11.5], "Products": [{"Name": "QUARTZ", "Amount": 1, "Afk": false}]}, 
    "end_stone": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "ENDER_STONE", "Amount": 1, "Afk": false}]}, 
    "glowstone": {"Speed": [25, 25, 23, 23, 21, 21, 19, 19, 16, 16, 13], "Products": [{"Name": "GLOWSTONE_DUST", "Amount": 3, "Afk": false}]}, 
    "obsidian": {"Speed": [45, 45, 42, 42, 39, 39, 35, 35, 30, 30, 24], "Products": [{"Name": "OBSIDIAN", "Amount": 1, "Afk": false}]}, 
    "gravel_without_shovel": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "GRAVEL", "Amount": 0.9}, {"Name": "FLINT", "Amount": 0.1, "Afk": false}]}, 
    "gravel_with_shovel": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "FLINT", "Amount": 1, "Afk": false}]}, 
    "sand": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13], "Products": [{"Name": "SAND", "Amount": 1, "Afk": true}]}, 
    "clay": {"Speed": [32, 32, 30, 30, 27.5, 27.5, 24, 24, 20, 20, 16], "Products": [{"Name": "CLAY_BALL", "Amount": 4, "Afk": false}]}, 
    "ice": {"Speed": [14, 14, 12, 12, 10, 10, 9, 9, 8, 8, 7], "Products": [{"Name": "ICE", "Amount": 1, "Afk": false}]}, 
    "zombie": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "ROTTEN_FLESH", "Amount": 1, "Afk": true}]}, 
    "skeleton": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "BONE", "Amount": 1, "Afk": true}]}, 
    "cave_spider": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "SPIDER_EYE", "Amount": 1, "Afk": true}, {"Name": "STRING", "Amount": 0.5, "Afk": true}]}, 
    "spider": {"Speed": [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13], "Products": [{"Name": "STRING", "Amount": 1, "Afk": true}]}, 
    "enderman": {"Speed": [32, 32, 30, 30, 28, 28, 25, 25, 22, 22, 18], "Products": [{"Name": "ENDER_PEARL", "Amount": 1, "Afk": false}]}, 
    "creeper": {"Speed": [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 14], "Products": [{"Name": "ENCHANTED_GUNPOWDER", "Amount": 0.00625, "Afk": true}]}, 
    "blaze": {"Speed": [33, 33, 31, 31, 28.5, 28.5, 25, 25, 21, 21, 16.5], "Products": [{"Name": "BLAZE_ROD", "Amount": 1, "Afk": true}]}, 
    "ghast": {"Speed": [50, 50, 47, 47, 44, 44, 41, 41, 38, 38, 32], "Products": [{"Name": "GHAST_TEAR", "Amount": 1, "Afk": true}]}, 
    "slime": {"Speed": [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 12], "Products": [{"Name": "SLIME_BALL", "Amount": 1.8, "Afk": true}]}, 
    "magma_cube": {"Speed": [32, 32, 30, 30, 28, 28, 25, 25, 22, 22, 18], "Products": [{"Name": "MAGMA_CREAM", "Amount": 1.8, "Afk": true}]}, 
    "fishing": {"Speed": [78, 75, 72, 72, 68, 68, 62.5, 62.5, 53, 53, 35], "Products": [{"Name": "RAW_FISH", "Amount": 0.5, "Afk": false}, {"Name": "RAW_FISH:1", "Amount": 0.25, "Afk": false}, {"Name": "RAW_FISH:2", "Amount": 0.12, "Afk": false}, {"Name": "PRISMARINE_SHARD", "Amount": 0.03, "Afk": false}, {"Name": "PRISMARINE_CRYSTALS", "Amount": 0.03, "Afk": false}, {"Name": "SPONGE", "Amount": 0.03, "Afk": false}]}, 
    "oak": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG", "Amount": 4, "Afk": false}]}, 
    "birch": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG:2", "Amount": 4, "Afk": false}]}, 
    "acacia": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG_2", "Amount": 4, "Afk": false}]}, 
    "dark-oak": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG_2:1", "Amount": 4, "Afk": false}]}, 
    "jungle": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG:3", "Amount": 4, "Afk": false}]}, 
    "spruce": {"Speed": [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27], "Products": [{"Name": "LOG:1", "Amount": 4, "Afk": false}]}, 
    "nether_wart": {"Speed": [50, 50, 47, 47, 44, 44, 41, 41, 38, 38, 32], "Products": [{"Name": "NETHER_STALK", "Amount": 1, "Afk": false}]}, 
    "flower": {"Speed": [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20], "Products": [{"Name": false, "Amount": 0, "Afk": false}]}, 
    "tarantula": {"Speed": [29, 29, 26, 26, 23, 23, 19, 19, 14.5, 14.5, 10], "Products": [{"Name": "STRING", "Amount": 3.16, "Afk": true}, {"Name": "SPIDER_EYE", "Amount": 1, "Afk": true}, {"Name": "IRON_INGOT", "Amount": 0.2, "Afk": true}]}, 
    "revenant": {"Speed": [29, 29, 26, 26, 23, 23, 19, 19, 14.5, 14.5, 10], "Products": [{"Name": "ROTTEN_FLESH", "Amount": 3, "Afk": true}, {"Name": "DIAMOND", "Amount": 0.2, "Afk": true}]}, 
    "snow": {"Speed": [13, 13, 12, 12, 11, 11, 9.5, 9.5, 8, 8, 6.5], "Products": [{"Name": "SNOW_BALL", "Amount": 4, "Afk": true}]}}
var search_entered = document.getElementById("search-entered")
var search_button = document.getElementById("search-button")
const amount = document.getElementById("amount").innerHTML
const level = document.getElementById("level").innerHTML
var diamondspreading = document.getElementById("diamondspreading").innerHTML
const afk = document.getElementById("afk").innerHTML
const fuel = document.getElementById("fuel").innerHTML
const min = document.getElementById("min").innerHTML
var max = document.getElementById("max").innerHTML
if (max == -1) {max = 999999999999999999999999999999999999999999999}
var duration = document.getElementById("duration").innerHTML
const sort = document.getElementById("sort").innerHTML
//const url = "http://infagsuso.bplaced.net/project/index.php"
const data = document.querySelector(".api_data")




//_______________________________________________________________________________
// Functions


function clicked (clicked) {
    get_minion_search(minion_leaderboard[clicked][0])
}

function get_minion_search (inserted) {
    try {
        entered = parseInt(inserted)
        var profit_sort_item_profit_arr = ""
        let coun = 0
        for (key in profit_sort[entered - 1][2]) {
            coun += 1
            profit_sort_item_profit_arr += key + ": " + profit_sort[entered - 1][2][key]
            if (coun != Object.keys(profit_sort[entered - 1][2]).length) {profit_sort_item_profit_arr += ", "}  else {profit_sort_item_profit_arr += " "}
        }
        alert("With your settings the " + entered + " minion makes " + format(profit_sort[entered - 1][1]) + " coins and " + profit_sort_item_profit_arr + "items and is a " + profit_sort[entered - 1][0] + " minion.")
    }catch (exception) {
        entered = inserted
        var contin = true
        profit_sort.forEach(function (element, index) {
            if (element[0].toUpperCase().includes(entered.toUpperCase())) {
                let coun = 0
                var profit_sort_item_profit_arr = ""
                for (key in element[2]) {
                    coun += 1
                    profit_sort_item_profit_arr += key + ": " + element[2][key]
                    if (coun != Object.keys(element[2]).length) {profit_sort_item_profit_arr += ", "; console.log(coun, Object.keys(element[2]))} else {profit_sort_item_profit_arr += " "}
                }
                if (contin) {contin = confirm("With your settings the " + element[0] + " minion makes " + format(element[1]) + " coins  and " + profit_sort_item_profit_arr + "items and has the position " + (index + 1) + ".")}
            }
        })
    }
}

function format (n) {
    if (n > 999999) {
        return n.toFixed(1).replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
            return '.' + s
        })
    } else {
        return n.toFixed(1).replace('.', ',').replace(/\d{3}(?=(\d{})*,)/g, function (s) {
            return '.' + s
        })
    }

}

function minion_item_profit (m_amount, m_delay, m_fuel, m_item_amount, m_time, m_name) {
    m_delay = parseFloat(m_delay)
    m_fuel = parseFloat(m_fuel)
    m_item_amount = parseFloat(m_item_amount)
    m_time = parseInt(m_time)
    let delay = m_delay / (1 + (m_fuel / 100))
    console.log(m_amount, delay, m_item_amount, m_time, " -----> ", m_amount/delay*m_item_amount/2*m_time)
    return m_amount/delay*m_item_amount/2*m_time;
}



//_______________________________________________________________________________
// Main


//Getting prices
var minion_list = []

for (var key in minions) {
    minion_list.push(key)
}

var prices_str = data.innerHTML
if (prices_str.includes("---")) {
    var prices_str_arr = prices_str.split("\n")
    var prices_arr = Array()
    var prices = {}
    console.log("Using npc prices")
    prices_str_arr.forEach(function (item, index) {
        if (item.includes("---")) {
            prices_str_arr.splice(index, 1)
        }
    })
    var counter = false
    var prices = {}
    prices_str_arr.forEach(function (item, index) {
        if (counter == false) {
            counter = true
            prices[item.replace('"', "")] = 0
        } else {
            counter = false
            prices[prices_str_arr[index -1]] = parseInt(item)
        }
    })
} else {
    var prices_str_arr = prices_str.split("<br>")
    var prices_arr = Array()
    var prices = {}
    console.log("Using api prices")
    prices_str_arr.forEach(function (item, index) {
        let price_save = item.replace("\n", "").replace(" ", "")
        if (!price_save.includes("\n")) {
            prices_arr.push(price_save)
        }
    })
    for (var counter = 0; counter < prices_arr.length; counter += 2) {
        prices[prices_arr[counter]] = prices_arr[counter + 1]
    }
}


//Calculating minion profits
var minion_profits = []

for (var m_key in minions) {
    minion = minions[m_key]
    var profit = 0
    var item_profit_l = {}
    minion["Products"].forEach(function (product, index) {
        let item_profit = 0
        let diamonditemprofit = 0
        if (!(product.Name == false)) {
            let afk_time = afk / 100
            if (product["Afk"] == false) {afk_time = 0}
            console.log(product["Name"])
            item_profit += minion_item_profit(amount, minion["Speed"][level - 1], fuel, product["Amount"], duration * 3600) * afk_time * 2
            item_profit += minion_item_profit(amount, minion["Speed"][level - 1], fuel, product["Amount"], duration * 3600) * (1 - afk_time)
            diamonditemprofit += minion_item_profit(amount, minion["Speed"][level - 1], fuel, product["Amount"], duration * 3600) * (1 - afk_time) / 10
            //console.log(product["Name"], item_profit)
            profit += item_profit * prices[product.Name]
            item_profit_l[product.Name] = Math.round(item_profit)
            profit += diamonditemprofit * prices["DIAMOND"]
        }
    })
    minion_profits.push([m_key, profit, item_profit_l])
}




//Sorting minion profits for leaderboard

minion_profits.sort(function(a,b){return a[1] - b[1]})

var to_splice = []

minion_profits.forEach(function (element, index) {
    if (parseFloat(min) > parseFloat(element[1]) || parseFloat(max) < parseFloat(element[1]) || element[1] == NaN) {
        to_splice.push(index)
    }
})

to_splice.reverse()

to_splice.forEach(function (element, index) {
    minion_profits.splice(element, 1)
})

if (sort != ("c-up")) {
    minion_profits.reverse()
}

var profit_sort = []

minion_profits.forEach(function (element, index) {
    profit_sort.push(element)
})

if (sort == "a-down" || sort == "a-up") {
    minion_profits.sort(function(a,b){return a[0] > b[0];}); 
}

if (sort.includes("a-down")) {
    console.log("reversing")
    minion_profits.reverse()
    console.log(minion_profits)
}


var minion_leaderboard = minion_profits




//_______________________________________________________________________________
// Update

console.log(prices)

var minion_leaderboard_new = []

minion_leaderboard.forEach(function (element, index) {
    minion_leaderboard_new.push([element[0], element[1]])
})

minion_leaderboard_new.forEach(function (element, index) {
    if (element[1] != NaN) {
        minion_leaderboard_new[index][0] = element[0].charAt(0).toUpperCase() + element[0].slice(1);
        minion_leaderboard_new[index][1] = format(element[1])
        minion_leaderboard_new[index] = (index + 1) + ". " + element.join(" with ") + " coins."
    } 
})

var leaderboard_display_string = minion_leaderboard_new.join("<br />")
document.getElementById("leaderboard").innerHTML = leaderboard_display_string

//_______________________________________________________________________________
// Listeners

try {
    document.getElementById("settings-successfull").addEventListener("click", function () {
        cl_list = document.getElementById("settings-successfull").classList
        if (cl_list.contains("hidden")) {
            cl_list.remove("hidden")
        } else {
            cl_list.add("hidden")
        }
    })
} catch (exception) {
    console.log("No settings box provided.")
}


search_button.addEventListener(type="click", function () {
    var entered = search_entered.value
    get_minion_search(entered)
})

document.getElementById('search-entered').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
        e.preventDefault();
        var entered = search_entered.value
        get_minion_search(entered)
    }
}

var nav = document.querySelector(".nav")
var search_box = document.getElementById("search")
//const about = document.getElementById("about")

nav.addEventListener("click", function (e) {
    console.log("click")
    if (search_box.classList.contains("shown")) {
        search_box.classList.remove("shown")
    } else {
        search_box.classList.add("shown")
    }
})

