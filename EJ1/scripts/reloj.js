window.setInterval(()=> {    
    const reloj = document.getElementById("reloj");
    reloj.textContent = `Hora: ${formDate()}`;
}, 500);

function formDate(){
    const date = new Date();
    let fecha = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    if(date.getHours() < 10){
        fecha = `0` + fecha;
    }
    if(date.getMinutes() < 10){
        fecha = fecha.slice(0, fecha.indexOf(":") + 1) + `0` + fecha.slice(3);
    }
    if(date.getSeconds() < 10){
        fecha = fecha.slice(0, fecha.lastIndexOf(":") + 1 ) + `0` + fecha.slice(-1);
    }        
    return fecha;
}
