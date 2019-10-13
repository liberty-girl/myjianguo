/*
面向对象写导航栏滑过效果
*/
class Navhover{
	//构造函数
	constructor(navhoverDom,obj){
		this.navhoverDom = navhoverDom;
		this.ul = null;//所有li标签的容器
		this.hot = obj.hot;//新品或热销文字
		this.imgs = obj.imgs;//图片
		this.name = obj.name;//商品的名称
		this.price = obj.price;//商品的价格
		this.render();
		this.ShowAndHide();
	}

	//方法：
	//渲染（创建所有的Dom元素）
	render(){
		//创建ul，li等
		//一，创建ul
		this.ul = document.createElement("ul");
		this.ul.style.cssText = `
			width: 1190px;
			margin: 0 auto;
			padding-left: 130px;
			overflow:hidden;
		`;
		this.navhoverDom.appendChild(this.ul);
		//二，创建li
		let num = this.imgs.length;
		for(let i=0;i<num;i++){
			let liDom = document.createElement("li");
			liDom.style.cssText = `
				width: 174px;
				height: 199px;
				float: left;
				text-align: center;
				padding: 40px 12px 0px 12px;
				position: relative;
			`;
			this.ul.appendChild(liDom);
			if(this.hot[i]!=""){
				let hotDom = document.createElement("div");
				hotDom.style.cssText = `
					display: inline-block;
					height: 20px;
					padding: 0 20px;
					border: 1px solid #cf211b;
				    color: #cf211b;
				    position: absolute;
				    top: 0;
				    left: 0;
				    margin-left: 50px;
				`;
				hotDom.innerHTML = this.hot[i];
				liDom.appendChild(hotDom);
			}
			let hotbottom = document.createElement("div");
			hotbottom.style.cssText = `
				width:150px;
				height:110px;
				margin-bottom:10px;
				border-right: 1px solid #ccc;
			`;
			liDom.appendChild(hotbottom);
			let a1 = document.createElement("a");
			a1.href = '"#"';
			a1.style.cssText = `
				width:149px;
				height:110px;
			`;
			hotbottom.appendChild(a1);
			let img = document.createElement("img");
			img.src = this.imgs[i];
			img.style.cssText = `
				width: 110px;
				height: 110px;
				margin: 0 auto;
			`;
			a1.appendChild(img);
			let a2 = document.createElement("a");
			a2.href = '"#"';
			a2.style.cssText = `
				font-size:12px;
				color: #757575;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
			`;
			a2.innerHTML = this.name[i];
			liDom.appendChild(a2);
			let p = document.createElement("p");
			p.style.cssText = `
				font-size: 14px;
   				color: #cf211b;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
			`;
			p.innerHTML = this.price[i];
			liDom.appendChild(p);
		}
	}

	//功能
	ShowAndHide(){
		let as1 = $(".navm");
		let navhover = $(".navhover");
		for(let i=0;i<navhover.length;i++){
			as1[i].onmouseover = function(){
				navhover[i].style.display = "block";
			}
					
			as1[i].onmouseout = function(){
				// let myTimer = setTimeout(function(){
					if(!isInside){
						navhover[i].style.display = "none";
					}
				// },0);
			}
			
			var isInside = false;
			navhover[i].onmouseover = function(){
				isInside = true;
				as1[i].onmouseover();
			}
			navhover[i].onmouseout = function(){
				isInside = false;
				this.style.display = "none";
			}
			
		}



		// let myTimer=0;
		// $(".navm").mouseenter(function(){
		// 	// if($(".navhover").css("display","none")){
		// 	// 	$(this).next().slideDown();
		// 	// }else 
		// 	if($(".navhover").css("display","block")){
		// 		// console.log("checkclass:mouseenter");
		// 		// $(".navhover").css("display","none");
		// 		$(this).next().slideDown();
		// 	}
			
		// });

		// $(".navm").mouseleave(function(){
		//     myTimer=setTimeout(function(){
		// 		$(this).next().slideUp();
		// 		console.log(11111);
		// 	},5);
		// });

		// $(".navhover").mouseenter(function(){	
		// 	clearInterval(myTimer);
		// 	//$(this).show();	
		// });

		// $(".navhover").mouseleave(function(){
		// 	$(this).hide();	
		// });


		// let myTimer=0;
		// $(".navm").mouseenter(function(){
		// 	// $(this).next().slideDown();
		// 	if($(".navhover").css("display","none")){
		// 		console.log("checkclass:mouseenter");
		// 		$(this).next().slideDown();
		// 		console.log($(this));
		// 	}
			
		// });

		// $(".navm").mouseleave(function(){
		// 	myTimer=setTimeout(function(){
		// 		$(this).next().slideUp();
		// 		console.log(11111);
		// 		clearInterval(myTimer);
		// 	},0);
		    
		// });

		// $(".navhover").mouseenter(function(){	
		// 	clearInterval(myTimer);
		// 	//$(this).show();	
		// });

		// $(".navhover").mouseleave(function(){
		// 	$(this).hide();	
		// })


	}
}
