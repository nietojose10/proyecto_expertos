
$(document).ready(function(){

console.log('Si esta corriendo el controlador');

});



$("#ingresar-estudiantes").click(function(){	
	var parametros =
	"numeroCuenta=" +$("#txt-cuenta-estudiante").val()+ "&"+
	"contrasenaEstudiante=" +$("#txt-contrasena-estudiante").val();
	console.log(parametros);
	
	$.ajax({
		url:"/login",
		method:"POST",
		data:parametros,
		success:function(respuesta){
			console.log('El servidor responde:');
			console.log(respuesta);
			if(respuesta.length==0)	
			{
				var contenido;
				contenido="<span>error</span>"
				$("#mensaje").append(contenido);
			}
			if(respuesta.length==1)	
			{
		    	location.href = "../EstudiantesPrincipal.html";
			}
		
		}
	});

});