
// function change(num){
//     for(i=1;i<=3;i++){
//     document.getElementById("page"+i).style.display="none";
//     document.getElementById("li"+i).style.background="#404040" 
//     }
//     document.getElementById("page"+num).style.display="block";
//     document.getElementById("li"+num).style.background="#108ee9";
//     document.getElements(a).style.color="#fff";    
// }


window.onload=function setContent(){   
    var number=document.getElementById("number");                     
    var list=number.getElementsByTagName("li");
    var content=document.getElementById("content");
    var div=content.getElementsByTagName("div"); 
    for (var m=0;m<list.length;m++){
        (function(i){                                                                      
            list[i].onclick=function(){          
                for(var k=0;k<list.length;k++){
                    //让ul下的li都回复默认样式    
                    list[k].style.backgroundColor="";
                    list[k].style.color="#aaa7a7";
                    //将框内内容都显示无
                    div[k].style.display="none";
                } 
                //被点击li的样式改变
                this.style.backgroundColor="#108ee9";                   
                this.style.color="#FFF";
                //点击后相应页面显示
                div[i].style.display="block";   
            } 
        })(m)      
    }
}


// window.onload = function() {
//     var combox = document.getElementById("common_box");
//     var cli_on = document.getElementById("cli_on");
//     var flag = true, timer = null, initime = null, r_len = 0;
//     cli_on.onclick = function () {
//      /*如果不需要动态效果，这两句足矣
//      combox.style.right = flag?'-270px':0;
//      flag = !flag;
//      */
//      clearTimeout(initime);
//      //根据状态flag执开展开收缩
//      if (flag) {
//       r_len = 0;
//       timer = setInterval(slideright, 10);
//      } else {
//       r_len = -270;
//       timer = setInterval(slideleft, 10);
//      }
//     }
//     //展开
//     function slideright() {
//      if (r_len <= -270) {
//       clearInterval(timer);
//       flag = !flag;
//       return false;
//      } else {
//       r_len -= 5;
//       combox.style.right = r_len + 'px';
//      }
//     }
//     //收缩
//     function slideleft() {
//      if (r_len >= 0) {
//       clearInterval(timer);
//       flag = !flag;
//       return false;
//      } else {
//       r_len += 5;
//       combox.style.right = r_len + 'px';
//      }
//     }
//     //加载后3秒页面自动收缩
//     initime = setTimeout("cli_on.click()", 3000);
//    }


