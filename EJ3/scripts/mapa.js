async function cargarMapa() {
    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbnRvbmlvc2FyZC4yMkBjYW1wdXNjYW1hcmEuZXMiLCJqdGkiOiI5Y2Y1Nzg5YS01ODIwLTRhMWItYmU3Zi02NjVjYzUyNTJiYmMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY5OTU1NDcyOSwidXNlcklkIjoiOWNmNTc4OWEtNTgyMC00YTFiLWJlN2YtNjY1Y2M1MjUyYmJjIiwicm9sZSI6IiJ9.EFPqy7EUPIQxvcr8wjUkk - lz06XTMRFf2CbSkU - Avvo";

    // URL de la API de AEMET
    const apiUrl = `https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=${apiKey}`;

    try {
        // Hacer la solicitud a la API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            // Extrae la URL de la imagen del mapa del día
            const imageUrl = data.datos;

            document.getElementById('mapa').innerHTML = `<img src="${imageUrl}" alt="Mapa del Día">`;
        } else {
            throw new Error(`Error: ${data.estado}`);
        }
    } catch (error) {
        // Maneja los errores de la solicitud        
        console.error(error.message);
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    cargarMapa();
});