function handleTopNavAnimation(){var o=$(window).scrollTop();o>10?$("#site-nav").addClass("navbar-solid"):$("#site-nav").removeClass("navbar-solid")}$(window).scroll(function(){handleTopNavAnimation()}),$(document).ready(function(){handleTopNavAnimation(),$("#conteudo-sobre").load("conteudo/sobre.html"),$("#conteudo-equipes").load("conteudo/equipes.html"),$("#conteudo-materiais").load("conteudo/materiais.html")});