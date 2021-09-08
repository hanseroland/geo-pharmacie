<?php

class Api{

  public function getPharm(){
    $vector = array();
    $coordonnees = array();
    $connexion = new Connexion();
    $db = $connexion->getConnexion();
    $sql = "SELECT * FROM pharmacie";
    $consult = $db->prepare($sql);
    $consult->execute();
    while($fil = $consult->fetch()){
      $vector[] = array(
        "id_pharmacie" => $fil['id_pharmacie'],
        "nom"=>$fil['nom'],
        "ville"=> $fil['ville'], 
        "contact"=>$fil['contact'],
        "adresse"=> $fil['adresse'],
        "coordonnees" => array(
            "latitude"=> $fil['latitude'],
            "longitude"=> $fil['longitude'],
          )

      );}

      return $vector;
  }

    public function getPlanning(){
      $vector = array();
      $connexion = new Connexion();
      $db = $connexion->getConnexion();
      $sql = "SELECT * FROM garde_calendrier";
      $consult = $db->prepare($sql);
      $consult->execute();
      while($fil = $consult->fetch()){
        $vector[] = array(
          "numCal" => $fil['n_cal'],
          "idPharmacie"=>$fil['id_pharmacie'],
          "dateDebut"=>$fil['date_debut'],
          "dateFin"=> $fil['date_fin'],
        );}

        return $vector;
    }

    public function getMedicament(){
      $vector = array();
      $connexion = new Connexion();
      $db = $connexion->getConnexion();
      $sql = "SELECT * FROM medicaments";
      $consult = $db->prepare($sql);
      $consult->execute();
      while($fil = $consult->fetch()){
        $vector[] = array(
          "idMedicament" => $fil['idMedicament'],
          "idPharmacie"=>$fil['idPharmacie'],
          "nomMedicament"=>$fil['nomMedicament'],
          "prix"=> $fil['prix'],
          "quantite"=>$fil['quantite'],
          "dosage"=>$fil['dosage'],
          "categorie"=>$fil['categorie'],
          "type"=>$fil['type'],
          "details"=>$fil['details']
        );}
  
        return $vector;
    }


    public function getGarde(){
      $vector = array();
      $connexion = new Connexion();
      $db = $connexion->getConnexion();
      $sql = "SELECT pharmacie.nom, pharmacie.contact, pharmacie.ville, garde_calendrier.n_cal, garde_calendrier.id_pharmacie
                   FROM pharmacie
                   JOIN garde_calendrier ON pharmacie.id_pharmacie = garde_calendrier.id_pharmacie
                   ORDER BY pharmacie.nom";
      $consult = $db->prepare($sql);
      $consult->execute();
      while($fil = $consult->fetch()){
        $vector[] = array(
          "nom" => $fil['nom'],
          "contact"=>$fil['contact'],
          "ville"=>$fil['ville'],
          "numCalendrier"=> $fil['n_cal'],
          "idPharmacie"=>$fil['id_pharmacie']
        );}
  
        return $vector;
    }
  

}

 ?>
