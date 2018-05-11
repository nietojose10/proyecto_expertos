

if($("#crearEstudiantes").hasClass('active')){
	console.log("entra al if de crearEstudiantes");
	$("#div-crear-empleados").hide();
	$("#div-crear-estudiantes").show();
	$("#div-ver-estudiantes").hide();
}else{
	$("#div-crear-estudiantes").hide();
}

$("#crearEmpleados").click(function(){
	$("#crearEstudiantes").removeClass("active");
	$("#verEstudiantes").removeClass("active");
	$("#crearEmpleados").addClass("active");
	//------
	$("#div-ver-estudiantes").hide();
	$("#div-crear-estudiantes").hide();
	$("#div-crear-empleados").show();

});

$("#crearEstudiantes").click(function(){
	$("#crearEmpleados").removeClass("active");
	$("#crearEstudiantes").addClass("active");
	$("#div-crear-estudiantes").show();
	$("#div-crear-empleados").hide();
});

$("#verEstudiantes").click(function(){
	$("#crearEstudiantes").removeClass("active");
	$("#crearEmpleados").removeClass("active");
	$("#verEmpleados").removeClass("active");
	$("#verEstudiantes").addClass("active");
	
	$("#div-crear-estudiantes").hide();
	$("#div-crear-empleados").hide();
	$("#div-ver-estudiantes").show();
});


function validar(){
	validarCampoVacio("txt-codigo-alumno");
	validarCampoVacio("txt-cuenta");
	validarCampoVacio("txt-promedio");
}


var validarCampoVacio = function(id){
	if (document.getElementById(id).value == ""){
		document.getElementById(id).classList.remove("is-valid");
		document.getElementById(id).classList.add("is-invalid");
	}
	else{
		document.getElementById(id).classList.remove("is-invalid");
		document.getElementById(id).classList.add("is-valid");

		$("#btn-ingresar-estudiante").click(function(){
			var parametros =
			"codigo_alumno="+ $("#txt-codigo-alumno").val()+"&"+
			"numero_cuenta="+ $("#txt-cuenta").val()+"&"+
			"promedio="+ $("#txt-promedio").val();
			console.log("El administrador envia los datos del alumno:"+ parametros);

			$.ajax({
				url:"/guardar-Alumnos",
				method:"POST",
				data:parametros,
				success:function(respuesta){
					console.log("El servidor envia los datos: ");
					console.log(respuesta)

					//Maquetar la respuesta enviada del servidor


		}
	})

		});
	}
}
/*
function guardarEstudiantes(){


	var parametros =
	"codigo_alumno="+ $("#txt-codigo-alumno").val()+"&"+
	"numero_cuenta="+ $("#txt-cuenta").val()+"&"+
	"promedio="+ $("#txt-promedio").val();
	console.log("El administrador envia los datos del alumno:"+ parametros);

	$.ajax({
		url:"/guardar-Alumnos",
		method:"POST",
		data:parametros,
		success:function(respuesta){
			console.log("El servidor envia los datos: ");
			console.log(respuesta)

			//Maquetar la respuesta enviada del servidor


		}
	})

}*/