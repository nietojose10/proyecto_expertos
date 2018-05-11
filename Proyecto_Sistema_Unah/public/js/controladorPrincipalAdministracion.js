var error=0;
var aux=0;
var valido=0;
var valido2=0;
var valido3=0;
var valido4=0;
/*
if($("#crearEstudiantes").hasClass('active')){
	//console.log("entra al if de crearEstudiantes");
	$("#div-datos-personales-empleados").hide();
	$("#div-datos-personales-estudiantes").show();
	$("#div-ver-estudiantes").hide();
	$("#div-datos-estudiantes").hide();
	$("#div-datos-empleados").hide();
}else{
	$("#div-datos-personales-estudiantes").hide();
}

$("#crearEmpleados").click(function(){
	//Anchors
	$("#crearEstudiantes").removeClass("active");
	$("#verEstudiantes").removeClass("active");
	$("#crearEmpleados").addClass("active");
	//--divs
	$("#div-ver-estudiantes").hide();
	$("#div-datos-personales-estudiantes").hide();
	$("#div-datos-estudiantes").hide();
	$("#div-datos-empleados").hide();
	$("#div-datos-personales-empleados").show();


});

$("#crearEstudiantes").click(function(){
	//anchors
	$("#crearEmpleados").removeClass("active");
	$("#verEstudiantes").removeClass("active");
	$("#crearEstudiantes").addClass("active");
	//divs
	$("#div-datos-personales-estudiantes").show();
	$("#div-datos-personales-empleados").hide();
	$("#div-datos-estudiantes").hide();
	$("#div-ver-estudiantes").hide();
	$("#div-datos-empleados").hide();
});

$("#verEstudiantes").click(function(){
	//anchors
	$("#crearEstudiantes").removeClass("active");
	$("#crearEmpleados").removeClass("active");
	$("#verEmpleados").removeClass("active");
	$("#verEstudiantes").addClass("active");
	//divs
	$("#div-datos-personales-estudiantes").hide();
	$("#div-datos-personales-empleados").hide();
	$("#div-ver-estudiantes").show();
	$("#div-datos-estudiantes").hide();
	$("#div-datos-empleados").hide();
});
*/

$(document).ready(function(){
	lugarNacimiento();
	campus();
	tipoIdentificacion();
	estadoCivil();
	municipio();
});




//Validando formulario de estudiantes
$("#btn-datos-Personales").click(function(){
	//console.log("Si entra a la funcion validar datos perosnales: "+error+" y auxiliar: "+aux);
	validarDatosPersonales("#txt-nombre");
	validarDatosPersonales("#txt-apellido");
	//validarDatosPersonales("#txt-identidad");
	validarDatosPersonales("#slc-nacimiento");
	validarDatosPersonales("#txta-direccion");
	validarDatosPersonales("#slc-campus");
	validarDatosPersonales("#dt-fecha-nacimiento");
	validarDatosPersonales("#txt-telefono");
	validarDatosPersonales("#slc-tipo-identificacion");
	validarDatosPersonales("#slc-estado-civil");
	validarDatosPersonales("#slc-municipio-nacimiento");
	validarDatosPersonales("#slc-municipio-residencia");
	validarDatosPersonales("#slc-lugar-residencia");
	
	if ($("#txt-nombre").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#txt-apellido").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#txt-identidad").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#slc-nacimiento").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#txta-direccion").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#txt-correo").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#slc-campus").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#dt-fecha-nacimiento").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#txt-telefono").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#slc-tipo-identificacion").hasClass('is-valid')){
		valido+=1;
	}

	if ($("#slc-estado-civil").hasClass('is-valid')){
			valido+=1;
		}

	if ($("#slc-municipio-nacimiento").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#slc-municipio-residencia").hasClass('is-valid')){
		valido+=1;
	}
	if ($("#slc-lugar-residencia").hasClass('is-valid')){
		valido+=1;
	}
	console.log("El valor de valido es:"+valido);
	if(valido==14) {
		//alert('Se ha guardado los datos de la persona');
		guardarPersonaAlumno();
		$("#div-datos-estudiantes").show();
		$("#div-datos-personales-estudiantes").hide();
	}
	valido=0;
});


//validando formulario de Empleados

