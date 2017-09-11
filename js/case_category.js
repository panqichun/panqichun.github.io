$("#caseslist>.cases>li").live({
	mouseenter: function() {
		$("p", this).stop(false, true).slideDown("normal", "easeOutQuad");
	},
	mouseleave: function() {
		$("p", this).stop(false, true).slideUp("normal", "easeOutQuad");
	}
});
$("#caseslist>.cases>li>img").lazyload({
	effect: "fadeIn",
	failurelimit: 10
});

$("#cases>ul>li>img").lazyload({
	effect: "fadeIn",
	failurelimit: 10
});