
$(function carga(){

    let sobre = $('#sobre').offset().top,
    servis = $('#servis').offset().top,
    team   = $('#team').offset().top,
    clientes = $('#clientes').offset().top,
    contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
    let sobre = $('#sobre').offset().top,
    servis = $('#servis').offset().top,
    team   = $('#team').offset().top,
    clientes = $('#clientes').offset().top,
    contacto = $('#contacto').offset().top;

    window.addEventListener('load', function(){
    let sobre = $('#sobre').offset().top,
    servis = $('#servis').offset().top,
    team   = $('#team').offset().top,
    clientes = $('#clientes').offset().top,
    contacto = $('#contacto').offset().top;

    });
});


$('#enlace-inicio').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0 
    },600);
});

$('#enlace-acerca').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: sobre
    },600);
});

$('#enlace-servicio').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: servis
    },600);
});

$('#enlace-equipo').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: team
    },600);
});

$('#enlace-cliente').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: clientes
    },600);
});

$('#enlace-contacto').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: contacto
    },600);
});

});