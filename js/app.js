/**
 * Created by js on 2015/3/19.
 */
window.onload=function(){
    var login_value=0;
    document.getElementById("res").innerHTML="";
    function loading(){
        login_value++;
        var e=document.createElement("div");
        e.className="loading_add";
        document.getElementById("res").appendChild(e);
        setTimeout(function(){
            if(login_value===100){
                document.getElementById("loader").className="end";
                setTimeout(function(){
                    document.getElementById("res").innerHTML="";
                    document.getElementById("loader").className="hide";
                },1500);

            }else{
                loading();
            }
        },15);
    }
    loading();
}
