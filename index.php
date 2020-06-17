<?php 
    session_start();

    if (!isset($_SESSION["amount"])) {
        if (isset($_COOKIE["amount"])) {
            $_SESSION["amount"] = $_COOKIE["amount"];
        }
        $_SESSION["amount"] = 1;
    }

    if (!isset($_SESSION["level"])) {
        if (isset($_COOKIE["level"])) {
            $_SESSION["level"] = $_COOKIE["level"];
        }
        $_SESSION["level"] = 1;
    }

    if (!isset($_SESSION["fuel"])) {
        if (isset($_COOKIE["fuel"])) {
            $_SESSION["fuel"] = $_COOKIE["fuel"];
        }
        $_SESSION["fuel"] = 0;
    }

    if (!isset($_SESSION["afk"])) {
        if (isset($_COOKIE["afk"])) {
            $_SESSION["afk"] = $_COOKIE["afk"];
        }
        $_SESSION["afk"] = 0;
    }

    if (!isset($_SESSION["diamondspreading"])) {
        if (isset($_COOKIE["diamondspreading"])) {
            $_SESSION["diamondspreading"] = $_COOKIE["diamondspreading"];
        }
        $_SESSION["diamondspreading"] = "false";
    }

    if (!isset($_COOKIE["amount"])) {
        setcookie('amount', $_SESSION, time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["amount"] != $_SESSION) {
            setcookie('amount', $_SESSION, time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["level"])) {
        setcookie('level', $_SESSION, time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["level"] != $_SESSION) {
            setcookie('level', $_SESSION, time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["fuel"])) {
        setcookie('fuel', $_SESSION, time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["fuel"] != $_SESSION) {
            setcookie('fuel', $_SESSION, time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["afk"])) {
        setcookie('afk', $_SESSION, time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["afk"] != $_SESSION) {
            setcookie('afk', $_SESSION, time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["diamondspreading"])) {
        setcookie('diamondspreading', $_SESSION, time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["diamondspreading"] != $_SESSION) {
            setcookie('diamondspreading', $_SESSION, time() + 86400 * 30, "/");
        }
    }
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Minion Leaderboard</title>
        <meta name="description" content="Hypixel minion tier list.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles/index.css">
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <nav class="nav">
            <div class="container">
                <a class="home" href="index.php"><img src="src/img/Hypixel.jpeg" alt="Hypixel Logo"></a>
                <p>Minion Leaderboard for Hypixel Skyblock</p>
                <a class="settings-link" href="settings.php"><img src="https://img.icons8.com/carbon-copy/100/000000/gear.png"/></a>
            </div>
        </nav>

        <div id="settings">
            <a href="settings.php">
                <div class="setting"><p class="settings-text">Minion amount:</p><h3 class="settings-value" id="amount"><?php echo $_SESSION["amount"]?></h3></div>
                <div class="setting"><p class="settings-text">Minion level:</p><h3 class="settings-value" id="level"><?php echo $_SESSION["level"]?></h3></div>
                <div class="setting"><p class="settings-text">Minion fuel:</p><h3 class="settings-value" id="fuel"><?php echo $_SESSION["fuel"]?></h3><p class="settings-text">%</p></div>
                <div class="setting"><p class="settings-text">Time afk:</p><h3 class="settings-value" id="afk"><?php echo $_SESSION["afk"]?></h3><p class="settings-text">%</p></div>
                <div class="setting"><p class="settings-text">Diamondspreadings:</p><h3 class="settings-value" id="diamondspreading"><?php echo $_SESSION["diamondspreading"]?></h3></div>
            </a>
        </div>

        <div id="leaderboard">
            <div class="rank"><p class="settings-text">First:</p><h3 class="js-input" id="first-name">none</h3><p class="settings-text"> with:</p><h3 class="js-input" id="first-value">0</h3><p class="settings-text"> coins.</p></div>
            <div class="rank"><p class="settings-text">Second:</p><h3 class="js-input" id="second-name">none</h3><p class="settings-text"> with:</p><h3 class="js-input" id="second-value">0</h3><p class="settings-text"> coins.</p></div>
            <div class="rank"><p class="settings-text">Third:</p><h3 class="js-input" id="third-name">none</h3><p class="settings-text"> with:</p><h3 class="js-input" id="third-value">0</h3><p class="settings-text"> coins.</p></div>
            <div class="rank"><p class="settings-text">Forth:</p><h3 class="js-input" id="forth-name">none</h3><p class="settings-text"> with:</p><h3 class="js-input" id="forth-value">0</h3><p class="settings-text"> coins.</p></div>
            <div class="rank"><p class="settings-text">Fifth:</p><h3 class="js-input" id="fifth-name">none</h3><p class="settings-text"> with:</p><h3 class="js-input" id="fifth-value">0</h3><p class="settings-text"> coins.</p></div>
            <div class="rank"><p class="settings-text">Sixth:</p><h3 class="js-input" id="sixth-name">none</h3><p class="settings-text"> with:</p><h3 class="js-input" id="sixth-value">0</h3><p class="settings-text"> coins.</p></div>
            <div class="rank"><p class="settings-text">Seventh:</p><h3 class="js-input" id="seventh-name">none</h3><p class="settings-text"> with:</p><h3 class="js-input" id="seventh-value">0</h3><p class="settings-text"> coins.</p></div>
        </div>
        
        <?php
        $data = file("http://infagsuso.bplaced.net/project/index.php");
        $data_str = implode('', $data);
        echo "<div class='data'>$data_str</div>";
        ?>

        <div>
            <form action="" class="search">
                <input class="text-input" type="text" name="search-entered" id="search-entered" placeholder="What minion do you want to search?">
                <input class = "search-button" type="button" name="search-button" id="search-button" value="Search">
            </form>
        </div>

        <script type="text/javascript" src="includes/minion_leaderboard.inc.js"></script>
    </body>
</html>