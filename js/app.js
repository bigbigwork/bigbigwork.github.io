/**
 * Created by js on 2015/3/19.
 */
function include_js(path) {
    var sobj = document.createElement('script');
    sobj.type = "text/javascript";
    sobj.src = path;
    var headobj = document.getElementsByTagName('head')[0];
    headobj.appendChild(sobj);
}

function include_css(path){
    var fileref=document.createElement("link")
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
}

function hide(id){
    document.getElementById(id).className="hide";
}
function show(id){
    document.getElementById(id).className=id;
}
function make(tag){
    return document.createElement(tag);
}
function remove_html(id){
    document.getElementById(id).innerHTML="";
}
window.onload=function(){
    var login_value=0;
    remove_html("res");
    function loading(){
        login_value++;
        var e=make("div");
        e.className="loading_add";
        document.getElementById("res").appendChild(e);
        setTimeout(function(){
            if(login_value===100){
                document.getElementById("loader").className="end";
                setTimeout(function(){
                    document.getElementById("res").innerHTML="";
                    document.getElementById("works").className="imgList";
                    hide("loader");
                    include_js("js/photo.js");
                    show("footer");
                },1500);

            }else{
                loading();
            }
        },15);
    }
    loading();
}
