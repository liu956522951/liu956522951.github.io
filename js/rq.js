(function(){
	var dateObj = (function(){
    var date1 = new Date();    // 默认为当前系统时间
    return {
      getDate : function(){
        return date1;
      },
      setDate : function(date) {
        date1 = date;
      }
    };
	})();
function inserthtml(){ 
	//向id为datepickerButton中添加该有的div
	var datepickerButton = document.getElementById("datepickerButton");
	//在原生js中创建div
	var headbox = document.createElement("div");
	var bodybox = document.createElement("div");
	//在头部headbox中导入html的结构
	headbox.className = 'head-title';
	headbox.innerHTML = "<span id='last-day' class='last-day'></span>"+
	"<span class='time' id='time'></span>"+
	"<span class='timeDay' id='timeDay'></span>"+
	"<span class='next-day' id='next-day'></span>";
	datepickerButton.appendChild(headbox);
};
inserthtml();
function datehtml(){
 //显示顶部部分
	//var date1 =new Date();
 //	console.log(date1)
	var month = dateObj.getDate().getMonth()+1;
	var date = dateObj.getDate().getDate();
	var day = dateObj.getDate().getDay();
	//var timeStr = DateStr(date1);
	//console.log(timeStr);
	//console.log(year);
	//console.log(month);
	//获取头部位置
	time = document.getElementById("time");
	//动态插入其中的年月
	(day==0)?day=7:day=day;
	titlestr = month + "M" + date + "R";
	time.innerText = titlestr;
	timeDay = document.getElementById("timeDay");
	titledaystr = "Week" + day;
	timeDay.innerText = titledaystr;
};
datehtml();
/*
为上下月绑定事件
*/
function lastnext(){
	var last = document.getElementById("last-day");
	var next = document.getElementById("next-day");
	//console.log(1);
	//console.log(next);
	//绑定上一个月的按钮
	last.addEventListener('click',function(){
		var date = dateObj.getDate();
		//console.log(date);
		dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()-1));
		datehtml();
	});
	//绑定下一个月的按钮
	next.addEventListener('click',function(){
		var date = dateObj.getDate();
		console.log(date);
		console.log(date.getDate());
		dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()+1));
		datehtml();		
	})	
}
lastnext();
})();