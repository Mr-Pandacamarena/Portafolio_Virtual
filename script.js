let menuVisible = false;

function mostrarOcultarMenu() {
    const navElement = document.getElementById("nav");
    navElement.classList.toggle("responsive", !menuVisible);
    menuVisible = !menuVisible;
}

function seleccionar() {
    const navElement = document.getElementById("nav");
    navElement.classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("figma");
        habilidades[5].classList.add("drupal"); // Ajusta según tus clases
        habilidades[6].classList.add("premiere");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("organizacion");
        habilidades[12].classList.add("proyect");
        habilidades[13].classList.add("creativity");

    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


function enviarCorreo() {
    // Obtén los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var tema = document.getElementById('tema').value;
    var mensaje = document.getElementById('mensaje').value;

    // Envía el formulario usando AJAX
    fetch('https://formspree.io/f/mrgnbznr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            tema: tema,
            mensaje: mensaje,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta de Formspree:', data);
        
        // Muestra el popup de confirmación
        mostrarPopup();

        // Puedes realizar más acciones después del envío si es necesario
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
}

function mostrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function cerrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}




