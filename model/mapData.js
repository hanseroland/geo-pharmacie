
const Images = [

    {image: require("../assets/banners/pharmacie-abdoul-aziz.png")},
    {image: require("../assets/banners/pharmacie-abdou-mbengue.png")},
    {image: require("../assets/banners/pharmacie-actuel.png")},
    {image: require("../assets/banners/pharmacie-aime-cesaire.png")},
    {image: require("../assets/banners/pharmacie-aeroport.png")},
    {image: require("../assets/banners/pharmacie-afia5.png")},


];

export const markers = [

 
        {

           coordinate:{
               latitude:14.734935,
               longitude: -17.449898,
          },
          title:"Pharmacie ABDOU AZIZ SY",
          contact:"835.00.35",
          adresse:"Parcelles Assainies U 22 N°535",
          image: Images[0].image,
          evaluation: 4,
          commentaires: 99,
          ville:"Dakar",
          statut:"garde"
        },
        {

          coordinate:{
               latitude:14.7548119,
               longitude:-17.4676907
          },
          title:"Pharmacie ABDOU MBENGUE",
          contact:"820.27.31",
          adresse:"	Yoff Layène Route du Cimetière",
          image: Images[1].image,
          evaluation: 5,
          commentaires: 109,
          ville:"Dakar",
          statut:"garde"
        },
         {

           coordinate:{
               latitude:14.693033,
               longitude: -17.460537
          },
           title:"Pharmacie ACTUEL",
          contact:"	825.44.32",
         adresse:"Canal 4, Avenue Cheikh Anta Diop",
         image: Images[2].image,
         evaluation: 6,
         commentaires: 100,
          ville:"Dakar",
          statut:"garde"

        },
         {

           coordinate:{
               latitude:14.692604,
               longitude: -17.472744
          },
          title:"Pharmacie AIME CESAIRE",
          contact:"	825.44.23",
          adresse:"Rue Aimé Césaire, Fann Résidence",
          image: Images[3].image,
          evaluation: 7,
          commentaires:200,
          ville:"Dakar",
          statut:"non"

        },
         {

           coordinate:{
               latitude:14.747437,
               longitude:-17.490757
          },
           title:"Pharmacie AEROPORT",
          contact:"820.01.01",
          adresse:"Aéroport Yoff",
          image: Images[4].image,
          evaluation: 8,
          commentaires:239,
          ville:"Dakar",
          statut:"non"

        },
         {
          id:5,   coordinate:{
               latitude:14.768217,
               longitude:-17.346761
          },
          title:"Pharmacie AFIA 5",
          contact:"837.95.64",
          adresse:"Route de boune",
          image: Images[5].image,
          evaluation: 9,
          commentaires: 99,
          ville:"Dakar",
          statut:"non"

        }

];

export const mapRetroStyle =
 [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ];

  export const mapStandareStyle = [
     {"elementType" : "labels.icon",
     "stylers": [
         {
             "visibility": "off"
         }
     ]


    }

  ];
