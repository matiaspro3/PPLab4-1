<?php 
session_start();

	//$_SESSION['registrado']=null;
setcookie("registro", "" ,  time()-60 , '/');

session_destroy();

 ?>