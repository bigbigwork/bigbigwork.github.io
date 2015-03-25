window.onload=function(){
    (function(){
        var max_w=1600;
        var max_h=900;
        var w=document.body.scrollWidth;
        var h=document.body.scrollHeight;
        if(h/max_h*max_w<=w){
            wrap.style.height=h+"px";
            wrap.style.width=h/max_h*max_w+"px";
        }else {
            wrap.style.width = w + "px";
            wrap.style.height = w / max_w * max_h + "px";
        }
    })();
    window.onresize=window.onload;
}

