(()=>{
		//页面加载完毕才执行
		//视频统一高度：
		$(window).resize(function(){
			//location.reload()
			var videos_height = $(window).height();
		});
		//视频路径/链接(数组形式):
		var videos_url = [
			'video/001.mp4',
			'video/002.mp4'
		];
		var videos_count = videos_url.length;
		//轮播圆点按钮节点
		$('.banner ul').css('width',(videos_count+1)*101+'%');
		$('.banner ol').css('width',videos_count*20+'px');
		$('.banner ol').css('margin-left',-videos_count*20*0.5-500+'px');

		//=========================

		var num = 0;
		//获取窗口宽度
		var window_width = $(window).width();
		$(window).resize(function(){
			window_width = $(window).width();
			$('.banner ul li').css({width:window_width});
				clearInterval(timer);
				nextPlay();
		});
		$('.banner ul li').width(window_width);
		//轮播圆点
		$('.banner ol li').mouseover(function(){
			var i = $(this).index();
			//console.log(i);
			$('.banner ul').stop().animate({left:-i*window_width},500);
			num = i;
		});
		//自动播放
		var timer = setInterval(nextPlay,5000);
		//上一个
		function prevPlay(){
			num--;
			if(num<0){
				//悄悄把视频跳到最后一张图(复制页,与第一张图相同),然后做出视频播放动画，left参数是定位而不是移动的长度
				$('.banner ul').css({left:-window_width*videos_count}).stop().animate({left:-window_width*(videos_count-1)},500);
				num=videos_count-1;
			}else{
				//console.log(num);
				$('.banner ul').stop().animate({left:-num*window_width},500);
			}
			if(num==videos_count-1){
				$('.banner ol li').eq(videos_count-1).addClass('current').siblings().removeClass('current');
			}else{
				$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
			}
		}
		//下一个
		function nextPlay(){
			num++;
			if(num>videos_count){
				//播放到最后一张(复制页)后,悄悄地把视频跳到第一张,因为和第一张相同,所以难以发觉,
				$('.banner ul').css({left:0}).stop().animate({left:-window_width},500);
				num=1;
			}else{
				//在最后面加入一张和第一张相同的视频，如果播放到最后一张，继续往下播，悄悄回到第一张(肉眼看不见)，从第一张播放到第二张
				//console.log(num);
				$('.banner ul').stop().animate({left:-num*window_width},500);
			}
			if(num==videos_count){
				$('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
			}else{
				$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
			}
		}
		//鼠标经过banner，停止定时器,离开则继续播放
			$('.banner').mouseenter(function(){
				//左右箭头显示(淡入)
				$('.banner i').fadeIn();	
			}).mouseleave(function(){
				//左右箭头隐藏(淡出)
				$('.banner i').fadeOut();
			});
		//播放下一张
		$('.banner .right2').click(function(){
			nextPlay();
		});
		//返回上一张
		$('.banner .left2').click(function(){
			prevPlay();
		});
//		//进度条
//		function jindu(){
//			var v = 1;
//			var timer = setInterval(function(){
//			  v ++;
//			  $("#p3").attr("style","width:"+v+"%");
//			  if(v>99){
//				clearInterval(timer);
//			  }
//			},50);
//		}
//		jindu();
})();