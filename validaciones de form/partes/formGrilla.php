<?php 
session_start(); //siosi siempre va primero.

if (isset($_SESSION['usuariolala']))   //pregunto si esta logueado(no importa quien)
{
	require_once("clases/AccesoDatos.php");
	require_once("clases/cd.php");
	require_once("clases/Alumno.php");
	require_once("clases/producto.php");
	$arrayP=producto::TraerTodoLosProductos();
 //}  // la saco de aca sino da error cuando no logueo
 ?>
<?php /*
<table class="table"  style=" background-color: beige;">
	<thead>
		<tr>
			<th>Editar</th><th>Borrar</th><th>cantante</th><th>disco</th><th>año</th>
		</tr>
	</thead>
	<tbody>

		<?php 

foreach ($arrayDeCds as $cd) {
	echo"<tr>
			<td><a onclick='EditarCD($cd->id)' class='btn btn-warning'> <span class='glyphicon glyphicon-pencil'>&nbsp;</span>Editar</a></td>
			<td><a onclick='BorrarCD($cd->id)' class='btn btn-danger'>   <span class='glyphicon glyphicon-trash'>&nbsp;</span>  Borrar</a></td>
			<td>$cd->cantante</td>
			<td>$cd->titulo</td>
			<td>$cd->año</td>
		</tr>   ";
}
		 ?>
	</tbody>
</table>
*/
		 ?>
<table class="table"  style=" background-color: transparent;">
	<thead>
		
	</thead>
	<tbody>
												
		<?php 
//th =columnas ..tr=filas...td=datos
if ($_SESSION['usuariolala']=="admin" or $_SESSION['usuariolala']=="vend"){
	    ?>

		<a onclick="AltaProducto()" class="btn btn-info">Alta de Producto</a>   <?php  //class="btn btn-success    verde ?>
		   <tr>
			<th>Accion</th><th>Nombre</th>
		</tr>

		   <?php 

foreach ($arrayP as $pro) {

	echo"<tr>
		
			<td><a onclick='BorrarProducto($pro->id)' class='btn btn-danger'>   <span class='glyphicon glyphicon-trash'>&nbsp;</span>  Borrar</a></td>
			<td>$pro->nombre</td>
		
		</tr>   ";
								}
									}
else {
if ($_SESSION['usuariolala']=="comp"){
?> 

		<tr>
			<th>Nombre Producto</th> 
		</tr>
<?php 
foreach ($arrayP as $pro) {
	echo"<tr>
			
			
			<td>$pro->nombre</td>
			>   ";
							}
									}
	}

		   ?>
	</tbody>
</table>






		 
	</tbody>
</table>

 





<?php 
// sin login 
} 
else echo "<font color ='yellow'><h1> Debe iniciar sesion para poder ver la tabla </h1> ";

	 ?>