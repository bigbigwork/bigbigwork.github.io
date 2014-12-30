/**
 * Created by g on 2014/12/26.
 * http://www.github.com/bigbigwork
 * 只增加，不减少，不改变原有方法。
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

    if(t==undefined){
        var arr=new Array();
        for(i=0;i<this.objs.length;i++){
            var value=this.objs[i].innerHTML;
            arr.push(value);
        }
        if(arr.length>1){
            return arr;
        }else{
            return arr[0];
        }
    }else{
        for(i=0;i<this.objs.length;i++){
            this.objs[i].innerHTML=t;
        }
        return this;
    }
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
    /* 2014 12 30 */
    if(b==undefined){
        var arr=new Array();
        for(i=0;i<this.objs.length;i++){
            var value=this.objs[i].getAttribute(a);
            arr.push(value);
        }
        if(arr.length>1){
            return arr;
        }else{
            return arr[0];
        }
    }else{
        for(i=0;i<this.objs.length;i++){
            this.objs[i].setAttribute(a,b);
            console.log(b)
        }
        return this;
    }
}

/* setAttribute：value from myself */
bbw.prototype.attrSelf=function(a,b){
    for(i=0;i<this.objs.length;i++){
        eval("this.objs[i].setAttribute(a,this.objs[i]."+b+")");
    }
    return this;
}
/* from 1 to end+1  */
bbw.prototype.initIndex=function(){
    for(i=0;i<this.objs.length;i++){
        this.objs[i].setAttribute("data-index",(i+1));
    }
    return this;
}
bbw.prototype.count=function(a){
    a["count"]=this.objs.length;
    return this;
}
/* style 2014 12 30 */
bbw.prototype.style=function(a,b){
    /* 2014 12 30 */
    if(b==undefined){
        var arr=new Array();
        for(i=0;i<this.objs.length;i++){
            var cmd="var value=this.objs[i].style."+a;
            eval(cmd);
            arr.push(value);
        }
        if(arr.length>1){
            return arr;
        }else{
            return arr[0];
        }
    }else{
        for(i=0;i<this.objs.length;i++){
            var cmd="this.objs[i].style."+a+"='"+b+"'";
            //console.log(cmd)
            eval(cmd);
        }
        return this;
    }
}
/* select like  linQ */
/* selct from 1 */
bbw.prototype.selectIndex=function(i){
    i=i-1;
    var arr=new Array();
    arr[0]=this.objs[i];
    this.objs=arr;
    return this;
}
bbw.prototype.select=function(obj){
    var arr=new Array();
    for(i=0;i<this.objs.length;i++){
        if(this.objs[i]==obj){
            arr[0]=this.objs[i];
        }
    }
    this.objs=arr;
    return this;
}


/*
* plus
* */
/* is array */
_.isArray=function(o){
    return Object.prototype.toString.call(o) === '[object Array]';
}
_.randomArray=function(arr){
    arr=arr.sort(function(){
        return Math.random() > 0.5 ? -1 : 1;
    });
    return arr;
}
_.isTEL=function(number){
    ///^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test
    return /^(((13[0-9]{1})|159|153|185)+\d{8})$/.test(number);
    //
}
//bbw=new bbw();
function _(s){
    return new bbw(s);
}
