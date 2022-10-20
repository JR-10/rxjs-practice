import {fromEvent} from 'rxjs';


const onMouseMove$ = fromEvent(document, "mousemove");


// Observador
const observadorMouse = {
    next: (event) => {
        console.log('Valor event: ', event);
    }
}

onMouseMove$.subscribe(observadorMouse);

