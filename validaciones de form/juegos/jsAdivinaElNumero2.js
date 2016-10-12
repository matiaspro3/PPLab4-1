/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var app = angular.module('AdivinaNumero', []);

app.controller("controlNumero", function($scope){

	$scope.numeroIngresado="";
	$scope.cantidadIntentos="";

});

function comenzar()
{
	var numeroSecreto = Math.floor((Math.random() * 10) + 1);
	var contador = 0;
	for(;;)
	{
		contador++;
		if(parseInt($scope.numeroIngresado) == numeroSecreto)
		{
			break;
		}
	}

	$scope.cantidadIntentos = contador;

}

function verificar()
{
	
	

}