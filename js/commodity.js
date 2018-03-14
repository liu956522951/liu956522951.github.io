function showTime(){
    timer = setInterval(function(){
        Show();
        i++;
        if(i==3){
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
$(".tab").hover(function(e){
    clearInterval(timer);
    i=$(e.target).index();
    console.log(i);
    Show();
},function(e){
    showTime();
});
$(".scroll-btn-prev").click(function(){
    clearInterval(timer);
    if(i==0){
        i=3
    }
    i--;
    Show();
    showTime();
});
$(".scroll-btn-next").click(function(){
    clearInterval(timer);
    if(i==3){
        i=-1
    }
    i++;
    Show();
    showTime();
});

