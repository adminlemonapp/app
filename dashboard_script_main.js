function setLightTheme() {
	// Configurar para o tema claro
	dashboard.setDashboardProp(3,"cTema","default");
	
	var logo = dashboard.getDashboardProp("cLogoFundoClaro", 4);
	
	// Logos em tela normal e tela cheia
	$("#web-logo-custom img").attr("src", logo);
	$("#fullscreen-logo-custom img").attr("src", logo);
	
	$("link[type='text/css'][href*='lemonapp']").attr("href","https://raw.githubusercontent.com/adminlemonapp/app/master/css_lemonapp_default.css");
	$("link[type='text/css'][href*='drive.google.com']").attr("href","https://raw.githubusercontent.com/adminlemonapp/app/master/css_lemonapp_default.css");
}

function setDarkTheme() {
	// Configura para o tema escuro
	dashboard.setDashboardProp(3,"cTema","dark");
	
	var logo = dashboard.getDashboardProp("cLogoFundoEscuro", 4);
	
	$("#web-logo-custom img").attr("src", logo);
	$("#fullscreen-logo-custom img").attr("src", logo);
	
	$("link[type='text/css'][href*='lemonapp']").attr("href","https://cdn.rawgit.com/adminlemonapp/app/master/css_lemonapp_dark.css");
	$("link[type='text/css'][href*='drive.google.com']").attr("href","https://cdn.rawgit.com/adminlemonapp/app/master/css_lemonapp_dark.css");
}

function setInitialTheme() {
	// Busca o tema atual no cookie do navegador
	var cookie = $.cookie("style");
	var title = cookie ? cookie : "default";
	
	console.log("Cookie:");
	console.log(cookie);
	
	// Força a atualização do tema
	setActiveStyleSheet(title, false);
	
	if (title == "dark") {
		// Configura para o tema escuro
		setDarkTheme();
		console.log("Configurou o tema escuro");
	} else {
		// Configura para o tema claro
		setLightTheme();
		console.log("Configurou o tema claro");
	}
}

function switchTheme () {
	var themeBtn = $(".theme-switch");
	
	if (themeBtn.hasClass("dark")) {
		// Se o tema atual for escuro, então configura para o tema claro
		setLightTheme();
	} else {
		// Se o tema atual for claro, então configura para o tema escuro
		setDarkTheme();
	}
}

$(document).ready(function() {
	// Insere o switcher de cor
	if (!$("#theme-container").length) {
		$('#tv-view-container').after('<li id="theme-container" ><div class="dashboard-action" actionId="theme_toggle"><div class="theme-switch " parentIsAction="true" title="Utilizar tema escuro"></div></div></li>');
	}
	
	// Configura o tema novamente todas as vezes em que a página for carregada.
	setInitialTheme();
	
	// Força a reconfiguração do tema todas as vezes em que o botão de troca de tema for clicado.
	$("#theme-container").click(switchTheme);
});