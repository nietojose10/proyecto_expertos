/*Llenar tabla de ver estudiantes */
Select CODIGO_ALUMNO,
	 b.NOMBRE,
     b.APELLIDO,
    NUMERO_CUENTA,  
    CONTRASENA,
 	PROMEDIO
    from tbl_alumnos a
    inner join tbl_personas b
    on(a.CODIGO_ALUMNO=b.CODIGO_PERSONA);

    /* Llenar tabla de ver empleados */
    Select CODIGO_EMPLEADO, 
		b.nombre, 
        b.apellido, 
        c.NOMBRE_CARGO, 
        d.NOMBRE_TIPO_EMPLEADO, 
        NUMERO_EMPLEADO, 
        SUELDO_BASE, 
        CONTRASENA 
        from tbl_empleados A 
        INNER join tbl_personas b 
        on(a.CODIGO_EMPLEADO=b.CODIGO_PERSONA) 
        inner join tbl_cargos c 
        on(a.CODIGO_EMPLEADO=c.CODIGO_CARGO) 
        INNER join tbl_tipo_empleado d 
        on(a.CODIGO_EMPLEADO=d.CODIGO_TIPO_EMPLEADO)


        Select CODIGO_EMPLEADO, 
        b.nombre, 
        b.apellido, 
        c.NOMBRE_CARGO, 
        d.NOMBRE_TIPO_EMPLEADO, 
        NUMERO_EMPLEADO, 
        SUELDO_BASE, 
        CONTRASENA 
        from tbl_empleados A 
        left join tbl_personas b 
        on(a.CODIGO_EMPLEADO=b.CODIGO_PERSONA) 
        left join tbl_cargos c 
        on(a.CODIGO_EMPLEADO=c.CODIGO_CARGO) 
        left join tbl_tipo_empleado d 
        on(a.CODIGO_EMPLEADO=d.CODIGO_TIPO_EMPLEADO)
    /* llenar combobox de lugares de nacimiento*/
    SELECT CODIGO_LUGAR,
        NOMBRE_LUGAR
        FROM tbl_lugares
        WHERE CODIGO_TIPO_LUGAR=2

        /* LLENANDO LOS CAMPUS*/
        SELECT CODIGO_CAMPUS,
        NOMBRE_CAMPUS
        FROM tbl_campus


        INSERT INTO tbl_alumnos(CODIGO_ALUMNO, 
            NUMERO_CUENTA, 
            PROMEDIO, 
            CONTRASENA) 
        VALUES (?,?,?,?)


        /* CONSULTA PARA EL HISTORIAL */
        SELECT CODIGO__HISTORIAL,
        d.CODIGO_ALTERNO,
        D.NOMBRE_ASIGNATURA,
        PROMEDIO,
        D.CANTIDAD_UNIDADES_VALORATIVAS,
        C.CODIGO_ALTERNO,
        E.NOMBRE_PERIODO
        FROM tbl_historial A
        INNER JOIN tbl_personas B
        ON(A.CODIGO_ALUMNO=B.CODIGO_PERSONA)
        INNER JOIN tbl_seccion C
        ON(A.CODIGO_SECCION=C.CODIGO_SECCION)
        INNER JOIN tbl_asignaturas D 
        ON(C.CODIGO_ASIGNATURA=D.CODIGO_ASIGNATURA)
        INNER JOIN tbl_periodos E
        ON(A.CODIGO_PERIODO=E.CODIGO_PERIODO)
        WHERE A.CODIGO_ALUMNO=8

        /*CONSULTA DE SECCIONES */
SELECT CODIGO_SECCION,
        A.CODIGO_ASIGNATURA,
        A.CODIGO_ALTERNO,
        CANTIDAD_CUPOS,
        CODIGO_EMPLEADO_MAESTRO,
        C.NOMBRE,
        C.APELLIDO
        FROM tbl_seccion A 
        INNER JOIN tbl_asignaturas B 
        ON(A.CODIGO_ASIGNATURA=B.CODIGO_ASIGNATURA)
        INNER JOIN tbl_personas C 
        ON(A.CODIGO_EMPLEADO_MAESTRO=C.CODIGO_PERSONA)



        /*TABLA DE CLASES MATRICULADAS */
        SELECT A.CODIGO_SECCION,
        C.CODIGO_ALTERNO CODIGO_CLASE,
        C.NOMBRE_ASIGNATURA,
        C.CANTIDAD_UNIDADES_VALORATIVAS,
        B.CODIGO_ALTERNO SECCION_CODIGO,
        B.DIAS,
        D.NOMBRE_ESTADO
        FROM tbl_matricula A
        INNER JOIN TBL_SECCION B 
        ON(A.CODIGO_SECCION=B.CODIGO_SECCION)
        INNER JOIN tbl_asignaturas C 
        ON(B.CODIGO_ASIGNATURA=C.CODIGO_ASIGNATURA)
        INNER JOIN tbl_estados_matricula D
        ON(A.CODIGO_ESTADO_MATRICULA=D.CODIGO_ESTADO_MATRICULA)