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

        // add a new record
        public function create() {
            $query = 'INSERT INTO ' . $this->table . ' VALUES (:id, :breedName, :info)';

            $stmt = $this->conn->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->breedName = htmlspecialchars(strip_tags($this->breedName));
            $this->info = htmlspecialchars(strip_tags($this->info));

            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':breedName', $this->breedName);
            $stmt->bindParam(':info', $this->info);

            if ($stmt->execute()) {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);

            return false;
        }

        // update an existing record
        public function update() {
            $query = 'UPDATE ' . $this->table . ' SET breed_name = :breed_name, info = :info WHERE id = :id';

            $stmt = $this->conn->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->breedName = htmlspecialchars(strip_tags($this->breedName));
            $this->info = htmlspecialchars(strip_tags($this->info));

            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':breed_name', $this->breedName);
            $stmt->bindParam(':info', $this->info);

            if ($stmt->execute()) {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);

            return false;
        }

        // delete a record
        public function delete() {
            $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

            $stmt = $this->conn->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));

            $stmt->bindParam(':id', $this->id);

            if ($stmt->execute()) {
                return true;
            }

            printf("Error: %s.\n", $stmt->error);

            return false;
        }