function processStateChange() {
    if (req.readyState == 4) { // Complete
        if (req.status == 200) {  // OK response
            document.getElementById("titles").innerHTML = req.responseText;
        }else{
            alert("Problem: " + req.statusText);
        }
    }
}
function getTitles(){
    req = new XMLHttpRequest();
    req.onreadystatechange = processStateChange;
    try {
        req.open("GET", "http://www.dobemedia.com", true);
    }catch (e) {
        alert(e);
    }
    req.send(null);
}

        v_menu_state="hide";
        loop=true;
        function _out(){
            shareTitle="我还有"+v_all_blocks+"只猴子没有点完就挂了";
            document.getElementById("logo").innerHTML="剩余猴子"+v_all_blocks+"只，耗时："+v_time+"秒";
            
        }
        function e_tap_menu(e){
            if(v_menu_state=="hide"){
                document.getElementById("menuButton").innerHTML=">";
                loop=false;
                v_menu_state="show";
                
            }else if(v_menu_state=="show"){
                document.getElementById("menuButton").innerHTML="||";
                loop=true;
                v_menu_state="hide";
                
            }
            e.preventDefault();
        }
        function _gameover(){
            loop=false;
            document.getElementById("out").innerHTML="游戏结束";
            if(v_all_blocks==0){
                shareTitle="我找到30只猴子用时"+v_time+"秒";
                document.getElementById("out").innerHTML="<img width='50%' style='float:right;' src='../../res/share.png'><p style='width:100%'>恭喜：耗时<b>"+v_time+"</b>秒</p>";
            }
            document.getElementById("gameover").style.display="block";
        }
        function _next(){
            if(loop){
                v_all_blocks--;
                if(v_all_blocks==0){
                    _gameover();
                }else{

                        var bs=document.getElementsByClassName("block");
                        for(i=0;i<bs.length;i++){
                            bs[i].setAttribute("isselect","no");
                            var num=Math.floor(Math.random()*15)+1;
                            
                            bs[i].style.backgroundImage="url(res/"+num+".png)";

                        }

                        select=Math.floor(Math.random()*8);
                        bs[select].setAttribute("isselect","yes");
                        bs[select].style.backgroundImage="url(res/monkey.png)";
                        _out();
                }
                
            }
            
            
        }
        function _bind(){                   

            document.getElementById("menuButton").addEventListener("click",e_tap_menu,false);
            document.getElementById("canvas").addEventListener("click",e_tap,false);
            document.getElementById("start").addEventListener("click",_restart,false);
            document.getElementById("restart").addEventListener("click",_restart,false);
        }
        function init(){
            _bind();
            setInterval(looping,1000);
            //
            var img=new Image();
            img.src="http://img.users.51.la/17425778.asp";
            //
        }
        function _restart(e){
            
            document.getElementById("welcome").style.display="none";
            document.getElementById("gameover").style.display="none";
            v_time=0;
            v_all_blocks=31;
            loop=true;
            _next();
            e.preventDefault();
        }
        function e_tap(e){
            if(e.target.getAttribute("isselect")=="yes"){
                _next();
            }else{
                _gameover();
            }
            e.preventDefault();
        }
        function looping(){
            if(loop){
                v_time++;
                _out();
            }

        }
        window.addEventListener("load",init,false);