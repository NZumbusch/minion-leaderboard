<?php
session_start();

if (!isset($_GET["submit"])) {
    header("LOCATION: ../index.php");
    exit();
}

if (isset($_GET["amount"])) {
    $_SESSION["amount"] = $_GET["amount"];
    $_COOKIE["amount"] = $_SESSION["amount"];
}

if (isset($_GET["level"])) {
    $_SESSION["level"] = $_GET["level"];
    $_COOKIE["level"] = $_SESSION["level"];
}

if (isset($_GET["fuel"])) {
    $_SESSION["fuel"] = $_GET["fuel"];
    $_COOKIE["fuel"] = $_SESSION["fuel"];
}

if (isset($_GET["afk"])) {
    $_SESSION["afk"] = $_GET["afk"];
    $_COOKIE["afk"] = $_SESSION["afk"];
}

if (isset($_GET["diamondspreading"])) {
    if ($_GET["diamondspreading"] == "on") {
        $_SESSION["diamondspreading"] = "true";
        $_COOKIE["diamondspreading"] = $_SESSION["diamondspreading"];
        echo "true";
    } 
} else {
    $_SESSION["diamondspreading"] = "false";
    $_COOKIE["diamondspreading"] = $_SESSION["diamondspreading"];
    echo "false";
}

if (isset($_GET["api"])) {
    if ($_GET["api"] == "on") {
        $_SESSION["api"] = "true";
        $_COOKIE["api"] = $_SESSION["api"];
        echo "true";
    } 
} else {
    $_SESSION["api"] = "false";
    $_COOKIE["api"] = $_SESSION["api"];
    echo "false";
}

if (isset($_GET["min"])) {
    $_SESSION["min"] = $_GET["min"];
    $_COOKIE["min"] = $_SESSION["min"];
}

if (isset($_GET["max"])) {
    $_SESSION["max"] = $_GET["max"];
    $_COOKIE["max"] = $_SESSION["max"];
}

if (isset($_GET["sort"])) {
    $_SESSION["sort"] = $_GET["sort"];
    $_COOKIE["sort"] = $_SESSION["sort"];
}

if (isset($_GET["duration"])) {
    $_SESSION["duration"] = $_GET["duration"];
    $_COOKIE["duration"] = $_SESSION["duration"];
}

echo "Heading";
header("LOCATION: ../index.php?redirect=settings");
exit();