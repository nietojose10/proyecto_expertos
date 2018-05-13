$(document).ready(function(){
		$.ajax({
			url:"/obtener-asignaturas",
			method:"GET",
			dataType:"json",
			success:function(respuesta){
				//console.log(respuesta);
				for(var i=0; i < respuesta.length; i++){

			$("#Asignaturas_Secciones").append('<a class="list-group-item list-group-item-action" id="asignatura_'+respuesta[i].CODIGO_ASIGNATURA+'" data-toggle="list" href="#seccion_de_asignatura_'+respuesta[i].CODIGO_ASIGNATURA+'" role="tab" aria-controls="asignatura_'+respuesta[i].CODIGO_ASIGNATURA+'">'+respuesta[i].NOMBRE_ASIGNATURA+'</a>'
						           );
            	
            	
            	}


            	

			}
		});

		obtenerSecciones();
		tablaClasesMatriculadas();

});

var contenido="";
function obtenerSecciones(){
	$.ajax({
		url:"/obtener-secciones",
		method:"GET",
		dataType:"json",
		success:function(respuesta){
			//console.log(respuesta);

			for (var i=0; i< respuesta.length; i++ ){

			contenido= '<div class="tab-pane fade" id="seccion_de_asignatura_'+respuesta[i].CODIGO_ASIGNATURA+'" role="tabpanel" aria-labelledby="list-home-list">'+
		                    '<div class="list-group" id="list-tab" role="tablist">'+
		                      //'<a class="list-group-item list-group-item-action active" id="seccion_'+respuesta[i].CODIGO_SECCION+'" data-toggle="list" href="#list-home" role="tab" aria-controls="home">'+respuesta[i].CODIGO_ALTERNO+' '+respuesta[i].NOMBRE+' '+respuesta[i].APELLIDO+'</a>'+     
		                    '<button class="list-group-item list-group-item-action" id="seccion_'+respuesta[i].CODIGO_SECCION+'" data-toggle="list" type="button" onclick="matricularClase('+respuesta[i].CODIGO_SECCION+');" role="tab" aria-controls="home">'+respuesta[i].CODIGO_ALTERNO+' '+respuesta[i].NOMBRE+' '+respuesta[i].APELLIDO+'</button>'+
		                    '</div>'+
		                '</div>';

		                $("#nav-tabContent").append(contenido);

                }


		}
	})
}

function matricularClase(codigoSeccion){
	$("#txt-codigo-seccion").val(codigoSeccion);
	alert('Desea matricular esta clase?');

	var parametros= "codigoSeccion="+codigoSeccion+"&"+
					"codigoEstadoMatricula="+ 1;


			console.log(parametros);		

	$.ajax({
		url:"/matricular-clases",
		method:"POST",
		data:parametros,
		dataType:"json",
		success:function(respuesta){
			console.log(respuesta);

			alert('Clase matriculada exitosamente');
			windows.location.href="../MatricularClases.html";
				
		}
	});


}


tabla="";

function tablaClasesMatriculadas(){
	$.ajax({
	url:"/tabla-clases-matriculadas",
	method:"POST",
	dataType:"json",
	success:function(respuesta){
		console.log(respuesta);
		tabla+='<table id="table_id" class="table table-hover">'+
	            '<thead>'+
	                '<tr>'+
	                    '<th>Codigo clase</th>'+
	                    '<th>Asignatura</th>'+
	                    '<th>Unidades valorativas</th>'+
	                    '<th>Codigo seccion</th>'+
	                    '<th>Dias</th>'+
	                    '<th>Estado</th>'+
			                '</tr>'+
			            '</thead>'+
			            '<tbody>';

       			for (var i=0; i < respuesta.length; i++){
       			 tabla+='<tr><td>'+respuesta[i].CODIGO_CLASE+'</td>'+
       						'<td>'+respuesta[i].NOMBRE_ASIGNATURA+'</td>'+
       						'<td>'+respuesta[i].CANTIDAD_UNIDADES_VALORATIVAS+'</td>'+
       						'<td>'+respuesta[i].SECCION_CODIGO+'</td>'+
       						'<td>'+respuesta[i].DIAS+'</td>'+
       						'<td>'+respuesta[i].NOMBRE_ESTADO+'</tr>';
       		 
       		}

       		tabla+=	'</tbody>'+
	          '</table>';

	          $('#div-tabla-matriculadas').append(tabla);
	         
       		}

});
}




