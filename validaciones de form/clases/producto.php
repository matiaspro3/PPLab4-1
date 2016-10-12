<?php 

class producto {

public $id;
public $nombre;

public static function TraerTodoLosProductos()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select codigo as id,nombre from producto");
			$consulta->execute();			
			return $consulta->fetchAll(PDO::FETCH_CLASS, "producto");		
	}




public function BorrarProducto()
	 {
	 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				delete 
				from producto				
				WHERE codigo=:id");	
				$consulta->bindValue(':id',$this->id, PDO::PARAM_INT);		
				$consulta->execute();
				return $consulta->rowCount();
	 }

	
	public function ModificarProducto()
	 {
	 		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update producto
				set email='$this->email',
				pass='$this->pass',
				foto='$this->pathfoto',
				tipo='$this->tipo'
				WHERE id='$this->id'");
			return $consulta->execute();

	 }
	
	public function InsertarProducto()
	 {				$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into producto (nombre)values('$this->nombre')");
				$consulta->execute();
				return $objetoAccesoDato->RetornarUltimoIdInsertado();
				
	 }



	 public function GuardarProducto()
	 {

	 	if($this->id>0)
	 		{
	 			//$this->ModificarAlumnoParametros(); // no funciona con este metodo.
	 			$this->ModificarProducto();
	 		}else {
	 			$this->InsertarProducto();
	 		}

	 }
public static function TraerUnproducto($id) 
	{			

			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select id,nombre from producto where id = $id");
			$consulta->execute();
			$aluBuscado= $consulta->fetchObject('producto');

			return $aluBuscado;	
}























}
 ?>