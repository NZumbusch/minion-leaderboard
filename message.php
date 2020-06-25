<?php 
session_start();

if (isset($_GET["browser"]) && $_GET["browser"] != "Firefox" && $_SESSION["brmesread"] == "false") {
    echo '<div class ="brmes" id="messagebox" class="unsupportedbrowser"><h1>You are using an unsupported browser. Please switch to <a href="https://www.mozilla.org/de/firefox/new/">Firefox</a> for the optimal experience.</h1><div><h2>Browser you are using: '.$_GET["browser"].'</h2></div><p id="moreinfo">No further information.</p></div>';
    $_SESSION["brmesread"] = "true";
}

if (isset($_GET["redirect"]) && $_GET["redirect"] == "settings" && $_SESSION["semesread"] == "false") {
    echo '<h3 id="settings-successfull">Successfully changed settings...</h3>';
    $_SESSION["semesread"] = "true";
}
?>
<script type="text/javascript" src="includes/messagebox.inc.js"></script>
<link rel="stylesheet" href="styles/message.css">