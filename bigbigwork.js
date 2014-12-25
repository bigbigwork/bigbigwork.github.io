/**
 * Created by g on 2014/12/25.
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
//bbw=new bbw();
function _(s){
    return new bbw(s);
}