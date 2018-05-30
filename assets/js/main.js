/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

/*
 * Content load
*/

$(document).ready(function(){
	handleTopNavAnimation();
	$("#conteudo-sobre").load("conteudo/sobre.html");
	$("#conteudo-equipes").load("conteudo/equipes.html");
	$("#conteudo-materiais").load("conteudo/materiais.html");
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid');
	}
	else{
		$('#site-nav').removeClass('navbar-solid');
	}
}