$("#btn-datos-personales-empleados").click(function(){
	//console.log("Si entra a la funcion validar datos perosnales: "+error+" y auxiliar: "+aux);
	validarDatosPersonales("#txt-nombre-emp");
	validarDatosPersonales("#txt-apellido-emp");
	//validarDatosPersonales("#txt-identidad");
	validarDatosPersonales("#slc-nacimiento-emp");
	validarDatosPersonales("#txta-direccion-emp");
	validarDatosPersonales("#slc-campus-emp");
	validarDatosPersonales("#dt-fecha-nacimiento-emp");
	validarDatosPersonales("#txt-telefono-emp");
	validarDatosPersonales("#slc-tipo-identificacion-emp");
	validarDatosPersonales("#slc-estado-civil-emp");
	validarDatosPersonales("#slc-municipio-nacimiento-emp");
	validarDatosPersonales("#slc-municipio-residencia-emp");
	validarDatosPersonales("#slc-lugar-residencia-emp");
	
	if ($("#txt-nombre-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#txt-apellido-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#txt-identidad-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#slc-nacimiento-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#txta-direccion-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#txt-correo-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#slc-campus-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#dt-fecha-nacimiento-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#txt-telefono-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#slc-tipo-identificacion-emp").hasClass('is-valid')){
		valido2+=1;
	}

	if ($("#slc-estado-civil-emp").hasClass('is-valid')){
			valido2+=1;
		}

	if ($("#slc-municipio-nacimiento-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#slc-municipio-residencia-emp").hasClass('is-valid')){
		valido2+=1;
	}
	if ($("#slc-lugar-residencia-emp").hasClass('is-valid')){
		valido2+=1;
	}
	console.log("El valor de valido2 es:"+valido2);
	if(valido2==14){
		alert('cambiar de div');
		guardarPersonaEmpleado();
		$("#div-datos-empleados").show();
		$("#div-datos-personales-empleados").hide();
	}
	valido2=0;
});

var validarDatosPersonales = function(id){

	if($(id).val() == ""){
		$(id).removeClass("is-valid");
		$(id).addClass("is-invalid");
		//console.log("Porfavor llena todos los campos");
		//error= error -1;
		//console.log("El error es:"+error);
	}
	else{
		$(id).removeClass("is-invalid");
		$(id).addClass("is-valid");
		//console.log("Si entra al if:"+error);		
		
		}
		
	
}

function validarIdentidad(etiquetaIdentidad){
	var patron = /[0-9]{13}/;
	if(patron.test(String(etiquetaIdentidad.value))){
		etiquetaIdentidad.classList.remove("is-invalid");
    	etiquetaIdentidad.classList.add("is-valid");
	}else{
    	etiquetaIdentidad.classList.remove("is-valid");
    	etiquetaIdentidad.classList.add("is-invalid");
    }
}
/*
var validarDatosPersonales = function(id){
	error+=1;
	if($(id).val() == ""){
		$(id).removeClass("is-valid");
		$(id).addClass("is-invalid");
		console.log("Porfavor llena todos los campos");
		error= error -1;
		console.log("El error es:"+error);
	}
	else if($(id).val()!=""){
		$(id).removeClass("is-invalid");
		$(id).addClass("is-valid");
		console.log("Si entra al if:"+error);		
		
		}
		
	aux=error;
	console.log("Auxiliar:"+aux);

			if (aux==13){
		//alert('cambiar de div');
		$("#div-datos-estudiantes").show();
		$("#div-datos-personales-estudiantes").hide();
	}
	
}
*/

function validarCorreo(etiquetaEmail) {
    var patron = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(patron.test(String(etiquetaEmail.value).toLowerCase())){
		etiquetaEmail.classList.remove("is-invalid");
    	etiquetaEmail.classList.add("is-valid");
    	
    	
    }else{
    	etiquetaEmail.classList.remove("is-valid");
    	etiquetaEmail.classList.add("is-invalid");
    	
   
    }
}

//funcion para validar alumnos
function validarDatosAlumnos(){
	console.log("Si entra a aqui");
	validarCampoVacio("#txt-codigo-alumno");
	validarCampoVacio("#txt-cuenta");
	validarCampoVacio("#txt-promedio");


	if ($("#txt-codigo-alumno").hasClass('is-valid')){
		valido3+=1;
	}
	if ($("#txt-cuenta").hasClass('is-valid')){
		valido3+=1;
	}
	if ($("#txt-promedio").hasClass('is-valid')){
		valido3+=1;
	}
	if ($("#txt-contrasena").hasClass('is-valid')){
		valido3+=1;
	}

	if(valido3==4){

		
		var parametros =
			"codigo="+ $("#txt-codigo-alumno").val()+"&"+
			"cuenta="+ $("#txt-cuenta").val()+"&"+
			"promedio="+ $("#txt-promedio").val()+"&"+
			"contrasena="+$("#txt-contrasena").val();
			console.log("El administrador envia los datos del alumno:"+ parametros);

			$.ajax({
				url:"/guardar-Alumnos",
				method:"POST",
				data:parametros,
				success:function(respuesta){
					console.log("El servidor envia los datos: ");
					console.log(respuesta)
					console.log("Se ha guardado exitosamente un alumno");
					$("#txt-codigo-alumno").val("");
					$("#txt-cuenta").val("");
					$("#txt-promedio").val("");
					$("#txt-contrasena").val("");

					//Maquetar la respuesta enviada del servidor
		}
	});

		}

		valido3=0;
}

