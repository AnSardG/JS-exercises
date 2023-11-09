async function cargarUsuario() {
    try{
        const respuesta = await fetch('https://randomuser.me/api/');

        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        const usuario = datos.results[0];
        const nombre = `${usuario.name.first} ${usuario.name.last}`;
        const foto = usuario.picture.large;
        const usuarioInfo = document.getElementById('usuario-info');
        usuarioInfo.innerHTML = `
            <h2>${nombre}</h2>
            <img src="${foto}" alt="${nombre}">
        `;
    }catch(error){
        console.error(error.message);
    }
    
}

const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    cargarUsuario();
});