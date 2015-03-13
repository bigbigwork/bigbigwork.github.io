
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
		
