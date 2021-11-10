<?php
 /**
  *
  */
 class  Connexion
 {

   public function getConnexion(){


     $host = "localhost";
     $db = "reactuto";
     $user = "root";
     $password = "";
     try {
        $db = new PDO("mysql:host=$host;dbname=$db;", $user, $password);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;

	   }
	   catch(PDOException $e) {
	      echo "Error: " . $e->getMessage();
	     }

      }
 }


 ?>
