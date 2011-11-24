var tabbody = document.createElement("body"), tiles = {
	0: {
		x: 0,
		y: 0,
		width: 4,
		height: 2,
		background: "lime"
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
		background: "yellow"
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
		background: "hotpink"
	}
};

Object.keys(tiles).forEach(function(k){
	var data = tiles[k], el = document.createElement("div");
	
	el.className = "tile";
	
	el.style.left = ((100 + 10) * data.x) + "px";
	el.style.top = ((100 + 10) * data.y) + "px";
	
	el.style.width = (100 * data.width) + (10 * (data.width - 1)) + "px";
	el.style.height = (100 * data.height) + (10 * (data.height - 1)) + "px";
	
	el.style.background = data.background;
	//el.innerHTML = data.content;
	
	tabbody.appendChild(el);
});