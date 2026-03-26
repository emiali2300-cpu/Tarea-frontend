let cntr = 1;

function evol(){
    if(cntr == 0){
        changetext();
    }
    else if (cntr == 1){
        
        changetext();
    }
    else if(cntr == 2){
        
        changetext();
    }
    else if(cntr == 3){
        
        changetext();
    }
    else if(cntr == 4){
        
        changetext();
    }
    else if(cntr == 5){
        changetext();
    }
}
function changetext(){
    if(cntr == 0){
        cntr++;
        document.getElementById("h1bu").innerHTML = "Informacion de JJK";
        document.getElementById("p1bu").innerHTML = "Jujutsu Kaisen es un manga publicado en 2018, creado por Gege Akutami, que pertenece a los géneros de acción, sobrenatural, horror oscuro y shonen. La historia sigue a Yuji Itadori, un estudiante con habilidades físicas extraordinarias que, tras entrar en contacto con un objeto maldito, termina convirtiéndose en el recipiente de Ryomen Sukuna. A partir de ese momento, se ve obligado a integrarse en una escuela de hechicería, donde, bajo la tutela de Satoru Gojo, enfrentará peligrosas maldiciones mientras lucha por mantener el control de su propio cuerpo y cumplir su misión.";
    }
    else if(cntr == 1){
        cntr++;
        document.getElementById("h1bu").innerHTML = "Informacion de naruto";
        document.getElementById("p1bu").innerHTML = "Naruto es un manga publicado en 1999, creado por Masashi Kishimoto, que pertenece a los géneros de acción, aventura y shonen. La historia sigue a Naruto Uzumaki, un joven ninja que sueña con convertirse en Hokage, el líder de su aldea, para ganar el respeto de todos. Desde pequeño, Naruto carga con el poder del zorro de nueve colas sellado en su interior, lo que lo hace ser rechazado por muchos. A lo largo de su camino, entrena junto a sus compañeros y su maestro, enfrentando poderosos enemigos y descubriendo el verdadero valor de la amistad, el esfuerzo y la perseverancia.";

    }
    else if(cntr == 2){
        cntr ++;
        document.getElementById("h1bu").innerHTML = "Informacion de haikyu";
        document.getElementById("p1bu").innerHTML = "Haikyuu!! es un manga publicado en 2012, creado por Haruichi Furudate, que pertenece a los géneros de deportes, comedia y shonen. La historia sigue a Shoyo Hinata, un estudiante apasionado por el voleibol que, a pesar de su baja estatura, sueña con convertirse en un gran jugador. Inspirado por un famoso atleta conocido como el “Pequeño Gigante”, Hinata se une al equipo de la preparatoria Karasuno, donde deberá trabajar junto a sus compañeros, incluyendo a su rival convertido en aliado Tobio Kageyama, para superar desafíos, mejorar sus habilidades y demostrar que la determinación puede vencer cualquier obstáculo.";
    
    }
    else if(cntr == 3){
        cntr ++;
        document.getElementById("h1bu").innerHTML = "Informacion de solo leveling";
        document.getElementById("p1bu").innerHTML = "Solo Leveling es un manhwa publicado en 2018, escrito por Chugong e ilustrado por Jang Sung-rak, que pertenece a los géneros de acción, fantasía y aventura. La historia sigue a Sung Jin-Woo, un cazador considerado el más débil de todos, quien tras sobrevivir a una peligrosa mazmorra obtiene una habilidad única que le permite subir de nivel sin límites. A partir de ese momento, comienza un increíble crecimiento de poder mientras enfrenta monstruos, secretos ocultos y amenazas cada vez más grandes, convirtiéndose poco a poco en uno de los seres más fuertes de su mundo.";
    }
    else if(cntr == 4){
        cntr++;
        document.getElementById("h1bu").innerHTML = "Informacion de chainsaw man";
        document.getElementById("p1bu").innerHTML = "Chainsaw Man es un manga publicado en 2018, creado por Tatsuki Fujimoto, que pertenece a los géneros de acción, horror y shonen oscuro. La historia sigue a Denji, un joven que vive en la pobreza extrema y trabaja cazando demonios para pagar las deudas de su padre. Tras ser traicionado y asesinado, Denji revive al fusionarse con su demonio mascota, Pochita, obteniendo la habilidad de transformarse en Chainsaw Man. A partir de entonces, se une a una organización de cazadores de demonios, donde enfrenta peligros brutales mientras persigue una vida mejor llena de sueños simples y deseos humanos.";
    }
    else if(cntr == 5){
        cntr = 1;
        document.getElementById("h1bu").innerHTML = "Informacion de JJK";
        document.getElementById("p1bu").innerHTML = "Jujutsu Kaisen es un manga publicado en 2018, creado por Gege Akutami, que pertenece a los géneros de acción, sobrenatural, horror oscuro y shonen. La historia sigue a Yuji Itadori, un estudiante con habilidades físicas extraordinarias que, tras entrar en contacto con un objeto maldito, termina convirtiéndose en el recipiente de Ryomen Sukuna. A partir de ese momento, se ve obligado a integrarse en una escuela de hechicería, donde, bajo la tutela de Satoru Gojo, enfrentará peligrosas maldiciones mientras lucha por mantener el control de su propio cuerpo y cumplir su misión.";
    }
}

function changeimage(){
    if(cntr == 1){
        document.getElementById("JJK").src = "portada.jpg";
        
    }
    else if (cntr == 2){
        document.getElementById("JJK").src = "portada2.jpg";
        
    }
    else if(cntr == 3){
        document.getElementById("JJK").src = "portada3.jpg";
        
    }
    else if(cntr == 4){
        document.getElementById("JJK").src = "portada4.jpg";
        
    }
    else if(cntr == 5){
        document.getElementById("JJK").src = "portada5.jpg";
        
    }
}

function original(){
    document.getElementById("JJK").src = "descarga.png";
}