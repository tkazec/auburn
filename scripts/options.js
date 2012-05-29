(function () { "use strict";

/*** tabs ***/
var tabs = {
	$logo: $("#nav-logo"),
	$buttons: $("#nav-tabs").children(),
	$pages: $("body").children(".container"),
	change: function (i) {
		tabs.$buttons.eq(i).add(tabs.$pages.eq(i)).addClass("active").siblings().removeClass("active");
	}
};

tabs.$logo.click(function () {
	tabs.change(3);
});

tabs.$buttons.click(function () {
	tabs.change($(this).index());
});

tabs.change(0);


/*** tiles ***/
$("#tiles").replaceWith(document.importNode(chrome.extension.getBackgroundPage().state.tab, true));


/*** theme ***/
var theme = {
	$text: $("#theme"),
	$save: $("#theme-save")
};

theme.$text.val(Data.get("theme"));

theme.$save.click(function () {
	Data.set("theme", theme.$text.val());
	
	theme.$save.prop("disabled", true);
	
	theme.$text.one("keydown", function () {
		theme.$save.prop("disabled", false);
	});
}).click();

})();