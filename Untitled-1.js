
// function change(num){
//     for(i=1;i<=3;i++){
//     document.getElementById("span"+i).style.display="none";
//     document.getElementById("li"+i).style.background="#404040" 
//     }
//     document.getElementById("span"+num).style.display="block";
//     document.getElementById("li"+num).style.background="#108ee9";
//     document.getElements(a).style.color="#fff";    
// }


window.onload=function setContent(){   
    
    var number=document.getElementById("number");                     
    var list=number.getElementsByTagName("li");
    var fa=document.getElementsByClassName("fa");  
    // var content=document.getElementById("content");
    // var span=content.getElementsByTagName("div"); 
    for (var i=0;i<list.length;i++){                                  
          
                                         
        list[i].onclick=function(){     


            //让ul下的li都回复默认样式  
            for(var k=0;k<3;k++){
                
                list[k].style.backgroundColor="";
               
            } 
            //被点击li的样式改变
            this.style.backgroundColor="#108ee9";

            for(var j=0;j<3;j++){
                
                fa[j].style.color="";
               
            } 
                              
            this.style.color="#FFF";
            
                        
            // for (var i=0;i<span.length;i++){   
            //     // var listul=number.getElementsByTagName("ul"); 
            //     // number.children[i].style.backgroundColor="#404040";                   
            //     // number.children[i].style.color="#838080"; 
            //     var nvalue = this.lastChild.nodeValue; 
            //     bnvalue  = nvalue.replace(/(\s*)|(\r)|(\n)/g, "");

            //     if(span[i].src.indexOf(bnvalue)!=-1){ 
            //         span[i].style.display="block";                
            //     }
            //     else{                                               
            //         span[i].style.display="none";                     
            //     }                                                    

            // }  
        } 
    }      
}

