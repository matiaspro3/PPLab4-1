
function CambiarFoto()
{		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"CambiarFoto"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);

		//$("#informe").html("Correcto BOTONES!!!");	
	});
}
function GuardarFoto()
{		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"GuardarFoto"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);

		//$("#informe").html("Correcto BOTONES!!!");	
	});
}


function EliminarCookie()
{		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"EliminarCookie"}
	});
	funcionAjax.done(function(retorno){
	//$("#principal").html(retorno);
	alert("Cookie Borrada");
		//$("#informe").html("Correcto BOTONES!!!");	
	});
}




function MostrarUser()
{		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarUser"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);

		//$("#informe").html("Correcto BOTONES!!!");	
	});
}



function ModificarUser(idParametro)
{		
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"ModificarUser",
			id:idParametro	
		}
	});
	//alert(idParametro);

	funcionAjax.done(function(retorno){
		//alert(retorno);
		var alu =JSON.parse(retorno);
			//MostrarAltaUser(alu); 
			//alert(alu.email);
		$("#idalu").val(alu.id);
		$("#email").val(alu.email);
		$("#pass").val(alu.pass);
		$("#tipo").val(alu.tipo);
		
		
	});
	funcionAjax.fail(function(retorno){	
	//	$("#informe").html(retorno.responseText);	
		//alert("pep");
	});	



	/*cambiar esto.. asi funciona mal.... que el boton q invoca a EditarAlumno, invoque a mostrar, 
	 y en el .done de mostra llamo  a editar.
		//son 3 mostrar en lugar de uno.. ????

*/
}

function BorrarUser(idParametro)
{
	//alert(idParametro);
		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"BorrarUser",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
		//Mostrar("MostrarGrilla");
		MostrarUser();
	//	$("#informe").html("cantidad de eliminados "+ retorno);	
		
	});
	funcionAjax.fail(function(retorno){	
	//	$("#informe").html(retorno.responseText);	
	});	
}

function AltaUser(){
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarFormAltaUser"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		//$("#informe").html("Correcto!!!");	
		

	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		//$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}

function VerUserAmodidificar(usuario)
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarFormAltaUser"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		ModificarUser(usuario);
		//$("#informe").html("Correcto!!!");	
		

	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		//$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}







function GuardarUser()
{
		var id=$("#idalu").val();
		var email=$("#email").val();
		var pass=$("#pass").val();
		var tipo=$("#tipo").val();
		if (document.getElementById('foto1') != null){
		var nombreFoto = document.getElementById("foto1").value}
		//var nombreFoto = document.getElementById("hdnnombrefoto").value;
		//var nombreFoto = $("#hdnnombrefoto").value;
		
		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"POST",
		data:{
			queHacer:"GuardarUser",
			id:id,
			email:email,
			pass:pass,
			tipo:tipo,
			nombreFoto:nombreFoto
		}

	});
	funcionAjax.done(function(retorno){
		//alert(retorno.email);
		//	Mostrar("MostrarGrilla");

		MostrarUser();
					
	});
	funcionAjax.fail(function(retorno){	
	//	$("#informe").html(retorno.responseText);	
	});	
}

function subirFoto()
{
    var foto = document.getElementById("foto").value;
    
    if(foto === "")
    {
        return;
    }
    
    var formData = new FormData();
    var archivo = $("#foto")[0];
    formData.append("foto",archivo.files[0]);
    formData.append("queHacer", "Subirfotos");

    $.ajax({
        type: 'POST',
        url: "nexo.php",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        async: true
    })
    .done(function (objJson) {
        $("#fotos").html(objJson.html);
        console.log(objJson);
       /* if(objJson)
            alert("Foto Subida!");
        else
            alert("Foto No Subida!");*/
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });   
    
}


