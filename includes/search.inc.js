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






let logs_el = document.getElementById("logs")

logs.addEventListener("click", function (e) {
    e.preventDefault()
    window.location = "log.php?log=" + log
})