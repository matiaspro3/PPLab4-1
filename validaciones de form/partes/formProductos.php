<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/ingreso.css" rel="stylesheet">

    <div class="container">

      <form class="form-ingreso" onsubmit="AgregarProducto();return false">
        <h2 class="form-ingreso-heading">Producto a Agregar</h2>

        <label for="nombre" class="sr-only">Nombre</label>
        <input type="text"  minlength="4"  id="nombre" title="Se necesita un nombre de Alumno" class="form-control" placeholder="Nombre" required="" autofocus="">
        
       <input readonly   type="hidden"    id="idalu" class="form-control" >
       
        <button  class="btn btn-lg btn-success btn-block" type="submit"><span class="glyphicon glyphicon-floppy-save">&nbsp;&nbsp;</span>Guardar </button>
     
      </form>

    </div> <!-- /container -->


    