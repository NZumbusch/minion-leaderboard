const about_btn = document.getElementById("about-btn")













about_btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Hi")
    window.location.href = "about.php"
}) 
