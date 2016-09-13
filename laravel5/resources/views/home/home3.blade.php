<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head><script src="home/homepage/crmqq.php" async="" charset="utf-8" type="text/javascript"></script><script src="home/homepage/contains.js" async="" charset="utf-8" type="text/javascript"></script><script src="home/homepage/localStorage.js" async="" charset="utf-8" type="text/javascript"></script><script src="home/homepage/Panel.js" async="" charset="utf-8" type="text/javascript"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>惠玩官网</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="baidu_union_verify" content="78996a0c9ed0e90d6eb741eaef845ec8">
<meta property="qc:admins" content="1120363777621436375636">
<meta name="author" content="http://www.byts.com.cn">
<meta name="copyright" content="北京青年旅行社股份有限公司">
<meta name="description" content="北京青年旅行社股份有限公司是实力雄厚的北京旅行社，经营国内旅游、出境旅游、入境旅游等业务。北京青旅网是北青旅总社指定的专业旅游网站。">
<meta name="keywords" content="北京青旅,北青旅,旅游网,旅行社,国内旅游,出境旅游,北京旅游,北京周边游,休闲,会议,度假,自由人,签证,机票,出差,酒店,订房,在线预定,特色旅游,专题旅游,夕阳红旅游,红色旅游,北京青年旅行社">
<link rel="stylesheet" href="home/homepage/indexv2.htm" type="text/css">
<link href="home/homepage/text.htm" type="text/css" rel="stylesheet">
<meta name="360-site-verification" content="972c799d32fc710b7946ef9b0dbdd2fc">
<meta name="chinaz-site-verification" content="081e7651-48c6-4c2f-a569-99321685eab1">
<link href="home/homepage/site.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="home/homepage/jquery-1.js"></script>
<script type="text/javascript" src="home/homepage/jquery.js"></script>
<link rel="stylesheet" href="home/homepage/style_003.css">
<link rel="stylesheet" href="home/homepage/index.css">
<script type="text/javascript" src="home/homepage/188_min.js"> </script>
<script type="text/javascript" src="home/homepage/188_NewIndex.js"></script>
<script type="text/javascript"> 
var intervalId = null; 
function slideAd(id,nStayTime,sState,nMaxHth,nMinHth){ 
  this.stayTime=nStayTime*6000 || 9000; 
  this.maxHeigth=nMaxHth || 115; 
  this.minHeigth=nMinHth || 1; 
  this.state=sState || "down" ; 
  var obj = document.getElementById(id); 
  if(intervalId != null)window.clearInterval(intervalId); 
function openBox(){ 
       var h = obj.offsetHeight; 
       obj.style.height = ((this.state == "down") ? (h + 3) : (h - 3))+"px"; 
    if(obj.offsetHeight>this.maxHeigth){ 
        window.clearInterval(intervalId); 
        intervalId=window.setInterval(closeBox,this.stayTime); 
    } 
    if (obj.offsetHeight<this.minHeigth){ 
        window.clearInterval(intervalId); 
        obj.style.display="none"; 
    }     

} 

function closeBox(){ 
       slideAd(id,this.stayTime,"up",nMaxHth,nMinHth); 
  } 
      intervalId = window.setInterval(openBox,10); 
}
</script>
<script type="text/javascript">
$(document).ready(function(){
	$(".select_box input").click(function(){
		var thisinput=$(this);
		var thisul=$(this).parent().find("ul");
		if(thisul.css("display")=="none"){
			if(thisul.height()>200){thisul.css({height:"200"+"px","overflow-y":"scroll" })};
			thisul.fadeIn("100");
			thisul.hover(function(){},function(){thisul.fadeOut("100");})
			thisul.find("li a").click(function(){
				thisinput.val($(this).text());thisul.fadeOut("100");
			
			}).hover(function(){$(this).addClass("curr");},function(){$(this).removeClass("curr");
			
			});
			}
		else{
			thisul.fadeOut("fast");
			}
	})
	$("#submit").click(function(){
		var endinfo="";
		$(".select_box input:text").each(function(i){
			endinfo=endinfo+(i+1)+":"+$(this).val()+";\n";							 
		})							
		alert(endinfo);						
	})
	
	$(function(){
	$("#SouDesignContent").keyup(function() {
        var valB=$("#SouDesignContent").val();
	if(valB==""){
		$(".select_empty").css("background-color","#FFF")}
	else{
		$(".select_empty").css("background-color","transparent")
	}
    });
	
	})
});


</script><script language="javascript" type="text/javascript" src="home/homepage/ajax188.js"></script><script language="javascript" type="text/javascript">

function Check_head_Login(){
      
	  var taget_obj = document.getElementById('_Check_head_Login');	  
	  myajax = new ajaxx188(taget_obj,false,false,'','','');
	  myajax.SendGet2("http://www.byts.com.cn/users/ajax_head.php");
	  A188XHTTP = null;
}

function  myAddPanel(title,url,desc) {
  	if((typeof   window.sidebar   ==   'object')   &&   (typeof   window.sidebar.addPanel   ==   'function')) {
  		window.sidebar.addPanel(title,url,desc);  
	}else  {
  		window.external.AddFavorite(url,title);  
	}  
}


