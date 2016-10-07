@include("home/common/left");

        <div id="main">
          
		  
            <div class="sy-main cf">
                <div class="sy-mainL">
                    <div class="dj-w">
                        <div class="head-pic">
                            <div class="avatar-75">
							@foreach($userhome as $k=>$v)
                                <img src="images/{{ $v['path'] }}" style="width:50px;height:50px" alt="用户头像">
							@endforeach
                            </div>
                            
                        </div>

                        <ul class="record-txt">
							@foreach($userhome as $k=>$v)
                            <li style="padding-bottom:10px;">
								<strong class="mcgreen f14">欢迎您！<b style="color: #FF6600">{{ $v['phone'] }}</b></strong> 
								上一次登录时间：<span class="mcblue">{{Session::get('datetime')}}</span>
							</li>
                            <li>会员卡号：<strong class="mcblue f14">201609{{ $v['u_id'] }}</strong></li>
                            
                            <li>账户余额：<strong class="mcblue f14">¥ {{ $v['u_money'] }}</strong> &nbsp;&nbsp;<a href="http://www.byts.com.cn/users/index.php?do=pay">在线充值</a></li>
							
							<li>我的积分：<strong class="mcblue f14"> {{ $v['rank'] }}</strong> &nbsp;&nbsp;<a href="http://www.byts.com.cn/users/index.php?do=money">消费记录</a></li>
						   @endforeach
                        </ul>
                        <div class="clr"></div>
                    </div>

                    <div class="record-w">
                        <div class="clr"></div>
                    </div>
                </div>
                <div class="sy-mainR">
                    <div class="or-head cf">
                        <h3>温馨提示：</h3>
                    </div>
                     <div class="sy-cm-w mb15">
                      
					  
                    </div>
                                                            <div class="grn-head cf">
                        <h3>活动推荐：</h3>
                    </div>
                    <div class="sy-cm-w">
                        <ul class="hdtj-ul">
						   
						   
                        </ul>
                    </div>
                </div>
            </div>
          
		  
            <div id="recommend">
                <ul id="recommend-tab">
                    <li class="recommend-tab-cur">推荐您的</li>
                </ul>
                <div class="tui_scroll cf">
                    <div id="crc-w">
                        <ul class="common-rc2">
                            <div id="crc-w">
                                     
                                <li><a href="http://www.byts.com.cn/line/kaiensi002/5637.htm" class="cblue" target="_blank"><img src="../home/images/1413952731_2280.jpg" alt="">澳大利亚（凯恩斯  海豚岛）9日</a></li>

                                <li><a href="http://www.byts.com.cn/line/kaiensi002/5637.htm" class="cblue" target="_blank"><img src="../home/images/1413527387_8882.jpg" alt="">澳大利亚（凯恩斯  海豚岛）9日</a></li>
                 
                                <li><a href="http://www.byts.com.cn/line/kaiensi002/5637.htm" class="cblue" target="_blank"><img src="../home/images/1413527387_8040.jpg" alt="">澳大利亚（凯恩斯  海豚岛）9日</a></li>
            
                                <li><a href="http://www.byts.com.cn/line/kaiensi002/5637.htm" class="cblue" target="_blank"><img src="../home/images/1413527387_1877.jpg" alt="">澳大利亚（凯恩斯  海豚岛）9日</a></li>
                  
                                <li><a href="http://www.byts.com.cn/line/siluqinghai002/3038.htm" class="cblue" target="_blank"><img src="../home/images/140603142G4.jpg" alt="">丝绸之路新疆、甘肃、 青海双卧10日</a></li>
                 
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>







</div>
</div>
</div>
<div style="clear:both;"></div>
<div class="ufooter">

        <div class="foot-copyright">
            <span>Copyright 1984-2014 http://www.byts.com.cn</span>
            <span>京ICP证041363号</span>
            <span>联系电话：<font class="red">400-926-5166</font></span>
        </div>

    </div>



<!-- WPA Button Begin -->
<script charset="utf-8" type="text/javascript" src="css/wpa.php"></script>
<!-- WPA Button End -->
<script language="JavaScript" src="css/floatcard.js"></script><script src="css/all_20100501.js"></script><script id="TQGetrequestUser_JS"></script>
<script id="TQGetIsNewMsg_JS"></script><script src="css/as.js"></script><object id="tq_as" name="tq_as" style="position:absolute;left:0px;top:-5px;" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" height="1" width="1"><param name="movie" value="http://sysimages.tq.cn/js/vip/shareObject.swf"><param name="allowScriptAccess" value="always"><object id="tq_as2" name="tq_as2" style="position:absolute;left:0px;top:-5px;" type="application/x-shockwave-flash" data="css/shareObject.swf" height="1" width="1"><param name="allowScriptAccess" value="always"></object></object>






 

</body></html>