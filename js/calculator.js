var mark = false;
function get(key){
	// alert(key);
	var str=document.getElementById('output').value;
	
	if (str==0) {
		str='';
	}

	if(mark==false){
		str = str+key;
	}else{
		str = key;
		mark=false;
	}
	

	document.getElementById('output').value=str;

}
function eq(){
	// /alert(1);
	mark= true;
	var str=document.getElementById('output').value;
	// eval(str);
	document.getElementById('output').value=eval(str);
}
function clearText(){
	
	document.getElementById('output').value="0";
}
function clearOneText(){
	var str=document.getElementById('output').value;
	str = str.substring(0,str.length-1);
	document.getElementById('output').value=str;
}