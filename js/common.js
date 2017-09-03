$(function() {
	var host = window.location.href;
	$.each($("a"), function(i, link) {
		//link.href = link.href.replace(/news:\/\//gi, 'http://com/');
		//console.log("host=" + host + " a=" + link.href);
	})
});