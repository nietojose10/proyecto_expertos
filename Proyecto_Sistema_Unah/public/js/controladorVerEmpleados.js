$(document).ready(function(){
	console.log('Carga los documentos');
	var tabla= "";

	$.ajax({
		url:'/obtener-empleados',
		dataType:'json',
		success:function(respuesta){
			console.log(respuesta);

			tabla+='<table id="table_id" class="table table-hover">'+
			            '<thead>'+
			                '<tr>'+
			                    '<th>Codigo</th>'+
			                    '<th>Nombre</th>'+
			                    '<th>Apellido</th>'+
			                    '<th>Cargo</th>'+
			                    '<th>Tipo empleado</th>'+
			                    '<th>Numero empleado</th>'+
			                    '<th>Sueldo base</th>'+
			                    '<th>Contraseña</th>'+
			                '</tr>'+

			            '</thead>'+
			            '<tbody>';
			              for(var i=0; i< respuesta.length; i++){
			              	tabla+='<tr>'+
					                '<td>'+respuesta[i].CODIGO_EMPLEADO+'</td>'+
					                '<td>'+respuesta[i].nombre+'</td>'+
					                '<td>'+respuesta[i].apellido+'</td>'+
					                '<td>'+respuesta[i].NOMBRE_CARGO+'</td>'+
					                '<td>'+respuesta[i].NOMBRE_TIPO_EMPLEADO+'</td>'+
					                '<td>'+respuesta[i].NUMERO_EMPLEADO+'</td>'+
					                '<td>'+respuesta[i].SUELDO_BASE+'</td>'+
					                '<td>'+respuesta[i].CONTRASENA+'</td>'
						            '</tr>';

			              }
			              
			              
			        tabla+='</tbody>'+
			        		'</table>';

			        $('#div-tabla-empleados').append(tabla);
			        crearDataTable();		

		}
	});
});


function crearDataTable(){
	$('#table_id').DataTable();
	console.log('si se ejecuta el datatable');
}