</script><script language="javascript"> 
<!-- 
window.onerror=function(){return true;} 
// --> 
</script><link href="home/homepage/style_002.css" id="TQCSS0.8634256636356077" type="text/css" rel="stylesheet"><link href="home/homepage/style.css" id="TQCSS0.9131329277001883" type="text/css" rel="stylesheet"><script src="home/homepage/float.js" id="TQJS0.37100254799036236"></script><script src="home/homepage/invite.js" id="TQJS0.5287056208026211"></script><script id="_da" src="home/homepage/i.js" async="" charset="utf-8"></script><script src="home/homepage/scriptonline.js" id="TQJS0.9761968565467016"></script><script src="home/homepage/sendmain.htm" id="TQJS0.12753807826748798"></script><script src="http://121.40.46.58:8000/getrequesttype.js?uin=9606641&amp;rand=88566327505118463&amp;comflag=12619823856628612&amp;isgetappwords=true&amp;nocache=0.08760428274757459" id="TQJS0.03519297806330812"></script></head>




 
<body><iframe style="position: absolute; width: 0px; height: 0px; border: 0px none;" tabindex="-1" title="" src="home/homepage/id.htm" frameborder="0"></iframe><div style="visibility: hidden; border: 0px ridge rgb(234, 234, 234); position: fixed; z-index: 9999; width: 402px; height: 144px; top: 233px; left: 473px;" class="tracq_fix_div" id="tq_invit_container"><div style="width: 402px; height: 144px;" id="tq_invit_bg"><img id="tq_invit_bg_img" src="home/homepage/bg_c1.png"><div id="tq_invit_title" style="position: absolute; font-weight: bold; width: 345px; height: 17px; left: 31px; top: 7px;">网站管理员请求和您通话（本系统由TQ提供）</div><div id="tq_invit_head" style="overflow: hidden;position: absolute;BACKGROUND-COLOR: #FFFFFF; FILTER: Alpha(opacity=0); opacity: 0;"></div><div id="tq_invit_close" style="position: absolute; background-color: rgb(255, 255, 255); opacity: 0; width: 19px; height: 19px; left: 378px; top: 4px;" onclick="TQKF.inviter.Refuse()"></div><div id="tq_invit_words" style="overflow-x: hidden; overflow-y: auto; width: 280px; height: 65px; left: 118px; top: 35px;"><div id="tq_invit_parse_ip"></div>您好！能为您做些什么吗？</div><div style="position: absolute; width: 81px; height: 25px; left: 238px; top: 110px; display: none;" id="tq_invit_accept"><img src="home/homepage/accept_c1.png" onclick="TQKF.inviter.Accept()"></div><div style="position: absolute; width: 81px; height: 25px; left: 238px; top: 110px;" id="tq_invit_message"><img src="home/homepage/message_c1.png" onclick="TQKF.inviter.Accept()"></div><div id="tq_invit_call" style="position: absolute; display: none; width: 81px; height: 25px; left: 158px; top: 110px;"></div><div style="position: absolute; width: 81px; height: 25px; left: 318px; top: 110px;" id="tq_invit_refuse"><img style="width:auto;height:auto" src="home/homepage/refuse_c1.png" onclick="TQKF.inviter.Refuse()" width="auto"></div></div></div><iframe style="display: none;"></iframe><style type="text/css">.WPA3-SELECT-PANEL { z-index:2147483647; width:463px; height:292px; margin:0; padding:0; border:1px solid #d4d4d4; background-color:#fff; border-radius:5px; box-shadow:0 0 15px #d4d4d4;}.WPA3-SELECT-PANEL * { position:static; z-index:auto; top:auto; left:auto; right:auto; bottom:auto; width:auto; height:auto; max-height:auto; max-width:auto; min-height:0; min-width:0; margin:0; padding:0; border:0; clear:none; clip:auto; background:transparent; color:#333; cursor:auto; direction:ltr; filter:; float:none; font:normal normal normal 12px "Helvetica Neue", Arial, sans-serif; line-height:16px; letter-spacing:normal; list-style:none; marks:none; overflow:visible; page:auto; quotes:none; -o-set-link-source:none; size:auto; text-align:left; text-decoration:none; text-indent:0; text-overflow:clip; text-shadow:none; text-transform:none; vertical-align:baseline; visibility:visible; white-space:normal; word-spacing:normal; word-wrap:normal; -webkit-box-shadow:none; -moz-box-shadow:none; -ms-box-shadow:none; -o-box-shadow:none; box-shadow:none; -webkit-border-radius:0; -moz-border-radius:0; -ms-border-radius:0; -o-border-radius:0; border-radius:0; -webkit-opacity:1; -moz-opacity:1; -ms-opacity:1; -o-opacity:1; opacity:1; -webkit-outline:0; -moz-outline:0; -ms-outline:0; -o-outline:0; outline:0; -webkit-text-size-adjust:none; font-family:Microsoft YaHei,Simsun;}.WPA3-SELECT-PANEL a { cursor:auto;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-TOP { height:25px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CLOSE { float:right; display:block; width:47px; height:25px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CLOSE:hover { background-position:0 -25px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-MAIN { padding:23px 20px 45px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-GUIDE { margin-bottom:42px; font-family:"Microsoft Yahei"; font-size:16px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-SELECTS { width:246px; height:111px; margin:0 auto;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CHAT { float:right; display:block; width:88px; height:111px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat 0 -80px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CHAT:hover { background-position:-88px -80px;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-AIO-CHAT { float:left;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-QQ { display:block; width:76px; height:76px; margin:6px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat -50px 0;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-QQ-ANONY { background-position:-130px 0;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-LABEL { display:block; padding-top:10px; color:#00a2e6; text-align:center;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-BOTTOM { padding:0 20px; text-align:right;}.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-INSTALL { color:#8e8e8e;}</style><style type="text/css">.WPA3-CONFIRM { z-index:2147483647; width:285px; height:141px; margin:0; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACNCAMAAAC9pV6+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5QUIyQzVCNUIwQTExRTJCM0FFRDNCMTc1RTI3Nzg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5QUIyQzVDNUIwQTExRTJCM0FFRDNCMTc1RTI3Nzg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTlBQjJDNTk1QjBBMTFFMkIzQUVEM0IxNzVFMjc3ODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTlBQjJDNUE1QjBBMTFFMkIzQUVEM0IxNzVFMjc3ODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6QoyAtAAADAFBMVEW5xdCkvtNjJhzf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) no-repeat;}.WPA3-CONFIRM { *background-image:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/panel.png);}.WPA3-CONFIRM * { position:static; z-index:auto; top:auto; left:auto; right:auto; bottom:auto; width:auto; height:auto; max-height:auto; max-width:auto; min-height:0; min-width:0; margin:0; padding:0; border:0; clear:none; clip:auto; background:transparent; color:#333; cursor:auto; direction:ltr; filter:; float:none; font:normal normal normal 12px "Helvetica Neue", Arial, sans-serif; line-height:16px; letter-spacing:normal; list-style:none; marks:none; overflow:visible; page:auto; quotes:none; -o-set-link-source:none; size:auto; text-align:left; text-decoration:none; text-indent:0; text-overflow:clip; text-shadow:none; text-transform:none; vertical-align:baseline; visibility:visible; white-space:normal; word-spacing:normal; word-wrap:normal; -webkit-box-shadow:none; -moz-box-shadow:none; -ms-box-shadow:none; -o-box-shadow:none; box-shadow:none; -webkit-border-radius:0; -moz-border-radius:0; -ms-border-radius:0; -o-border-radius:0; border-radius:0; -webkit-opacity:1; -moz-opacity:1; -ms-opacity:1; -o-opacity:1; opacity:1; -webkit-outline:0; -moz-outline:0; -ms-outline:0; -o-outline:0; outline:0; -webkit-text-size-adjust:none;}.WPA3-CONFIRM * { font-family:Microsoft YaHei,Simsun;}.WPA3-CONFIRM .WPA3-CONFIRM-TITLE { height:40px; margin:0; padding:0; line-height:40px; color:#2b6089; font-weight:normal; font-size:14px; text-indent:80px;}.WPA3-CONFIRM .WPA3-CONFIRM-CONTENT { height:55px; margin:0; line-height:55px; color:#353535; font-size:14px; text-indent:29px;}.WPA3-CONFIRM .WPA3-CONFIRM-PANEL { height:30px; margin:0; padding-right:16px; text-align:right;}.WPA3-CONFIRM .WPA3-CONFIRM-BUTTON { position:relative; display:inline-block!important; display:inline; zoom:1; width:99px; height:30px; margin-left:10px; line-height:30px; color:#000; text-decoration:none; font-size:12px; text-align:center;}.WPA3-CONFIRM .WPA3-CONFIRM-BUTTON-FOCUS { width:78px;}.WPA3-CONFIRM .WPA3-CONFIRM-BUTTON .WPA3-CONFIRM-BUTTON-TEXT { line-height:30px; text-align:center; cursor:pointer;}.WPA3-CONFIRM-CLOSE { position:absolute; top:7px; right:7px; width:10px; height:10px; cursor:pointer;}</style><div style="border: 0px ridge rgb(234, 234, 234); position: absolute; top: 100px; z-index: 9998; left: 10px; visibility: visible;" class="tq_div_main" id="tq_float_container"><div id="tq_float_head" style="cursor:move;text-align:left;width:118px;height:35px;background-image:url(http://sysimages.tq.cn/images/vip/float/100501/t1/s1/c1/head.gif);"><div style="float:left;width:96px; height:16px; margin-left:2px; margin-top:6px" id="tq_float_title">青旅在线咨询</div><div style="float:right; width:15px; height:16px; margin-right:1px; margin-top:3px;cursor:pointer;BACKGROUND-COLOR: #FFFFFF; FILTER: Alpha(opacity=0); opacity: 0;" id="tq_float_close" onclick="TQKF.floater.Close()"></div></div><div id="tq_float_body" style="height:auto;padding-left:6px;padding-right:6px;background-position: left top; background-image:url(http://sysimages.tq.cn/images/vip/float/100501/t1/s1/c1/body.gif); background-repeat:repeat-y"><div id="tq_float_m_content" style="height:auto;padding-bottom:3px;width:106px"><div id="tq_member_div" style="overflow: visible;cursor:pointer;height:14px;margin-top:8px;margin-bottom:5px;width: 100%" onclick="TQKF.floater.OpenChatWin(9690947,22)" title="小王"><div id="tq_member_div_ico" style="height:auto;float:left;OVERFLOW: visible;"><img id="tq_float_icoon" src="home/homepage/icoon.gif" align="absmiddle"></div><div id="tq_member_div_kefuName" style="height:auto;OVERFLOW: visible;float:left;">小王</div><div id="tq_member_div_onlineIco" style="height:auto;float:right;text-align:center;OVERFLOW: visible;"><span style="width:auto;" id="tq_float_on" class="tq_float_on"><img src="home/homepage/on.gif" align="absmiddle"></span></div></div><div id="tq_member_div" style="overflow: visible;cursor:pointer;height:14px;margin-top:8px;margin-bottom:5px;width: 100%" onclick="TQKF.floater.OpenChatWin(9606641,0)" title="小洁"><div id="tq_member_div_ico" style="height:auto;float:left;OVERFLOW: visible;"><img id="tq_float_icooff" src="home/homepage/icooff.gif" align="absmiddle"></div><div id="tq_member_div_kefuName" style="height:auto;OVERFLOW: visible;float:left;">小洁</div><div id="tq_member_div_onlineIco" style="height:auto;float:right;text-align:center;OVERFLOW: visible;"><span style="width:auto;" id="tq_float_off" class="tq_float_off"><img src="home/homepage/off.gif" align="absmiddle"></span></div></div><div id="tq_member_div" style="overflow: visible;cursor:pointer;height:14px;margin-top:8px;margin-bottom:5px;width: 100%" onclick="TQKF.floater.OpenChatWin(9701381,0)" title="小晴"><div id="tq_member_div_ico" style="height:auto;float:left;OVERFLOW: visible;"><img id="tq_float_icooff" src="home/homepage/icooff.gif" align="absmiddle"></div><div id="tq_member_div_kefuName" style="height:auto;OVERFLOW: visible;float:left;">小晴</div><div id="tq_member_div_onlineIco" style="height:auto;float:right;text-align:center;OVERFLOW: visible;"><span style="width:auto;" id="tq_float_off" class="tq_float_off"><img src="home/homepage/off.gif" align="absmiddle"></span></div></div></div></div><div id="tq_float_foot" style="height:auto;line-height:12px;cursor:pointer"><div style="height:auto;line-height:12px;cursor:pointer" title=""><img onclick="TQKF.floater.OpenAgentSite()" id="tq_float_btm" src="home/homepage/btm.gif" border="0"></div></div></div>
<div id="MyMoveAd" style="height: 0px; width: 1366px; margin: 0px auto; overflow: hidden; display: none;">
        <img src="home/homepage/new.jpg">
    </div>
    <script type="text/javascript"> 
     <!-- 
     function openimg(){
        slideAd('MyMoveAd',2); 
     }
        setTimeout(openimg,4000)
-->
    </script>

@include('includes.hemotop')

<div class="dh">
	<div class="conter">
   	  <div class="a1"><a href="javascript:void(0)">所有目的地分类</a></div>
      <div class="a2">
		@foreach($arr2 as $arr2=>$navigation)
    	<a href="{{$navigation->l_url}}">{{ $navigation->l_types }}</a>
    	@endforeach
      </div>
      <div class="a3"><div style="position: absolute; left: 24px; top: 1px;"><img src="home/homepage/HOT.png"></div>
        <a href="http://www.byts.com.cn/add/tejia.php">特价</a>
        <a href="http://www.byts.com.cn/visa/">签证</a>   
        <a href="http://www.byts.com.cn/zuche/bj/">租车</a>
        <a href="http://www.byts.com.cn/add/dingzhi.php">定制</a> 
        
      </div>
        <div class="clear"></div>


<script type="text/javascript">
function hover(n){
	for(var i=1;i<10;i++){
		$("#show"+n).css("display","none");
		}
	
	$("#show"+n).css("display","block");
	
	}
function mousout(n){
		$("#show"+n).css("display","none");
	}

</script>
       
      <div class="dhnew">
      	<div class="dha">
      		<!-- 左边开始 -->
        	<ul> 
        		@foreach($arr1 as $region)
            	<li class="a" onmouseover="hover({{ $region->r_id }})" onmouseout="mousout({{ $region->r_id }})"><div>
            		<div>
	            		<strong>{{ $region->r_region }}</strong>
		                <div class="noe"> 
		                @foreach($region->child as $reg)
						<a href="http://www.byts.com.cn/line/haidao001">{{ $reg->r_region }}</a>
						@endforeach
						</div>
					</div>
				</li>
				@endforeach
            </ul>
            <!-- 左边结束 -->
         	<div class="clear"></div>
        </div>
      </div>
	  
	  <!-- 右边始 -->
      @foreach($arr1 as $q)
      <div class="nowhover" id="show{{ $q->r_id }}" onmouseout="mousout({{ $q->r_id }})" onmouseover="hover({{ $q->r_id }})" style="display: none;">
      	<ul>
		<li>
			@foreach($q->child as $w)
			 <div class="a"> 
			 <a href="http://www.byts.com.cn/line/haidao001">{{$w->r_region }}</a>
			 </div>
			 <div class="b">
			  @foreach($w->child as $t)
			  <a href="http://www.byts.com.cn/line/bincheng002">{{$t->r_region }} &nbsp;|</a>
			  @endforeach
			 </div>
			  @endforeach
	    </li>
		</ul>
      </div>
	  @endforeach
      <!-- 右边终 -->
        
        
  </div>
</div>



<div id="full-screen-slider" style="">
	<ul id="slides">
		<li style="background: transparent url(&quot;/uploads/userup/0/1463390341.jpg&quot;) no-repeat scroll center top; z-index: 900; display: block; opacity: 1;"><a href="http://www.byts.com.cn/line/ouzhou001/" target="_blank"></a></li>
		<li style="background: transparent url(&quot;/uploads/userup/0/1463134575.jpg&quot;) no-repeat scroll center top; z-index: 800; display: block;"><a href="http://www.byts.com.cn/line/beijiaerhu002/" target="_blank"></a></li>
        <li style="background: transparent url(&quot;/uploads/userup/0/1463390318.jpg&quot;) no-repeat scroll center top; z-index: 900; display: none;"><a href="http://www.byts.com.cn/line/ouzhou001/" target="_blank"></a></li>
        <li style="background: transparent url(&quot;/uploads/userup/0/1463134488.jpg&quot;) no-repeat scroll center top; z-index: 900; display: none;"><a href="http://www.byts.com.cn/line/xizang001/" target="_blank"></a></li>
	</ul><ul style="margin-left: 330px;" id="pagination"><li class=""><a>1</a></li><li class="current"><a>2</a></li><li class=""><a>3</a></li><li class=""><a>4</a></li></ul>
</div>


</div>
<!--第一部分END-->

<!--第二部分开始-->
<div class="cont clearfix">

	<!--国内旅游开始-->
    @foreach($arr1 as $xc)
	<div class="newChannel clearfix">
		  <h2 class="travel-Hd">
		     <span class="travel-Hd-type travel-gn-type" id="{{ $xc->r_id }}">{{$xc->r_region }}</span><span class="travel-Hd-msg">机+酒、酒+门票、酒+当地跟团游，个性、时尚、一应俱全！</span>
		     <p class="newChannel-more"><a href="http://www.byts.com.cn/china" target="_blank" title="更多国内旅游">更多国内旅游线路&gt;&gt;</a></p>
		  </h2>
		  <div class="newChannel-Bd cfix">
		  	<!-- 景点左侧地区分类开始 -->
		   	 <div class="newChannel-left">
                <dl>
                    @foreach($xc->child as $zx)
                    <dt>
                    	<a href="http://www.byts.com.cn/line/hainan001" target="_blank" id="{{ $zx->r_id }}">{{$zx->r_region }}</a>
                    </dt>
                    <dd class="cfix">
						@foreach($zx->child as $asds)
                    	<a href="http://www.byts.com.cn/line/haikouwangfan002" id="{{ $asds->r_id }}">{{$asds->r_region }}</a>
                    	@endforeach
                    @endforeach
                   </dd>
                </dl>
				
            </div>
            <!-- 景点左侧地区分类结束 -->
            
            <div class="newChannel-right J-newChannel-right">
            	<!-- 景点上边地区分类 -->
                <ul class="newChannel-tab J-newChannel-tab">
                	@foreach($xc->child as $zxtop)
                    <!--  <li class="cur">海南</li> -->
                    <li id="{{ $zxtop->r_id }}" onclick="showsjd({{ $zxtop->r_id }})">{{$zxtop->r_region }}</li>
                    @endforeach
                </ul>
            	<!-- 景点上边地区分类 -->
                 <div class="newChannel-list J-newChannel-list visible">

                    <ul class="clearfix">
                        <!-- 景点展示开始 -->
                        @foreach($arr3 as $a=>$scenic)
                        <li class="lineitem cfix">
                            <div class="img fn-left">
					            <a href="http://www.byts.com.cn/line/sanyaziyouren002/4556.htm" target="_blank" title="{{ $scenic->s_name }}">
                                    <img style="display: inline;" data-original="{{ $scenic->s_img }}" src="{{ $scenic->s_img }}" alt="" height="67px" width="118px">
                                </a>
                                <div class="prd-num">产品编号：{{ $scenic->s_id }}</div>
				            </div>
				            <dl class="info fn-left">
					            <dt class="t">
                                    <a href="http://www.byts.com.cn/line/sanyaziyouren002/4556.htm" target="_blank" title="{{ $scenic->s_name }}">{{ $scenic->s_name }}</a><img src="home/homepage/tuijian.gif">
                                </dt>
					            <dd class="desc"> {{ $scenic->s_name }}</dd>
					            <dd class="moredesc">
                                    <span>满意度：<span class="n">100%</span></span>
                                    <span class="pin"><span class="n">&nbsp;0&nbsp;</span>人点评</span>
                                    <span>最近出发班期：<span class="n">星期一,星期二,星期三</span></span>
                                </dd>
				            </dl>
				            <div class="detail fn-right">
                                
                                <span class="sup">网订优惠</span>
                                
                                <p class="price"><span class="u"></span><span class="n">￥{{ $scenic->s_sprice }}</span>起</p>
                                <span class="s m-5 J_powerFloat" rel="J_popDisong" data-song="200"><em class="dsnum"></em></span>
                            </div>
			            </li>
			            @endforeach
						<!-- 景点展示结束 -->
                    </ul>
                	<p class="newChannel-more"><a href="http://www.byts.com.cn/line/hainan001" target="_blank" title="更多出境游">更多海南线路&gt;&gt;</a></p>

                </div>
                
            </div>
        </div>
	 	</div>
	@endforeach
<!--国内旅游结束-->

</div>      

<script src="assets/js/jquery-2.1.4.min.js"></script>
<script>
	function showsjd(showsjd){
		var ass='';
		$.ajax({
		   type: "get",
		   url: "{{URL('home/scenic')}}",
		   data: "showsjd="+showsjd,
		   success: function(msg){
		      alert(msg);
		   }
		});


		/*var ass='';
        $.get('scenic',{'showsjd':showsjd},function(ms){
            ass+="<ul class='clearfix'>"
            for (var i = 0; i < ms.length; i++) {
                ass+="<li class='lineitem cfix'>"
                ass+="<div class='img fn-left'>"
                ass+="<a href='"+ms[i]['s_id']+"' target='_blank' title='"+ms[i]['s_name']+"'>"
                ass+="<img width='118px' height='67px' data-original='"+ms[i]['s_img']+"' src='"+ms[i]['s_img']+"' alt='景点图' style='display: inline;'>"
                ass+="</a>"
                ass+="<div class='prd-num'>产品编号："+ms[i]['s_id']+"</div>"
                ass+="</div>"
                ass+="<dl class='info fn-left'>"
                ass+="<dt class='t'>"
                ass+="<a href='http://www.byts.com.cn/tours/4376.htm' target='_blank' title='"+ms[i]['s_name']+"'>"+ms[i]['s_name']+"</a><img src='image/tuijian.gif'>"
                ass+="</dt>"
                ass+="<dd class='desc'> "+ms[i]['s_characteristic']+"</dd>"
                ass+="<dd class='moredesc'>"
                ass+="<span>满意度：<span class='n'>100%</span></span>"
                ass+="<span class='pin'><span class='n'>&nbsp;0&nbsp;</span>人点评</span>"
                ass+="<span>最近出发班期：<span class='n'>星期二,星期四,星期日</span></span>"
                ass+="</dd>"
                ass+="</dl>"
                ass+="<div class='detail fn-right'>"
                ass+="<span class='sup'>网订优惠</span>"
                ass+="<p class='price'><span class='u'></span><span class='n'>￥"+ms[i]['s_price']+"</span>起</p>"
                ass+="<span class='s m-5 J_powerFloat' rel='J_popDisong' data-song='200'><em class='dsnum'></em></span>"
                ass+="</div>"
                ass+="</li>"
              }
                ass+="</ul>"
             alert(ass);
             // $("#tihuan").html(ass);
        },'json');*/
	}
</script>

<div style="clear:both;"></div>
<div class="ufooter">
    <div class="footer01">
        <div class="newWarp">
            <div class="foot_faq">
            
            <div class="faq_container01">
                    <span class="faq_class"><strong>预订常见问题</strong></span>
                    <ul>
                    
                    
 <li><a href="http://www.byts.com.cn/help/1/chunwan.htm" title="纯玩是什么意思？" target="_blank">纯玩是什么意思？</a></li>
<li><a href="http://www.byts.com.cn/help/1/help538.html" title="单房差是什么？" target="_blank">单房差是什么？</a></li>
<li><a href="http://www.byts.com.cn/help/1/help537.html" title="双飞、双卧都是什么意思？" target="_blank">双飞、双卧都是什么意思？</a></li>
<li><a href="http://www.byts.com.cn/help/1/help536.html" title="满意度是怎么计算的？" target="_blank">满意度是怎么计算的？</a></li>
 
                       
                       
                    </ul>
                </div><div class="faq_container01">
                    <span class="faq_class"><strong>付款和发票</strong></span>
                    <ul>
                    
                    
 <li><a href="http://www.byts.com.cn/help/2/help543.html" title="签约可以刷卡吗？" target="_blank">签约可以刷卡吗？</a></li>
<li><a href="http://www.byts.com.cn/help/2/help542.html" title="付款方式有哪些？" target="_blank">付款方式有哪些？</a></li>
<li><a href="http://www.byts.com.cn/help/2/help541.html" title="怎么网上支付？" target="_blank">怎么网上支付？</a></li>
<li><a href="http://www.byts.com.cn/help/2/help540.html" title="如何获取发票？" target="_blank">如何获取发票？</a></li>
 
                       
                       
                    </ul>
                </div><div class="faq_container01">
                    <span class="faq_class"><strong>签署旅游合同</strong></span>
                    <ul>
                    
                    
 <li><a href="http://www.byts.com.cn/help/3/help547.html" title="有旅游合同范本下载吗？" target="_blank">有旅游合同范本下载吗？</a></li>
<li><a href="http://www.byts.com.cn/help/3/help546.html" title="门市地址在哪里？" target="_blank">门市地址在哪里？</a></li>
<li><a href="http://www.byts.com.cn/help/3/help545.html" title="能传真签合同吗？" target="_blank">能传真签合同吗？</a></li>
<li><a href="http://www.byts.com.cn/help/3/help544.html" title="可以不签合同吗？" target="_blank">可以不签合同吗？</a></li>
 
                       
                       
                    </ul>
                </div><div class="faq_container01">
                    <span class="faq_class"><strong>旅游预订优惠政策</strong></span>
                    <ul>
                    
                    
 <li><a href="http://www.byts.com.cn/help/4/help551.html" title="如何查看我的金币信息？" target="_blank">如何查看我的金币信息？</a></li>
<li><a href="http://www.byts.com.cn/help/4/help550.html" title="如何使用金币？" target="_blank">如何使用金币？</a></li>
<li><a href="http://www.byts.com.cn/help/4/help549.html" title="如何得到金币" target="_blank">如何得到金币</a></li>
<li><a href="http://www.byts.com.cn/help/4/help548.html" title="什么是金币？" target="_blank">什么是金币？</a></li>
 
                       
                       
                    </ul>
                </div><div class="faq_container01">
                    <span class="faq_class"><strong>其他事项</strong></span>
                    <ul>
                    
                    
 <li><a href="http://www.byts.com.cn/help/5/2016/0304/5402.html" title="&lt;font color='#FF6633'&gt;关于游客购物的重要提示&lt;/font&gt;" target="_blank"><font color="#FF6633">关于游客购物的重要提示</font></a></li>
<li><a href="http://www.byts.com.cn/help/5/2012/0524/555.html" title="退款问题解答" target="_blank">退款问题解答</a></li>
<li><a href="http://www.byts.com.cn/help/5/2012/0524/554.html" title="有旅游保险吗？保额多少？" target="_blank">有旅游保险吗？保额多少？</a></li>
<li><a href="http://www.byts.com.cn/help/5/2012/0524/553.html" title="签证相关问题解答" target="_blank">签证相关问题解答</a></li>
 
                       
                       
                    </ul>
                </div>

          
          
                <div class="faq_container06">
                    <span class="faq_class"><strong>关注我们的微博</strong></span>
                  <div class="interact_us">
                  
                    <ul class="interact_us clearfix">
                        <li><span class="tn_weibo"><a target="_blank" href="http://www.weibo.com/"></a></span>
                            <p><a target="_blank" rel="nofollow" href="http://www.weibo.com/">新浪微博</a></p>
                        </li>
                        <li><span class="tn_tencent"><a target="_blank" href="http://t.qq.com/ccsz8"></a></span>
                            <p><a target="_blank" rel="nofollow" href="http://t.qq.com/ccsz8">腾讯微博</a></p>
                        </li>
                        <li id="wxpop"><span class="tn_weixin"><a href="javascript:void(0);"></a></span>
                            <p><a href="javascript:void(0);" rel="nofollow">微信</a></p>
                        </li>
                    </ul>
                </div>

                </div>
                <div class="clear">
                </div>
            </div>
        </div>
    </div>
    
<div class="foot-webtrust">
    <a href="http://www.byts.com.cn/news/lvyouxinwen/2183.htm" rel="nofollow" target="_blank" title="国家4A级旅行社" class="trust1"></a>
    <a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202005060700533" rel="nofollow" target="_blank" title="经营性ICP备案" class="trust2"></a>
    <a href="https://ss.knet.cn/verifyseal.dll?sn=e14022111010546749hh13000000&amp;comefrom=trust&amp;trustKey=dn&amp;trustValue=www.byts.com.cn" target="_blank" rel="nofollow" title="可信网站认证" class="trust3"></a>
    <a href="http://si.trustutn.org/info?sn=354140414002398002760" target="_blank" rel="nofollow" title="认证联盟实名认证" class="trust4"></a>
    <a href="http://cats.org.cn/pinzhi/renzheng/1178" target="_blank" rel="nofollow" title="中国旅行社协会常务理事单位" class="trust5"></a>
    <a href="http://www.byts.com.cn/byts2015.jpg" target="_blank" rel="nofollow" title="北京工商行政管理" class="trust6"></a>
    <a href="http://www.anquan.org/authenticate/cert/?site=www.byts.com.cn&amp;at=realname" target="_blank" rel="nofollow" title="安全联盟实名认证" class="trust7"></a>
</div>

        <div class="foot-copyright">
            <span>Copyright 1984-2014 http://www.byts.com.cn</span>
            <span>京ICP证041363号</span>
            <span>联系电话：<font class="red">400-926-5166</font></span>
<span>优质带宽由<a href="http://www.62idc.com/">中睿科技</a>提供 <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_5896591'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "v1.cnzz.com/stat.php%3Fid%3D5896591' type='text/javascript'%3E%3C/script%3E"));</script><span id="cnzz_stat_icon_5896591"><a href="http://www.cnzz.com/stat/website.php?web_id=5896591" target="_blank" title="站长统计">站长统计</a></span><script src="home/homepage/stat.php" type="text/javascript"></script><script src="home/homepage/core.php" charset="utf-8" type="text/javascript"></script></span>
        </div>


        <div class="foot-aboutlink">
            <span><a href="http://www.byts.com.cn/">网站首页</a></span>
            
             <span><a target="_blank" href="http://www.byts.com.cn/about/3236.html">关于网上有许多自称北青旅官网的说明</a></span>
<span><a target="_blank" href="http://www.byts.com.cn/about/562.html">商务合作</a></span>
<span><a target="_blank" href="http://www.byts.com.cn/about/561.html">发展历程</a></span>
<span><a target="_blank" href="http://www.byts.com.cn/about/560.html">网站招聘</a></span>
<span><a target="_blank" href="http://www.byts.com.cn/about/559.html">用户协议</a></span>
<span><a target="_blank" href="http://www.byts.com.cn/about/558.html">免责声明</a></span>
<span><a target="_blank" href="http://www.byts.com.cn/about/557.html">联系我们</a></span>
<span><a target="_blank" href="http://www.byts.com.cn/about/556.html">关于我们</a></span>
 

        </div>

        <div class="foot-friendlink">
            
            <a class="label" href="http://www.byts.com.cn/add/link.php">友情链接：</a>
         <a href="http://www.lvmama.com/destroute/" target="_blank">驴妈妈国内旅游</a> <a href="http://beijing.cncn.com/" target="_blank">北京旅游</a> <a href="http://www.hbcct.com.cn/" target="_blank">湖北康辉旅游</a> <a href="http://www.hanyouwang.com/" target="_blank">韩国旅游</a> <a href="http://bj.uzai.com/" target="_blank">北京旅游</a> <a href="http://huoche.mafengwo.cn/" target="_blank">列车时刻表</a> <a href="http://beijing.tianqi.com/" target="_blank">北京天气</a> <a href="http://bjmap.8684.cn/" target="_blank">北京地图</a> <a href="http://you.ctrip.com/place/" target="_blank">携程旅游网</a> <a href="http://www.zhuna.cn/hotel/" target="_blank">住哪儿网</a> <a href="http://www.ganji.com/lvyou/" target="_blank">旅游</a> <a href="http://bj.ganji.com/lvyou" target="_blank">北京旅游</a> <a href="http://beijing.taoche.com/" target="_blank">北京二手车</a> <a href="http://beijing.liebiao.com/lvyou/" target="_blank">北京旅行社</a> <a href="http://visa.mafengwo.cn/" target="_blank">签证代办</a> <a href="http://www.tibetcn.com/" target="_blank">西藏旅游</a> <a href="http://www.wodingche.com/" target="_blank">租车</a> <a href="http://www.daoguo.com/" target="_blank">重庆旅行社</a> <a href="http://www.cncn.net/" target="_blank">欣旅通B2b</a> <a href="http://www.52udl.com/" target="_blank">大连旅行社</a> <a href="http://cn.konest.com/" target="_blank">韩国旅游</a> <a href="http://www.hehuamei.com/" target="_blank">龙王传说</a> <a href="http://www.youabc.cn/" target="_blank">自由行攻略</a> <a href="http://www.mayi.com/beijing/" target="_blank">北京日租房</a> <a href="http://www.99inn.cc/" target="_blank">北京旅馆预订</a> <a href="http://www.ytszg.com/" target="_blank">重庆青年旅行社</a> <a href="http://cn.toursforfun.com/" target="_blank">途风旅游网</a> <a href="http://www.517hiking.com/" target="_blank">我要去旅行</a> <a href="http://www.qiaomian.com/" target="_blank">跟团游</a> <a href="http://www.szqinglv.cn/" target="_blank">苏州青旅</a> <a href="http://huichang.qunar.com/" target="_blank">会议室出租</a> <a href="http://www.81873.com/" target="_blank">张家界自助游</a> <a href="http://www.161580.com/" target="_blank">机票查询预订</a> <a href="http://travel.qunar.com/p-cs299914-beijing" target="_blank">北京旅游攻略</a> <a href="http://travel.qunar.com/p-cs299914-beijing-jingdian" target="_blank">北京旅游景点大全</a> <a href="http://www.huiche.com/" target="_blank">汇车网</a> <a href="http://www.soucheke.com/" target="_blank">二手车</a> 
         
        </div>
        
    </div>

<!-- WPA Button Begin -->
<iframe style="display: block; position: fixed; z-index: 2147483646 ! important; left: auto; right: 8px; margin-left: 0px; top: 50%; bottom: auto; margin-top: -138px;" src="home/homepage/a.htm" allowtransparency="true" scrolling="no" frameborder="0" height="277" width="121"></iframe><script charset="utf-8" type="text/javascript" src="home/homepage/wpa.php"></script>
<!-- WPA Button End -->
<script language="JavaScript" src="home/homepage/floatcard.js"></script><script src="home/homepage/all_20100501.js"></script><script id="TQGetrequestUser_JS"></script>
<script id="TQGetIsNewMsg_JS"></script><script src="home/homepage/as.js"></script><object id="tq_as" name="tq_as" style="position:absolute;left:0px;top:-5px;" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" height="1" width="1"><param name="movie" value="http://sysimages.tq.cn/js/vip/shareObject.swf"><param name="allowScriptAccess" value="always"><object id="tq_as2" name="tq_as2" style="position:absolute;left:0px;top:-5px;" type="application/x-shockwave-flash" data="home/homepage/shareObject.swf" height="1" width="1"><param name="allowScriptAccess" value="always"></object></object>


        <script src="home/homepage/jquery_002.js" type="text/javascript"></script> 
        <script type="text/javascript" src="home/homepage/ScrollText.js"></script>
         <script type="text/javascript">
		 
        $(function () {
		
            $(".travel-tj-list img").lazyload({
                effect: "fadeIn"
            });
			 $(".J-newChannel-list img,.hs_con img,.newAd img").lazyload({
                effect: "fadeIn"
            });

           
        });
		
		
		     topMsg();       //登陆下方滚动效果
			     function topMsg(){        var scrolldown = new ScrollText("cust_news");        scrolldown.LineHeight = 26;        scrolldown.Amount = 1;        scrolldown.Direction = "up";        scrolldown.Start();    }    //lazyload  
				 
				 
				 
				 
 $(".J-newChannel-right").each(function () {

            var that = $(this);

            that.find(".J-newChannel-tab li").click(function () {

                var index = $(this).index();

			

                $(this).addClass("cur").siblings().removeClass("cur");

                that.find(".J-newChannel-list").hide().eq(index).show();

                

            });

        });

		 
function setxlTab(name,cursel,n,cbs,cbsnums){
	if(cbs!=""){
		//document.getElementById(cbs).className="intab"+cbsnums;
		//document.getElementById("con_"+cbs).style.display="none";
	}
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"hover":"intab";
		con.style.display=i==cursel?"block":"none";
	}
}

		</script>
        
        
        <script type="text/javascript">
		    $(document).ready(function () {
		        $('img[data-original]').lazyload({ threshold: 100 });
		        
		        $('.hoverBlock li').hover( //酒店、景点推荐鼠标经过效果
				function () {
				    $(this).parent().find('li').removeClass('on');
				    $(this).addClass('on').find('img[data-original]').each(function () {
				        $(this).attr('src', $(this).attr('data-original')).removeAttr('data-original');
				    });
				}
			);
		        var navPos = 0;
		        $('#allClass li').each(function (i) { //首页快速导航右侧模块重新定位
		            $(this).find('.sub').css({ 'top': navPos });
		            navPos -= 46;
		        });
		    });
		</script>
</body>
</html>