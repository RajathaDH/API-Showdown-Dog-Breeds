<?php
    class Breed {
        private $conn;
        private $table = 'breed';

        // table information
        public $id;
        public $breedName;
        public $info;

        public function __construct($db) {
            $this->conn = $db;
        }

        // get all the breeds
        public function getAllBreeds() {
            $query = 'SELECT id, breed_name, info FROM '. $this->table .' ORDER BY id';

            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }