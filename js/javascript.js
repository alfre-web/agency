let nav = document.getElementById('nav');
let abrir = document.getElementById('open');
let menu = document.getElementById('enlaces');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;


function menus(){

    let Desplazamiento_actual = window.pageYOffset;

    
    if(Desplazamiento_actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
    }
}
function apertura(){
    if(cerrado){
        menu.style.width = '60vw';
        cerrado = false;
    } else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true; 
    }
}

window.addEventListener('click', function(e){
    this.console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('load', function(){
    menus();
});

window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});

abrir.addEventListener('click', function(){
    apertura();
});