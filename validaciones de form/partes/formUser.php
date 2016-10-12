	<?php 
session_start(); //siosi siempre va primero.

if (isset($_SESSION['usuariolala']))   //pregunto si esta logueado(no importa quien)
{
	require_once("clases/AccesoDatos.php");
	require_once("clases/User.php");


	$arrayDeUser=usuarios::TraerTodoLosUsuarios();
	$userActual=usuarios::TraerUnUser($_SESSION["id"]);
	 $fotito=$userActual->pathfoto;
	 $userAct=$userActual->email;
	 $passAct=$userActual->pass;


//var_dump($userActual);
	// var_dump($fotito);
 //}  // la saco de aca sino da error cuando no logueo
 ?>	
<?php 		echo "<div id='mainmenu' class='Frm animated bounceInRight'>
<img src='$fotito' width='150px' height='150px'><br><br>
</div>"
 ?>

<table class="table"  style=" background-color: transparent;">
			
					<?php 

	/*				
									<li>

					  
					<a  onclick="CambiarFoto()"  id="foto" class="btn btn-info">Cambiar mi Foto de Perfil </a>   <?php  //class="btn btn-success    verde ?>		
									</li>
 	*/
 ?>

 	<?php 
//	echo"<div id='mainmenu' class='Frm animated bounceInRight'> <img src='imagenes/123.jpg' width='150px' height='150px'><br><br></div>";	
 							/*Foto */

//<div id='mainmenu' class='Frm animated bounceInRight'> <img src='$fotito' width='150px' height='150px'><br><br></div>
										


//<div id='mainmenu' class='Frm animated bounceInRight'> <img src='imagenes/123.jpg' width='150px' height='150px'><br><br></div>

 //echo "<div id='mainmenu' class='Frm animated bounceInRight'> <img src='$objUsuario->pathfoto' width='150px' height='150px'><br><br></div>";
//echo "<tr>"."<td>".$auto[0]."</td><td>".$auto[1]."</td><td><img src=".$auto[2]."height=150 width=150</img></td></tr>";
/*var_dump($_SESSION['usuariolala']);*/
			//colores de botones
 //class="btn btn-success    verde .... btn btn-info azul   btn btn-warning amarrilloo-....btn btn-danger rojo 
				$usuario= $_SESSION['user'];
				$contraseña=$_SESSION['userPass'];
				$tipo=$_SESSION['usuariolala'];
				

				if ($tipo=="admin"){
					    ?>
					    		
												<h2>	Lista de usuarios </h2>
<thead>								<li>		<a onclick="AltaUser()" class="btn btn-success">Alta de Usuario </a> </li>
									<tr>
										<th>Accion</th><th>Nombre de Usuario</th><th>Contraseña</th><th>nombre</th>
									</tr>	
								</thead>
								<tbody>	
							


									<?php 

							foreach ($arrayDeUser as $user) {

								if ($user->tipo == "admin" )
									{	
												if ($usuario==$user->email & $contraseña==$user->pass)
 													{
										echo"<tr>
										
							<td><a onclick='VerUserAmodidificar($user->id)' class='btn btn-warning'>	   Editar Datos</a></td>
			
										<td>$user->email</td>
										<td>$user->pass</td>
										<td>$user->tipo</td>
										<td><img src=$user->pathfoto height=150 wight=150 ></td>
									</tr>   ";}

												else {	echo"<tr>
										<td><a onclick='' class='btn'>  </a></td>
										<td>$user->email</td>
										<td>$user->pass</td>
										<td>$user->tipo</td>
									</tr>   ";}


								
								}
										else {
								echo"<tr>
										
						<td><a onclick='BorrarUser($user->id)' class='btn btn-danger'>   <span class='glyphicon glyphicon-trash'>&nbsp;</span>  Borrar</a></td>
										<td>$user->email</td>
										<td>$user->pass</td>
										<td>$user->tipo</td>
										<td><img src='$user->pathfoto' height=100 wight=100 ></td>
									</tr>   ";
								   }			
															}
				}
				elseif ($tipo=="otro" or $tipo=="vend" or $tipo=="comp") { 
				?>	
									<tr>
											<th>Accion</th><th>Nombre de Usuario</th><th>Contraseña</th><th>Nombre</th>
									</tr>
								</thead>
								<tbody>	

								<?php 

							//if ($_SESSION['usuariolala']=="otro"){
								foreach ($arrayDeUser as $user) {

										if (($user->tipo == "otro" or $user->tipo == "comp" or $user->tipo == "vend") & $userAct==$user->email & $passAct==$user->pass)
							echo"<tr>
										
			<td><a onclick='VerUserAmodidificar($user->id)' class='btn btn-warning'>   <span class='glyphicon glyphicon-trash'>&nbsp;</span>  Editar Datos</a></td>
										<td>$user->email</td>
										<td>$user->pass</td>
										<td>$user->tipo</td>
										
											
									</tr>   ";
								/*	echo"<tr>
								<td><a onclick='ModificarUser($user->id)' class='btn btn-danger'>   <span class='glyphicon glyphicon-trash'>&nbsp;</span>Editar</a></td>
											<td>$user->email</td>
											<td>$user->pass</td>
											<td>$user->tipo</td>
										</tr>   ";*/
								}
					}
							//		}

						   ?>
					</tbody>
				</table>






						 
					</tbody>
				</table>

				 





				<?php 
				// sin login 
} 

					 ?>