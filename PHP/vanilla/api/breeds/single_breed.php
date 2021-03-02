<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Breed.php';

    $database = new Database();
    $db = $database->connect();

    $breed = new Breed($db);

    // get id from query parameters
    $breed->id = isset($_GET['id']) ? $_GET['id'] : die();

    $breed->getSingleBreed();

    $breedInfo = array(
        'id' => $breed->id,
        'breedName' => $breed->breedName,
        'info' => $breed->info
    );

    print_r(json_encode($breedInfo));