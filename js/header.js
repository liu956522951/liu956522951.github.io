$("#header").load("header.html",function(){
	$(".dropdown")
		.hover(function(){
			$(this)
			.children(".nbastore-menu")
			.toggleClass("in")
	})
	$(".nav-tab")
		.hover(function(){
			$(this)
			.children(".nav-menu")
			.toggleClass("on")
	})
	$(".side-user")
		.hover(function(){
			$(this)
			.children(".user-menu")
			.toggleClass("on")
	})
	//
	$(".nav-teams")
		.hover(function(){
			$(this)
			.children(".nav-team")
			.toggleClass("on")
	})
	//登录和注册的切换
	$(".nav-tabs:has([data-toggle=tab])")
      .on("click","[data-toggle=tab]",function(e){
	  e.preventDefault();
      var $tar=$(e.target);
	  //console.log(1);
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active1")
          .siblings().removeClass("active1");
      }
    })
	//绑定登录按钮事件
	$(".side-user>.dl>.user-login>span").click(function(){
		//console.log(1);
		$(".modal").removeClass("fade").addClass("fadein");
		$(".modal-content").animate({
			marginTop:100
		},1000)
	})
	//点差退出
	$(".close-modal>span").click(function(){
		$(".modal").removeClass("fadein").addClass("fade");
		$(".modal-content").animate({
			marginTop:-450
		},500)
	})
	//浮在最高级的背景
	$(".modal").click(function(){
		console.log(1);
		$(".modal").removeClass("fadein").addClass("fade");
		$(".modal-content").animate({
			marginTop:-450
		},500)
	})
	//1:获取一下登录的按钮
	//2:绑定点击事件
	$("#btn3").click(function(e){
		e.preventDefault();
		console.log(2);
		//3:获取用户名和密码
		var u = $("#uname").val();
		var p = $("#upwd").val();
		var c = $("#code").val();
		//console.log(u);
		//console.log(p);
		//console.log(c);
		//4:创建正则表达式验证用户名和密码
		var codeReg = /^[0-9]{4}$/i;
		if(!codeReg.test(c)) {
			alert("验证码格式不正确，请检查");
			return;
		}
		var reg = /^[a-z0-9]{3,12}$/i;
		if(!reg.test(u)) {
			alert("用户名格式不正确，请检查")
		}
		//5:发送ajax请求 
		$.ajax({
			type:"post",
			url:"data/login/login.php",
			data:{uname:u,upwd:p,code:c},
			success:function(data){
			//console.log(5);
			//console.log(data);//js对象
			if(data.code>0){
				alert(data.msg);
				location.href="index.html";
			}else{
				alert(data.msg);
			}
			},
			error:function(){
				//php语法出错
				//php sql 语法出错
				//php header 出错
				//请求地址不正确或者参数出错-
				alert("网络故障请检查");
			}
		});
	})
	//获取一下注册的按钮
	//绑定点击事件
	$("#btn4").click(function(e){
		e.preventDefault();
		//console.log(2);
		//获取用户名和密码
		var n = $("#zh").val();
		var p = $("#mm").val();
		var e = $("#email").val();
		console.log(n);
		console.log(p);
		console.log(e);
		//创建正则表达式验证用户名和密码和邮箱的格式正确
		var reg = /^[a-z0-9]{3,12}$/i;
		if(!reg.test(n)) {
			alert("账号格式不正确,需3到12位的字母或数字")
		}
		if(!reg.test(p)) {
			alert("密码格式不正确,需3到12位的字母或数字")
		}
		var emailreg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if(!emailreg.test(e)) {
			alert("邮箱格式不正确,请检查")
		}
		//5:发送ajax请求 
		$.ajax({
			type:"post",
			url:"data/login/login_zc.php",
			data:{uname:n,upwd:p,email:e},
			success:function(data){
			console.log(5);
			console.log(data);//js对象
			if(data.code>0){
				alert(data.msg);
				location.href="index.html";
			}else{
				alert(data.msg);
			}
			},
			error:function(){
				//php语法出错
				//php sql 语法出错
				//php header 出错
				//请求地址不正确或者参数出错-
				alert("网络故障请检查");
			}			
		})
	})
	//登录状态
	function isLogin(){
		$.get("data/login/islogin.php")
			.then(function(data){
			if(data.ok==0){
				$("[data-toggle=loginList]")//.show()
					.next().hide();
			}else{
				$("[data-toggle=loginList]").hide()
					.next()//.show()
						.find("[data-name=uname]")
							.html(data.uname);
				}
				$(".user-head>img").attr("src",data.img);
			})
	}
	isLogin();
	//退出按钮
	$(".side-user>.tc>.user-login>span").click(function(){
		//console.log(1);
		$("[data-toggle=loginList]").show().next().hide();
		$(".user-head>img").attr("src","imgs/head/icon_30_user_f91522.png");
	})
	//fixed导航栏
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=120-50){
			$(".fixed-header")
				.removeClass("show");
		}else{
			$(".fixed-header").addClass("show");
		}
	})
})