(function () { "use strict";

/*** setup ***/
var version = "0.1.0";

Data.def("tiles", {});

Data.def("theme-type", "dark");
Data.def("theme-css", "");

Data.set("version", version);


/*** state ***/
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
		height: 2,
		background: "red"
	},
	5: {
		x: 2,
		y: 2,
		width: 4,
		height: 3,
		background: "grey"
	},
	6: {
		x: 6,
		y: 0,
		width: 3,
		height: 4,
		background: "hotpink",
		content: "<p>Hello!</p>"
	},
	7: {
		x: 0,
		y: 4,
		width: 1,
		height: 1,
		background: "cyan"
	},
	8: {
		x: 6,
		y: 4,
		width: 3,
		height: 1,
		background: "aqua"
	},
	9: {
		x: 9,
		y: 0,
		width: 1,
		height: 5,
		background: "green"
	}
});

var state = window.state = {
	tab: null,
	build: function () {
		var tiles = Data.get("tiles");
		
		state.tab = document.createElement("body");
		state.tab.id = "tiles";
		state.tab.dataset.theme = Data.get("theme-type");
		
		state.tab.appendChild(function () {
			var el = document.createElement("style");
			el.innerHTML = "@import url('styles/tab.css');" + Data.get("theme-css");
			return el;
		}());
		
		Object.keys(tiles).forEach(function (k) {
			var data = tiles[k];
			var el = document.createElement(data.href ? "a" : "div");
			var cell = 7.2;
			var gutter = 0.8;
			var backgrounds = [];
			
			el.style.left = ((cell + gutter) * data.x) + (gutter / 2) + "vw";
			el.style.top = ((cell + gutter) * data.y) + (gutter / 2) + "vw";
			
			el.style.width = (cell * data.width) + (gutter * (data.width - 1)) + "vw";
			el.style.height = (cell * data.height) + (gutter * (data.height - 1)) + "vw";
			
			data.image && backgrounds.push('url("' + data.image + '") center no-repeat');
			data.background && backgrounds.push(data.background);
			el.style.background = backgrounds.join(", ");
			
			data.href && el.setAttribute("href", data.href);
			data.content && (el.innerHTML = data.content);
			
			el.className = "tile";
			state.tab.appendChild(el);
		});
	}
};

state.build();

})();