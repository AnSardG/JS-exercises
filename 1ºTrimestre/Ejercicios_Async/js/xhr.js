const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all?fields=name,flags", true);
xhr.send();

// xhr.onload = function () {

//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText);
//     }


// }

xhr.onload = function () {

    if (this.readyState === 4 && this.status === 200) {

        
        const respuesta = JSON.parse(this.responseText);
        const respuestaHTML = document.querySelector("#respuesta");
        let tpl = "";

        console.log(respuesta);

        respuesta.forEach(element => {
            tpl += `<img src="${element.flags["png"]}" class="img-fluid rounded-top"><hr/><p>${element.name["official"]}</p><hr/><p>${element.flags["alt"]}</p><hr/>`
        });

        respuestaHTML.innerHTML = tpl;

    }
}