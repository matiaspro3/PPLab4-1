var appAngular=angular.module('angularABM',['ui.router','angularFileUpload','satellizer','validation.match']);

appAngular.config(function($stateProvider, $urlRouterProvider,$authProvider) {
    $stateProvider
    // .State: Hace referencia a la barra de búsqueda URL. Según el valor que ingrese, hará el redireccionamiento al url definido en JSON
    
.state(
        "barraMenuAbstr",{
            url:"/barraMenuAbstr",
            abstract:true,
            templateUrl:"Htmls/barraMenuAbstr.html",
            controller:"controlAbtrac"

        }
        )

    .state(
    	"barraMenuAbstr.inicio", {
    		url:"/inicio",
    	       views:{
               "contenido":{
        	templateUrl:"Htmls/inicio.html",
    		controller:"controlInicio"
                    }
                           }

    	                       }
    	)
    
    .state(
    	"barraMenuAbstr.login",{
    		url:"/login",
    		//templateUrl:"personamenu.html"
    		views:{
    			"contenido":{
    				templateUrl:"Htmls/formLogin3.html",
    				controller:"controllogin"
    			}
    		}
    	}
    	)
     .state(
    	"barraMenuAbstr.alta",{
    		url:"/alta",
    		//templateUrl:"personaalta.html"
    		views:{
    			"contenido":{
    				templateUrl:"Htmls/formAlta2.html",
    				controller:"controlpersonaalta"
    			}
    		}
    	}
    	)
     .state(
    	"barraMenuAbstr.grilla",{
    		url:"/grilla",
    		//templateUrl:"personagrilla.html"
    		views:{
    			"contenido":{
    				templateUrl:"Htmls/personaGrilla.html",
    				controller:"controlpersonagrilla"
    			}
    		}
    	}
    	)
//

     .state(
      "barraMenuAbstr.votaciongrilla",{
        url:"/votaciongrilla",
        //templateUrl:"personagrilla.html"
        views:{
          "contenido":{
            templateUrl:"Htmls/votacionGrilla.html",
            controller:"controlvotacionGrilla"
          }
        }
      }
      )


//

     .state(
      "barraMenuAbstr.perfil",{
        url:"/perfil",
        views:{
          "contenido":{
            templateUrl:"Htmls/perfil.html",
            controller:"controlperfil"
          }
        }
          
                }
      )

     .state(
      "barraMenuAbstr.perfilAlta",{
        url:"/perfilAlta",
        views:{
          "contenido":{
            templateUrl:"Htmls/perfilAlta.html",
            controller:"controlperfilAlta"
          }
        }
           

      }
      )

.state(
      "barraMenuAbstr.votar",{
        url:"/votar",
        views:{
          "contenido":{
            templateUrl:"Htmls/votacion.html",
            controller:"controlvotar"
          }
        }
           

      }
      )












//juegos
  .state(
        "menujuegos",{
            url:"/menujuegos",
             abstract:true,
                   templateUrl:"Htmls/menujuegos.html",
                    controller:"controljuegos"
                
            
        }
        )
 
.state(
        "menujuegos.juegos",{
            url:"/juegos",
            views:{
                "contenido":{
                    templateUrl:"Htmls/juegos.html",
                    controller:"controljuego1"
                }
            }
        }
        )



 .state(
        "menujuegos.AdivinaElNumero3",{
            url:"/AdivinaElNumero3",
            views:{
                "contenido":{
                    templateUrl:"juegos/AdivinaElNumero3.html",
                    controller:"controljuego1"
                }
            }
        }
        )

 .state(
        "menujuegos.PiedarPapelTijera3",{
            url:"/PiedarPapelTijera3",
            views:{
                "contenido":{
                    templateUrl:"juegos/PiedarPapelTijera3.html",
                    controller:"controljuego1"
                }
            }
        }
        )








 $authProvider.github({
      clientId: '9059f5f5b7c5e5b33d51'

    });
/*
 $authProvider.loginUrl = 'Laboratorio_4/abmPar V1.011/php/auth.php'; //Ruta del archivo auth que esta en jwt y direcciona a PHP
  $authProvider.tokenName = 'ElNombreDelToken'; //nombre largo
  $authProvider.tokenPrefix = 'Aplicacion'; //sarasa
  $authProvider.authHeader = 'data';
*/
$authProvider.httpInterceptor = function() { return true; },
$authProvider.withCredentials = false;
$authProvider.tokenRoot = null;
$authProvider.baseUrl = '/';
$authProvider.loginUrl = '/trtr/login';  //q es??
$authProvider.signupUrl = '/icio/signup';//q es??
$authProvider.unlinkUrl = '/auth/unlink/';//q es??
$authProvider.tokenName = 'tokengithub';
$authProvider.tokenPrefix = 'satellizer';
$authProvider.tokenHeader = 'Authorization';
$authProvider.tokenType = 'Bearer';
$authProvider.storageType = 'localStorage';


$authProvider.github({
  url: 'Laboratorio_4/abmPar%20V1.011/#/barraMenuAbstr/inicio', // no cancela pero no hace
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  redirectUri: window.location.origin,
  optionalUrlParams: ['scope'],
  scope: ['user:email'],
  scopeDelimiter: ' ',
  oauthType: '2.0',
  popupOptions: { width: 1020, height: 618 }
});



   $urlRouterProvider.otherwise("/barraMenuAbstr/inicio");
 //   $urlRouterProvider.otherwise("/persona/menu");
});




