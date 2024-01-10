fetch("https://restcountries.com/v3.1/all?fields=name,flags")
.then(response => {

    return response.json();
})
.then((paises) => {
        const respuestaHTML = document.querySelector("#respuesta");
        let tpl = "";

        paises.forEach(element => {
            tpl += `<img src="${element.flags["png"]}" class="img-fluid rounded-top"><hr/><p>${element.name["official"]}</p><hr/><p>${element.flags["alt"]}</p><hr/>`
        });
        respuestaHTML.innerHTML = tpl;
})
.catch(error => {
    console.log(error);
})
