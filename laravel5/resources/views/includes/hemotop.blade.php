<div class="top1">
  @if(empty(Session::get('name')))
    <div class="conter"><span>欢迎访问 <a href="#">惠玩旅行社官网</a></span>　请
    <span id="_Check_head_Login">
    <span><a href="{{URL('blo')}}" target="_blank">登录</a></span>
    <span>|</span>
    <span><a href="{{URL('register')}}" target="_blank" id="">注册</a></span>
    @else
  <div class="conter"><span>欢迎光临 <a href="#">惠玩旅行社官网</a></span>　
  <span id="_Check_head_Login">
        <span><a href="{{URL('home/personAdd')}}" target="_blank">{{Session::get('name')}}</a></span>
    <span>|</span>
    <span><a href="{{URL('home/userhome')}}" target="_blank" id="{{Session::get('u_id')}}">用户中心</a></span>
    <span>|</span>
    <span><a href="{{URL('home/personDel')}}" target="_blank" >退出</a></span>
    @endif
</span><script language="javascript">Check_head_Login();</script>
     <div class="hour"><img src="home/homepage/pic1.jpg" height="19" width="46"></div>
     <div class="iph">旅游预订电话 <strong>18513975642</strong></div>
</div>
</div>
<style type="text/css">
  .sourcw{float:right; background-color:; margin-top: 10px}
  .textSubmit{
    height:35px; 
    background-color:group;
    border: 1px solid #FE6840;
    width: 240px
  }
  .selSubmit{width:45px; height:35px; background-color:White;}
  .icon_next{
    width:45px;
    height: 35px;
    font-size: 15px;
    border:1px solid #FE6840;
    background: #FE6840;
    cursor: hand;/* 鼠标移上去时，变成手形。 */
    color:black
  }
</style>
<div class="top2">
	<div class="conter">
    <div class="logo"><img src="home/homepage/logo.png" height="54" width="329"><img src="home/homepage/tage.png" height="50" width="116"></div>
      <div class="sourcw">
        <div class="sourchNew"> 
          <form method="POST" action="{{URL('home/searchs')}}">
            <div class="select_text" style="background-color:White;">
            <input placeholder="请输入关键字！" class="textSubmit" name="sous" type="text">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <input type="submit" class="icon_next" value="搜索">
            </div>
          </form>
      </div>
    </div>
  </div>  
  
    </div>
</div>