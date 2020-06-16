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
        
        <form action="includes/change_settings.inc.php" id="settings" method="post">
            <h1>Minion Leaderboard Settings: </h1>
            <label for="amount" form="settings">Minionamount </label>
            <?php echo '<input type="number" name="amount" id="amount" min="1" max="24" value='.$_SESSION["amount"].' required>'?>
            <label for="level" form="settings">Minionlevel </label>
            <?php echo '<input type="number" name="level" id="level" min="1" max="11" value='.$_SESSION["level"].' required>'?>
            <label for="fuel" form="settings">Fuel in Percent </label>
            <?php echo '<input type="number" name="fuel" id="fuel" min="1" max="400" value='.$_SESSION["fuel"].' required>'?>
            <label for="afk" form="settings">Percent of the time you are on your island? </label>
            <?php echo '<input type="number" name="afk" id="afk" min="0" max="100" value='.$_SESSION["afk"].' required>'?>
            <label for="diamondspreading" form="settings">Do you use diamondspreadings? </label>
            <input type="checkbox" name="diamondspreading" id="diamondspreading">
            <input type="submit" name="submit" value="Submit" id="submit"> 
        </form>
    </body>
</html>