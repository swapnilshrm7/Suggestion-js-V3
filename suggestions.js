function GetSuggestion(e)
				{
				if(e.keyCode == '40'||e.keyCode=='38')
					{
					if(j!=0)
						{
						var key=e.keyCode;
						window.ChangeSelected(key);
						return;
						}
					}
				if(e.keyCode=='13')
					{
					window.SelectSelected();
					return;
					}
				var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Ashwarya", "Gurbaksh"]; 
				names.sort();
				var len=names.length;
				var input=document.getElementById("UserInput").value;
				var regex=input;
				var ul=document.getElementById("suggestions");
				document.getElementById("suggestions").innerHTML ="";
				var output="";
				regex=(new RegExp(regex));
				var i=0,j=0,h=0;
				for(i=0;i<len;i++){
					if(regex.test(names[i].toLowerCase())==true){
						j++;
						var li=document.createElement("li");
						li.id=i+1;
						li.setAttribute("onclick","AddData(firstChild.innerHTML)");
						var a=document.createElement("a");
						a.innerHTML=names[i];
						a.setAttribute("href","#");
						a.setAttribute("index",j);
						a.setAttribute("onkeyUp","GetSuggestion(event)");
						ul.appendChild(li);		
						li.appendChild(a);
						}
					}
				if(j>=5){
					ul.style.height="220px";
					}
				else{
					h=j*60;
					ul.style.height=h+'px';
					}
				if(j==0){
					var li=document.createElement("li");
					li.innerHTML="no match found";
					h=60;
					ul.style.height=h+'px';
					ul.appendChild(li);
					}
				if(input==""){
					document.getElementById("suggestions").innerHTML ="";
					ul.style.height="0px";
					}
				var a=ul.firstChild.getElementsByTagName("a")[0];
				a.setAttribute("class","selected");
				}
				function SelectSelected()
					{
					if(document.getElementsByClassName("selected").length!=0)
							{
							var selli=document.getElementsByClassName("selected")[0];
							selli.setAttribute("class","x");
							document.getElementById("UserInput").value=selli.innerHTML;
							document.getElementById("suggestions").innerHTML="";
							var ul=document.getElementById("suggestions");
							ul.style.height="0px";
							}
					}
				function ChangeSelected(key)
					{
					if(key=='40')
						{
						if(document.getElementsByClassName("selected").length==0)
							{
							var ul=document.getElementById("suggestions");
							var a=ul.firstChild.getElementsByTagName("a")[0];
							a.setAttribute("class","selected");
							}
						else
							{
							var selli=document.getElementsByClassName("selected")[0];
							if(selli.parentNode.nextSibling!=null)
								{
								selli.setAttribute("class","x");
								selli.parentNode.nextSibling.firstChild.setAttribute("class","selected");
								selli.parentNode.nextSibling.scrollIntoView(false);
								}
							}
						}
					else if(key=='38')
						{
						if(document.getElementsByClassName("selected").length==0)
							{
							}
						else
							{
							var selli=document.getElementsByClassName("selected")[0];
							if(selli.parentNode.previousSibling!=null)
								{
								selli.setAttribute("class","x");
								selli.parentNode.previousSibling.firstChild.setAttribute("class","selected");
								selli.parentNode.previousSibling.scrollIntoView(false);
								}
							}
						}
					}
				function AddData(text){
					var ul=document.getElementById("suggestions");
					document.getElementById("UserInput").value=text;
					document.getElementById("suggestions").innerHTML ="";
					ul.style.height="0px";
				}
				function minimize(){
					var ul=document.getElementById("suggestions");
					document.getElementById("suggestions").innerHTML ="";
					ul.style.height="0px";
					}
				function remove(){
					var ul=document.getElementById("suggestions");
					document.getElementById("suggestions").innerHTML ="";
					document.getElementById("UserInput").value="";
					ul.style.height="0px";
					}