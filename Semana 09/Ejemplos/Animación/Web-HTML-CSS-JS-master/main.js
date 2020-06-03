let ubicacionPrincipal = window.pageYOffset;//ubicacion en el eje de las y
//let es declarar una variable que solo dura un bloque de codigo var es global 
AOS.init();

window.addEventListener("scroll", function(){//cada que se mueve el scroll
    //console.log(this.window.pageYOffset) escribir en la consola
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;//para que salga cundo subas un poco
})

//menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
    enlacesHeader.classList.toggle("menudos")
    
})