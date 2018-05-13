$(document).ready(function(){
	$.ajax({
		url:"/nombre-alumno",
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			console.log(respuesta);
			
			$("#enlace-bienvenida").html('Bievenid@ '+respuesta[0].NOMBRE+" "+respuesta[0].APELLIDO);

		}
	});
});