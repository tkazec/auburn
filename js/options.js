(function(){
"use strict";

/*** tabs ***/
var tabs = {
	$logo: $("#navbar-logo"),
	$buttons: $("#navbar-tabs").children(),
	$pages: $("body").children(".container"),
	change: function(i) {
		tabs.$buttons.eq(i).add(tabs.$pages.eq(i)).addClass("active").siblings().removeClass("active");
	}
};

tabs.change(0);

tabs.$logo.click(function(){
	tabs.change(3);
});

tabs.$buttons.click(function(){
	tabs.change($(this).index());
});


/*** theme ***/
var theme = {
	$text: $("#theme"),
	$save: $("#theme-save")
};

theme.$text.val(localStorage.theme);

theme.$save.click(function(){
	localStorage.theme = theme.$text.val();
	
	theme.$save.prop("disabled", true);
	
	theme.$text.one("keydown", function(){
		theme.$save.prop("disabled", false);
	});
}).click();

})();