async function cargarMapa() {
    const apiKey = document.getElementById("apiKey").value;

    if (!apiKey) {
        alert("Por favor, introduce tu API Key.");
        return;
    }

    // URL de la API de AEMET
    const apiUrl = `https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const imageUrl = data.datos;

            document.getElementById('mapa').innerHTML = `<img src="${imageUrl}" alt="Mapa del Día" style="transform:rotate(90deg); margin-left:200px;">`;
        } else {
            throw new Error(`Error: ${data.estado}`);
        }
    } catch (error) {
        alert("Error al cargar el mapa. Por favor, inténtalo de nuevo.");
        console.error(error.message);
    }
}

document.getElementById("btn").addEventListener("click", () => {
    cargarMapa();
});