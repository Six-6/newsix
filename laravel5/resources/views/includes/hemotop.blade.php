<?php
$name=Session::get("name");
$u_id=Session::get("u_id");
?>
<div class="top1">
  @if(empty($name))
    <div class="conter"><span>欢迎访问 <a href="#">惠玩旅行社官网</a></span>　请
    <span id="_Check_head_Login">
    <span><a href="{{URL('blo')}}">登录</a></span>
    <span>|</span>
    <span><a href="{{URL('register')}}" id="">注册</a></span>
    @else
  <div class="conter"><span>欢迎光临 <a href="#">惠玩旅行社官网</a></span>　
  <span id="_Check_head_Login">
        <span><a href="{{URL('home/personAdd')}}" >{{$name}}</a></span>
    <span>|</span>
    <span><a href="{{URL('home/personAdd')}}" id="{{$u_id}}">用户中心</a></span>
    <span>|</span>
    <span><a href="{{URL('home/personDel')}}" >退出</a></span>
    @endif
</span><script language="javascript">Check_head_Login();</script>
     <div class="hour"><img src="home/homepage/pic1.jpg" height="19" width="46"></div>
     <div class="iph">旅游预订电话 <strong>18513975642</strong></div>
</div>
</div>
<div class="top2">
	<div class="conter">
    <div class="logo"><img src="home/homepage/logo.png" height="54" width="329"><img src="home/homepage/tage.png" height="50" width="116"></div>
    <div class="sourchNew" style="float:right"> 
      <form method="POST" action="{{URL('home/searchs')}}">
        <div class="select_text" style="background-color:greep;">
        <input placeholder="请输入关键字！" name="sous" style="height:35px;background-color:White;" type="text">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input type="submit" style="height:35px;background-color:greep;" value="查询">
        </div>
        </form>
  </div>
  </div>  
  
    </div>
</div>