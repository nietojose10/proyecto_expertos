$(document).ready(function(){
	var tabla = "";
	$.ajax({
		url:"/historial-academico",
		method:"GET",
		dataType:"json",
		success:function(respuesta){
			console.log("El servidor responde con:");
			console.log(respuesta);

			tabla+='<table id="table_id" class="table table-bordered">'+
	            '<thead>'+
	                '<tr>'+
	                   '<th>Codigo</th>'+
			            '<th>Asignatura</th>'+
			            '<th>Promedio</th>'+
			            '<th>Unidades Valorativas</th>'+
			            '<th>Seccion</th>'+
			            '<th>Periodo</th>'+
			                '</tr>'+
			            '</thead>'+
			            '<tbody>';

			            for (var i=0; i < respuesta.length; i++){
       			 tabla+='<tr><td>'+respuesta[i].ALIAS_ASIGNATURA+'</td>'+
       						'<td>'+respuesta[i].NOMBRE_ASIGNATURA+'</td>'+
       						'<td>'+respuesta[i].PROMEDIO+'</td>'+
       						'<td>'+respuesta[i].CANTIDAD_UNIDADES_VALORATIVAS+'</td>'+
       						'<td>'+respuesta[i].CODIGO_ALTERNO+'</td>'+
       						'<td>'+respuesta[i].NOMBRE_PERIODO+'</tr>';
       		 
       		}

       		tabla+=	'</tbody>'+
	          '</table>';

	          $('#div-historial-academico').append(tabla);
	           crearDataTable();
		}
	});
});



function crearDataTable(){
	$('#table_id').DataTable();
	console.log('si se ejecuta el datatable');
}


 			