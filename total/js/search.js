var html = '';
html = `<a href="javascript:;" class="pointer goto_map">
                  <span class="glyphicon glyphicon-map-marker"></span>
               
               <span>寻找零售商</span></a>`;

$('.supplier').html(html);

function search_result() {
    $("#main").css({ 'background':'none'});
    var chooseArray=new Object();
    if($(":text").val()!='') {
        chooseArray.key = $(":text").val();
    }

    $.ajax({
        url:"data/search.php",
        type:"post",
        data:chooseArray,
        dataType:"json",
        success:function(data){

            var html='';//手表搜索结果
            for(i=0;i<data.length;i++){
                html+=`<a href="#" class="blocking" data_tzlj=${i+1}>
     <img src="${data[i].xqimg}" alt="">
     <div class="tips">
     <p class="version">${data[i].xqname}</p>
     <p>${data[i].xqbd},${data[i].xqhm}毫米,${data[i].xqcz}</p>
</div>     
     </a>`;
            }
            var html5="";
            var content_text=new Array(
            "制表工艺",
            "给劳力士的表扬信",
            "零售商",

            "保养您的劳力士腕表",
            "零售商",

            "选购劳力士腕表",
            "特选腕表系列",

            "潜水腕表",
            "零售商",

            "检修您的劳力士腕表",
            "制表工艺",

            "劳力士之道",
            "制表工艺",

            "劳力士之道 - 瑞士制造",
            "特选腕表系列",

            "帆船运动腕表",
            "一只劳力士，一个故事",

            "唐・沃尔什",
            "一只劳力士，一个故事",

            "史蒂夫 ∙ 戈尔达",
            "一只劳力士，一个故事",

            "李云迪",
            "科学与探险",

            "雄才伟略大奖",
            "劳力士的历史",

            "1971 - 1992年",
            "一只劳力士，一个故事",

            "罗德・拉沃",
            "一只劳力士，一个故事",

            "罗杰 · 费德勒",
            "一只劳力士，一个故事",

            "蒂姆・亨曼",
            "科学与探险",

            "水底世界探险",
            "马术",

            "场地障碍赛大满贯",

            )

            for(var i=1;i<=18;i++){
                html5+=`<a href="javascript::" class="nothing_img" style="display: none;">
                                    
                                        <div class="nothing_bg" style="background-image: url('img/search_content/${i}.jpg') "></div>
                                            <p class="title_left">${content_text[(i*2-1)]}</p>                                       
                                    <div class="shadows">
                                        
                                    </div>
                                    <div class="shadows_title">
                                    <p class="shadows_font">${content_text[(i*2-2)]}</p><p class="black_line"></p><p>探索更多</p>
</div>
                                    </a>`;
            }
            //第一段代码头部
            var html2='';
            html2=`<div class="row">
                                <div class="col-xs-12">
                                    <h2 class="title_bar">腕表</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="btns_watch_content">
                                        <span class="btn_watch choosed">腕表</span><span class="btn_content">内容</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <a href="#" class="fliter">
                                        <span>筛选结果</span>
                                        <span class="glyphicon glyphicon-triangle-bottom"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        <div class="result_group align_center">
            <div class="page page_up">
                <span>页</span>
                <span>1</span>
                <a href="#">
                    <span class="right_span"></span>
                </a>
            </div><hr>
            <div class="result">`;
            //拼接头部和搜索结果
            html2=html2+html+html5;
            var html3='';
            html3=`</div><br>
            <div class="page page_down">          
                <span>页</span>
                <span>1</span>
                <a href="#">
                    <span class="right_span"></span>
                </a>
            </div>`;

            html2=html2+html3;//腕表搜索结果+尾部


            var html4='';
            html4=`<div class="nothing">
                                <h1>查无结果</h1>
                                <p>请输入其他搜寻字词或使用下方链结浏览网站</p>
                                <p class="black_line"></p>
                                <div class="nothing_imgs">
                                    <a href="javascript:;" class="nothing_img goto_search_xia">                                    
                                        <img src="img/none/solr_01.jpg" alt="">
                                            <p>劳力士腕表</p>                                       
                                    <div class="shadows">
                                        
                                    </div>
                                    <div class="shadows_title">
                                    <p>劳力士腕表</p><p class="black_line"></p><p>探索腕表系列</p>
</div>
                                    </a><a href="#" class="nothing_img">
                                    <img src="img/none/solr_02.jpg" alt="">
                                    <p>劳力士世界</p>
                                    <div class="shadows">
                                        
                                    </div>
                                    <div class="shadows_title">
                                    <p>劳力士世界</p><p class="black_line"></p><p>探索更多</p>
</div>
                                    </a><a href="javascript:;" class="nothing_img goto_map">
                                    <img src="img/none/solr_03.jpg" alt="">
                                    <p>零售商地址</p>
                                    <div class="shadows">                                        
                                    </div>
                                    <div class="shadows_title">
                                    <p>零售商地址</p><p class="black_line"></p><p>寻找零食商</p>
</div>
                                    </a>
                                </div>
                            </div>`;

            if(data.length!=0){
                $('.supplier').html(html2);//手表搜索结果页面

                $(".btn_content").click(()=>{
                    $(".nothing_img").show();
                    $(".blocking").hide();
                    $(".btn_content").addClass("choosed");
                    $(".btn_watch").removeClass("choosed");
                });
                $(".btn_watch").click(()=>{
                    if($(".btn_watch").hasClass(".choosed")==false){
                        $(".btn_watch").addClass("choosed");
                        $(".btn_content").removeClass("choosed");
                    }
                    $(".nothing_img").hide();
                    $(".blocking").show();});
                for(var i=1;i<data.length;i++){
                    (function(i){
                        var j=i-1;
                        var xqid=data[j].xqid;
                        $('[data_tzlj="'+i+'"]').click(function(){
                            location.href="zhy-index.html?"+"xqid="+xqid;
                        })
                    })(i);
                }
            }
            if(data.length==0){

                $('.supplier').html(html4);//搜索结果不存在页面
                $('.goto_map').click(function(){
                    location.href="map.html";
                })
                $('.goto_search_xia').click(function(){
                    location.href="search-xia.html";
                })
            }

        },
        error:function(){
            console.log("网络连接错误请检查");
        }
    });
}

