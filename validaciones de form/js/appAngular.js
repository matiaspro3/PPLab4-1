var app = angular.module('ModuloAngular', [])

app.controller('controlLogin', function($scope, $http) {
  $scope.usuario={};
  $scope.usuario.email= "";
  $scope.usuario.password="";

  $scope.Login=function(){
    alert("Logueado!");
  }
});


app.controller('controlAlta', function($scope, $http) {

  $scope.usuario={};
  $scope.usuario.nombre= "";
  $scope.usuario.apellido= "";
  $scope.usuario.edad= "";
  $scope.usuario.sexo= "";
  $scope.usuario.dni= "" ;
  $scope.usuario.email= "" ;
  $scope.usuario.estado="";
  $scope.usuario.fechaNac="";
  $scope.usuario.password="";
  $scope.usuario.password2="";
  $scope.usuario.lenguajeJava="";
  $scope.usuario.lenguajeCobol="";
  $scope.usuario.lenguajePascal="";

//la variable scope en este caso tiene asignada una funcion (es un delegado)
  $scope.Guardar=function(){


  	console.log("persona a guardar:");
    console.log($scope.mascota);

    $http.get('http://www.mocky.io/v2/57c8ab92120000e613e76a8e')
    .then(
    function(response){
      console.info("volvio:", response.data);
      $scope.ListadoPersonas = response.data;
    },
    function(error){
      console.info("Error:", error);
      $scope.ListadoPersonas = [];
    }
    );
  
    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
 	  .then(function(respuesta) {     	
 		     //aca se ejetuca si retorno sin errores      	
      	 console.log(respuesta.data);

    },function errorCallback(response) {     		
     		//aca se ejecuta cuando hay errores
     		console.log( response);     			
 	  });

  */

  }

  $scope.Registrarse=function(){
    alert("Registrado!");
  }

});


