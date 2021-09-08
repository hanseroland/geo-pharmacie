-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 08 sep. 2021 à 09:21
-- Version du serveur :  8.0.26-0ubuntu0.20.04.2
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `reactuto`
--

-- --------------------------------------------------------

--
-- Structure de la table `garde_calendrier`
--

CREATE TABLE `garde_calendrier` (
  `n_cal` int NOT NULL,
  `id_pharmacie` int NOT NULL,
  `date_debut` varchar(11) NOT NULL,
  `date_fin` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `garde_calendrier`
--

INSERT INTO `garde_calendrier` (`n_cal`, `id_pharmacie`, `date_debut`, `date_fin`) VALUES
(1, 4, '2020-11-26', '2020-11-30'),
(2, 3, '2020-12-01', '2020-12-06'),
(3, 5, '2020-12-23', '2020-12-26'),
(4, 6, '2020-12-20', '2020-12-21'),
(5, 7, '2020-12-01', '2020-12-01');

-- --------------------------------------------------------

--
-- Structure de la table `medicaments`
--

CREATE TABLE `medicaments` (
  `idMedicament` int NOT NULL,
  `idPharmacie` int NOT NULL,
  `nomMedicament` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prix` double NOT NULL,
  `quantite` int NOT NULL,
  `dosage` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `categorie` varchar(20) NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `details` varchar(100) NOT NULL,
  `date_ajout` varchar(11) NOT NULL,
  `date_vente` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `medicaments`
--

INSERT INTO `medicaments` (`idMedicament`, `idPharmacie`, `nomMedicament`, `prix`, `quantite`, `dosage`, `categorie`, `type`, `details`, `date_ajout`, `date_vente`) VALUES
(1, 1, 'Paracétamol', 1300, 20, '500mg', 'analgétique', 'comprimé', 'contre la fièvre et maux de tête', '21/11/2020', NULL),
(2, 1, 'Codeine Phosphate', 10000, 100, '30 mg', 'analgesique opioides', 'comprime', 'Ce médicament s\'utilise pour soulager la douleur légère à modérée', '21/11/2020', NULL),
(3, 1, 'ibuprofene', 4000, 50, '400 mg', 'analgesique', 'comprime', 'contre l\'inflammation', '21/11/2020', NULL),
(4, 1, 'Phenobarbital', 7000, 20, '15mg/5ml', 'antiepileptique', 'comprime', 'contre epileptique', '21/11/2020', NULL),
(5, 1, 'Mebendazole', 3000, 5, '100mg', 'anthelmenthique', 'comprime', 'Médicaments contre les helminthes intestinaux', '21/11/2020', NULL),
(6, 2, 'Paracétamol', 1500, 20, '500mg', 'analgétique', 'comprimé', 'contre la fièvre et maux de tête', '21/11/2020', NULL),
(7, 2, 'Codeine Phosphate', 15000, 100, '30mg', 'analgesique opioides', 'comprime', 'Ce médicament s\'utilise pour soulager la douleur légère à modérée', '21/11/2020', NULL),
(8, 2, 'ibuprofene', 5000, 50, '400mg', 'analgesique', 'comprime', 'contre l\'inflammation', '21/11/2020', NULL),
(9, 2, 'Phenobarbital', 6000, 20, '15mg/5ml', 'antiepileptique', 'comprime', 'contre epileptique', '21/11/2020', NULL),
(10, 2, 'Mebendazole', 3200, 5, '100mg', 'anthelmenthique', 'comprime', 'Médicaments contre les helminthes intestinaux', '21/11/2020', NULL),
(11, 3, 'Paracétamol', 1500, 10, '500mg', 'analgétique', 'comprimé', 'contre la fièvre et maux de tête', '21/11/2020', NULL),
(12, 3, 'Codeine Phosphate', 15000, 50, '30mg', 'analgesique opioides', 'comprime', 'Ce médicament s\'utilise pour soulager la douleur légère à modérée', '21/11/2020', NULL),
(13, 3, 'ibuprofene', 5000, 70, '400mg', 'analgesique', 'comprime', 'contre l\'inflammation', '21/11/2020', NULL),
(14, 3, 'Phenobarbital', 6000, 30, '15mg/5ml', 'antiepileptique', 'comprime', 'contre epileptique', '21/11/2020', NULL),
(15, 3, 'Mebendazole', 3200, 50, '100mg', 'anthelmenthique', 'comprime', 'Médicaments contre les helminthes intestinaux', '21/11/2020', NULL),
(16, 4, 'Paracétamol', 1200, 10, '500mg', 'analgétique', 'comprimé', 'contre la fièvre et maux de tête', '21/11/2020', NULL),
(17, 4, 'Codeine Phosphate', 10000, 150, '30mg', 'analgesique opioides', 'comprime', 'Ce médicament s\'utilise pour soulager la douleur légère à modérée', '21/11/2020', NULL),
(18, 4, 'ibuprofene', 3500, 40, '400mg', 'analgesique', 'comprime', 'contre l\'inflammation', '21/11/2020', NULL),
(19, 4, 'Phenobarbital', 6300, 20, '15mg/5ml', 'antiepileptique', 'comprime', 'contre epileptique', '21/11/2020', NULL),
(20, 4, 'Mebendazole', 3500, 5, '100mg', 'anthelmenthique', 'comprime', 'Médicaments contre les helminthes intestinaux', '21/11/2020', NULL),
(22, 1, 'Rifabutine', 15000, 30, '300mg', 'ANTITUBERCULEU', 'comprimé', 'utilisé contre la tuberculose', '01/12/2020', NULL),
(23, 1, 'Rifampicine', 5000, 10, '125mg/5ml ', 'ANTITUBERCULEU', 'Suspension', 'utilisé contre la tuberculose', '01-12-2020', NULL),
(24, 1, 'Digoxine', 20000, 10, '250µg', 'CARDIAQUE', 'Comprimérimé', 'Médicament de l’insuffisance cardiaque', '01-12-2020', NULL),
(25, 1, 'Acide folique', 3500, 20, '1mg', 'ANTIANEMIQUES', 'comprimé', 'contre l\'anémie', '01-12-2020', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `pharmacie`
--

CREATE TABLE `pharmacie` (
  `id_pharmacie` int NOT NULL,
  `nom` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ville` varchar(20) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `adresse` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `pharmacie`
--

INSERT INTO `pharmacie` (`id_pharmacie`, `nom`, `ville`, `contact`, `adresse`, `latitude`, `longitude`) VALUES
(1, 'Pharmacie ABDOU AZIZ SY', 'dakar', '8350035', 'Parcelles Assainies U 22 N°535', 14.734935, -17.449898),
(2, 'Pharmacie ABDOU MBENGUE', 'dakar', '8202731', 'Yoff Layène Route du Cimetière', 14.7548119, -17.4676907),
(3, 'Pharmacie ACTUEL', 'dakar', '8254432', 'Canal 4, Avenue Cheikh Anta Diop', 14.693033, -17.460537),
(4, 'Pharmacie AIME CESAIRE', 'dakar', '8254423', 'Rue Aimé Césaire, Fann Résidence', 14.692604, -17.472744),
(5, 'Pharmacie de  OUAKAM', 'Dakar', '820.15.00', 'Km 8, route de Ouakam, avenue Cheikh Anta Diop', 14.720314199123752, -17.487084985105113),
(6, 'Pharmacie arc-en-ciel', 'Dakar', '+221338207784', 'Route de la Corniche O, Dakar', 14.741232648867646, -17.509751015223717),
(7, 'Pharmacie LAHAD', 'Dakar', '+221338274053', 'Nord Liberté 6', 14.733265641902005, -17.46820149649416),
(8, 'Pharmacie Lota', 'Dakar', '+221338222556', 'rue 6 x 19 Médina', 14.682425748050564, -17.453488467932093),
(9, 'Pharmacie Dardanelles', 'Dakar', '+221338211520', 'Rue Dardanelles', 14.675795279093036, -17.44141673196725),
(10, 'Pharmacie Kuky', 'Dakar', '824.98.24', 'Sicap Sacré Cœur lot 8500', 14.716478482569883, -17.461674531076167),
(11, 'Pharmacie Martin Luther King', 'Dakar', '+221338606500', 'Voie de dégagement N', 14.733579633545208, -17.473003665605514);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `garde_calendrier`
--
ALTER TABLE `garde_calendrier`
  ADD PRIMARY KEY (`n_cal`),
  ADD KEY `id_pharmacie` (`id_pharmacie`);

--
-- Index pour la table `medicaments`
--
ALTER TABLE `medicaments`
  ADD PRIMARY KEY (`idMedicament`),
  ADD KEY `id_pharmacie` (`idPharmacie`);

--
-- Index pour la table `pharmacie`
--
ALTER TABLE `pharmacie`
  ADD PRIMARY KEY (`id_pharmacie`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `garde_calendrier`
--
ALTER TABLE `garde_calendrier`
  MODIFY `n_cal` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `medicaments`
--
ALTER TABLE `medicaments`
  MODIFY `idMedicament` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `pharmacie`
--
ALTER TABLE `pharmacie`
  MODIFY `id_pharmacie` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `garde_calendrier`
--
ALTER TABLE `garde_calendrier`
  ADD CONSTRAINT `garde_calendrier_ibfk_1` FOREIGN KEY (`id_pharmacie`) REFERENCES `pharmacie` (`id_pharmacie`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `medicaments`
--
ALTER TABLE `medicaments`
  ADD CONSTRAINT `medicaments_ibfk_1` FOREIGN KEY (`idPharmacie`) REFERENCES `pharmacie` (`id_pharmacie`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
