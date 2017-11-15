window.onload=function(){
    var blueer = document.getElementById("er");
    var bluesan = document.getElementById("san");
    var bluesi = document.getElementById("si");
    var z1 = document.getElementsByClassName("zhong1");
    var z2 = document.getElementsByClassName("zhong2");
    var z3 = document.getElementsByClassName("zhong3");
    blueer.onclick=function(){
        blueer.style.background="rgb(16,142,233)";
        bluesan.style.background="rgb(64,64,64)";
        bluesi.style.background= "rgb(64,64,64)";
        z1[0].style.display="block";
        z2[0].style.display="none";
        z3[0].style.display="none";
    } 
    bluesan.onclick=function(){
        blueer.style.background="rgb(64,64,64)";
        bluesan.style.background="rgb(16,142,233)";
        bluesi.style.background= "rgb(64,64,64)";
        z1[0].style.display="none";
        z2[0].style.display="block";
        z3[0].style.display="none";
    }
    bluesi.onclick=function(){
        blueer.style.background="rgb(64,64,64)";
        bluesan.style.background= "rgb(64,64,64)";
        bluesi.style.background="rgb(16,142,233)";
        z1[0].style.display="none";
        z2[0].style.display="none";
        z3[0].style.display="block";
    }
}
