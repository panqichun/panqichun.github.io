$("header>div>nav>ul>li>a").hover(function() {
	$(this).parent().stop(false, true).animate({
		"background-position-x": "6px",
		opacity: "0.7"
	}, {
		duration: "normal",
		easing: "easeOutElastic"
	});
}, function() {
	$(this).parent().stop(false, true).animate({
		"background-position-x": "10px",
		opacity: "1"
	}, {
		duration: "normal",
		easing: "easeOutElastic"
	});
});
<!--- 首页 ---->
$('.ad_img,#banner_ctr,#client').pngFix();
$(window).scroll(function() {
	$(this).scrollTop() > 80 ? $("#navbg").stop(false, true).animate({
		opacity: "1"
	}, "normal") : $("#navbg").stop(false, true).animate({
		opacity: "0.8"
	}, "normal");
});
//Banner Start
var curIndex = 0;
var time = 800;
var slideTime = 5000;
var adTxt = $("#banner_img>li>div>.ad_txt");
var adImg = $("#banner_img>li>div>.ad_img");
var int = setInterval("autoSlide()", slideTime);

function autoSlide() {
	curIndex + 1 >= $("#banner_img>li").size() ? curIndex = -1 : false;
	show(curIndex + 1);
}

$("#banner_ctr>ul>li[class!='first-item'][class!='last-item']").click(function() {
	show($(this).index("#banner_ctr>ul>li[class!='first-item'][class!='last-item']"));
	window.clearInterval(int);
	int = setInterval("autoSlide()", slideTime);
});

function show(index) {
	$.easing.def = "easeOutQuad";
	$("#drag_ctr,#drag_arrow").stop(false, true).animate({
		left: index * 115 + 20
	}, 300);
	$("#banner_img>li").eq(curIndex).stop(false, true).fadeOut(time);
	adTxt.eq(curIndex).stop(false, true).animate({
		top: "340px"
	}, time);
	adImg.eq(curIndex).stop(false, true).animate({
		right: "120px"
	}, time);
	setTimeout(function() {
		$("#banner_img>li").eq(index).stop(false, true).fadeIn(time);
		adTxt.eq(index).children("p").css({
			paddingTop: "50px",
			paddingBottom: "50px"
		}).stop(false, true).animate({
			paddingTop: "0",
			paddingBottom: "0"
		}, time);
		adTxt.eq(index).css({
			top: "0",
			opacity: "0"
		}).stop(false, true).animate({
			top: "170px",
			opacity: "1"
		}, time);
		adImg.eq(index).css({
			right: "-50px",
			opacity: "0"
		}).stop(false, true).animate({
			right: "10px",
			opacity: "1"
		}, time);
	}, 200)
	curIndex = index;
}
//Banner End
//Cases Start
if($.support.transition) {
	$("#cases>ul>li").hover(function() {
		$("img", this).stop(false, true).transition({
			perspective: '300px',
			rotateY: '180deg',
			opacity: '0'
		});
		$("p", this).css({
			display: 'block',
			opacity: '0',
			rotateY: '-180deg'
		}).stop(false, true).transition({
			perspective: '300px',
			rotateY: '0deg',
			opacity: '1'
		});
	}, function() {
		$("img", this).show().stop(false, true).transition({
			perspective: '300px',
			rotateY: '0deg',
			opacity: '1'
		});
		$("p", this).stop(false, true).transition({
			perspective: '300px',
			rotateY: '180deg',
			opacity: '0'
		});
	});
} else {
	$("#cases>ul>li").hover(function() {
		$("img", this).stop(false, true).slideUp("fast");
		$("p", this).stop(false, true).slideDown("fast");
	}, function() {
		$("img", this).stop(false, true).slideDown("fast");
		$("p", this).stop(false, true).slideUp("fast");
	});
}
$("#cases>ul>li>img").lazyload({
	effect: "fadeIn",
	failurelimit: 10
});
$("#gotop").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
})