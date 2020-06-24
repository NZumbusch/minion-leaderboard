<?php 

    session_start();

    if (!isset($_SESSION["amount"])) {
        if (isset($_COOKIE["amount"])) {
            $_SESSION["amount"] = $_COOKIE["amount"];
        } else {
            $_SESSION["amount"] = 1;
        }
    }

    if (!isset($_SESSION["level"])) {
        if (isset($_COOKIE["level"])) {
            $_SESSION["level"] = $_COOKIE["level"];
        } else {
            $_SESSION["level"] = 1;
        }
    }

    if (!isset($_SESSION["fuel"])) {
        if (isset($_COOKIE["fuel"])) {
            $_SESSION["fuel"] = $_COOKIE["fuel"];
        } else {
            $_SESSION["fuel"] = 0;
        }
    }

    if (!isset($_SESSION["afk"])) {
        if (isset($_COOKIE["afk"])) {
            $_SESSION["afk"] = $_COOKIE["afk"];
        } else {
            $_SESSION["afk"] = 0;
        }
    }

    if (!isset($_SESSION["diamondspreading"])) {
        if (isset($_COOKIE["diamondspreading"])) {
            $_SESSION["diamondspreading"] = $_COOKIE["diamondspreading"];
        } else {
            $_SESSION["diamondspreading"] = "false";
        }
    }

    if (!isset($_SESSION["api"])) {
        if (isset($_COOKIE["api"])) {
            $_SESSION["api"] = $_COOKIE["api"];
        } else {
            $_SESSION["api"] = "true";
        }
    }

    if (!isset($_SESSION["min"])) {
        if (isset($_COOKIE["min"])) {
            $_SESSION["min"] = $_COOKIE["min"];
        } else {
            $_SESSION["min"] = 0;
        }
    }

    if (!isset($_SESSION["max"])) {
        if (isset($_COOKIE["max"])) {
            $_SESSION["max"] = $_COOKIE["max"];
        } else {
            $_SESSION["max"] = -1;
        }
    }

    if (!isset($_SESSION["sort"])) {
        if (isset($_COOKIE["sort"])) {
            $_SESSION["sort"] = $_COOKIE["sort"];
        } else {
            $_SESSION["max"] = "c-down";
        }
    }

    if (!isset($_SESSION["duration"])) {
        if (isset($_COOKIE["duration"])) {
            $_SESSION["duration"] = $_COOKIE["duration"];
        } else {
            $_SESSION["duration"] = 24;
        }
    }



    if (!isset($_COOKIE["amount"])) {
        setcookie('amount', $_SESSION["amount"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["amount"] != $_SESSION["amount"]) {
            setcookie('amount', $_SESSION["amount"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["level"])) {
        setcookie('level', $_SESSION["level"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["level"] != $_SESSION["level"]) {
            setcookie('level', $_SESSION["level"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["fuel"])) {
        setcookie('fuel', $_SESSION["fuel"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["fuel"] != $_SESSION["fuel"]) {
            setcookie('fuel', $_SESSION["fuel"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["afk"])) {
        setcookie('afk', $_SESSION["afk"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["afk"] != $_SESSION["afk"]) {
            setcookie('afk', $_SESSION["afk"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["diamondspreading"])) {
        setcookie('diamondspreading', $_SESSION["diamondspreading"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["diamondspreading"] != $_SESSION["diamondspreading"]) {
            setcookie('diamondspreading', $_SESSION["diamondspreading"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["api"])) {
        setcookie('api', $_SESSION["api"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["api"] != $_SESSION["api"]) {
            setcookie('api', $_SESSION["api"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["min"])) {
        setcookie('min', $_SESSION["min"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["afk"] != $_SESSION["min"]) {
            setcookie('min', $_SESSION["min"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["max"])) {
        setcookie('max', $_SESSION["max"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["max"] != $_SESSION["max"]) {
            setcookie('max', $_SESSION["max"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["sort"])) {
        setcookie('sort', $_SESSION["sort"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["sort"] != $_SESSION["sort"]) {
            setcookie('sort', $_SESSION["sort"], time() + 86400 * 30, "/");
        }
    }

    if (!isset($_COOKIE["duration"])) {
        setcookie('duration', $_SESSION["duration"], time() + 86400 * 30, "/");
    } else {
        if ($_COOKIE["duration"] != $_SESSION["duration"]) {
            setcookie('duration', $_SESSION["duration"], time() + 86400 * 30, "/");
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

        <?php
        require "message.php";
        ?>

        <?php 
        require "header.php";
        ?>

        <div id="settings">
            <a href="settings.php">
                <div class="setting"><p class="settings-text">Minion amount:</p><h3 class="settings-value" id="amount"><?php echo $_SESSION["amount"]?></h3></div>
                <div class="setting"><p class="settings-text">Minion level:</p><h3 class="settings-value" id="level"><?php echo $_SESSION["level"]?></h3></div>
                <div class="setting"><p class="settings-text">Minion fuel:</p><h3 class="settings-value" id="fuel"><?php echo $_SESSION["fuel"]?></h3><p class="settings-text">%</p></div>
                <div class="setting"><p class="settings-text">Time afk:</p><h3 class="settings-value" id="afk"><?php echo $_SESSION["afk"]?></h3><p class="settings-text">%</p></div>
                <div class="setting"><p class="settings-text">Diamondspreadings:</p><h3 class="settings-value" id="diamondspreading"><?php echo $_SESSION["diamondspreading"]?></h3></div>
                <div class="setting"><p class="settings-text">Min:</p><h3 class="settings-value" id="min"><?php echo $_SESSION["min"]?></h3></div>
                <div class="setting"><p class="settings-text">Max:</p><h3 class="settings-value" id="max"><?php echo $_SESSION["max"]?></h3></div>
                <div class="setting"><p class="settings-text">Duration:</p><h3 class="settings-value" id="duration"><?php echo $_SESSION["duration"]?></h3></div>
                <div class="setting"><p class="settings-text">Sort:</p><h3 class="settings-value" id="sort"><?php echo $_SESSION["sort"]?></h3></div>
                <div class="setting"><p class="settings-text">Api:</p><h3 class="settings-value" id="api"><?php echo $_SESSION["api"]?></h3></div>
            </a>
        </div>

        <div>
            <div class="rank"><p class="leaderboard" id="leaderboard">none</p></div>
        </div>
        
        <?php
        if ($_SESSION["api"] == "true") {
        $data = file("http://infagsuso.bplaced.net/project/data_endpoint.php");
        $data_str = implode('', $data);
        } else if ($_SESSION["api"] == "false") {
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

        <?php 
        require "footer.php";
        ?>

        <script type="text/javascript" src="includes/minion_leaderboard.inc.js"></script>
        <script type="text/javascript" src="includes/about.inc.js"></script>
    </body>
</html>