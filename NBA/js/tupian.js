function fn() {
num--;
num <= -580 ? num = 0 : num;
div.style.left = num + "px";
}
var box = document.getElementById("box");
console.log(box);
var div = box.children[2];
var num = 0;
timer = setInterval(fn,10);
$(function(){
	$.ajax({
	type:"get",
	url:"JSON/data.json"
	}).then(function(data){
		console.log(data);
		var html = "";
		for(i=0;i<data.length;i++){
			html += '<div class="zy"><div class="broadcast"><div class="logo1"> <div> <img src="'+data[i].img1+'"> </div> <div>'+data[i].title1+'</div> </div> <p>'+data[i].time+'</p> <div class="logo2"> <div> <img src="'+data[i].img2+'"> </div> <div>'+data[i].title2+'</div> </div> </div> </div>'
		}
		$(".scoreboard-games__game").html(html);
	})
})
$(function(){
	$.ajax({
	type:"get",
	url:"JSON/getteam.json"
	}).then(function(data){
		console.log(data);
		var html = "";
		for(i=0;i<data.length;i++){
			html += '<tr> <td>'+data[i].tid+'</td> <td><img src="'+data[i].img+'" alt=""></td> <td>'+data[i].title+'</td> <td>'+data[i].amount1+'</td> <td>'+data[i].amount2+'</td> <td>'+data[i].amount3+'</td> </tr>'
		}
		$(".qdpm").html(html);
	})
})
