// Objeto que guarda la comunicación entre sistemas.
const xhr = new XMLHttpRequest();

// Open acepta 3 parametros: tipo de peticion, URL, y si va a ser asíncrono.
xhr.open("GET", "https://api.opendota.com/api/heroes", true);
// Ahora sí se abre la comunicación.
xhr.send();

xhr.onload = function() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);

        const tbody = document.getElementById("tablaHeroesBody");

        data.forEach(heroe => {
            const fila = document.createElement("tr");

            const nombreCelda = document.createElement("td");
            nombreCelda.textContent = heroe.localized_name;
            fila.appendChild(nombreCelda);

            const idCelda = document.createElement("td");
            idCelda.textContent = heroe.id;
            fila.appendChild(idCelda);

            const ataqueCelda = document.createElement("td");
            ataqueCelda.textContent = heroe.attack_type;
            fila.appendChild(ataqueCelda);

            const rolesCelda = document.createElement("td");
            rolesCelda.textContent = heroe.roles.join(", ");
            fila.appendChild(rolesCelda);

            tbody.appendChild(fila);
        });
    }
};