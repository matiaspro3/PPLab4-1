"use strict";

var app =angular.module("yapp",["ui.router","snap","ngAnimate"]);

app.config(["$stateProvider","$urlRouterProvider",function(r,t)
	{
		t.when("/dashboard","/dashboard/overview"),
		t.otherwise("/login"),
		//  $urlRouterProvider.otherwise("/barraMenuAbstr/inicio");

	   r.state("base",
	   	{"abstract":!0,
	   	url:"",
	   	templateUrl:"views/base.html"
	   })

	.state("login",{
		url:"/login",
		parent:"base",
		templateUrl:"views/login.html",
		controller:"LoginCtrl"
	})

	.state("dashboard",	{
		url:"/dashboard",
		parent:"base",
		templateUrl:"views/dashboard.html",
		controller:"DashboardCtrl"
	})

	.state("overview",{
		url:"/overview",
		parent:"dashboard",
		templateUrl:"views/dashboard/overview.html"
	})


	.state(
		"reports",{
			url:"/reports",
			parent:"dashboard",
			templateUrl:"views/dashboard/reports.html"
					}
			)



.state(
        "barraMenuAbstr",{
            url:"/barraMenuAbstr",
            abstract:true,
            templateUrl:"views/htmls/barraMenuAbstr.html",
            controller:"controlAbtrac"

        }
        )

      .state(
    	"barraMenuAbstr.login",{
    		url:"/login",
    		//templateUrl:"personamenu.html"
    		views:{
    			"contenido":{
    				templateUrl:"views/htmls/formLogin3.html",
    				controller:"controllogin"
    			}
    		}
    	}
    	)



















     }
			]
);



app.controller("LoginCtrl",["$scope","$location",function(r,t)

	{r.submit=function()
		{return t.path("/dashboard"),!1}
	}]);

app.controller("DashboardCtrl",["$scope","$state",function(r,t)
	{r.$state=t}

	]);

app.controller('controlPersonaMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";

});


//controlAbtrac

app.controller("controlAbtrac", function($scope, $state,$rootScope){

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




app.controller("controllogin", function($scope,$rootScope,$state,$auth){
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
