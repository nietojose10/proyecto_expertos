var express = require("express");
var app = express();
var mysql = require("mysql");
var fs = require("fs");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var conexion = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "",
	port: "3306",
	database: "db_unah"

});


//Login de los estudiantes

app.post("/login",function(peticion, respuesta){
	conexion.query("SELECT * FROM tbl_alumnos "+
					"WHERE NUMERO_CUENTA=? "+
					"and CONTRASENA=?",
				[
					peticion.body.numeroCuenta,
					peticion.body.contrasenaEstudiante,
				],
				function(err, informacion, campos){
				if (err) throw err;
				if(informacion.length == 1)
				
				respuesta.cookie("codigoAlumno",informacion[0].CODIGO_ALUMNO,{ maxAge: 900000, httpOnly: true });
				respuesta.send(informacion);
			}
	);
});

app.post("/guardar-Alumnos", function(peticion,respuesta){
	conexion.query("INSERT INTO tbl_alumnos(CODIGO_ALUMNO, "+
					"NUMERO_CUENTA, "+
					"PROMEDIO, "+
					"CONTRASENA) "+
				"VALUES (?,?,?,?)",
				[
					peticion.body.codigo,
					peticion.body.cuenta,
					peticion.body.promedio,
					peticion.body.contrasena
				], 
				function(error, data, campos){
				if (error) throw error;
				respuesta.send(data);

	});
	
});

//Guardar solo los datos de los empleados
app.post("/guardar-Empleados", function(peticion,respuesta){
	conexion.query("INSERT INTO tbl_empleados(CODIGO_EMPLEADO, "+
						"CODIGO_CARGO, "+
						"CODIGO_TIPO_EMPLEADO, "+
						"NUMERO_EMPLEADO, "+
						"SUELDO_BASE, "+
						"CONTRASENA) "+
					"VALUES (?,?,?,?,?,?)",
				[
					peticion.body.codigo,
					peticion.body.cargo,
					peticion.body.tipoEmpleado,
					peticion.body.cuenta,
					peticion.body.sueldoBase,
					peticion.body.contrasena
				], 
				function(error, data, campos){
				if (error) throw error;
				respuesta.send(data);

	});


	
});




app.get("/obtener-usuarios", function(peticion,respuesta){
	conexion.query("Select CODIGO_ALUMNO, "+
						"b.NOMBRE, "+
					    "b.APELLIDO, "+
					    "NUMERO_CUENTA, "+  
					    "CONTRASENA, "+
					 	"PROMEDIO "+
					    "from tbl_alumnos a "+
					    "inner join tbl_personas b "+
					    "on(a.CODIGO_ALUMNO=b.CODIGO_PERSONA);", 
					    function(error, informacion, campos){

					if (error) throw error;
					respuesta.send(informacion);
	});
});

app.get("/obtener-empleados", function(peticion, respuesta){
	conexion.query("Select CODIGO_EMPLEADO, "+
						"b.nombre, "+
				        "b.apellido, "+
				        "c.NOMBRE_CARGO, "+ 
				        "d.NOMBRE_TIPO_EMPLEADO, "+
				        "NUMERO_EMPLEADO, "+
				        "SUELDO_BASE, "+
				        "CONTRASENA "+
				        "from tbl_empleados A "+ 
				        "left join tbl_personas b "+
				        "on(a.CODIGO_EMPLEADO=b.CODIGO_PERSONA) "+
				        "left join tbl_cargos c "+
				        "on(a.CODIGO_EMPLEADO=c.CODIGO_CARGO) "+
				        "left join tbl_tipo_empleado d "+
				        "on(a.CODIGO_EMPLEADO=d.CODIGO_TIPO_EMPLEADO)", 
					function(error, informacion, campos){
						if (error) throw error;
						respuesta.send(informacion);

	});
});

