/*
面向对象写下面的ul产品
*/

class UlMain{
	//构造函数
	constructor(ulmainDom,obj){
		this.ulmainDom = ulmainDom;//传入的盒子
		this.div = null;//左侧大盒子
		this.ul = null;//右侧的ul
		this.divheight = obj.height;//左侧大盒子的高度
		this.imgs = obj.imgs;//图片
		this.hot = obj.hot;//新品或热销文字
		this.name = obj.name;//商品的名称
		this.price1 = obj.price1;//商品的现价格
		this.price2 = obj.price2;//商品的原价格
		this.cheap = obj.cheap;//优惠
		this.render();
	}

	//方法
	//渲染（创建所有的Dom元素）
	render(){
		//创建左侧div
		this.div = document.createElement("div");
		this.div.style.cssText = `
			float: left;
			width: 222px;
			height: ${this.height}px;
			margin-bottom: 14px;
		`;
		this.ulmainDom.appendChild(this.div);
		//创建左侧盒子里面的a
		let aleft = document.createElement("a");
		aleft.href = '"#"';
		this.div.appendChild(aleft);
		//创建左侧盒子里面的img
		let imgleft = document.createElement("img");
		imgleft.src = this.imgs[0];
		imgleft.style.cssText = `
			width: 222px;
			height: ${this.height}px;
		`;
		aleft.appendChild(imgleft);
		//创建右侧的ul
		this.ul = document.createElement("ul");
		this.ul.style.cssText = `
			float: right;
			width: 968px;
			height: ${this.height}px;
		`;
		this.ulmainDom.appendChild(this.ul);
		//创建li
		let num = this.imgs.length;
		for(let j=1;j<num;j++){
			let liDom = document.createElement("li");
			liDom.style.cssText = `
				float: left;
				width: 228px;
				height: 284px;
				background: #fff;
				margin-left: 14px;
				position: relative;
				margin-bottom: 14px;
			`;
			this.ul.appendChild(liDom);
			let aright = document.createElement("a");
			aright.href = '"#"';
			liDom.appendChild(aright);
			let imgright = document.createElement("img");
			imgright.src = this.imgs[j];
			imgright.style.cssText = `
				width: 228px;
				height: 170px;
			`;
			aright.appendChild(imgright);
			let h4 = document.createElement("h4");
			h4.style.cssText = `
				width: 210px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 16px;
				font-weight: 400;
				color: #222;
				padding-left: 20px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			`;
			h4.innerHTML = this.name[j];
			aright.appendChild(h4);
			let span = document.createElement("span");
			span.style.cssText = `
				display: block;
			    width: 90%;
			    margin: 0 auto;
			    text-align: center;
			    line-height: 30px;
			    font-size: 14px;
			    color: #999;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			`;
			span.innerHTML = this.cheap[j];
			aright.appendChild(span);
			let p = document.createElement("p");
			p.style.cssText = `
				width: 100%;
			    text-align: center;
			    line-height: 30px;
			    font-size: 14px;
			`;
			aright.appendChild(p);
			let b = document.createElement("b");
			b.style.cssText = `
				color: red;
				font-weight: normal;
			`;
			b.innerHTML = this.price1[j];
			p.appendChild(b);
			let del = document.createElement("del");
			del.style.cssText = `
				color: #999;
    			padding-left: 10px;
			`;
			del.innerHTML = this.price2[j];
			p.appendChild(del);
			if(this.hot[j]!=""){
				let i = document.createElement("i");
				i.style.cssText = `
					font-style: normal;
					font-size: 12px;
					color: #fff;
					background: #fe2827;
					border-radius: 3px;
					padding: 1px 9px;
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
				`;
				i.innerHTML = this.hot[j];
				if(this.hot[j]=="新品"){
					i.style.backgroundColor = "#83c44e";
				}else if(this.hot[j]=="热销"){
					i.style.backgroundColor = "#fbac30";
				}
				aright.appendChild(i);
			}
		}
		
	}
}