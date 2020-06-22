const about_btn = document.getElementById("about-btn")
const about = document.getElementById("about")

function main () {
    about.classList.add("shown")
    about.classList.remove("hidden")
    if (search_box.classList.contains("shown")) {
        search_box.classList.remove("shown")
    } else {
        search_box.classList.add("shown")
    }
    setTimeout(function (){about.classList.remove("shown"); about.classList.add("hidden")}, 3000)
}


about_btn.addEventListener("click", function (e) {
    e.preventDefault();
    main()
}) 
