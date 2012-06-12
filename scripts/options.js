(function () { "use strict";

/*** setup ***/
var background = chrome.extension.getBackgroundPage();


/*** tiles ***/
$("#tiles").replaceWith(document.importNode(background.state.tab, true));


/*** theme ***/
var theme = {
	$type: $("#theme-type > button"),
	$css: $("#theme-css"),
	$save: $("#theme-save")
};

theme.$type.click(function () {
	Data.set("theme-type", this.value);
}).filter("[value='" + Data.get("theme-type") + "']").addClass("active");

theme.$css.val(Data.get("theme-css"));

theme.$save.click(function () {
	Data.set("theme-css", theme.$css.val());
	
	theme.$save.prop("disabled", true);
	
	theme.$css.one("keydown", function () {
		theme.$save.prop("disabled", false);
	});
}).click();

})();