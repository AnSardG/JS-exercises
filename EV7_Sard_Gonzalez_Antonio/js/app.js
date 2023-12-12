document.addEventListener('DOMContentLoaded', () => {
    //Clave API para acceder a la API de The Movie DB.
    const apiKey = 'YOUR_APY_KEY_HERE';

    //URL de la API para obtener las películas populares.
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

    //URL base para construir la URL de las imágenes de las películas.
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    // Se puede ajustar esto según el número de páginas que se deseen mostrar.
    const totalPages = 5; 
    let currentPage = 1;

    //Elementos DOM a manipular:
    const peliculasContainer = document.getElementById('peliculasContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    /**
     * FUNCIONES:     
     * 
     * Función asíncrona para obtener los datos de las películas populares mediante JSON.
     */    
    async function fetchMovies(page) {
        const url = `${apiUrl}?api_key=${apiKey}&page=${page}`;
        
        try {            
            const response = await fetch(url);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    //Función para mostrar las películas en el contenedor.
    function displayMovies(movies) {
        peliculasContainer.innerHTML = '';

        // Iteramos sobre la lista de películas y creamos elementos para mostrarlas.
        movies.forEach(movie => {
            const peliculaDiv = document.createElement('div');
            peliculaDiv.classList.add('pelicula');

            const titulo = document.createElement('div');
            titulo.classList.add('titulo');
            titulo.textContent = movie.title;

            const poster = document.createElement('img');
            poster.classList.add('poster');
            poster.src = `${imgBaseUrl}/${movie.poster_path}`;
            poster.alt = movie.title;

            peliculaDiv.appendChild(poster);
            peliculaDiv.appendChild(titulo);

            peliculasContainer.appendChild(peliculaDiv);
        });
    }

    // Función asíncrona para actualizar las películas en la página.
    async function updateMovies() {
        const movies = await fetchMovies(currentPage);
        displayMovies(movies);
    }

    //Función para actualizar el estado de los botones de paginación.
    function updatePaginationButtons() {
        prevBtn.disabled = currentPage === 1;        
    }

    // Event listener para el botón "Anterior".
    prevBtn.addEventListener('click', () => {
        //Verifica que no estemos en la primera página antes de retroceder.
        if (currentPage > 1) {
            currentPage--;
            //Volvemos a actualizar las películas y botones.
            updateMovies();
            updatePaginationButtons();
        }
    });

    // Event listener para el botón "Siguiente".
    nextBtn.addEventListener('click', () => {        
        //Verifica que no estemos en la última página antes de continuar.
        if (currentPage < totalPages) {
            currentPage++;
            //Volvemos a actualizar las películas y botones.
            updateMovies();
            updatePaginationButtons();
        } else {
            //En caso de que estemos en la última página, regresará a la primera.
            currentPage = 1;
            updateMovies();
            updatePaginationButtons();
        }
    });

    //Inicializamos la página con las películas y botones de paginación por defecto.
    updateMovies();
    updatePaginationButtons();
});