'use strict'

const inputTarea = document.getElementById('tarea')
const lista= document.getElementById('lista-tareas')
const btnAgregar = document.getElementById('btn-agregar')


// ******* AGRERGAR TAREA *******
btnAgregar.addEventListener('click', () => {
    // tarea es el valor del input y con trim eliminamos los espacios en blanco
    const tarea = inputTarea.value.trim();


    // validar si hay texto en el input
    if (tarea === ''){
        alert('Debes escribir una tarea')
        return;
    }

    // agregamos la tarea en la lista

    // creamos el elemento div con la clase item-tarea
    const nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('item-tarea')
    nuevaTarea.innerHTML = `
        <input type="checkbox"> <span>${tarea}</span>
        <div class="btn-tarea">
            <button onclick="editarTarea(this)">✏️</button>
            <button onclick="eliminarTarea(this)">🗑️</button>
        </div>
    `;

    // agregamos la nueva tarea al final de la lista
    lista.appendChild(nuevaTarea);

    // se limpia el input
    inputTarea.value = '';

})


// ******* ELIMINAR TAREA *******
function eliminarTarea(button) {
    const tareaItem = button.closest('.item-tarea');
    lista.removeChild(tareaItem);
}


// ******* MODIIFICAR TAREA *******
function editarTarea(button) {
    const tareaItem = button.closest('.item-tarea');
    const tareaTexto = tareaItem.querySelector('span');
    const nuevoTexto = prompt('Edita la tarea:', tareaTexto.textContent);
        
    // Validar el nuevo texto
    if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
        tareaTexto.textContent = nuevoTexto.trim();
    } else {
        alert('Escribe un texto válido');
    }
}


