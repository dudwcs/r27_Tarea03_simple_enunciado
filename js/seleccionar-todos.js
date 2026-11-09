const checkboxTodos = document.querySelector('input[name="cb_all"]');
const checkboxes = document.querySelectorAll('input[name="ids_seleccionados[]"]');
const botonEliminar = document.querySelector("#bulk-delete-button");

function actualizarBotonEliminar() {
    if (botonEliminar) {
        botonEliminar.disabled = !Array.from(checkboxes).some((checkbox) => checkbox.checked);
    }
}

if (checkboxTodos) {
    checkboxTodos.addEventListener("click", () => {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = checkboxTodos.checked;
        });
        actualizarBotonEliminar();
    });
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", actualizarBotonEliminar);
});

actualizarBotonEliminar();