// token  git 74ad6a5be9a29e41db8e4356cc6c3c00051ea139











//controladores

//
appAngular.controller("controllogin", function($scope,$rootScope,$state,$auth){
// $scope.user;
//$scope.user.pass;
// $rootScope.userActual.mail="";
//$rootScope.userActual.pass="";

$scope.authenticate = function(provider) {
      $auth.authenticate(provider)
      .then(function(response) {
        console.log(response);
          console.info('que hay', $auth.getPayload());
      
        console.log("login con github!");
        $state.go("barraMenuAbstr.inicio");     

      })
      .catch(function(response) {
        console.log("rompio github!");
      });
    };

































$scope.Login=function(){
//alert("Logueado!");
if ($rootScope.usuarios.user =="matias" && $rootScope.usuarios.pass=="1111" && $rootScope.usuarios.dni =="10000000")
    {alert("Bienvenido Administrador");
$state.go("barraMenuAbstr.inicio");}
else
{alert("No es Admin- Loguenado como Visita");
$state.go("barraMenuAbstr.inicio");     }

}



$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}




    });

//controlAbtrac

appAngular.controller("controlAbtrac", function($scope, $state,$rootScope){

$rootScope.usuarios = {
user:'',   
dni:'',
pass:''

}
$rootScope.personas = {
nombre:'',   
apellido:''

}

$scope.irLogin=function(){

    $state.go("barraMenuAbstr.login");

};
$scope.irAlta=function(){

    $state.go("barraMenuAbstr.alta");

};
$scope.irJuegos=function(){

    $state.go("menujuegos.juegos");
 
  
};
$scope.irGrilla=function(){

    $state.go("barraMenuAbstr.grilla");
 
  
};
$scope.irVotacionGrilla=function(){

    $state.go("barraMenuAbstr.votaciongrilla");
 
  
};


$scope.irPerfil=function(){
    console.log($rootScope.usuarios.email);
    if ($rootScope.usuarios.user ==""){
      console.log("if");
    $state.go("barraMenuAbstr.perfilAlta");}
    else{ console.log("else");
      $state.go("barraMenuAbstr.perfil");
 }  
  
};
$scope.irVotar=function(){

    $state.go("barraMenuAbstr.votar");
 
  
};





});








//
appAngular.controller("controlInicio", function($scope){

	});
//
appAngular.controller("controlvotar", function($scope){

$scope.Alta=function(){

$state.go("barraMenuAbstr.inicio");     


}

$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}
  });


