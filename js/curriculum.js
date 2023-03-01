let datos_boton = document.getElementById('datos_boton');
    let div_oculto = document.getElementById('div_oculto');

    datos_boton.addEventListener('click', toggleText);

    function toggleText() {
        div_oculto.classList.toggle('mostrar');
    }