app.get("/lugar-nacimiento", function(peticion, respuesta){
	conexion.query("SELECT CODIGO_LUGAR, "+
					"NOMBRE_LUGAR "+
			        "FROM tbl_lugares "+
			        "WHERE CODIGO_TIPO_LUGAR=2", 
					function(error, informacion, campos){
						if (error) throw error;
						respuesta.send(informacion);

	});
});

app.get("/campus",function(peticion, respuesta){
	conexion.query("  SELECT CODIGO_CAMPUS, "+
			        "NOMBRE_CAMPUS "+
			        "FROM tbl_campus",
        function(error, informacion, campos){
        	if (error) throw error;

        	respuesta.send(informacion);
	});
});

app.get("/tipo-identificacion", function(peticion, respuesta){
	conexion.query("SELECT CODIGO_TIPO_IDENTIFICACION, "+
					"TIPO_IDENTIFICACION "+
			        "FROM tbl_tipo_identificacion", 
		function(error, informacion, campus){
			if (error) throw error;
			respuesta.send(informacion);

	});
});

app.get("/estado-civil", function(peticion, respuesta){
	conexion.query("SELECT CODIGO_ESTADO_CIVIL, "+
					"NOMBRE_ESTADO_CIVIL "+
			        "FROM tbl_estados_civiles", 
		function(error, informacion, campus){
				if (error) throw error;
				respuesta.send(informacion);
	});
});

app.get("/municipio-nacimiento",function(peticion, respuesta){
	conexion.query("SELECT CODIGO_LUGAR, "+
					"NOMBRE_LUGAR "+
			        "FROM tbl_lugares "+
			        "WHERE CODIGO_TIPO_LUGAR=1", 
		function(error, informacion, campos){
			if (error) throw error;
			respuesta.send(informacion);
	});

});

app.post("/guardar-persona-alumno", function(peticion, respuesta){
	conexion.query("INSERT INTO tbl_personas(CODIGO_PERSONA, "+
						"CODIGO_GENERO, "+
						"CODIGO_TIPO_IDENTIFICACION, "+
						"CODIGO_ESTADO_CIVIL, "+
						"CODIGO_LUGAR_NACIMIENTO, "+
						"CODIGO_LUGAR_RESIDENCIA, "+
						"CODIGO_MUNICIPIO_NACIMIENTO, "+
						"CODIGO_MUNIPIO_RESIDENCIA, "+
						"NOMBRE, "+
						"APELLIDO, "+
						"FECHA_NACIMIENTO, "+
						"IDENTIFICACION, "+
						"DIRECCION, "+
						"TELEFONO, "+
						"CORREO_ELECTRONICO) "+
"VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
		[
			peticion.body.codigo,
			peticion.body.genero,
			peticion.body.tipoIdentificacion,
			peticion.body.estadoCivil,
			peticion.body.lugarNacimiento,
			peticion.body.lugarResidencia,
			peticion.body.municipioNacimiento,
			peticion.body.municipioResidencia,
			peticion.body.nombre,
			peticion.body.apellido,
			peticion.body.fechaNacimiento,
			peticion.body.identificacion,
			peticion.body.direccion,
			peticion.body.telefono,
			peticion.body.correo
		],
		function(error, resultado){
			if (resultado.affectedRows==1){
				conexion.query("SELECT CODIGO_PERSONA, "+
								"CODIGO_GENERO, "+
								"CODIGO_TIPO_IDENTIFICACION, "+
								"CODIGO_ESTADO_CIVIL, "+
								"CODIGO_LUGAR_NACIMIENTO, "+
								"CODIGO_LUGAR_RESIDENCIA, "+
								"CODIGO_MUNICIPIO_NACIMIENTO, "+
								"CODIGO_MUNIPIO_RESIDENCIA, "+
								"NOMBRE, "+
								"APELLIDO, "+
								"FECHA_NACIMIENTO, "+
								"IDENTIFICACION, "+
								"DIRECCION, "+
								"TELEFONO, "+
								"CORREO_ELECTRONICO "+
								"FROM tbl_personas",
					function(error, informacion, campos){
						respuesta.send([resultado.insertId]);
						console.log(resultado.insertId);
				});
				
			}
			
	});
});