appAngular.controller("controlperfilAlta", function($scope,FileUploader,$rootScope,$state){
    
//$scope.usuarios.login = "Registrese";  


  $scope.SubidorDeArchivos = new FileUploader({url:'servidor/archivos.php'});
  $scope.SubidorDeArchivos.onSuccessItem=function(item,response,status,headers)
  {
    
    
    
  }



$scope.Login=function(){
  //  alert("Logueado!");
  console.info("email:", $rootScope.usuarios.user);
  console.info("pass:", $rootScope.usuarios.pass);
  console.info("pass:", $rootScope.usuarios.dni);


$state.go("barraMenuAbstr.inicio");   

//if($rootScope.usuarios.email ||$rootScope.usuarios.pass.lenght!  || $rootScope.usuarios.pass2)
 /*  if (
    $rootScope.usuarios.pass.lenght!=0)
   {console.info("email leng:", $rootScope.usuarios.pass.lenght);}

   //$state.go("barraMenuAbstr.inicio");    } 

else {
  console.info("email else:", $rootScope.usuarios.email);
  console.info("pass else:", $rootScope.usuarios.pass);

  console.info("pass2:", $rootScope.usuarios.pass2);

  //$scope.usuarios.login = "Debe registrarse para continuar"; }

}
}
*/}
$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}

  //  
  });

appAngular.controller("controlperfil", function($scope,FileUploader){
    


  $scope.SubidorDeArchivos = new FileUploader({url:'servidor/archivos.php'});
  $scope.SubidorDeArchivos.onSuccessItem=function(item,response,status,headers)
  {
    
    
    
  }


  $scope.Guardar=function(){


    console.log("persona a guardar:");
    console.log($scope.persona);
    $state.go('persona.slider', "algo");
}


  //  
  });
//
appAngular.controller("controljuegos", function($scope, $state,$rootScope){


 console.info("email", $rootScope.usuarios.email);
  console.info("pass", $rootScope.usuarios.pass);
    $scope.irAEN=function(){

    $state.go("menujuegos.AdivinaElNumero3");

};



    $scope.irPPT=function(){

    $state.go("menujuegos.PiedarPapelTijera3");
}

$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}


    });

//
appAngular.controller("controljuego1", function($scope,$rootScope){
//console.info("email", $rootScope.userActual.mail);
 //  console.info("pass", $rootScope.userActual.pass);
    });













//
appAngular.controller("controlpersonamenu", function($scope, $state){

$scope.irAalta=function(){

	$state.go("persona.alta");

};






	});
//
appAngular.controller("controlpersonaalta", function($scope,$state){


$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}

$scope.Alta=function(){

$state.go("barraMenuAbstr.inicio");     


}








	});
//
appAngular.controller('controlpersonagrilla', function($scope, $http) {



  $http.get('http://www.mocky.io/v2/57c82b3a1200008404e769ad')
  .then(function(respuesta) {       

         $scope.ListadoPersonas = respuesta.data;
         console.log(respuesta.data);

    },function (error) {
         $scope.ListadoPersonas= [];
        console.log( error);
        
   });
 /* $http.get('PHP/nexo.php', { params: {accion :"traer"}})
    .then(function(respuesta) {         

         $scope.ListadoPersonas = respuesta.data.listado;
         console.log(respuesta.data);

    },function errorCallback(response) {
             $scope.ListadoPersonas= [];
            console.log( response);
            
     });*/
        $scope.Borrar=function(persona){
        console.log("borrar"+persona);
}





    $scope.Modificar=function(id){
        
        console.log("Modificar"+id);
    }





});

appAngular.controller('controlvotacionGrilla', function($scope, $http,$rootScope,$state) {



  
         $scope.votaciones= [
    {user: $rootScope.usuarios.user,dni: $rootScope.usuarios.dni,pass:$rootScope.usuarios.pass}
];


         

        
          console.info('votac',$scope.votaciones);


        $scope.Borrar=function(){
           //console.info("antes",$rootScope.usuarios);
$rootScope.usuarios="";
    alert("votacion borrada");
 $state.go("barraMenuAbstr.inicio");
        // console.info("despues",$rootScope.usuarios);
}





    $scope.Modificar=function(){
        
        alert("Modificar");

    }





});