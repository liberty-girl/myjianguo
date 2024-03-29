
// 面向对象写商品列表
    var Ohref=window.location.href;
    var arrhref=Ohref.split("?id=");
    let receiveVal=arrhref[1];

$(document).ready(function(){
    // let url;
    if(receiveVal==undefined){
        // $.getJSON(
        $.get(
            "php/getGoodsList.php",
            "json",
            function($str1){
                send1($str1);
        });
    }else{

        $.get(
            "php/getGoodsInfo.php",
            "goodsId="+receiveVal,
            function($str1){
                let str = "["+$str1+"]";
                send1(str);
        });
    }
    
});

function send1($str1){
    // function($str1){//注意：当data是json字符串时，需要将data转化成json对象
        let $str = JSON.parse($str1);
        let htmlStr = "";
        let total;
        $.each($str,function(i,item){
            //访问每一个的属性，根据属性拿到值
            htmlStr+=`
            <li>
                <a href="#">
                    <img src="img/${item.goodsImg}" alt="">
                    <h4>${item.goodsName}</h4>
                    <p>${item.goodsDesc}</p>
                    <span>${item.goodsPrice}元</span>
                </a>
            </li>
            `;
        });
        total = htmlStr;
        $(".goodslist").html(htmlStr);

        $(".goods_navmain ul").delegate("li","click",function(){
            if(receiveVal!=undefined){
                location.href="goodslist.html";
            }
            $(".goods_navmain li.active").removeClass("active");
            $(this).addClass("active");
            htmlStr = "";
            $.each($str,(i,item)=>{
                if($(this).html()==item.goodsType){
                    htmlStr+=`
                    <li>
                        <a href="#">
                            <img src="img/${item.goodsImg}" alt="">
                            <h4>${item.goodsName}</h4>
                            <p>${item.goodsDesc}</p>
                            <span>${item.goodsPrice}元</span>
                        </a>
                    </li>
                    `;
                }else if($(this).html()=="全部"){
                    htmlStr = total;
                }
            });
            console.log(htmlStr);
            $(".goodslist").html(htmlStr);
        });
}