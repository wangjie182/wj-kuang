
// function change(num){
//     for(i=1;i<=3;i++){
//     document.getElementById("img"+i).style.display="none";
//     document.getElementById("li"+i).style.background="#404040" 
//     }
//     document.getElementById("img"+num).style.display="block";
//     document.getElementById("li"+num).style.background="#108ee9";
//     document.getElements(a).style.color="#fff";    
// }


window.onload=function setContent(){   
    
    var number=document.getElementById("number");                     
    var list=number.getElementsByTagName("li"); 

    for (var i=0;i<list.length;i++){                                  
          
                                         
        list[i].onclick=function(){     
    
            // var img=document.getElementsByClassName("img");    
            // for (var i=0;i<img.length;i++){   
            //     // var listul=number.getElementsByTagName("ul"); 
            //     // number.children[i].style.backgroundColor="#404040";                   
            //     // number.children[i].style.color="#838080"; 
            //     var nvalue = this.lastChild.nodeValue; 
            //     bnvalue  = nvalue.replace(/(\s*)|(\r)|(\n)/g, "");

            //     if(img[i].src.indexOf(bnvalue)!=-1){ 
            //         img[i].style.display="block";                         
            //         var h3=document.getElementsByTagName("h3")[0];
            //     }
            //     else{                                               
            //         img[i].style.display="none";                     
            //     }                                                    

            // }
            //让ul下的li都回复默认样式  
            for(var k=0;k<3;k++){
                
                list[k].style.backgroundColor="";
                list[k].style.color="";
            } 
            //被点击li的样式改变
            this.style.backgroundColor="#108ee9";                   
            this.style.color="#FFF";  
        } 
    }      
}

