/**
 * Created by g on 2015/1/1.
 */
_.ready(function(){
    /**/
    var i=0;
    _.initCanvas("canvas_box");
    _.set_looping(function(){
        _.clear_canvas();
        _.c.font="50px Georgia";
        _.c.fillStyle="#f00";
        _.c.fillText(i++,10,60);
        //_("#debug").text(i++);
    });
    _.animate();
});