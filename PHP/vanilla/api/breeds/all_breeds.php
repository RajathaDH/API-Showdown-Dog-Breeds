<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Breed.php';

    $database = new Database();
    $db = $database->connect();

    $breed = new Breed($db);

    $result = $breed->getAllBreeds();
    $rowCount = $result->rowCount();

    if ($rowCount > 0) {
        $breeds = array();
        $breeds['data'] = array();

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            // $row['id']
            // $row['breed_name']

            extract($row);

            $breedInfo = array(
                'id' => $id,
                'breedName' => $breed_name,
                'info' => $info
            );

            array_push($breeds['data'], $breedInfo);
        }

        echo json_encode($breeds);
    } else {
        echo json_encode(array('message' => 'No breeds'));
    }