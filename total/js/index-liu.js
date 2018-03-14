$(()=>{
	width = $(".rlx-details-item-nav").width()/3;
	$(window).resize(function(){
		width = $(".rlx-details-item-nav").width()/3;	
	});
	function sh(){
		if(i==0){
			i=3
		}
		i--;
	}
	function sh1(){
		if(i==2){
			i=-1
		}
		i++;
	}
	function tab(e){
		e.preventDefault();
		var $tar=$(e.target);
		$tar.addClass("active").siblings().removeClass("active");
		i=$(e.target).index();		
	}
	function move1(){
		$('.lb1>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab1>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move2(){
		$('.lb2>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab2>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move3(){
		$('.lb3>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab3>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move4(){
		$('.lb4>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab4>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move5(){
		$('.lb5>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab5>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move6(){
		$('.lb6>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab6>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move7(){
		$('.lb7>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab7>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move8(){
		$('.lb8>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab8>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move9(){
		$('.lb9>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab9>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move10(){
		$('.lb1>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab1>.tab").eq(i).addClass("active").siblings().removeClass("active");		
	}
	function move10(){$('.lb10>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab10>.tab").eq(i).addClass("active").siblings().removeClass("active");}
	function move11(){$('.lb11>.rlx-details-item-nav>.ig').animate({left:-(width)*i},500);
		$(".tab11>.tab").eq(i).addClass("active").siblings().removeClass("active");}
	var i = 0;
	$(".left1").click(()=>{
		sh();move1();
	});
	$(".right1").click(()=>{
		sh1();move1();
	});
	$(".left2").click(()=>{
		sh();move2();
	});
	$(".right2").click(()=>{
		sh1();move2();
	});
	$(".left3").click(()=>{
		sh();move3();
	});
	$(".right3").click(()=>{
		sh1();move3();
	});
	$(".left4").click(()=>{
		sh();move4();
	});
	$(".right4").click(()=>{
		sh1();move4();
	});
	$(".left5").click(()=>{
		sh();move5();
	});
	$(".right5").click(()=>{
		sh1();move5();
	});
	$(".left6").click(()=>{
		sh();move6();
	});
	$(".right6").click(()=>{
		sh1();move6();
	});
	$(".left7").click(()=>{
		sh();move7();
	});
	$(".right7").click(()=>{
		sh1();move7();
	});
	$(".left8").click(()=>{
		sh();move8();
	});
	$(".right8").click(()=>{
		sh1();move8();
	});
	$(".left9").click(()=>{
		sh();move9();
	});
	$(".right9").click(()=>{
		sh1();move9();
	});
	$(".left10").click(()=>{
		sh();move10();
	});
	$(".right10").click(()=>{
		sh1();move10();
	});
	$(".left11").click(()=>{
		sh();move11();
	});
	$(".right11").click(()=>{
		sh1();move11();
	});
	$(".tab1>li").click((e)=>{
		tab(e);move1();
	});
	$(".tab2>li").click((e)=>{
		tab(e);move2();
	});
	$(".tab3>li").click((e)=>{
		tab(e);move3();
	});
	$(".tab4>li").click((e)=>{
		tab(e);move4();
	});
	$(".tab5>li").click((e)=>{
		tab(e);move5();
	});
	$(".tab6>li").click((e)=>{
		tab(e);move6();
	});
	$(".tab7>li").click((e)=>{
		tab(e);move7();
	});
	$(".tab8>li").click((e)=>{
		tab(e);move8();
	});
	$(".tab9>li").click((e)=>{
		tab(e);move9();
	});
	$(".tab10>li").click((e)=>{
		tab(e);move10();
	});
	$(".tab11>li").click((e)=>{
		tab(e);move11();
	});
})
