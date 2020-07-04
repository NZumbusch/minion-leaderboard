<?php session_start()?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>log</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles/log.css">
    </head>
    <body>
        <div id="btn">
            <h1 id="back">Return</h1><h1 id="clear">Clear</h1>
        </div>
        <h1 id="log_data">
            <?php
                if (isset($_GET["clear"]) and $_GET["clear"] == "true") {
                    $_SESSION["log"] = "";
                    header("LOCATION:log.php");
                }
                if (isset($_GET["log"])) {
                    if (!isset($_SESSION["log"])) {
                        $_SESSION["log"] = "";
                    }
                    $_SESSION["log"] .= $_GET["log"];
                    header("LOCATION:log.php");
                }
                echo $_SESSION["log"];
            ?>
        </h1>
        <script src="includes/log.js"></script>
    </body>
</html>