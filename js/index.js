    let home_boton = document.getElementById('boton');
    let info_datos = document.getElementById('datos_personales');

    home_boton.addEventListener('click', mostrar);

    function mostrar() {
        location.href = 'curriculumvitae.html#datos_personales'
    } 
