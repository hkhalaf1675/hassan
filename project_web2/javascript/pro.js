/* variables */

var letterlist=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var images=['../letterimages/A.jpg','../letterimages/B.jpg','../letterimages/C.jpg','../letterimages/D.jpg','../letterimages/E.jpg',
		   '../letterimages/F.jpg','../letterimages/G.jpg','../letterimages/H.jpg','../letterimages/I.jpg','../letterimages/J.jpg',
		   '../letterimages/K.jpg','../letterimages/L.jpg','../letterimages/M.jpg','../letterimages/N.jpg','../letterimages/O.jpg',
		   '../letterimages/P.jpg','../letterimages/Q.jpg','../letterimages/R.jpg','../letterimages/S.jpg','../letterimages/T.jpg',
		   '../letterimages/U.jpg','../letterimages/V.jpg','../letterimages/W.jpg','../letterimages/X.jpg','../letterimages/Y.jpg',
		   '../letterimages/Z.jpg'];


var numofletter=document.getElementById("numofletter");  //get input of type number element
var btn=document.getElementById("btngenerate"); //get generate button
var x; //to get the number of input number
var charlist=[]; //to store the chars 
var eeul=document.getElementById("ull"); //get the ul


//-----------------------------------------------------------------

/* Events */


window.addEventListener("load",function(e){
	 var p1=new Object_Letter();
     p1.Event_Target="";
     p1.Event_Time=new Date();
     p1.Event_Type=e.type;
     var con=p1.Event_Target+""+p1.Event_Time+""+p1.Event_Type;
     // localStorage.setItem('LeterClick',con);
     if(localStorage.getItem("load")===null)
     {
     	localStorage.setItem("load",con);
     }
     else
     {
        var a= new Array(localStorage.getItem("load"));
        a.push(con);
        localStorage.setItem("load",a);
     }
});
window.addEventListener("unload",function(e){
	 var p1=new Object_Letter();
     p1.Event_Target="";
     p1.Event_Time=new Date();
     p1.Event_Type=e.type;
     var con=p1.Event_Target+""+p1.Event_Time+""+p1.Event_Type;
     // localStorage.setItem('LeterClick',con);
     if(localStorage.getItem("unload")===null){
        	localStorage.setItem("unload",con);
      }
      else{
          var a= new Array(localStorage.getItem("unload"));
          a.push(con);
          localStorage.setItem("unload",a);
      }
});


//-----------------------------------------------------------------


btn.addEventListener("click",function(e){
	
	eeul.innerHTML=""; 
	
	x=document.forms[0].num.value;
	if(x>26)
		x=26;
	
	var y;
	var arr=[];
	for(var i=0; i<x; i++){
		
		y=Math.floor(Math.random() * letterlist.length);
		
		if(i>0){
			for(var d=0; d<(x-i); d++){
				while(y==arr[d]){
					y=Math.floor(Math.random() * letterlist.length);
					}	
				}
			arr[i]=y;
			
			var eeli=document.createElement("li");
			var nmtxt="charid_"+i;
			eeli.setAttribute("id",nmtxt);
			eeli.setAttribute("class","cls");
			var litxt=document.createTextNode(letterlist[y]);
			eeli.appendChild(litxt);
			eeul.appendChild(eeli);
		
		}
		else{
			arr[i]=y;
		
			var eeli=document.createElement("li");
			var nmtxt="charid_"+i;
			eeli.setAttribute("id",nmtxt)
			eeli.setAttribute("class","cls");
			var litxt=document.createTextNode(letterlist[y]);
			eeli.appendChild(litxt);
			eeul.appendChild(eeli);
			
		}
	}
	var p1=new Object_Letter();
    p1.Event_Target=btn.textContent;
    p1.Event_Time=new Date();
    p1.Event_Type=e.type;
    var con=p1.Event_Target+""+p1.Event_Time+""+p1.Event_Type;
    // localStorage.setItem('LeterClick',con);
    if(localStorage.getItem("Generate")===null) {
      	localStorage.setItem("Generate",con);
    }
    else{
       var a= new Array(localStorage.getItem("Generate"));
       a.push(con);
       localStorage.setItem("Generate",a);
    }
 
});

//-----------------------------------------------------------------


function Object_Letter(Event_Target,Event_Type,Event_Time){
  this.Event_Target=Event_Target;
  this.Event_Type=Event_Type;
  this.Event_Time=Event_Time;     
}

//-----------------------------------------------------------------

	var txt;
	var imgsrc;
	var charpic=document.getElementById("imag");

btn.addEventListener("click",function(e){
	
	for(var i=0; i<x; i++){
	
		charlist[i]=document.getElementById("charid_"+i);
	
		charlist[i].addEventListener("click",function(e){
			
			txt=e.target.textContent;
			
			for(var i=0; i<letterlist.length; i++){
				if(letterlist[i]==txt)
					imgsrc=images[i];
			}
			charpic.setAttribute("src",imgsrc);
			var p1=new Object_Letter();
                    p1.Event_Target=btn.textContent;
                    p1.Event_Time=new Date();
                    p1.Event_Type=e.type;
                    var con=p1.Event_Target+""+p1.Event_Time+""+p1.Event_Type;
                    // localStorage.setItem('LeterClick',con);
                    if(localStorage.getItem("letters_buttons")===null)
                    {
                      localStorage.setItem("letters_buttons",con);
                    }
                    else{
                      var a= new Array(localStorage.getItem("letters_buttons"));
                      a.push(con);
                      localStorage.setItem("letters_buttons",a);
                    }
		});
	}
});

//-----------------------------------------------------------------

setTimeout(function(){
		   
		  localStorage.clear(); },5000);


//-----------------------------------------------------------------
