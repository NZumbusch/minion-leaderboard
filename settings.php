<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles/settings.css">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        

        <form action="includes/change_settings.inc.php" id="settings" method="get">
            <div class="container">
                <a class="home" href="index.php"><img src="src/img/home-solid.svg" alt="home"></img></a>
                <h1>Minion Leaderboard Settings: </h1>
            </div>
            <label class="label" for="amount" form="settings">Minionamount: </label>
            <?php  echo '<input class="input" type="number" name="amount" id="amount" min="1" max="24" value='.$_SESSION["amount"].' required>'?>
            <label class="label" for="level" form="settings">Minionlevel: </label>
            <?php echo '<input class="input" type="number" name="level" id="level" min="1" max="11" value='.$_SESSION["level"].' required>'?>
            <label class="label" for="fuel" form="settings">Fuel in Percent: </label>
            <?php echo '<input class="input" type="number" name="fuel" id="fuel" min="1" max="400" value='.$_SESSION["fuel"].' required>'?>
            <label class="label" for="afk" form="settings">Percent of the time the island is loaded: </label>
            <?php echo '<input class="input" type="number" name="afk" id="afk" min="0" max="100" value='.$_SESSION["afk"].' required>'?>
            <label class="label" for="diamondspreading" form="settings">Are Diamondspreadings used: </label>
            <?php 
                if (!($_SESSION["diamondspreading"] == "false")) {
                    echo '<input class="checkbox" type="checkbox" name="diamondspreading" id="diamondspreading" checked value="on">';
                } else {
                    echo '<input class="checkbox" type="checkbox" name="diamondspreading" id="diamondspreading">';
                }
            ?>

            
            <input class="submit" type="submit" name="submit" value="Submit" id="submit"> 
        </form>
    </body>
</html>