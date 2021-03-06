function welcome(){
    document.getElementById("welcome").style.display="block";
    document.getElementById("gameover").style.display="none";
    document.getElementById("loading").style.display="none";
    //document.getElementById("myCanvas").style.display="none";
}
function gameover(){
    loop=false;
    var msg="我消灭了"+getObj+"个蜘蛛！";
    //var msg="我解救蜘蛛侠"+player_time+"秒，但是蜘蛛侠还是因为吸入雾霾过量而挂掉了！";

    shareTitle=msg;
    document.getElementById("msg").innerHTML=msg;
    document.getElementById("gameover").style.display="block";
    document.getElementById("welcome").style.display="none";
    document.getElementById("loading").style.display="none";
    buttonLustTapTime=Date.parse(new Date());
}
function link(){
    if(Date.parse(new Date())-buttonLustTapTime>800) {
        window.location.href = "http://www.dobebox.com";
    }
}
function init(){

    //canvas
    canvas_w=630;
    canvas_h=960;
    canvas=document.getElementById("myCanvas");
    canvas.width=canvas_w;
    canvas.height=canvas_h;
    canvas.top = 0;
    canvas.left = 0;
    c = canvas.getContext('2d');
    res_count=0;
    resloaded=false;
    fps=1000/16;
    loop=false;
    loadingRES();
    backTime=0;
    setInterval(looping,fps);
    buttonLustTapTime=0;
    initbuttons();

    canvas.addEventListener('touchstart', function (e) {
        var x= e.clientX;
        var y= e.clientY;
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        startX = parseInt(touchobj.clientX);
        startY = parseInt(touchobj.clientY);
        var window_width=document.querySelector("#myCanvas").scrollWidth;
        var window_height=document.querySelector("#myCanvas").scrollHeight;
        var trueX=startX/(window_width/canvas_w);
        var trueY=startY/(window_height/canvas_h);
        trueX=parseInt(trueX);
        trueY=parseInt(trueY);
        //cars.push([trueX,trueY,126/3,195/3,res_car_4]);
        tap(trueX,trueY);
        e.preventDefault();
    }, false);

    canvas.addEventListener('click', function (e) {
        if (loop) {
            var x= e.clientX;
            var y= e.clientY;
            startX = x;
            startY = y;
            var window_width=document.querySelector("#myCanvas").scrollWidth;
            var window_height=document.querySelector("#myCanvas").scrollHeight;

            var trueX=startX/(window_width/canvas_w);
            var trueY=startY/(window_height/canvas_h);

            if(document.body.clientWidth>640){
                trueX=startX-(document.body.clientWidth-640)/2;
                //trueY=startY;
            }
            if(document.body.scrollTop>960){
                trueY=startY-document.body.scrollTop;
            }
            trueX=parseInt(trueX);
            trueY=parseInt(trueY);
            //cars.push([trueX,trueY,126/3,195/3,res_car_4]);
            tap(trueX,trueY)
            e.preventDefault();
        }
    }, false);

    canvas.addEventListener('touchmove', function (e) {
    }, false);

    canvas.addEventListener('touchend', function (e) {
    }, false);
    //
}
function loadedOne(){
    res_count++;
}
function loadingRES(){
    document.getElementById("loading").style.display="block";
    document.getElementById("welcome").style.display="none";
    //document.getElementById("myCanvas").style.display="none";
    document.getElementById("gameover").style.display="none";



    bg_img=new Image();
    obj_img_1=new Image();
    obj_img_2=new Image();
    obj_img_3=new Image();
    obj_img_4=new Image();
    obj_img_5=new Image();
    obj_img_6=new Image();


    bg_img.onload=loadedOne;
    obj_img_1.onload=loadedOne;
    obj_img_2.onload=loadedOne;
    obj_img_3.onload=loadedOne;
    obj_img_4.onload=loadedOne;
    obj_img_5.onload=loadedOne;
    obj_img_6.onload=loadedOne;

    bg_img.src="bg.png";
    obj_img_1.src="spider_1.png";
    obj_img_2.src="spider_2.png";
    obj_img_3.src="spider_3.png";
    obj_img_4.src="spider_4.png";
    obj_img_5.src="spider_5.png";
    obj_img_6.src="spider_6.png";
    
    spiderCal=new Audio();
    spiderCal.src="touch.mp3";
    
    /*
     player_img.onload=function(){
     res_count++;
     c.clearRect(0, 0,canvas_w,canvas_h);
     c.drawImage(this,0,0,player_w,player_h);
     player_data = c.getImageData(0,0,player_w,player_h).data;
     c.clearRect(0, 0,canvas_w,canvas_h);
     }
     */

}
function restart(){
    if(Date.parse(new Date())-buttonLustTapTime>800) {
        tangetX = 320;
        tangetY = 480;
        
        win = false;
        player_blood=100;
        speed=5;
        player_time = 0;
        fps = 1000 / 32;
        loopTime = 0;
        player_to = "right";
        makeObjTime = 0;
        getObj=0;
        //
        //document.getElementById("myCanvas").style.display="block";
        document.getElementById("welcome").style.display = "none";
        document.getElementById("loading").style.display = "none";
        document.getElementById("gameover").style.display = "none";
        //
        time = 0;
        objs=new Array();
        
        loop = true;
    }
}

