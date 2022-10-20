/**
 * Ejemplo Subject
 */

import { Observable, Subject } from 'rxjs';

// declaracion del Observable
const number$ = new Observable(subscriber => {
    subscriber.next(Math.round(Math.random()*100)); // asignar valor al observable 
});


// declaracion del Observable para ejemplo Subject
const numbersRandom$ = new Subject();


// declaacion del Observador
const observador1 = {
    next: (number) => {
        console.log('Observador 1: ', number);
    }
}

// declaracion del Observador
const observador2 = {
    next: (number) => {
        console.log('Observador 2:', number);
    }
}



// Llamado subscribe 
// number$.subscribe(observador1);
// number$.subscribe(observador2);

numbersRandom$.subscribe(observador1);
numbersRandom$.subscribe(observador2);

numbersRandom$.next(Math.round(Math.random()*100));
