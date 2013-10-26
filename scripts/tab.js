(function () { "use strict";

var background;

console.mark = function () {
	this.log.apply(this, [window.performance.now().toFixed(10), ":"].concat(Array.prototype.slice.call(arguments)));
};

console.mark("Spinning up...");

(function init (counter) {
	console.mark("Init attempt #" + counter + ".");
	
	if ((background = chrome.extension.getBackgroundPage()) && background.state && background.state.tab) {
		document.documentElement.replaceChild(document.importNode(background.state.tab, true), document.body);
		
		console.mark("Init complete. Ready to go!");
	} else {
		setTimeout(init, counter, ++counter);
	}
})(1);

})();