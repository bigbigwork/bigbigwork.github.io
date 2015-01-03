/**
 * Created by g on 2015/1/1.
 */
_.ready(function(){
    /**/
    var i=0;
    /*初始化2d游戏引擎*/
    _.initCanvas("canvas_box",500,500);

    /*新建一个场景*/
    var screen=new Screen();
    /*新建一个时间文本*/
    var time_text=new Text("time",100,100);
    time_text.setText(0);
    time_text.setSize(50);
    time_text.setColor("#f00");
    time_text.setUpdate(function(){
        this.setText(this.getText()+1);
    })
    /*向场景添加时间文本*/
    screen.add(time_text);

    var life_text=new Text("life",400,100);
    life_text.setColor("#f00");
    life_text.setSize(30);
    life_text.setText("life");
    screen.add(life_text);

    /*新建一个玩家精灵*/
    var player=new Sprite("player",150,430,50,50,"res/star.png");
    /*添加玩家精灵到场景*/
    screen.add(player);

    /*添加一个蓝色精灵*/
    var blue=new Sprite("blue",150,150,80,80,"res/star_blue.png");
    /*添加蓝色精灵到场景*/
    screen.add(blue);

    /*新建一个渲染器*/
    var render=new Render();
    /*渲染场景，以1000/16秒一帧的速度。*/
    render.render(screen,1000/16);
});