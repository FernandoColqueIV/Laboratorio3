<?php
$conexion = new mysqli("localhost", "Roiman","Hola123456789012a.","tienda");

if($conexion){
    echo "conexion exitosa";

}else{
    echo "conexion NO existosa";
}

?>