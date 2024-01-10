async function cargarUsuario() {
    try {
        const respuesta = await fetch('https://randomuser.me/api/');

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        const usuario = datos.results[0];
        const nombre = `${usuario.name.first} ${usuario.name.last}`;
        const email = usuario.email;
        const phone = usuario.phone;
        const foto = usuario.picture.large;
        const direccion = `${usuario.location.street.name}, ${usuario.location.street.number}.`;
        const ciudad = `${usuario.location.city}, ${usuario.location.state}, ${usuario.location.country}.`;
        const usuarioInfo = document.getElementById('usuario-info');
        usuarioInfo.innerHTML = `
            <h2>${nombre}</h2>
            <h3>Correo electrónico: ${email}</h3>
            <h3>Teléfono: ${phone}</h3>
            <h4>Dirección: ${direccion}</h4>
            <h4>Ciudad: ${ciudad}</h4>
            <img src="${foto}" alt="${nombre}">
        `;
    } catch (error) {
        console.error(error.message);
    }

}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    cargarUsuario();
});