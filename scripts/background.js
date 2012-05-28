(function () { "use strict";

/*** setup ***/
var version = "0.1.0";

Data.def("tiles", {});
Data.def("theme", "");

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
		
		Object.keys(tiles).forEach(function (k) {
			var data = tiles[k];
			var el = document.createElement(data.href ? "a" : "div");
			var backgrounds = [];
			
			el.style.left = ((12.5 + 1.5) * data.x) + 0.75 + "vh";
			el.style.top = ((12.5 + 1.5) * data.y) + 0.75 + "vh";
			
			el.style.width = (12.5 * data.width) + (1.5 * (data.width - 1)) + "vh";
			el.style.height = (12.5 * data.height) + (1.5 * (data.height - 1)) + "vh";
			
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