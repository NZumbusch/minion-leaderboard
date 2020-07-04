let raw_log_data = document.getElementById("log_data").innerHTML
let log_data = raw_log_data.split("/")
var log = []

function get_time (t) {
    time = [0, 0, 0, 0, 0]

}

log_data.forEach(function (element, index) {
    if (element[0] == "-") {
        log.push([element.replace("- ", "").split(" ~ ")[0], element.replace("- ", "").split(" ~ ")[1]])
    }
})

log.forEach(function (element, index) {
    document.writeln("<p class='log'>" + element[0] + ": " + element[1] + "</p>")
})

document.getElementById("back").addEventListener("click", function (e) {
    e.preventDefault()
    window.location = "index.php"
})

document.getElementById("clear").addEventListener("click", function (e) {
    e.preventDefault()
    window.location = "log.php?clear=true"
})