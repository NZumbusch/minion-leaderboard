<?php
session_start();

if (!isset($_GET["submit"])) {
    header("LOCATION: ../index.php");
    exit();
}

if (isset($_GET["amount"])) {
    $_SESSION["amount"] = $_GET["amount"];
}

if (isset($_GET["level"])) {
    $_SESSION["level"] = $_GET["level"];
}

if (isset($_GET["fuel"])) {
    $_SESSION["fuel"] = $_GET["fuel"];
}

if (isset($_GET["afk"])) {
    $_SESSION["afk"] = $_GET["afk"];
}

if (isset($_GET["diamondspreading"])) {
    if ($_GET["diamondspreading"] == "on") {
        $_SESSION["diamondspreading"] = "true";
        echo "true";
    } 
} else {
    $_SESSION["diamondspreading"] = "false";
    echo "false";
}

if (isset($_GET["api"])) {
    if ($_GET["api"] == "on") {
        $_SESSION["api"] = "true";
        echo "true";
    } 
} else {
    $_SESSION["api"] = "false";
    echo "false";
}

echo "Heading";
header("LOCATION: ../index.php?redirect=settings");
exit();