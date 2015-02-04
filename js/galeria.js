/*$(document).on('ready', inicio);

function inicio(){
	$('.sub_contenido .rot_imagenes img').on('click', mostrarfull);
}

function mostrarfull(){
	$('#vistafull').attr('src', " ");
	var nombre = $(this).attr('alt')+"_big";
	var direccion = "img/" + nombre + ".jpg";
	$('#vistafull').attr('src', direccion);
}*/
$(document).ready(function(){ // Script de la Galeria
    $('#contenido_galeria div').not(':first').hide();
    $('#contenido_galeria div:first').addClass('aqui');
    $('.sub_contenido a').click(function(){
        $('#contenido_galeria div.aqui').fadeOut(0);
        $('#contenido_galeria div').removeClass('aqui').filter(this.hash).fadeIn(0).addClass('aqui');
        return false;
    });
});