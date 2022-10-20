console.log('Curso Rxjs')

import { Observable } from 'rxjs'

// declaracion de la variable del Observable
const observableAlfa$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    // a + b;// forzar el error para mostrar mensajes
    subscriber.complete(); // al momento de marcar complete finaliza
    subscriber.next(4);
    subscriber.next(5);
})


// declaracion de la variable del Observador
const observador = {
    next: (value) => {
        console.log('valor de value => next: ', value);
    },
    complete: () => {
        console.log('Observable completado');
    },
    error: (error) => {
        console.log('valor de error => error: ', error);
        console.error(error)
    }
}

// declarar la subscripcion
observableAlfa$.subscribe(observador)
