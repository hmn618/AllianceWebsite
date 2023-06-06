<?php
    $host = "localhost";
    $user = "root";
    $password = "Libodawang123";
    $db = "fanxin";

    //Start to connect
    $mysqli = new mysqli($host, $user, $password, $db);
    if(mysqli_connect_error()) {
        echo "Connect error!";
        exit;
    }

    if (!$mysqli->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
        exit;
    }

?>
