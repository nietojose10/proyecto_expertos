$(document).ready( function () {
    
    console.log('Si se carga las tablas');
   var tabla = "";
  /* $('#table_id').DataTable( {
   		"processing": true,
        "serverSide": true,
       	"ajax":{
       		"url": "/obtener-usuarios",
       		"type": "GET"
       	},
       	"columns":[
       	{"data":"Codigo"},
       	{"data":"Nombre"},
       	{"data":"Apellido"},
       	{"data":"Cuenta"},
       	{"data":"Contrasena"},
       	{"data":"Promedio"},
       	{"data":"Acciones"}
       	],
       	success:function(respuesta){
       		console.log(respuesta);
       		for (var i=0; i < respuesta.length; i++){

       			$("#table_id").append('{data' +'Codigo'+respuesta[i].Codigo_alumno+
       						'Nombre:'+respuesta[i].Nombre+
       						'Apellido:'+respuesta[i].Apellido+
       						'Cuenta:'+respuesta[i].numero_cuenta+
       						'Contrasena:'+respuesta[i].Contrasena+
       						'Promedio:'+respuesta[i].promedio+'}');
       		}
       	}
    } );*/
	

		$.ajax({
			url: "/obtener-usuarios",
       		method: "GET",
       		success:function(respuesta){
       			console.log("Se tienen que recibir la respuesta del servidor");
       			console.log(respuesta);
       			tabla+='<table id="table_id" class="table table-hover">'+
	            '<thead>'+
	                '<tr>'+
	                    '<th>Codigo</th>'+
	                    '<th>Nombre</th>'+
	                    '<th>Apellido</th>'+
	                    '<th>Cuenta</th>'+
	                    '<th>Contraseña</th>'+
	                    '<th>Promedio</th>'+
			                '</tr>'+
			            '</thead>'+
			            '<tbody>';

       			for (var i=0; i < respuesta.length; i++){
       			 tabla+='<tr><td>'+respuesta[i].CODIGO_ALUMNO+'</td>'+
       						'<td>'+respuesta[i].NOMBRE+'</td>'+
       						'<td>'+respuesta[i].APELLIDO+'</td>'+
       						'<td>'+respuesta[i].NUMERO_CUENTA+'</td>'+
       						'<td>'+respuesta[i].CONTRASENA+'</td>'+
       						'<td>'+respuesta[i].PROMEDIO+'</tr>';
       		 
       		}

       		tabla+=	'</tbody>'+
	          '</table>';

	          $('#div-tabla-estudiantes').append(tabla);
	          crearDataTable();
       		}



		});


});		



function crearDataTable(){
	$('#table_id').DataTable();
	console.log('si se ejecuta el datatable');
}

               
