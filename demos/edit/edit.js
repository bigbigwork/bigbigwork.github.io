
var wbEdit={
	edit:function(select){
		edit=document.querySelector(select);
		console.log(edit);
		edit.setAttribute("contenteditable",true);
		document.onmouseup=function(){
			
        	keyword=window.getSelection().toString();
        	if(keyword.length==0){
        		range = 0;
        	}else{
        		range = window.getSelection().getRangeAt(0);
        	}
		}
	}
}
		
function edit_info_open(){
	document.querySelector("#edit_info").style.display="block";
}
function edit_info_close(){
	document.querySelector("#edit_info").style.display="none";
}