# api-node-mysql

Api CRUD con Node y MYSQL.

Trata de una aplicación de tatuajes. Donde podemos Ver, Crear, Editar y eliminar tatuajes, tatuadores y estudios.

Un tatuaje, puede tener un tatuador. Un tatuador puede estar en un estudio o no.


###  Database

Table tattoo
```sh
id INT(11)
img VARCHAR(45)
description VARCHAR(45)
tattooArtist INT(11)
color VARCHAR(45)
```


Table tattooArtist
```sh
id INT(11)
name VARCHAR(45)
experience INT(3)
tattooStudio INT(11)
```

Table tattooStudio
```sh
id INT(11)
name VARCHAR(45)
address VARCHAR(100)
```
