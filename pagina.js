const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "nombre":
          

        break;

        case "apellido":
        
        break;


        case "correo":

        break;

        case "telefono":

        break;
    }
}

function obtenerDatos(){
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var correo = document.getElementById('correo').value;
  var telefono = document.getElementById('telefono').value;

  console.log(nombre,apellido,correo,telefono);
  
}



inputs.forEach((input)=> {
        input.addEventListener('keyup',validarFormulario);
        input.addEventListener('blur',validarFormulario);
});


formulario.addEventListener('submit',(e) => {
        e.preventDefault();
        obtenerDatos();
});

