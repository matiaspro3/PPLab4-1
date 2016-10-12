<?php
include_once '../jwt/vendor/autoload.php';
use \Firebase\JWT\JWT;
/*
$datosDelModeloPorPOST = file_get_contents('php://input'); // Metodo para traer los datos de JS.
$usuario = json_decode($datosDelModeloPorPOST);

if ($usuario->email == 'algo@mail' && $usuario->password == 'claveju66i6u7'){
	
	$ClaveDeEncritacion = 'estaEsLaClave';
	$token["usuario"] = "unusuario";
	$token["perfil"]="admin";
	$token["iat"]=time();
	$token["exp"]=time()+20;

	$jwt = JWT::encode($token, $ClaveDeEncritacion); //&genero el token con los datos que quiero
	$ArrayConToken["ElNombreDelToken"]=$jwt;//Guardo el token en un array (el nombre del token tiene que ser el mismo que en el js)!!
}
else {
 $ArrayConToken["ElNombreDelToken"]= false;
}

echo json_encode($ArrayConToken);//devuelvo el array que contiene el token
*/
$jwt = JWT::encode($token, $key);
$decoded = JWT::decode($jwt, $key, array('matiasArray'));

print_r($decoded);
$decoded_array = (array) $decoded;
JWT::$leeway = 60; // $leeway in seconds
$decoded = JWT::decode($jwt, $key, array('matiasArray'));



?>