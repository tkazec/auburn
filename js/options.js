function tabTo(i) {
	$("body").children(".container").eq(i).add($("#topbar-tabs").children().eq(i)).addClass("active").siblings().removeClass("active");
}

$("#topbar-logo").click(function(){
	tabTo(4);
});

$("#topbar-tabs").children().click(function(){
	tabTo($(this).index());
});