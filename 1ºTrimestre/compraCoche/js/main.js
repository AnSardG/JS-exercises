document.addEventListener('DOMContentLoaded', function () {
    // Base de datos de coches
    var carData = {
        'white-car': {
            image: 'img/coche_blanco.png',
            title: 'Coche Blanco',
            description: 'Coche blanco último modelo. Diesel puro. Empieza a ahorrar para pagar el combustible.',
            availability: 'Disponibles hasta fin de existencias'
        },
        'red-car': {
            image: 'img/coche_rojo.png',
            title: 'Coche Rojo',
            description: 'Modelo hibrido enchufable. Cuidado con los cortocircuitos',
            availability: 'Funciona con tres pilas AAA'
        },
        'green-car': {
            image: 'img/coche_verde.png',
            title: 'Coche Verde',
            description: 'Ecológico a más no poder. Funciona con vegetales de hoja verde',
            availability: 'Cuidado con los gases...'
        }
    };

    // Obtener el elemento select y agregar un listener para cambios
    var selectElement = document.getElementById('car-select');
    selectElement.addEventListener('change', function (event) {
        // Ocultar el mensaje de felicitación si existe
        hideCongratulations();

        var selectedValue = event.target.value;
        updateCarDetails(selectedValue);
    });


    // Función para actualizar la información del coche seleccionado
    function updateCarDetails(selectedValue) {
        var carDetailsContainer = document.getElementById('car-details');
        var selectedCar = carData[selectedValue];

        hideCongratulations();

        // Actualizar el contenido del contenedor
        carDetailsContainer.innerHTML = `
        <div class="card mb-4 p-5" style="max-width: 540px;">
            <img src="${selectedCar.image}" class="img-fluid rounded-start" alt="Car card image">
        </div>
        <div class="col-md-11">
            <div class="card-body">
                <h5 class="card-title">${selectedCar.title}</h5>
                <p class="card-text">${selectedCar.description}</p>
                <p class="card-text"><small class="text-muted">${selectedCar.availability}</small></p>
                <select class="form-select form-select-md mb-3" id="car-select">
                </select>
                <a href="#" class="btn btn-primary" id="buy-button">Comprar...</a>
            </div>
        </div>
    `;

        // Obtener el elemento select dentro del contenedor
        var selectElement = carDetailsContainer.querySelector('.form-select');

        //Dependiendo del coche elegido seleccionaremos una opción específica dentro del select.
        switch (selectedValue) {
            case 'red-car':
                selectElement.innerHTML = `
                    <option>Selecciona modelo</option>
                    <option value="white-car">Coche Blanco</option>
                    <option selected value="red-car">Coche Rojo</option>
                    <option value="green-car">Coche Verde</option>
                `;
                break;
            case 'green-car':
                selectElement.innerHTML = `
                    <option>Selecciona modelo</option>
                    <option value="white-car">Coche Blanco</option>
                    <option value="red-car">Coche Rojo</option>
                    <option selected value="green-car">Coche Verde</option>
                `;
                break;
            default:
                selectElement.innerHTML = `
                    <option>Selecciona modelo</option>
                    <option selected value="white-car">Coche Blanco</option>
                    <option value="red-car">Coche Rojo</option>
                    <option value="green-car">Coche Verde</option>
                `;
        }

        // Agregar un nuevo listener para cambios en el select
        selectElement.addEventListener('change', function (event) {
            var selectedValue = event.target.value;
            updateCarDetails(selectedValue);
        });

        // Obtener el botón de compra y agregar un listener para clics
        var buyButton = carDetailsContainer.querySelector('#buy-button');
        buyButton.addEventListener('click', function () {
            // Mostrar el recuadro de felicitación tras borrar el anterior.
            hideCongratulations();
            felicitar(selectedValue);
        });
    }

    // Función para mostrar el recuadro de felicitación, que tendrá un mensaje y color diferente según el coche elegido.
    function felicitar(selectedValue) {
        var congratsContainer = document.createElement('div');

        congratsContainer.id = 'congrats-message';

        switch (selectedValue) {
            case 'white-car':
                congratsContainer.innerHTML = 'Comprado!! Te gusta la gasoliiina, dale más gasoliiina...';
                congratsContainer.className = 'alert alert-light mt-3';
                break;
            case 'red-car':
                congratsContainer.innerHTML = 'Felicidades por la compra!! Tu compañía electrica te quiere...';
                congratsContainer.className = 'alert alert-danger mt-3';
                break;
            case 'green-car':
                congratsContainer.innerHTML = 'Comprado!! Verde que te quiero verde...';
                congratsContainer.className = 'alert alert-success mt-3';
                break;
            default:
                congratsContainer.innerHTML = '¡No ha elegido ningún coche!';
                congratsContainer.className = 'alert alert-warning mt-3';

        }

        // Agregar el recuadro al documento
        document.getElementById('car-details').appendChild(congratsContainer);
    }


    // Función para ocultar el mensaje de felicitación
    function hideCongratulations() {
        var congratsContainer = document.getElementById('congrats-message');
        if (congratsContainer) {
            congratsContainer.remove();
        }
    }

    // Inicializar la información del primer coche
    updateCarDetails(selectElement ? selectElement.value : null);

});
