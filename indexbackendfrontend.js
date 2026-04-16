let cntr = 1;
let cntr2 = 1;


function triggerFadeIn() {
    var desc = document.querySelector(".descripcion");
    desc.classList.remove("fade-in");
    void desc.offsetWidth; // fuerza reflow para reiniciar la animacion
    desc.classList.add("fade-in");
}

function changetext() {
    if(cntr ==6){
        cntr = 1;
    }
        $.post("http://127.0.0.1:3000/postmangas/"+cntr).done(function (data) {
            console.log(data);
            document.getElementById("h1bu").innerHTML = data[0].titulo;
            document.getElementById("p1bu").innerHTML = data[0].info;
            
        });
    cntr++;
    triggerFadeIn();
}

function changeimage() {
    console.log(cntr);
    if(cntr == 1){
        $.post("http://127.0.0.1:3000/postmangas/"+(cntr)).done(function (data) {
            document.getElementById("JJK").src = data[0].img;
    });
    }
    else{
        $.post("http://127.0.0.1:3000/postmangas/"+(cntr-1)).done(function (data) {
                document.getElementById("JJK").src = data[0].img;
        });
    }
}

function original() {
    document.getElementById("JJK").src = "descarga.png";
}


function triggerSlideIn() {
    var menu = document.querySelector(".menu-dia");
    menu.classList.remove("slide-in");
    void menu.offsetWidth;
    menu.classList.add("slide-in");
}

function updateDia() {
    var select = document.getElementById("dias");

    switch(document.getElementById("dias").value){
        case "1":
            document.getElementById("seleccion").innerHTML = "Menu del Lunes:";
            break;
        case "2":
            document.getElementById("seleccion").innerHTML = "Menu del Martes:";
            break;
        case "3":
            document.getElementById("seleccion").innerHTML = "Menu del Miercoles:";
            break;
        case "4":
            document.getElementById("seleccion").innerHTML = "Menu del Jueves:";
            break;
        case "5":
            document.getElementById("seleccion").innerHTML = "Menu del Viernes:";
            break;
        default:
            document.getElementById("seleccion").innerHTML = "Menu del Lunes:";
    }

    $.post("http://127.0.0.1:3000/post/" + select.value).done(function (data) {
        console.log(data);
        document.getElementById("item1").innerHTML = data[0].nombre_platillo;  
        document.getElementById("item2").innerHTML = data[1].nombre_platillo;
        document.getElementById("item3").innerHTML = data[2].nombre_platillo;
        document.getElementById("item4").innerHTML = data[3].nombre_platillo;
    });
    
    triggerSlideIn();
}