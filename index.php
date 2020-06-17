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

        <div>
            <form action="" class="search">
                <input class="text-input" type="text" name="search-entered" id="search-entered" placeholder="What minion do you want to search?">
                <input class = "search-button" type="button" name="search-button" id="search-button" value="Search">
            </form>
        </div>

        <div id="settings">
            <a href="settings.php">
                <div class="setting"><p class="settings-text">Minion amount:</p><h3 class="settings-value" id="amount"><?php echo $_SESSION["amount"]?></h3></div>
                <div class="setting"><p class="settings-text">Minion level:</p><h3 class="settings-value" id="level"><?php echo $_SESSION["level"]?></h3></div>
                <div class="setting"><p class="settings-text">Minion fuel:</p><h3 class="settings-value" id="fuel"><?php echo $_SESSION["fuel"]?></h3><p class="settings-text">%</p></div>
                <div class="setting"><p class="settings-text">Time afk:</p><h3 class="settings-value" id="afk"><?php echo $_SESSION["afk"]?></h3><p class="settings-text">%</p></div>
                <div class="setting"><p class="settings-text">Diamondspreadings:</p><h3 class="settings-value" id="diamondspreading"><?php echo $_SESSION["diamondspreading"]?></h3></div>
            </a>
        </div>

        <div>
            <div class="rank"><p class="leaderboard" id="leaderboard">none</p></div>
        </div>
        
        <?php
        if (!isset($_GET["api"])) {
        $data = file("http://infagsuso.bplaced.net/project/index.php");
        $data_str = implode('', $data);
        } else if ($_GET["api"] == "npc") {
            $data = [
                "----------",
                "WHEAT",
                1,
                "----------",
                "SEEDS",
                 0.5,
                "----------",
                "POTATO_ITEM",
                1,
                "----------",
                "CARROT_ITEM", 
                1, 
                "----------",
                "MELON",
                0.5, 
                "----------",
                "PUMPKIN", 
                4, 
                "----------",
                "RED_MUSHROOM", 
                4, 
                "----------",
                "BROWN_MUSHROOM", 
                4, 
                "----------",
                "CACTUS", 
                1, 
                "----------",
                "INK_SACK:3", 
                3,
                "----------",
                "SUGAR_CANE", 
                2, 
                "----------",
                "FEATHER", 
                3,
                "----------",
                "RAW_BEEF", 
                4, 
                "----------",
                "LEATHER", 
                3, 
                "----------",
                "PORK",
                5, 
                "----------",
                "RAW_CHICKEN", 
                4, 
                "----------",
                "ENCHANTED_EGG", 
                435, 
                "----------",
                "MUTTON", 
                5, 
                "----------",
                "RABBIT_HIDE", 
                5, 
                "----------",
                "RABBIT_FOOT", 
                5, 
                "----------",
                "RABBIT", 
                4, 
                "----------",
                "COBBLESTONE",
                1, 
                "----------",
                "COAL",
                2, 
                "----------",
                "IRON_INGOT",
                3, 
                "----------",
                "GOLD_INGOT",
                4, 
                "----------",
                "EMERALD", 
                6, 
                "----------",
                "DIAMOND",
                8, 
                "----------",
                "INK_SACK:4", 
                1, 
                "----------",
                "REDSTONE", 
                1, 
                "----------",
                "QUARTZ",
                4, 
                "----------",
                "ENDER_STONE",
                2, 
                "----------",
                "GLOWSTONE_DUST",
                2, 
                "----------",
                "OBSIDIAN",
                12, 
                "----------",
                "GRAVEL",
                3, 
                "----------",
                "FLINT",
                4, 
                "----------",
                "SAND",
                2, 
                "----------",
                "CLAY_BALL",
                3, 
                "----------",
                "ICE",
                0.5, 
                "----------",
                "ROTTEN_FLESH",
                2, 
                "----------",
                "BONE",
                2, 
                "----------",
                "SPIDER_EYE",
                3, 
                "----------",
                "STRING",
                3, 
                "----------",
                "ENDER_PEARL",
                10, 
                "----------",
                "BLAZE_ROD",
                9, 
                "----------",
                "GHAST_TEAR",
                16, 
                "----------",
                "SLIME_BALL",
                5, 
                "----------",
                "MAGMA_CREAM",
                8, 
                "----------",
                "RAW_FISH",
                6, 
                "----------",
                "RAW_FISH:1",
                10, 
                "----------",
                "RAW_FISH:2",
                20, 
                "----------",
                "PRISMARINE_SHARD",
                5, 
                "----------",
                "PRISMARINE_CRYSTALS",
                5, 
                "----------",
                "SPONGE",
                50, 
                "----------",
                "LOG",
                2, 
                "----------",
                "LOG:2",
                2, 
                "----------",
                "LOG_2",
                2, 
                "----------",
                "LOG_2:1",
                2, 
                "----------",
                "LOG:3",
                2, 
                "----------",
                "LOG:1",
                2, 
                "----------",
                "NETHER_STALK",
                3, 
                "----------",
                "SNOW_BALL",
                1];
            $data_str = implode("\n", $data);
        }
        echo "<div class='api_data'>$data_str</div>";
        ?>

        <script type="text/javascript" src="includes/minion_leaderboard.inc.js"></script>
    </body>
</html>