$("#search_btn").click(function (){//搜索框点击事件
       search_result();
    $(".unknown").css("display","none");
});



var chooseArray = new Object();
var zjh=0;
var zjh_f=1;
$("#input_box").keyup(function() {//搜索框enter事件
        if(event.keyCode == "13"){//按下enter键
            if($(".list_href").hasClass("list_hover")){//下拉菜单有条目被选中
                $("#input_box").val($(".list_hover").html());//输入框获取条目内容
            }
            search_result();//加载搜索结果
            $(".unknown").css("display","none");//下拉菜单收回
            $(".title_text").css("padding","100px 40px");//搜索框向顶部靠近
            if($("a.list_hover").hasClass("goto_search_xia")){
                location.href="search-xia.html";
            }
            if($("a.list_hover").hasClass("goto_map")){
                location.href="map.html";
            }
        }else {
            if ($("#input_box").val() != '') {
                chooseArray.key = $(":text").val();//将输入框文字放进一个数组
            }
            var keywords = new Array(
                "小型款",
                "中型款",
                "大型款",
                "钢",
                "金及钢",
                "黄金",
                "粉红金",
                "白色黄金",
                "铂金",
                "光滑外圈",
                "三角坑纹外圈",
                "专业外圈",
                "Cerachrom外圈",
                "宝石镶嵌外圈",
                "不设日历显示",
                "显示日历",
                "计时表",
                "两地时区",
                "潜水表",
                "航海表",
                "月相",
                "Oysterflex",
                "蚝式",
                "元首型",
                "纪念型",
                "Pearlmaster",
                "镶嵌宝石表带",
                "浅色表盘",
                "彩色表盘",
                "深色表盘",
                "密镶砖石表盘",
                "阿拉伯数字",
                "罗马数字",
                "经典钟点标记",
                "镶嵌宝石钟点标记");
            var keyArray = [];
            if (chooseArray != []) {
                for (var i = 0; i < keywords.length; i++) {
                    var reg = new RegExp(chooseArray.key, "");

                        var result = reg.test(keywords[i]);
                        if (result) {
                            keyArray.push(keywords[i]);
                        }

                }
                var unhtml = "";
                if (keyArray.length != 0) {
                    console.log(reg);
                    if(reg!="/(?:)/") {
                        console.log(keyArray);
                        unhtml = `<p class="list_href list_true">劳力士腕表</p>`;
                        for (var i = 0; i < keyArray.length; i++) {
                            unhtml += `<a href="#" class="list_href" >${keyArray[i]}</a>`;
                        }
                    }
                }

                if (keyArray.length == 0) {
                    unhtml = `<p>请按输入键进行搜索</p>
                                <p class="list_href list_false">我们的建议</p>
                                <a href="javascript:;" class="list_href goto_search_xia" >劳力士腕表</a>
                                <a href="#" class="list_href">进阶搜寻</a>
                                <a href="javascript:;" class="list_href goto_map">零售商地址</a>`;

                }

                $(".unknown").html(unhtml);
                // console.log($(".unknown").html());
                // console.log(event.keyCode);
                $('.goto_map').click(function(){
                    location.href="map.html";
                })
                $('.goto_search_xia').click(function(){
                    location.href="search-xia.html";
                })
                if($("p.list_href").hasClass("list_true")) {
                    if (event.keyCode == 40) {
                        zjh = zjh + 1;
                        if (zjh > keyArray.length) {
                            zjh = keyArray.length
                        }
                        var num = ":eq(" + zjh + ")";
                        var red = $(this).next().siblings().children(num);
                        console.log(red);
                        red.addClass("list_hover").siblings("a").removeClass("list_hover");
                    }
                    if (event.keyCode == 38) {
                        zjh = zjh - 1;
                        if (zjh < 1) {
                            zjh = 1;
                        }
                        var num = ":eq(" + zjh + ")";
                        var red = $(this).next().siblings().children(num);
                        red.addClass("list_hover").siblings("a").removeClass("list_hover");
                    }
                    $("a.list_href").click(e=>{//点击输入框下拉菜单选项，生成搜索结果
                        $("#input_box").val($(e.target).html());
                        search_result();
                        $(".unknown").css("display","none");
                    });
                    if($("a.list_href").hasClass("list_hover")){
                        if(event.keyCode==13){
                            $("#input_box").val($(".list_hover").html());search_result();
                        }
                    }
                }
                if($("p.list_href").hasClass("list_false")) {
                    if (event.keyCode == 40) {
                        zjh_f = zjh_f + 1;
                        if (zjh > 4) {
                            zjh = 4;
                        }
                        var num = ":eq(" + zjh_f + ")";
                        var red = $(this).next().siblings().children(num);

                        red.addClass("list_hover").siblings("a").removeClass("list_hover");
                    }
                    if (event.keyCode == 38) {
                        zjh_f = zjh_f - 1;
                        if (zjh_f < 2) {
                            zjh_f = 2;
                        }
                        var num = ":eq(" + zjh_f + ")";
                        var red = $(this).next().siblings().children(num);
                        red.addClass("list_hover").siblings("a").removeClass("list_hover");
                    }
                    if($("a.list_href").hasClass("list_hover")){
                        if(event.keyCode==13){
                            $("#input_box").val($(".list_hover").html());
                        }
                    }

                }

                $("a.list_href").hover(function(){
                    $(this).css({"background-color":"#708090","color":"#FFFAFA"});
                },function(){
                    $(this).css({"background-color":"white","color":"#666"});
                });

            }

        }
    if ($("#input_box").val() == ''){
        $(".unknown").css("display","none");
    }
    if (($("#input_box").val() !== '')&&(event.keyCode!==13)){
        $(".unknown").css("display","block");
    }

});

$("#input_box").click(()=>{
    $(".unknown").css("display","block");
});
if ($("#input_box").val() == ''){
    $(".unknown").css("display","none");
}

document.addEventListener('click',function( e ){
    var aa = document.getElementById('input_box')

    if( e.target !== aa ){
        $(".unknown").css("display","none");
    }
},false)
$('.goto_index').click(function(){
    location.href="index.html";
})
$('.goto_map').click(function(){
    location.href="map.html";
})
$('.goto_search_xia').click(function(){
    location.href="search-xia.html";
})
