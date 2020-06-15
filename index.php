<!DOCTYPE html>

<?php 
    if (!isset($_SESSION["amount"])) {
        $_SESSION["amount"] = 1;
    }

    if (!isset($_SESSION["level"])) {
        $_SESSION["level"] = 1;
    }

    if (!isset($_SESSION["fuel"])) {
        $_SESSION["fuel"] = 0;
    }

    if (!isset($_SESSION["afk"])) {
        $_SESSION["afk"] = 0;
    }

    if (!isset($_SESSION["diamondspreading"])) {
        $_SESSION["diamondspreading"] = false;
    }
?>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Minion Leaderboard</title>
        <meta name="description" content="Hypixel minion tier list.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles/indexh.css">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <?php require "header.php"?>

        <?php require "leaderboard.php"?>
        
        <?php require "footer.php"?>
        <script src=""></script>
    </body>
</html>