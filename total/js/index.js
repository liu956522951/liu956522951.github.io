//加载楼层1
function ss(){
	$.ajax({
		type:"get",
		url:"data/index/gettt.php",
		dataType:"json",
		success:{
			var html="";
			for(var i=0;i<resData.length;i++){
				var p=resData[i];
				html+=
				`<div>
					<div class="zhy_left">
						<img src="${div.img}">
					</div>
					<div class="zhy_algin zhy_bb">
						<div class="zhy_top">
							<h2>${h2.tag}</h2>
							<h1>${h1.title}</h1>
						</div>
						<p>
							${p.details}
						</p>
					</div>
				</div>`
				}
				document.querySelector(".zhy_nav")
							.innerHTML=html;
		}
	})
}

