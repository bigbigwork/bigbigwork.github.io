function Obj_2(){
			this.type="obj_2";
			this.id="";
			this.background="#fff";
			this.color="#000";
			this.border=2;
			this.border_color="#999";
			this.z_index=0;
			this.top= Math.floor(Math.random() * (254));
			this.left= Math.floor(Math.random() * (254));
			this.width=200;
			this.height=100;
			this.text='text';
			
			this.mousedown=false;
			this.canMove=false;
			this.canUp=false;
			this.canDown=false;
			this.canLeft=false;
			this.canRight=false;
		}
		Obj_2.prototype.path=function(){
			ctx.beginPath();
			ctx.moveTo(this.left,this.top);
			ctx.lineTo(this.left,this.top+this.height);
			ctx.lineTo(this.left+this.width,this.top+this.height);
			ctx.lineTo(this.left+this.width,this.top);
			ctx.lineTo(this.left,this.top);
			ctx.strokeStyle="green";
			ctx.stroke();
		}
		Obj_2.prototype.selectUp=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left+this.width/2,this.top,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.selectDown=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left+this.width/2,this.top+this.height,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.selectLeft=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left,this.top+this.height/2,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.selectRight=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left+this.width,this.top+this.height/2,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.selectA=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left,this.top,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.selectB=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left+this.width,this.top,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.selectC=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left,this.top+this.height,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.selectD=function(){
			ctx.fillStyle='yellow';
			ctx.beginPath();
			ctx.arc(this.left+this.width,this.top+this.height,4,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		Obj_2.prototype.over=function(){
			ctx.beginPath();
			ctx.moveTo(this.left,this.top);
			ctx.lineTo(this.left,this.top+this.height);
			ctx.lineTo(this.left+this.width,this.top+this.height);
			ctx.lineTo(this.left+this.width,this.top);
			ctx.lineTo(this.left,this.top);
			ctx.strokeStyle="blue";
			ctx.stroke();
			this.selectUp();
			this.selectDown();
			this.selectLeft();
			this.selectRight();
		}
		Obj_2.prototype.select=function(){
			ctx.beginPath();
			ctx.moveTo(this.left,this.top);
			ctx.lineTo(this.left,this.top+this.height);
			ctx.lineTo(this.left+this.width,this.top+this.height);
			ctx.lineTo(this.left+this.width,this.top);
			ctx.lineTo(this.left,this.top);
			ctx.strokeStyle="red";
			ctx.stroke();
			//   select
			this.selectUp();
			this.selectDown();
			this.selectLeft();
			this.selectRight();
			this.selectA();
			this.selectB();
			this.selectC();
			this.selectD();
			//
		}
		Obj_2.prototype.prinText=function(){
			ctx.font="14px Georgia";
			ctx.fillStyle=this.color;
			ctx.fillText(this.text,this.left+this.border+this.width/2,this.top+this.border+this.height/2);
		}
		Obj_2.prototype.update=function(){
			//this.path();
			this.prinText();
			
		}