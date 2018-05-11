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