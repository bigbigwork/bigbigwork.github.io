/**
 * Created by g on 2014/12/26.
 * http://www.github.com/bigbigwork
 */
var bbw=function(s){
    this.objs=document.querySelectorAll(s);
};

/* display */
bbw.prototype.hide=function(){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].style.display="none";
    }
    return this;
}
bbw.prototype.show=function(){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].style.display="block";
    }
    return this;
}
/* innerHTML */
bbw.prototype.text=function(t){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].innerHTML=t;
    }
    return this;
}

/* random Array */
bbw.prototype.randomArray=function(){
    console.log(this.objs);
    this.objs=this.objs.sort(function(){
        return Math.random() > 0.5 ? -1 : 1;
    });
    return this;
}

/* onload */
bbw.prototype.ready=function(x){
    window.onload=x;
}

/* pc mouse over and out */
bbw.prototype.hover=function(x){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].onmouseover=x;
    }
    return this;
}
bbw.prototype.out=function(x){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].onmouseout=x;
    }
    return this;
}
/* onclick */
bbw.prototype.click=function(x){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].onclick=x;
    }
    return this;
}

bbw.prototype.clearClass=function(){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].removeAttribute("class");
    }
    return this;
}
bbw.prototype.clearAttr=function(a){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].removeAttribute(a);
    }
    return this;
}
bbw.prototype.attr=function(a,b){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].setAttribute(a,b);
        console.log(b)
    }
    return this;
}
/* setAttribute：value from myself */
bbw.prototype.attrSelf=function(a,b){
    for(i=0;i<this.objs.length;i++){
        eval("this.objs[i].setAttribute(a,this.objs[i]."+b+")");
    }
    return this;
}
//bbw=new bbw();
function _(s){
    return new bbw(s);
}