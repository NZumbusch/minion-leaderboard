<?php
session_start();

if (!isset($_POST["submit"])) {
    header("LOCATION: ../index.php");
    exit();
}

if (isset($_POST["amount"])) {
    $_SESSION["amount"] = $_POST["amount"];
}

if (isset($_POST["level"])) {
    $_SESSION["level"] = $_POST["level"];
}

if (isset($_POST["fuel"])) {
    $_SESSION["fuel"] = $_POST["fuel"];
}

if (isset($_POST["afk"])) {
    $_SESSION["afk"] = $_POST["afk"];
}

if (isset($_POST["diamondspreading"])) {
    if ($_POST["diamondspreading"] == "on") {
        $_SESSION["diamondspreading"] = "true";
    } else {
        $_SESSION["diamondspreading"] = "false";
    }
}

echo "Heading";

header("LOCATION: ../index.php");
exit();