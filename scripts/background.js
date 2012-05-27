(function () { "use strict";

/*** setup ***/
var version = "0.1.0";

Data.def("tiles", {});
Data.def("theme", "");

Data.set("version", version);


/*** tab ***/
Data.set("tiles", {
	0: {
		x: 0,
		y: 0,
		width: 4,
		height: 2,
		background: "lime",
		image: "images/icons/128.png"
	},
	1: {
		x: 4,
		y: 0,
		width: 2,
		height: 2,
		background: "orange"
	},
	2: {
		x: 0,
		y: 2,
		width: 1,
		height: 2,
		background: "blue"
	},
	3: {
		x: 1,
		y: 2,
		width: 1,
		height: 1,
		background: "yellow",
		image: "images/icons/48.png",
		href: "http://tkaz.ec"
	},
	4: {
		x: 1,
		y: 3,
		width: 1,
		height: 1,
		background: "red"
	},
	5: {
		x: 2,
		y: 2,
		width: 4,
		height: 2,
		background: "grey"
	},
	6: {
		x: 6,
		y: 0,
		width: 4,
		height: 4,
		background: "hotpink",
		content: "<p>Hello!</p>"
	}
});

var buildtabbody = window.buildtabbody = function () {
	var tiles = Data.get("tiles");
	var tabbody = window.tabbody = document.createElement("body");
	
	Object.keys(tiles).forEach(function(k){
		var data = tiles[k],
			el = document.createElement(data.href ? "a" : "div"),
			backgrounds = [];
		
		el.style.left = ((100 + 10) * data.x) + "px";
		el.style.top = ((100 + 10) * data.y) + "px";
		
		el.style.width = (100 * data.width) + (10 * (data.width - 1)) + "px";
		el.style.height = (100 * data.height) + (10 * (data.height - 1)) + "px";
		
		data.image && backgrounds.push('url("' + data.image + '") center no-repeat');
		data.background && backgrounds.push(data.background);
		el.style.background = backgrounds.join(", ");
		
		data.href && el.setAttribute("href", data.href);
		data.content && (el.innerHTML = data.content);
		
		el.className = "tile";
		tabbody.appendChild(el);
	});
};

buildtabbody();

})();