# geo-pharmacie
Application mobile de géolocalisation de pharmacie  à Dakar. (React Native + Php, Google Maps , AsyncStorage)

## Configuration

Recupérer le dossier nommé apiPharm (le backend) dans src/ et héberger le sur votre server apache (lamp, wampserver ou xamp),
dans le dossier --/www/html sur ubuntu ou htdocs sous windows pour xamp.
Recupérer le fichier de la base de données dans /apiPharm/reactuto.sql exécuter le dans phpmyadmin.
Configurer l'url de connexion à l'api dans le fichier requestMethods.js http://@ip_de_votre_serveur/apiPharm

Si vous n'avez pas de simulateur android ou ios sur votre machine , télécharger l'application **Expo Go** sur AppStore ou PlayStore pour tester l'application. 
L'application demande un mot de passe par défaut pour avoir accès aux écrans, pour cela ouvrer le fichier model/User.js pour voir les logins


## Lancer l'application
Faites expo start et scanner le QR code  avec votre smartphone

## Captures d'écrans

### écran de démarrage

# ![demarrage](https://github.com/hanseroland/geo-pharmacie/blob/main/captures/pharmApp.PNG)

### Login

# ![login](https://github.com/hanseroland/geo-pharmacie/blob/main/captures/IMG_1734.PNG)

### Accueil

# ![home](https://github.com/hanseroland/geo-pharmacie/blob/main/captures/pharmApp2.PNG)

### Liste des pharmacies

# ![pharmacies](https://github.com/hanseroland/geo-pharmacie/blob/main/captures/IMG_1736.PNG)

### Liste des médicaments disponibles dans une pharmacie

# ![med](https://github.com/hanseroland/geo-pharmacie/blob/main/captures/IMG_1739.PNG)

### Menu Drawer

# ![drawer](https://github.com/hanseroland/geo-pharmacie/blob/main/captures/IMG_1739.PNG)

### Profil

# ![profil](https://github.com/hanseroland/geo-pharmacie/blob/main/captures/IMG_1737.PNG)

