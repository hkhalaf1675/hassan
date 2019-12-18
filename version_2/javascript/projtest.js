var btngen=document.getElementById("btngen");
var x;
var ul=document.getElementById("charul");
var showdiv=document.getElementById("showdiv");
var btnshow=document.getElementById("btnshow");

/*var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ch=chars.charAt(Math.floor(Math.random() * chars.length));*/

//------------------------------------------------------------------------ objectletter

function Object_Letter(Event_Target,Event_Type,Event_Time){
  this.Event_Target=toString(Event_Target);
  this.Event_Type=Event_Type;
  this.Event_Time=Event_Time; 
  this.con={"target":this.Event_Target,"time":this.Event_Time,"type":this.Event_Type};
}

//-------------------------------------------------------------------------------------------------- load

window.addEventListener("load",function(e){
	var c=new Object_Letter(e.target,e.type,new Date());
	if(localStorage.getItem("load")){
		var jsonload=JSON.parse(localStorage.getItem("load"));
		jsonload.push(c.con);
	   	localStorage.setItem("load",JSON.stringify(jsonload));
	   }
	   else{
		   var a=[];
		   a.push(c.con);
		   var q=localStorage.setItem("load",JSON.stringify(a));
	   }
});

//------------------------------------------------------------------------------------------ unload

window.addEventListener("unload",function(e){
	var c=new Object_Letter(e.target,e.type,new Date());
	if(localStorage.getItem("unload")){
		var jsonload=JSON.parse(localStorage.getItem("unload"));
		jsonload.push(c.con);
	   	localStorage.setItem("unload",JSON.stringify(jsonload));
	   }
	   else{
		   var a=[];
		   a.push(c.con);
		   var q=localStorage.setItem("unload",JSON.stringify(a));
	   }
	
});

//----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------- add1
btngen.addEventListener("click",function(e){
	
	//-----------------------------------------------------btngen localstorage
	var c=new Object_Letter(e.target,e.type,new Date());
	if(localStorage.getItem("genclick")){
		var jsongen=JSON.parse(localStorage.getItem("genclick"));
		jsongen.push(c.con);
	   	localStorage.setItem("genclick",JSON.stringify(jsongen));
	   }
	   else{
		   var gen=[];
		   gen.push(c.con);
		   var q=localStorage.setItem("genclick",JSON.stringify(gen));
	   }
		
	
	ul.innerHTML="";
	
	x=document.forms[0].inpnum.value;
	if(x>26 || x<1){
		x=26
		alert("Please Enter a number between 1 and 26")
	}
	
	var chs=[];
	
	for(var i=0; i<x; i++){
		var f=false;
		
		var chnum=(Math.floor(Math.random()*26)+65);
		var ch=String.fromCharCode(chnum);
		
		for(var i=0; i<chs.length; i++){
			if(ch==chs[i]){
				f=true;
				break;
				i--;
			}
		}
		
		if(f==false){
			var li=document.createElement("li");
			var litxt=document.createTextNode(ch);
			li.appendChild(litxt);
			ul.appendChild(li);
			chs.push(ch);
		}
	}
	
});
//----------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------- add2
var chimg=document.getElementById("chimg");
var div=document.getElementById("div");

btngen.addEventListener("click",function(){
	
	var lis=document.getElementsByTagName("li");
	for(var i=0; i<lis.length; i++){
		lis[i].addEventListener("click",function(e){
			
//--------------------------------------------------------------- click charlist
			var c=new Object_Letter(e.target,e.type,new Date());
				if(localStorage.getItem("charclick")){
					var jsonchar=JSON.parse(localStorage.getItem("charclick"));
					jsonchar.push(c.con);
					localStorage.setItem("charclick",JSON.stringify(jsonchar));
				   }
				  else{
					   var a=[];
					   a.push(c.con);
					   var q=localStorage.setItem("charclick",JSON.stringify(a));
				   }
				
//--------------------------------------------------------------------
			var chtxt=e.target.textContent;
			chimg.setAttribute("src",("../letterimages/"+chtxt+".jpg"));
		});
	}
});

//----------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------- btnshow

$("#frmshow").on("submit",function(e){
	e.preventDefault()
	$.ajax({
		"type":"GET",
		"url":"../phpfiles/showdata.php",
		"data":{"showdata":""},
		"success":function(res){
			showdiv.innerHTML="";
			showdiv.innerHTML=res;
		}
	});
});

//--------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------- settimeinterval

setInterval(function(){
for(var i=0; i<localStorage.length; i++){
					$.ajax({
						"type":"POST",
						"url":"../phpfiles/protest.php",
						"data":{"myjaxa":[localStorage[localStorage.key(i)],localStorage.key(i)]},
						"success":function(res){
							console.log(res);
						}
					});
				}localStorage.clear(); },5000);