//funcion para validar datos de los empleados
function validarDatosEmpleados(){
	console.log("Si entra a aqui");
	validarCampoVacio("#txt-numero-empleado");
	validarCampoVacio("#txt-sueldo-base");
	validarCampoVacio("#slc-tipo-empleado");
	validarCampoVacio("#slc-cargo");

	console.log('vaalor de valido4:'+ valido4);

	if ($("#txt-numero-empleado").hasClass('is-valid')){
		valido4+=1;
	}
	if ($("#txt-sueldo-base").hasClass('is-valid')){
		valido4+=1;
	}
	if ($("#slc-tipo-empleado").hasClass('is-valid')){
		valido4+=1;
	}
	if ($("#slc-cargo").hasClass('is-valid')){
		valido4+=1;
	}
	if ($("#txt-contrasena-emp").hasClass('is-valid')){
		valido4+=1;
	}

	if(valido4==5){
		console.log('Ha enviado los datos con exito');
		console.log(valido4);

		alert('Enviando Datos...');

		var parametros =
			"codigo="+ $("#txt-codigo-empleado").val()+"&"+
			"cuenta="+ $("#txt-numero-empleado").val()+"&"+
			"sueldoBase="+ $("#txt-sueldo-base").val()+"&"+
			"tipoEmpleado="+ $("#slc-tipo-empleado").val()+"&"+
			"cargo="+ $("#slc-cargo").val()+"&"+
			"contrasena="+$("#txt-contrasena-emp").val();
			console.log("El administrador envia los datos del empleado:"+ parametros);

			$.ajax({
				url:"/guardar-Empleados",
				method:"POST",
				data:parametros,
				success:function(respuesta){
					console.log("El servidor envia los datos: ");
					console.log(respuesta)
					console.log("Se ha guardado exitosamente un empleado");
					$("#txt-codigo-empleado").val("");
					$("#txt-numero-empleado").val("");
					$("#txt-sueldo-base").val("");
					//$("#slc-tipo-empleado").val(null);
					//$("#slc-cargo").val();
					$("#txt-contrasena-emp").val("")
					//Maquetar la respuesta enviada del servidor
		}
	});
		

		}


		valido4=0;
}


var validarCampoVacio = function(id){
	if($(id).val() == ""){
		$(id).removeClass("is-valid");
		$(id).addClass("is-invalid");
		//console.log("Porfavor llena todos los campos");
		//error= error -1;
		//console.log("El error es:"+error);
	}
	else{
		$(id).removeClass("is-invalid");
		$(id).addClass("is-valid");
		//console.log("Si entra al if:"+error);		
		
		}
}






function validarContrasena(etiqueta){
	if (etiqueta.value.length <6){
		etiqueta.classList.remove("is-valid");
		etiqueta.classList.add("is-invalid");
	}
	else{
		etiqueta.classList.remove("is-invalid");
		etiqueta.classList.add("is-valid");
	}
}





/*Llenar combobox */
function lugarNacimiento(){
	$.ajax({
	url:'/lugar-nacimiento',
	method: 'GET',
	dataType:'json',
	success:function(respuesta){
		//console.log(respuesta);
		for(var i= 0; i<respuesta.length; i++){
			//AdministracionEstudiantes
			$("#slc-nacimiento").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
			$("#slc-lugar-residencia").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
			//AdministracionEmpleados
			$("#slc-nacimiento-emp").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
			$("#slc-lugar-residencia-emp").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
			
		}
	}
	});
}

function campus(){
	$.ajax({
		url: '/campus',
		method:'GET',
		dataType: 'json',
		success:function(respuesta){
			//console.log(respuesta);
			for (var i=0; i < respuesta.length; i++){
				$("#slc-campus").append('<option value="'+respuesta[i].CODIGO_CAMPUS+'">'+respuesta[i].NOMBRE_CAMPUS+'</option>');
				//AdministracionEmpleados
				$("#slc-campus-emp").append('<option value="'+respuesta[i].CODIGO_CAMPUS+'">'+respuesta[i].NOMBRE_CAMPUS+'</option>');
			}

		}
	});
}

function tipoIdentificacion(){
	$.ajax({
		url:'/tipo-identificacion',
		method:'GET',
		dataType:'json',
		success:function(respuesta){
			//console.log(respuesta);
			for (var i=0; i < respuesta.length; i++){
				$("#slc-tipo-identificacion").append('<option value="'+respuesta[i].CODIGO_TIPO_IDENTIFICACION+'">'+respuesta[i].TIPO_IDENTIFICACION+'</option>');
				//AdministracionEmpleados
				$("#slc-tipo-identificacion-emp").append('<option value="'+respuesta[i].CODIGO_TIPO_IDENTIFICACION+'">'+respuesta[i].TIPO_IDENTIFICACION+'</option>');
			}
		}
	})
}


