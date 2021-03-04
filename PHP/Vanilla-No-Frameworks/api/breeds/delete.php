<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Breed.php';

    $database = new Database();
    $db = $database->connect();

    $breed = new Breed($db);

    // read HTTP request body data
    $data  = json_decode(file_get_contents("php://input"));

    $breed->id = $data->id;

    if ($breed->delete()) {
        echo json_encode(array('message' => 'Record was deleted successfully'));
    } else {
        echo json_encode(array('message' => 'Error deleting'));
    }