//Guardar datos personales de empleados

app.post("/guardar-persona-empleado", function(peticion, respuesta){
	conexion.query("INSERT INTO tbl_personas(CODIGO_PERSONA, "+
						"CODIGO_GENERO, "+
						"CODIGO_TIPO_IDENTIFICACION, "+
						"CODIGO_ESTADO_CIVIL, "+
						"CODIGO_LUGAR_NACIMIENTO, "+
						"CODIGO_LUGAR_RESIDENCIA, "+
						"CODIGO_MUNICIPIO_NACIMIENTO, "+
						"CODIGO_MUNIPIO_RESIDENCIA, "+
						"NOMBRE, "+
						"APELLIDO, "+
						"FECHA_NACIMIENTO, "+
						"IDENTIFICACION, "+
						"DIRECCION, "+
						"TELEFONO, "+
						"CORREO_ELECTRONICO) "+
"VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
		[
			peticion.body.codigo,
			peticion.body.genero,
			peticion.body.tipoIdentificacion,
			peticion.body.estadoCivil,
			peticion.body.lugarNacimiento,
			peticion.body.lugarResidencia,
			peticion.body.municipioNacimiento,
			peticion.body.municipioResidencia,
			peticion.body.nombre,
			peticion.body.apellido,
			peticion.body.fechaNacimiento,
			peticion.body.identificacion,
			peticion.body.direccion,
			peticion.body.telefono,
			peticion.body.correo
		],
		function(error, resultado){
			if (resultado.affectedRows==1){
				conexion.query("SELECT CODIGO_PERSONA, "+
								"CODIGO_GENERO, "+
								"CODIGO_TIPO_IDENTIFICACION, "+
								"CODIGO_ESTADO_CIVIL, "+
								"CODIGO_LUGAR_NACIMIENTO, "+
								"CODIGO_LUGAR_RESIDENCIA, "+
								"CODIGO_MUNICIPIO_NACIMIENTO, "+
								"CODIGO_MUNIPIO_RESIDENCIA, "+
								"NOMBRE, "+
								"APELLIDO, "+
								"FECHA_NACIMIENTO, "+
								"IDENTIFICACION, "+
								"DIRECCION, "+
								"TELEFONO, "+
								"CORREO_ELECTRONICO "+
								"FROM tbl_personas",
					function(error, informacion, campos){
						respuesta.send([resultado.insertId]);
						console.log(resultado.insertId);
				});
				
			}
			
	});
});


//Enviando el nombre del alumno
app.post("/nombre-alumno", function(peticion, respuesta){
	conexion.query("SELECT CODIGO_PERSONA, "+
					"NOMBRE, "+
			        "APELLIDO "+
			        "FROM tbl_personas A "+
			        "INNER JOIN tbl_alumnos B "+
			        "ON(A.CODIGO_PERSONA=B.CODIGO_ALUMNO) "+
			        "WHERE B.CODIGO_ALUMNO=?;",
			        [
			        	peticion.cookies.codigoAlumno
			        ]
			    ,function(error, data, campos){
			    	if (error) throw error;
			    	respuesta.send(data);

			    });
			});

//Historial academico

