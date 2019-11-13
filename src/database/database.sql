--script para crear la base de datos

CREATE SCHEMA tatuajes;

use tatuajes;

CREATE TABLE `tattooStudio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE `tattooArtist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `experience` int(3) DEFAULT NULL,
  `tattooStudio` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tatuadorEstudio_fk_idx` (`tattooStudio`),
  CONSTRAINT `tatuadorEstudio_fk` FOREIGN KEY (`tattooStudio`) REFERENCES `tattooStudio` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE `tattoo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `tattooArtist` int(11) DEFAULT NULL,
  `color` varchar(45) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tatuajeTatuador_fk_idx` (`tattooArtist`),
  CONSTRAINT `tatuajeTatuador_fk` FOREIGN KEY (`tattooArtist`) REFERENCES `tattooArtist` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;