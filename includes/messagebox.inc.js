let mesbox = document.getElementById("messagebox")
let browser_used = document.getElementById("usedbrowser")
let furtherinfo = document.getElementById("moreinfo")

var browser = ""

// Opera 8.0+
let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
let isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
let isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
let isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
let isChrome = !!window.chrome //&& (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
let isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
let isBlink = (isChrome || isOpera) && !!window.CSS;

if (isBlink) {browser = "Blink"}
if (isChrome) {browser = "Chrome"}
if (isEdgeChromium) {browser = "Chromium"}
if (isOpera) {browser = "Opera"}
if (isFirefox) {browser = "Firefox"}
if (isSafari) {browser = "Safari"}
if (isIE) {browser = "Internet Explorer"}
if (isEdge) {browser = "Edge"}

if (!(window.location.search.substr(1).includes("browser"))) {
    console.log("Appending browser to path")
    if (window.location.search.substr(1).length > 1) {
        window.location = window.location + "&" + "browser=" + browser
    }
    //window.location = "index.php?browser=" + browser
}


mesbox.addEventListener("click", function () {
    mesbox.classList.remove("shown")
    mesbox.classList.add("hidden")
})