app.get("/historial-academico", function(peticion, respuesta){
	conexion.query("SELECT CODIGO__HISTORIAL, "+
			        "d.CODIGO_ALTERNO ALIAS_ASIGNATURA, "+
			        "D.NOMBRE_ASIGNATURA, "+
			        "PROMEDIO, "+
			        "D.CANTIDAD_UNIDADES_VALORATIVAS, "+
			        "C.CODIGO_ALTERNO, "+
			        "E.NOMBRE_PERIODO "+
			        "FROM tbl_historial A "+
			        "INNER JOIN tbl_personas B "+
			        "ON(A.CODIGO_ALUMNO=B.CODIGO_PERSONA) "+
			        "INNER JOIN tbl_seccion C "+
			        "ON(A.CODIGO_SECCION=C.CODIGO_SECCION) "+
			        "INNER JOIN tbl_asignaturas D "+
			        "ON(C.CODIGO_ASIGNATURA=D.CODIGO_ASIGNATURA) "+
			        "INNER JOIN tbl_periodos E "+
			        "ON(A.CODIGO_PERIODO=E.CODIGO_PERIODO) "+
			        "WHERE A.CODIGO_ALUMNO=?",		
			        [
			        	peticion.cookies.codigoAlumno
			        ] 
		,function(error, informacion, campos){
			if (error) throw error;
			respuesta.send(informacion);

	});
});


app.get("/obtener-asignaturas", function(peticion, respuesta){
	conexion.query("SELECT CODIGO_ASIGNATURA, "+
					"NOMBRE_ASIGNATURA "+
					"FROM tbl_asignaturas "
				,function(error, data, campos){
					if (error) throw error;
					respuesta.send(data);


	});
});

app.get("/obtener-secciones", function(peticion, respuesta){
	conexion.query("SELECT CODIGO_SECCION, "+
			        "A.CODIGO_ASIGNATURA, "+
			        "A.CODIGO_ALTERNO, "+
			        "CANTIDAD_CUPOS, "+
			        "CODIGO_EMPLEADO_MAESTRO, "+
			        "C.NOMBRE, "+
			        "C.APELLIDO "+
			        "FROM tbl_seccion A "+ 
			        "INNER JOIN tbl_asignaturas B "+
			        "ON(A.CODIGO_ASIGNATURA=B.CODIGO_ASIGNATURA) "+
			        "INNER JOIN tbl_personas C "+
			        "ON(A.CODIGO_EMPLEADO_MAESTRO=C.CODIGO_PERSONA)", 
		function(error, data, campos){

			respuesta.send(data);

	});
});


app.post("/tabla-clases-matriculadas", function(peticion, respuesta){
	conexion.query("SELECT A.CODIGO_SECCION, "+
			        "C.CODIGO_ALTERNO CODIGO_CLASE, "+
			        "C.NOMBRE_ASIGNATURA, "+
			        "C.CANTIDAD_UNIDADES_VALORATIVAS, "+
			        "B.CODIGO_ALTERNO SECCION_CODIGO, "+
			        "B.DIAS, "+
			        "D.NOMBRE_ESTADO "+
			        "FROM tbl_matricula A "+
			        "INNER JOIN TBL_SECCION B "+
			        "ON(A.CODIGO_SECCION=B.CODIGO_SECCION) "+
			        "INNER JOIN tbl_asignaturas C "+
			        "ON(B.CODIGO_ASIGNATURA=C.CODIGO_ASIGNATURA) "+
			        "INNER JOIN tbl_estados_matricula D "+
			        "ON(A.CODIGO_ESTADO_MATRICULA=D.CODIGO_ESTADO_MATRICULA) "+
			        "WHERE A.CODIGO_ALUMNO=?",
			        [
			        	peticion.cookies.codigoAlumno
			        ] 
		,function(error, data, campos){
			if (error) throw error;
			respuesta.send(data);

	});
});


app.post("/matricular-clases", function(peticion, respuesta){
	conexion.query("INSERT INTO tbl_matricula(CODIGO_ALUMNO, "+
						"CODIGO_SECCION, "+
						"CODIGO_ESTADO_MATRICULA, "+
						"FECHA_MATRICULA) "+
					"VALUES (?,?,?,sysdate())",
					[
						peticion.cookies.codigoAlumno,
						peticion.body.codigoSeccion,
						peticion.body.codigoEstadoMatricula

					]
		,function(error, data, campos){
			if (error) throw error;
			respuesta.send(data);


	});
});

app.listen(3000);

