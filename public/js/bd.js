function bd(){
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var comentario = document.getElementById("comentario").value;
console.log(nombre);
              var obj = {
                nombre: nombre,
                apellido: apellidos,
                email: email,
                comentario: comentario
              };

              firebase.database().ref("Usuario/" + nombre).set(obj);
}
