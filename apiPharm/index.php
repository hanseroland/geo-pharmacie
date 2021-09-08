<?php
require_once('conn.php');
require_once('api.php');
require_once('entete.php');

$method = $_SERVER['REQUEST_METHOD'];

if($method == "GET"){
    $vector = array();
    $api = new Api();
    $vector = $api->getPharm();
    $json = json_encode($vector);
    echo $json;

}

 ?>
