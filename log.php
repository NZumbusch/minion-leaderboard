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
        <div>
            <h1 id="back">Return</h1>
        </div>
        <h1 id="log_data">
            <?php
                echo $_GET["log"];
            ?>
        </h1>
        <script src="includes/log.js"></script>
    </body>
</html>