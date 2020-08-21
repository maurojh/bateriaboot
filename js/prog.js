function mudou(estado) {
    var bat = document.querySelector("#bateria");
    var nivel = parseInt(estado.level);
    
    if(nivel > 75) {
        bat.className = "fas fa-battery-three-quarters";
    } else {
        bat.className = "fas fa-battery-empty";
    }
    
    document.querySelector("#saida").innerHTML = estado.level + " " + estado.isPlugged;
}

function inicio() {
    window.addEventListener("batterystatus", mudou, false);
}

window.onload = function() {
    document.addEventListener("deviceready", inicio, false);
}