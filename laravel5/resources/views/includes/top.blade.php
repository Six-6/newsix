
<div class="top1">
  <div class="conter"><span>欢迎访问 <a href="#">北京青年旅行社官网</a></span>　请
  <span id="_Check_head_Login">
    <span><a href="#" target="_blank">登 录</a></span>
<span>|</span>
<span><a href="#" target="_blank">注 册</a></span>



</span><script language="javascript">Check_head_Login();</script>
     <div class="hour"><img src="../home/images/pic1.jpg" width="46" height="19"></div>
     <div class="iph">旅游预订电话 <strong>400-926-5166</strong></div>
</div>
</div>
<div class="top2">
  <div class="conter">
      <div class="logo"><img src="../home/images/logo.png" width="329" height="54"><img src="../home/images/tage.png" width="116" height="50"></div>
    <div class="sourchNew"> 
    <!-- <form action="http://www.byts.com.cn/tags.php" method="post" name="indexsearchform" class="cfix" id="indexsearchform"> -->
<input type="hidden" value="0" name="travelClassHeader" id="srhInput">
    <div class="select_box"><input id="myselect" type="text" value="全部" readonly="readonly">
    <ul class="select_ul" tyle="z-index: 10000; display: none;">
    <li> <a href="javascript:void(0)">全部</a></li>
        <li><a val="4" href="javascript:void(0)">旅游线路</a></li>
        <li> <a val="8" href="javascript:void(0)">签证办理</a></li>
        <li><a val="9" href="javascript:void(0)">旅游租车</a></li>
        <li><a val="10" href="javascript:void(0)">旅游门票</a></li>
  
    </ul>
    <input id="search" autocomplete="off" style="length:20px width:8px" maxlength="18" type="text" value="请输入关键字" onclick="" name="searchkey">
    <!-- <input ="text" placeholder="你想输入的内容" id="sou" onblur="sousuo()" >  -->
  </div>
  </div>  
  
    </div>
</div>


<div class="dh">
  <div class="conter">
      <div class="a1"><a href="javascript:void(0)">所有目的地分类</a></div>
      <div class="a2">
          <a href="{{URL('/')}}">首页</a>
            <a href="http://www.byts.com.cn/out/">出境游</a>
            <a href="http://www.byts.com.cn/china/">国内游</a>
            <a href="http://www.byts.com.cn/beijing/">北京游</a>
            <a href="http://www.byts.com.cn/zhoubian/">周边游</a>
            <a href="http://www.byts.com.cn/youlun/">邮轮游</a>
            <a href="http://www.byts.com.cn/line/maerdaifu001/">马尔代夫</a>
        </div>
      <form method="POST" action="searchs">
      <div class="a3">
        <input type="text" name="sous" placeholder="您想要查询的地名、公交" > 
        <input type="submit" value="查询">
      </div>
      <input type="hidden" name="_token" value="{{ csrf_token() }}">
      </form>
        <div class="clear"></div>

<script src="../assets/js/jquery-2.1.4.min.js"></script>
<script>
/*  function sousuo(){
    var s=$("#sous").val();
    var z='';
    $.ajax({
      type: "get",
       url: "{{URL('home/searchs')}}",
       data: "s="+s,
       success: function(msg){
          if (msg == 0) {
              alert('抱歉，没有您输入的信息，请联系网站管理员');
          }else{

          }
       }
    })    
  }*/
</script>