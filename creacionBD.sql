create database mangacafe;

use mangacafe;

create table mangas (
id_manga tinyint not null auto_increment primary key,
img varchar(100),
info varchar(1000),
titulo varchar(70)
);

create table dias(
id_dia tinyint not null auto_increment primary key,
nombre_dia varchar(10) not null
);

create table platillo(
platillo_id tinyint not null auto_increment primary key,
nombre_platillo varchar(50) not null,
id_dia tinyint not null,
CONSTRAINT fk_id_dia FOREIGN KEY (id_dia) REFERENCES dias (id_dia) ON DELETE RESTRICT ON UPDATE CASCADE
);

insert into mangas (img,info,titulo) values
("portada.jpg","Jujutsu Kaisen es un manga publicado en 2018, creado por Gege Akutami, que pertenece a los géneros de acción, sobrenatural, horror oscuro y shonen. La historia sigue a Yuji Itadori, un estudiante con habilidades físicas extraordinarias que, tras entrar en contacto con un objeto maldito, termina convirtiéndose en el recipiente de Ryomen Sukuna. A partir de ese momento, se ve obligado a integrarse en una escuela de hechicería, donde, bajo la tutela de Satoru Gojo, enfrentará peligrosas maldiciones mientras lucha por mantener el control de su propio cuerpo y cumplir su misión.","Informacion de JJK"),
("portada2.jpg","Naruto es un manga publicado en 1999, creado por Masashi Kishimoto, que pertenece a los géneros de acción, aventura y shonen. La historia sigue a Naruto Uzumaki, un joven ninja que sueña con convertirse en Hokage, el líder de su aldea, para ganar el respeto de todos. Desde pequeño, Naruto carga con el poder del zorro de nueve colas sellado en su interior, lo que lo hace ser rechazado por muchos. A lo largo de su camino, entrena junto a sus compañeros y su maestro, enfrentando poderosos enemigos y descubriendo el verdadero valor de la amistad, el esfuerzo y la perseverancia.","Informacion de naruto"),
("portada3.jpg","Haikyuu!! es un manga publicado en 2012, creado por Haruichi Furudate, que pertenece a los géneros de deportes, comedia y shonen. La historia sigue a Shoyo Hinata, un estudiante apasionado por el voleibol que, a pesar de su baja estatura, sueña con convertirse en un gran jugador. Inspirado por un famoso atleta conocido como el “Pequeño Gigante”, Hinata se une al equipo de la preparatoria Karasuno, donde deberá trabajar junto a sus compañeros, incluyendo a su rival convertido en aliado Tobio Kageyama, para superar desafíos, mejorar sus habilidades y demostrar que la determinación puede vencer cualquier obstáculo.","Informacion de haikyu"),
("portada4.jpg","Solo Leveling es un manhwa publicado en 2018, escrito por Chugong e ilustrado por Jang Sung-rak, que pertenece a los géneros de acción, fantasía y aventura. La historia sigue a Sung Jin-Woo, un cazador considerado el más débil de todos, quien tras sobrevivir a una peligrosa mazmorra obtiene una habilidad única que le permite subir de nivel sin límites. A partir de ese momento, comienza un increíble crecimiento de poder mientras enfrenta monstruos, secretos ocultos y amenazas cada vez más grandes, convirtiéndose poco a poco en uno de los seres más fuertes de su mundo.","Informacion de solo leveling"),
("portada5.jpg","Chainsaw Man es un manga publicado en 2018, creado por Tatsuki Fujimoto, que pertenece a los géneros de acción, horror y shonen oscuro. La historia sigue a Denji, un joven que vive en la pobreza extrema y trabaja cazando demonios para pagar las deudas de su padre. Tras ser traicionado y asesinado, Denji revive al fusionarse con su demonio mascota, Pochita, obteniendo la habilidad de transformarse en Chainsaw Man. A partir de entonces, se une a una organización de cazadores de demonios, donde enfrenta peligros brutales mientras persigue una vida mejor llena de sueños simples y deseos humanos.","Informacion de chainsaw man");

insert into dias (nombre_dia) values
("Lunes"),
("Martes"),
("Miercoles"),
("Jueves"),
("Viernes");

insert into platillo (nombre_platillo,id_dia) values
("Ensalada Césaar",1),
("Sopa de tomate", 1),
("Pechuga de pollo a la plancha",1),
("Fruta fresca", 1),
("Ensalada de atún",2),
("Sopa de verduras",2),
("Filete de pescado al horno",2),
("Yogurt con frutas",2),
("Ensalada de quinoa",3),
("Sopa de lentejas",3),
("Tacos de carne asada",3),
("Helado de vainilla",3),
("Ensalada de espincas",4),
("Sopa de pollo con fideos",4),
("Pizza de peperoni",4),
("Browni de chocolate",4),
("Ensalada de frutas",5),
("Sopa de mariscos",5),
("Hamburgues con papas fritas",5),
("Pastel de queso",5)