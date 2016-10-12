<?php 
require_once("clases/AccesoDatos.php");
require_once("clases/User.php");
require_once("clases/Alumno.php");
require_once("clases/producto.php");

$queHago=$_POST['queHacer'];

switch ($queHago) {
	/*case 'foto':
		include("partes/imagen.php");
		break;
	case 'video':
			include("partes/video.html");
		break;	*/
		case 'CambiarFoto':
		include("partes/fotos.php");
		break;
	case 'MostrarInicio':
		include("partes/bienvenido.php");
		break;
	case 'MostrarPerfil':
			include("partes/perfil.php");
		break;
		case 'MostrarUser':
			include("partes/formUser.php");
		break;
	
	case 'MostrarGrilla':
			include("partes/formGrilla.php");
		break;
	case 'MostarLogin':
			include("partes/formLogin.php");
		break;
	case 'MostrarFormAlta':
			//include("partes/formCd.php");
			include("partes/formAlumno.php");
		break;
		case 'MostrarFormAltaP':
			//include("partes/formCd.php");
			include("partes/formProductos.php");
		break;
	
	case 'MostrarFormAltaUser':
			//include("partes/formCd.php");
			include("partes/formUserAlta.php");
		break;
		case 'Subirfotos':
		$result = usuarios::SubirArchivo();
		echo json_encode($result);
	break;
	
	
	case 'BorrarAlumno':
			$alu = new Alumno();
			$alu->id=$_POST['id'];
			$cantidad=$alu->BorrarAlumno();
			echo $cantidad;

		break;
	case 'EditarAlumno':
				$alu = Alumno::TraerUnAlumno($_POST['id']);		
			echo json_encode($alu);



		break;
    case 'GuardarAlumno':
			$alu = new Alumno();
			$alu->id=$_POST['id'];
			$alu->nombre=$_POST['nombre'];
			$alu->legajo=$_POST['legajo'];
			$alu->sexo=$_POST['sexo'];
			$cantidad=$alu->GuardarAlumno();
			echo $cantidad;

		break;

    case 'Alta':
			$alu = new Alumno();
			$alu->id=0;
			echo json_encode($alu);
			

		break;/*






		*/
	case 'BorrarUser':
			$user = new usuarios();
			$user->id=$_POST['id'];
			$cantidad=$user->BorrarUser();
			echo $cantidad;

		break;
	case 'ModificarUser':
				$user = usuarios::TraerUnUser($_POST['id']);		
			echo json_encode($user);



		break;
    case 'GuardarUser':
			$user = new usuarios();
			$user->id=$_POST['id'];
			$user->email=$_POST['email'];
			$user->pass=$_POST['pass'];
			$user->pathfoto='imagenes/' . $_POST['nombreFoto'];

			if ( isset($_POST['tipo'])){
					$user->tipo=$_POST['tipo'];
							
				}elseif ($_POST['tipo']=="vend"){
				 $user->tipo="vend";}
	elseif ($_POST['tipo']=="comp"){
				 $user->tipo="comp";}

				 else $user->tipo="comp";
	
			$cantidad=$user->GuardarUser();
			echo $cantidad;

		break;

    case 'Alta':
			$user = new usuarios();
			$user->id=0;
			echo json_encode($user);
			

		break;
 case 'AgregarProducto':
			$pro = new producto();
			$pro->id=$_POST['id'];
			$pro->nombre=$_POST['nombre'];
			$cantidad=$pro->InsertarProducto();
			echo $cantidad;

		break;
case 'BorrarProducto':
			$pro = new producto();
			$pro->id=$_POST['id'];
			$cantidad=$pro->BorrarProducto();
			echo $cantidad;

		break;


case 'EliminarCookie':
			include("partes/eliminarCokiee.php");

		break;














	default:
		# code...
		break;


}
/*case 'BorrarCD':
			$cd = new cd();
			$cd->id=$_POST['id'];
			$cantidad=$cd->BorrarCd();
			echo $cantidad;

		break;
	case 'GuardarCD':
			$cd = new cd();
			$cd->id=$_POST['id'];
			$cd->cantante=$_POST['cantante'];
			$cd->titulo=$_POST['titulo'];
			$cd->año=$_POST['anio'];
			$cantidad=$cd->GuardarCD();
			echo $cantidad;

		break;
	case 'TraerCD':
			$cd = cd::TraerUnCd($_POST['id']);		
			echo json_encode($cd) ;

		break;*/
 ?>