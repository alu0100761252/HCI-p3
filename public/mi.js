function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ( !expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
    	return false;
	}else
		return true;
}

/*function validarForm(formulario) {
  if(formulario.nombre.value.length==0) { //comprueba que no esté vacío
    formulario.nombre.focus();
    alert('No has escrito tu nombre');
  return false; //devolvemos el foco
  }
if(formulario.email.value.length==0) { //comprueba que no esté vacío
    formulario.email.focus();s
    alert('No has escrito tu e-Mail');
   return false;
 }}*/
