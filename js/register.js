$(".close").click(function(){
	$(".register").style.display = "none";
});

let str;
$(".ceshi").focus(function(){
	str = $(this).prop("placeholder");
	$(this).attr("placeholder","");
	$(this).css("color","black");
});

$(".ceshi").blur(function(){
	$(this).attr("placeholder",str);
	$(this).css("color","#bbb");
});