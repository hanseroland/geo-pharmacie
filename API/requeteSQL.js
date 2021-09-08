/*
selectionner les pharmacies de Garde

SELECT pharmacie.nom, pharmacie.contact, pharmacie.ville, garde_calendrier.n_cal
	FROM pharmacie
    JOIN garde_calendrier ON pharmacie.id_pharmacie = garde_calendrier.id_pharmacie
    ORDER BY pharmacie.nom



*/