function looping(){

    if(loop){
        //
        loopTime+=fps;
        c.clearRect(0, 0,canvas_w,canvas_h);

        c.drawImage(bg_img,0,0,canvas_w,canvas_h);

        for(i in objs){
            var obj_x=objs[i][0]+objs[i][2]/2;
            var obj_y=objs[i][1]+objs[i][3]/2;
            objs[i][0]-=speed;
            if(objs[i][0]<0){
                    player_blood-=0.5;
                    
            }
            if(objs[i][0]<-270){
                    player_blood--;
                    objs.splice(i,1);
            }
            objs[i][2]+=5;
            if(objs[i][2]>0 && objs[i][2]<11){
                c.drawImage(obj_img_1,objs[i][0],objs[i][1]);
            }
            if(objs[i][2]>10 && objs[i][2]<21){
                c.drawImage(obj_img_2,objs[i][0],objs[i][1]);
            }
            if(objs[i][2]>20 && objs[i][2]<31){
                c.drawImage(obj_img_3,objs[i][0],objs[i][1]);
            }
            if(objs[i][2]>30 && objs[i][2]<41){
                c.drawImage(obj_img_4,objs[i][0],objs[i][1]);
            }
            if(objs[i][2]>40 && objs[i][2]<51){
                c.drawImage(obj_img_5,objs[i][0],objs[i][1]);
            }
            if(objs[i][2]>50 && objs[i][2]<61){
                c.drawImage(obj_img_6,objs[i][0],objs[i][1]);
                objs[i][2]=0;
            }
            
        }





        //c.clearRect(0, 0,canvas_w,canvas_h);
        //c.drawImage(bg_img,0,0,canvas_w,canvas_h);
        makeObjTime++;
        if(makeObjTime==1){
            //var tmp_w=Math.floor(Math.random() * 300)+150;
            objs.push([640,745,0,100]);
        }
        if(makeObjTime>100/speed){
            makeObjTime=0;
        }


        time+=fps;
        if(time==1000){
            time=0;
            player_time++;
        }
        c.font="50px Georgia";
        c.fillStyle="#f00";
        c.fillText(getObj,500,60);


        //
        player_blood=parseInt(player_blood);
        if(player_blood<=0){
            gameover();
            player_blood=0;
        }
        c.fillStyle="#f00";
        c.fillRect(20,20,300,30);
        c.fillStyle="#fff";
        c.fillRect(22,22,296,26);
        c.fillStyle="#f00";
        c.fillRect(22,22,300*player_blood*0.01,26);
        c.font="30px Georgia";
        c.fillStyle="#f00";
        c.fillText(+player_blood+"%",340,45);
        //
    }
    //checking res loaded?
    if(resloaded==false){
        if(res_count==7){
            welcome();
            resloaded=true;
        }
    }
}
function tap(trueX,trueY){
    for(i in objs){
        if(trueX>objs[i][0]&&trueX<objs[i][0]+270){
            if(trueY>objs[i][1]&&trueY<objs[i][1]+151){
                getObj++;
                speed+=1;
                objs.splice(i,1);
                spiderCal.play();
                break;
            }
        }
    }

}
window.addEventListener('load',init,false);
function initbuttons(){
    document.querySelector("#start").addEventListener('touchstart',restart);
    document.querySelector("#start").addEventListener('click',restart);
    document.querySelector("#restart").addEventListener('touchstart',restart);
    document.querySelector("#restart").addEventListener('click',restart);
    document.querySelector("#link").addEventListener('touchstart',link);
    document.querySelector("#link").addEventListener('click',link);
}