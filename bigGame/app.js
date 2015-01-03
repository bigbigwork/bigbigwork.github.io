/**
 * Created by g on 2015/1/1.
 */
_.ready(function(){
    /**/
    var i=0;
    _.initCanvas("canvas_box",500,500);


    var screen=new Screen();
    var time_text=new Text("time",60,60);
    time_text.setText(1);
    time_text.setColor("#f00");
    time_text.setUpdate(function(){
        this.setText(this.getText()+1);
        //console.log(this.getText());
        //_.c.font="50px Georgia";
        //_.c.fillStyle="#f00";
        //_.c.fillText(this.getText(),this.x,this.y);
    })
    screen.add(time_text);

    var render=new Render();
    render.render(screen,1000);
});