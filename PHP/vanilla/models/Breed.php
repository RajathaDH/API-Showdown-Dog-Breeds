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

        // get a single breed
        public function getSingleBreed() {
            $query = 'SELECT id, breed_name, info FROM '. $this->table .' WHERE id = ?';

            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $breed = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->breedName = $breed['breed_name'];
            $this->info = $breed['info'];
        }