$(function(){
	$.ajax({
	type:"get",
	url:"JSON/getteam1.json"
	}).then(function(data){
		console.log(data);
		var html = "";
		for(i=0;i<data.length;i++){
			html += '<tr><td>'+data[i].tid+'</td><td><img src="'+data[i].img+'" alt=""></td> <td>'+data[i].title+'</td> <td>'+data[i].amount1+'</td> <td>'+data[i].amount2+'</td> <td>'+data[i].amount3+'</td> </tr>'
		}
		$(".qdpm1").html(html);
	})
})
$(function(){
	$.ajax({
	type:"get",
	url:"JSON/getteam2.json"
	}).then(function(data){
		console.log(data);
		var html = "";
		for(i=0;i<data.length;i++){
			html += '<tr><td>'+data[i].oid+'</td><td><img src="'+data[i].img+'" alt=""></td> <td>'+data[i].title+'</td> <td>'+data[i].amount1+'</td> <td>'+data[i].amount2+'</td> <td>'+data[i].amount3+'</td> </tr>'
		}
		$(".fqqdpm").html(html);
	})
})
$(function(){
	$.ajax({
	type:"get",
	url:"JSON/getteam3.json"
	}).then(function(data){
		console.log(data);
		var html = "";
		for(i=0;i<data.length;i++){
			html += '<tr><td>'+data[i].cid+'</td><td><img src="'+data[i].img+'" alt=""></td> <td>'+data[i].title+'</td> <td>'+data[i].amount1+'</td> <td>'+data[i].amount2+'</td> <td>'+data[i].amount3+'</td> </tr>'
		}
		$(".fqqdpm1").html(html);
	})
})
$(function(){
	$.ajax({
	type:"get",
	url:"JSON/getteam4.json"
	}).then(function(data){
		console.log(data);
		var html = "";
		for(i=0;i<data.length;i++){
			html += '<tr><td>'+data[i].sid+'</td><td><img src="'+data[i].img+'" alt=""></td> <td>'+data[i].title+'</td> <td>'+data[i].amount1+'</td> <td>'+data[i].amount2+'</td> <td>'+data[i].amount3+'</td> </tr>'
		}
		$(".fqqdpm2").html(html);
	})
})