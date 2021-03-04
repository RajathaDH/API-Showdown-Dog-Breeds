<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Breed.php';

    $database = new Database();
    $db = $database->connect();

    $breed = new Breed($db);

    // read http request body data
    $data  = json_decode(file_get_contents("php://input"));

    $breed->id = $data->id;
    $breed->breedName = $data->breedName;
    $breed->info = $data->info;

    if ($breed->update()) {
        echo json_encode(array('message' => 'Record was updated successfully'));
    } else {
        echo json_encode(array('message' => 'Error updating'));
    }