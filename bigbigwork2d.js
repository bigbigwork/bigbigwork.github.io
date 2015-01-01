/**
 * Created by g on 2015/1/1.
 * 2d 引擎
 */
_.initCanvas=function(id){
    var canvas_box=document.querySelector("#"+id);
    var canvas=document.createElement("canvas");
    //
    _.canvas_w=300;
    _.canvas_h=300;
    canvas.width=_.canvas_w;
    canvas.height=_.canvas_h;
    canvas.top = 0;
    canvas.left = 0;
    _.c = canvas.getContext('2d');
    canvas_box.appendChild(canvas);
    //
}
_.clear_canvas=function(){
    _.c.clearRect(0, 0, _.canvas_w, _.canvas_h);
}
_.set_looping=function(x){
    _.looping=x;
}
_.animate=function() {
    //console.log("animate");
    requestAnimationFrame(_.animate );
    _.looping();
}