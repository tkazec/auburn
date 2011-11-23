var fragment = document.createDocumentFragment(), tiles = chrome.extension.getBackgroundPage().tiles;

Object.keys(tiles).forEach(function(k){
	var data = tiles[k], el = document.createElement("div");
	
	el.style.left = ((100 + 10) * data.x) + "px";
	el.style.top = ((100 + 10) * data.y) + "px";
	
	el.style.width = (100 * data.width) + (10 * (data.width - 1)) + "px";
	el.style.height = (100 * data.height) + (10 * (data.height - 1)) + "px";
	
	el.style.background = data.color;
	el.className = "tile";
	
	fragment.appendChild(el);
});

document.getElementById("tiles").appendChild(fragment);