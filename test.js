class Sala {
    //Constructores:
    constructor(nombre, horasDisponibles) {
        this.nombre = nombre;
        this.horasDisponibles = horasDisponibles;
        this.reservasPendientes = [];
        this.reservasConfirmadas = [];
        this.reservasRechazadas = [];
    }

    //Métodos:
    getHorasDisponibles() {
        let mensaje = `Las horas disponibles en la ${this.nombre} son: `;
        for (let hora in this.horasDisponibles) {
            mensaje += `${this.horasDisponibles[hora]}, `;
        }
        mensaje = mensaje.substring(0, mensaje.length - 2) + '.';
        console.log(mensaje);
        return this.horasDisponibles;
    }

    agregarSolicitudReserva(solicitud) {
        this.reservasPendientes.push(solicitud);
    }

    confirmarReserva(solicitud) {

        const solicitudEncontrada = this.reservasPendientes.find(s => s.id === solicitud.id);

        if (solicitudEncontrada) {
            //Comprobamos que la hora solicitada existe dentro de nuestras horas disponibles.
            if (this.horasDisponibles.includes(solicitudEncontrada.hora)) {
                //Buscamos en que posición esta la hora solicitada y la eliminamos de la lista.
                const index = this.horasDisponibles.indexOf(solicitudEncontrada.hora);
                this.horasDisponibles.splice(index, 1);

                this.reservasConfirmadas.push(solicitudEncontrada);
                this.reservasPendientes = this.reservasPendientes.filter(s => s.id !== solicitudEncontrada.id);
                return true;
            } else {
                console.log(`La hora ${solicitudEncontrada.hora} no está disponible para ser confirmada.`);
                return false;
            }

        } else {
            return false; //La solicitud no existe o ya ha sido confirmada
        }
    }

    rechazarReserva(solicitud) {
        const solicitudEncontrada = this.reservasPendientes.find(s => s.id === solicitud.id)
            || this.reservasConfirmadas.find(s => s.id === solicitud.id);

        if (solicitudEncontrada) {
            this.reservasRechazadas.push(solicitudEncontrada);

            //Agregamos la hora de nuevo al array de horasDisponibles ordenadamente.
            this.horasDisponibles.push(solicitudEncontrada.hora);
            this.horasDisponibles.sort((a, b) => a - b);

            this.reservasPendientes = this.reservasPendientes.filter(s => s.id !== solicitudEncontrada.id);
            this.reservasConfirmadas = this.reservasConfirmadas.filter(s => s.id !== solicitudEncontrada.id);
            return true;
        } else {
            return false;
        }
    }
}

class SolicitudReserva {
    //Constructores:
    constructor(id, solicitante, sala, hora) {
        this.id = id;
        this.solicitante = solicitante;
        this.sala = sala;
        this.hora = hora;
        this.estado = 'Pendiente'; //Estado inicial de la solicitud.
    }

    //Métodos:
    getEstado() {
        return this.estado;
    }

    confirmar() {
        this.estado = 'Confirmado';
        console.log(`¡Reserva en la ${this.sala} a las ${this.hora} confirmada!`);
    }

    rechazar() {
        this.estado = 'Rechazado';
        console.log(`Lo sentimos ${this.solicitante}, su solicitud ha sido rechazada.`);
    }
}

//Ejemplos de uso
const sala1 = new Sala('Sala A', [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
const sala2 = new Sala('Sala B', [10, 11, 12, 13, 14, 15, 16, 17]);

solicitud1 = new SolicitudReserva(1, 'Antonio', 'Sala A', 10);
solicitud2 = new SolicitudReserva(2, 'Elena', 'Sala B', 14);
solicitud3 = new SolicitudReserva(3, 'Mal', 'Sala B', 18);

sala1.agregarSolicitudReserva(solicitud1);
sala2.agregarSolicitudReserva(solicitud2);
sala2.agregarSolicitudReserva(solicitud3);

if (sala1.confirmarReserva(solicitud1)) {
    solicitud1.confirmar();
} //Existe la solicitud --> true
if (sala1.rechazarReserva(solicitud2)) {
    solicitud2.rechazar();
} //No existe esta solicitud en la primera sala --> false.
console.log("-----ESTADO SOLICITUDES-----");
console.log('Solicitud 1: ' + solicitud1.getEstado());
console.log('Solicitud 2: ' + solicitud2.getEstado());
console.log("-----Horas disponibles------");
console.log("SALA 1 (reserva 10 horas): ");
sala1.getHorasDisponibles();
console.log("SALA 2: ");
sala2.getHorasDisponibles();

console.log("Horas disponibles de sala 2 tras confirmar la reserva (14 horas):")
sala2.confirmarReserva(solicitud2);
sala2.getHorasDisponibles();
if (sala2.rechazarReserva(solicitud2)) {
    solicitud2.rechazar();
}
sala2.getHorasDisponibles();

console.log("----Intentamos confirmar una solicitud de reserva a una hora errónea.-----");
if (sala2.confirmarReserva(solicitud3)) {
    solicitud3.confirmar();
}
