$(function(){
//封装函数
function showTime(){
	timer = setInterval(function(){
		Show();
		i++;
		if(i==4){
			i=0;
		}
	},2000);
}
function Show(){
	$(".ig").eq(i).fadeIn(300).siblings(".ig").fadeOut(300);
	$(".tab").eq(i).addClass("bg").siblings(".tab").removeClass("bg");
}
var i = 0;
var timer;
$.ajax({
	type:"get",
	url:"data/index/getCarousel.php"
}).then(function(data){
	//console.log(data);
	var html = "";
	for(var p in data){
		html+='<a href="'+data[p].href+'" class="ig"><img src="'+data[p].img+'"> </a>';
	}
	var p0=data[0];
	//console.log(p0);
	html+='<a href="'+data[0].href+'" class="ig"> <img src="'+data[0].img+'"> </a>';
	//console.log(html);
	$("#carousel").html(html);
	showTime();
	$(".tab").hover(function(e){
		clearInterval(timer);
		i=$(e.target).index();
		Show();
	},function(e){
		showTime();
	});
	$(".btn1").click(function(){
		clearInterval(timer);
		if(i==0){
			i=4
		}
		i--;
		Show();
		showTime();
	});
	$(".btn2").click(function(){
		clearInterval(timer);
		if(i==3){
			i=-1
		}
		i++;
		Show();
		showTime();
	});
	$(window).focus(function(){
		showTime();
	})
	$(window).blur(function(){
		clearInterval();
	})
})
$("[data-for=text-news]").click(function(){
	$(".text-news").toggleClass("hide");
})
$(".standings-group>a>.fqpm").click(function(){
	$(".standings-group>a>.fqpm").addClass("lmbg");
	$(".standings-group>a>.lmpm").removeClass("lmbg");
	$(".t2").removeClass("hide");
	$(".t1").addClass("hide");
})
$(".standings-group>a>.lmpm").click(function(){
	$(".standings-group>a>.lmpm").addClass("lmbg");
	$(".standings-group>a>.fqpm").removeClass("lmbg");
	$(".t2").addClass("hide");
	$(".qdpm").removeClass("hide");
})
$(".standings-group>a>.xblm").click(function(){
	$(".standings-group>a>.xblm").addClass("lmcolor");
	$(".standings-group>a>.dblm").removeClass("lmcolor");
	$(".qdpm").addClass("hide");
	$(".qdpm1").removeClass("hide");
})
$(".standings-group>a>.dblm").click(function(){
	$(".standings-group>a>.dblm").addClass("lmcolor");
	$(".standings-group>a>.xblm").removeClass("lmcolor");
	$(".qdpm1").addClass("hide");
	$(".qdpm").removeClass("hide");
})
//楼层滚动
$(function(){
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		var offsetTop=$(".floor:first").offset().top;
		//console.log(offsetTop)
		if(offsetTop<=scrollTop+innerHeight/2){
			$("#lift").show();
		}else{
			$("#lift").hide();
		}
		var $floors=$(".floor");
		for(var i=0;i<$floors.length;i++){
			var $f=$($floors[i]);
			if($f.offset().top>scrollTop+innerHeight/2){
				break;
			}
		}
		//console.log(i);
		$(`#lift>ul>li:eq(${i-1})`)
			.addClass("lift_item_on")
			.siblings().removeClass("lift_item_on")
	})
	$("#lift>ul").on("click","a.lift_btn",function(){
		var $a=$(this);
		var i=$a.parent().index();
		var offsetTop=$(`.floor:eq(${i})`).offset().top;
		console.log(offsetTop)
		$("html").stop(true).animate({
			scrollTop:offsetTop-50
		},500)
	})
})