/**
 * Created by g on 2015/1/1.
 * 2d 引擎
 */
_.initCanvas=function(id,w,h){
    var canvas_box=document.querySelector("#"+id);
    var canvas=document.createElement("canvas");
    //
    _.canvas_w=w;
    _.canvas_h=h;
    canvas.width=_.canvas_w;
    canvas.height=_.canvas_h;
    canvas.top = 0;
    canvas.left = 0;
    _.c = canvas.getContext('2d');
    canvas_box.appendChild(canvas);
    //
}
_.engine=function(){

}
_.create_scene=function(){

}
_.sprites=new Array();


var Sprite=function(name,x,y,src){

}
Sprite.update=function(){

}
_.create_sprite=function(name,x,y,src){

}
_.clear_canvas=function(){
    _.c.clearRect(0, 0, _.canvas_w, _.canvas_h);
}
_.set_looping=function(x){
    _.looping=x;
}
_.setAniTime=function(t){
    _.anitime=t;
}
_.lastT=0;
_.animate=function() {
    var t=new Date().getTime();
    if(t- _.anitime> _.lastT){
        _.lastT=t;
        _.looping();
    }
    requestAnimationFrame(_.animate );
    //console.log(t- _.anitime)

}

_.screen=function(){

}

var Screen=function(){
    this.objs=new Array();
}
Screen.prototype.add=function(obj){
    this.objs.push(obj);
}



var Render=function(){
    this.animate=function(){
        var loop=function(objs,fps) {
            var t=new Date().getTime();
            if(t-fps> _.lastT){
                _.lastT=t;
                _.clear_canvas();
                for(i=0;i<objs.length;i++){
                    objs[i].update();
                    //console.log(objs[i])
                }
            }
            requestAnimationFrame(function(){
                loop(objs,fps);
            });
        }
        loop(this.screen.objs,this.fps);
    }
}
Render.prototype.render=function(screen,fps){
    this.screen=screen;
    var this_time=new Date().getTime();
    this.fps=fps;
    this.animate();

}

var Text=function(id,x,y){
    this.id=id;
    this.x=x;
    this.y=y;
    this.color="#fff";
}
Text.prototype.update=function(){
    this.updateExec();
    _.c.font="50px Georgia";
    _.c.fillStyle=this.color;
    _.c.fillText(this.getText(),this.x,this.y);
}
Text.prototype.setColor=function(color){
    this.color=color;
}
Text.prototype.setText=function(text){
    this.text=text;
}
Text.prototype.getText=function(){
    return this.text;
}
Text.prototype.setUpdate=function(x){
    this.updateExec=x;
}