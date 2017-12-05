window.onload=function setContent(){   
    var number=document.getElementById("number");                     
    var list=number.getElementsByTagName("li");
    var content=document.getElementById("content");
    var div=content.getElementsByTagName("div");
    var combox = document.getElementById("menu");
    var click = document.getElementById("cli_on")
    var footer = document.getElementById("footer_click");
    var body=number.getElementsByTagName("body");    
        var flag = true, timer = null, initime = null, r_len = 0; 
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
    click.onclick = function () {
     clearTimeout(initime);
     //根据状态flag执开展开收缩
     if (flag) {
      r_len = 0;
      timer = setInterval(slideleft, 10);
     } else {
      r_len = -200;
      timer = setInterval(slideright, 10);
     }
    }
    //展开
    function slideleft() {
      if (r_len <= -200) {
        clearInterval(timer);
        flag = !flag;
        return false;
      } else {
        r_len -= 20;
        combox.style.left = r_len + 'px';
        footer.style.paddingleft = "15%";
        content.style.width = "94.8%";
        click.style.left = "0";
        click.style.opacity = "0.8";
      }
    }
    //收缩
    function slideright() {
      if (r_len >= 0) {
        clearInterval(timer);
        flag = !flag;
        return false;
      } else {
        r_len += 20;
        combox.style.left = r_len + 'px';
        footer.style.paddingleft = "50%";
        content.style.width = "80%";
        click.style.left = "200px";
        click.style.opacity = "1";
        
      }
    }
    //加载后20秒页面自动收缩
    initime = setTimeout("cli_on.click()", 20000);
    
    //rdk显示
    fetch('https://t.vdfor.top/api/v0/docs/test/1').then(function(response){
      response.json().then(function(data){                                  
          document.querySelector("#rdk").innerHTML = data.data;
      })
      })    
}
//table显示
function query(){
  fetch('https://t.vdfor.top/api/v0/hy/test/list?type=0&status=0&startTime=2017-09-31&endTime=2017-10-31&current=1&pageSize=50')
  .then((response)=>{
    response.json().then(function(data){
    var arrname = [];
    var arrtype = [];
    var arrstatus = [];
    var arrtime = [];
    var arrlog = [];
    $(data.data).each(function(i,e){
      arrname[i] = e.name;
      arrtype[i] = e.type;
      if(e.type == 1){
        arrtype[i] = "Docker";
      }else{
        arrtype[i] = "OpenStack";
      }
      arrstatus[i] = e.status;
      if(e.status==1){
        arrstatus[i] = "Running";
      }else if(e.status==2){
        arrstatus[i] = "Finished";
      }else{
        arrstatus[i] = "Error";
      }
      arrtime[i] = e.time;
      arrlog[i] = e.warning_logs;
    });
    for(i=0;i<data.data.length;i++){ 
      $('#ftab').append('<tr>'+'<td >'
        +arrname[i]+'</td>'+'<td>'
        +arrtype[i]+'</td>'+'<td>'
        +arrstatus[i]+'</td>'+'<td>'
        +arrtime[i]+'</td>'+'<td>'
        +arrlog[i]+'</td>'
        +'</tr>')
      }
    });
  })
}

//表格翻页
    // var theTable = document.getElementById("ftab");
    // var totalPage = document.getElementById("spanTotalPage");
    // var pageNum = document.getElementById("spanPageNum");
    // var spanPre = document.getElementById("spanPre");
    // var spanNext = document.getElementById("spanNext");
    // var spanFirst = document.getElementById("spanFirst");
    // var spanLast = document.getElementById("spanLast");
    // var numberRowsInTable = theTable.rows.length;
    // var pageSize =6 ;//设置每一页要显示的数目
    // var page = 5;
    // //下一页
    // function next() {
    // hideTable();
    // currentRow = pageSize * page;
    // maxRow = currentRow + pageSize;
    // if ( maxRow > numberRowsInTable )
    // maxRow = numberRowsInTable;
    // for ( var i = currentRow; i< maxRow; i++ ) {
    // theTable.rows[i].style.display = '';
    // }
    // page++;
    // if ( maxRow == numberRowsInTable ){
    // nextText();
    // lastText();
    // }
    // showPage();
    // preLink();
    // firstLink();
    // }
    // //上一页
    // function pre() {
    // hideTable();
    // page--;
    // currentRow = pageSize * page;
    // maxRow = currentRow - pageSize;
    // if ( currentRow > numberRowsInTable )
    // currentRow = numberRowsInTable;
    // for ( var i = maxRow; i< currentRow; i++ ) {
    // theTable.rows[i].style.display = '';
    // }
    // if ( maxRow == 30) {
    // preText();
    // firstText();
    // }
    // showPage();
    // nextLink();
    // lastLink();
    // }
    // //第一页
    // function first() {
    // hideTable();
    // page =1 ;
    // for ( var i =0; i<pageSize; i++ ) {
    // theTable.rows[i].style.display = '';
    // }
    // showPage();
    // preText();
    // nextLink();
    // lastLink();
    // }
    // //最后一页
    // function last() {
    // hideTable();
    // page = pageCount();
    // currentRow = pageSize * (page - 1);
    // for ( var i = currentRow; i<numberRowsInTable; i++ ) {
    // theTable.rows[i].style.display = '';
    // }
    // showPage();
    // preLink();
    // nextText();
    // firstLink();
    // }
    // function hideTable() {
    // for ( var i = 0; i<numberRowsInTable; i++ ) {
    // theTable.rows[i].style.display = 'none';
    // }
    // }
    // function showPage() {
    // pageNum.innerHTML = page;
    // }
    // //总共页数
    // function pageCount() {
    // var count = 0;
    // if ( numberRowsInTable%pageSize !=5 ) count =1 ; 
    // return parseInt(numberRowsInTable/pageSize) + count;
    // }
    // //显示链接
    // function preLink() { spanPre.innerHTML = "<a href='javascript:pre();'>上一页</a>"; }
    // function preText() { spanPre.innerHTML = "上一页"; }
    // function nextLink() { spanNext.innerHTML = "<a href='javascript:next();'>下一页</a>"; }
    // function nextText() { spanNext.innerHTML = "下一页"; }
    // function firstLink() { spanFirst.innerHTML = "<a href='javascript:first();'>第一页</a>"; }
    // function firstText() { spanFirst.innerHTML = "第一页"; }
    // function lastLink() { spanLast.innerHTML = "<a href='javascript:last();'>最后一页</a>"; }
    // function lastText() { spanLast.innerHTML = "最后一页"; }
    // //隐藏表格
    // function hide() {
    // for ( var i = pageSize; i<numberRowsInTable; i++ ) {
    // theTable.rows[i].style.display = 'none';
    // }
    // totalPage.innerHTML = pageCount();
    // pageNum.innerHTML = '';
    // nextLink();
    // lastLink();
    // }
    // hide();



