(function () { "use strict";

/*** setup ***/
var background = chrome.extension.getBackgroundPage();


/*** tiles ***/
var tiles = {
	$frame: $("#tiles"),
	sync: function () {
		background.state.build();
		
		tiles.$frame.prop("src", "tab.html");
	}
};

tiles.sync();


/*** theme ***/
var theme = {
	$type: $("#theme-type > button"),
	$css: $("#theme-css"),
	$save: $("#theme-save")
};

theme.$type.click(function () {
	Data.set("theme-type", this.value);
	
	tiles.sync();
}).filter("[value='" + Data.get("theme-type") + "']").addClass("active");

theme.$css.val(Data.get("theme-css"));

theme.$save.click(function () {
	Data.set("theme-css", theme.$css.val());
	
	theme.$save.prop("disabled", true);
	
	theme.$css.one("keydown", function () {
		theme.$save.prop("disabled", false);
	});
	
	tiles.sync();
}).click();

})();