function estadoCivil(){
	$.ajax({
		url:'/estado-civil',
		method:'GET',
		dataType:'json',
		success:function(respuesta){
			//console.log(respuesta);
			for(var i=0; i < respuesta.length; i++){
				$("#slc-estado-civil").append('<option value="'+respuesta[i].CODIGO_ESTADO_CIVIL+'">'+respuesta[i].NOMBRE_ESTADO_CIVIL+'</option>');
				//AdministracionEmpleados
				$("#slc-estado-civil-emp").append('<option value="'+respuesta[i].CODIGO_ESTADO_CIVIL+'">'+respuesta[i].NOMBRE_ESTADO_CIVIL+'</option>');
			}
		}
	})
}

function municipio(){
	$.ajax({
		url:'/municipio-nacimiento',
		method:'GET',
		dataType:'json',
		success:function(respuesta){
			//console.log(respuesta);
			for(var i=0; i < respuesta.length; i++){
				$("#slc-municipio-nacimiento").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
				$("#slc-municipio-residencia").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
				//AdministracionEmpleados
				$("#slc-municipio-nacimiento-emp").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
				$("#slc-municipio-residencia-emp").append('<option value="'+respuesta[i].CODIGO_LUGAR+'">'+respuesta[i].NOMBRE_LUGAR+'</option>');
				
			}
		}
	})
}








function guardarPersonaAlumno(){
	var parametros=
	"codigo="+0+"&"+
	"genero="+$("input[name='rbt-genero']:checked").val()+"&"+
	"tipoIdentificacion="+$("#slc-tipo-identificacion").val()+"&"+
	"estadoCivil="+$("#slc-estado-civil").val()+"&"+
	"lugarNacimiento="+$("#slc-nacimiento").val()+"&"+
	"lugarResidencia="+$("#slc-lugar-residencia").val()+"&"+
	"municipioNacimiento="+$("#slc-municipio-nacimiento").val()+"&"+
	"municipioResidencia="+$("#slc-municipio-residencia").val()+"&"+
	"nombre="+$("#txt-nombre").val()+"&"+
	"apellido="+$("#txt-apellido").val()+"&"+
	"fechaNacimiento="+$("#dt-fecha-nacimiento").val()+"&"+
	"identificacion="+$("#txt-identidad").val()+"&"+
	"direccion="+$("#txta-direccion").val()+"&"+
	"telefono="+$("#txt-telefono").val()+"&"+
	"correo="+$("#txt-correo").val();
	console.log("El administrador envia esto:"+ parametros);

	$.ajax({
		url:"/guardar-persona-alumno",
		method:"POST",
		data:parametros,
		success:function(respuesta){
			console.log("El servidor dice:");
			console.log(respuesta);
			console.log(respuesta[0]);
			$("#txt-codigo-alumno").val(respuesta[0]);
			//$("#txt-codigo-alumno").val()=respuesta[0].CODIGO_PERSONA;
			
		}
	});
}


function guardarPersonaEmpleado(){
		var parametros=
	"codigo="+0+"&"+
	"genero="+$("input[name='rbt-genero']:checked").val()+"&"+
	"tipoIdentificacion="+$("#slc-tipo-identificacion-emp").val()+"&"+
	"estadoCivil="+$("#slc-estado-civil-emp").val()+"&"+
	"lugarNacimiento="+$("#slc-nacimiento-emp").val()+"&"+
	"lugarResidencia="+$("#slc-lugar-residencia-emp").val()+"&"+
	"municipioNacimiento="+$("#slc-municipio-nacimiento-emp").val()+"&"+
	"municipioResidencia="+$("#slc-municipio-residencia-emp").val()+"&"+
	"nombre="+$("#txt-nombre-emp").val()+"&"+
	"apellido="+$("#txt-apellido-emp").val()+"&"+
	"fechaNacimiento="+$("#dt-fecha-nacimiento-emp").val()+"&"+
	"identificacion="+$("#txt-identidad-emp").val()+"&"+
	"direccion="+$("#txta-direccion-emp").val()+"&"+
	"telefono="+$("#txt-telefono-emp").val()+"&"+
	"correo="+$("#txt-correo-emp").val();
	console.log("El administrador envia esto:"+ parametros);

	$.ajax({
		url:"/guardar-persona-empleado",
		method:"POST",
		data:parametros,
		success:function(respuesta){
			console.log("El servidor dice:");
			console.log(respuesta);
			console.log(respuesta[0]);
			$("#txt-codigo-empleado").val(respuesta[0]);
			//$("#txt-codigo-alumno").val()=respuesta[0].CODIGO_PERSONA;
			
		}
	});

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


