<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0032)http://www.byts.com.cn/zhoubian/ -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>周边旅游 北京青旅_北青旅总社官网北京旅行社</title>
<meta name="keywords" content="">
<meta name="description" content="">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/duibi.css">
<link rel="stylesheet" href="../css/linelist.css">
<link rel="stylesheet" href="../css/a_rili.css" type="text/css" media="screen" charset="utf-8">
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/duibi.js"></script>

<script type="text/javascript" src="../js/duibi1.js"></script>
<script src="../js/a_list.js" type="text/javascript"></script>
<script src="../js/bsStatic.js" type="text/javascript" charset="utf-8"></script></head>

<body>
<link href="../css/site.css" rel="stylesheet" type="text/css">
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


</script>

<!--TOP部分-->
<script language="javascript" type="text/javascript" src="../js/ajax188.js"></script>
<script language="javascript" type="text/javascript">

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


</script>
<script language="javascript"> 
<!-- 
window.onerror=function(){return true;} 
// --> 
</script> 

<div class="top1">
  <div class="conter"><span>欢迎访问 <a href="http://www.byts.com.cn/">北京青年旅行社官网</a></span>　请
  <span id="_Check_head_Login"><a href="http://www.byts.com.cn/users/">欢迎您，weisen</a> <a href="http://www.byts.com.cn/users/order.php?po=all"> [订单]</a> <a href="http://www.byts.com.cn/users/index.php?do=edt"> [资料]</a><a href="http://www.byts.com.cn/users/index.php?do=money"> [积分]</a> <a href="http://www.byts.com.cn/users/index_do.php?fmdo=login&dopost=exit"> [退出]</a>
</span><script language="javascript">Check_head_Login();</script>
     <div class="hour"><img src="../image/pic1.jpg" width="46" height="19"></div>
     <div class="iph">旅游预订电话 <strong>400-926-5166</strong></div>
  </div>
</div>
<div class="top2">
	<div class="conter">
    	<div class="logo"><img src="../image/logo.png" width="329" height="54"><img src="../image/tage.png" width="116" height="50"></div>
    <div class="sourchNew"> 
    <form action="http://www.byts.com.cn/tags.php" method="post" name="indexsearchform" class="cfix" id="indexsearchform">
    <input type="hidden" value="0" name="travelClassHeader" id="srhInput">
        <div class="select_box"><input id="myselect" type="text" value="全部" readonly="readonly">
        <ul class="select_ul" tyle="z-index: 10000; display: none;">
        <li> <a href="javascript:void(0)">全部</a></li>
            <li><a val="4" href="javascript:void(0)">旅游线路</a></li>
            <li><a val="5" href="javascript:void(0)">酒店预定</a></li>
            <li> <a val="8" href="javascript:void(0)">签证办理</a></li>
            <li><a val="9" href="javascript:void(0)">旅游租车</a></li>
            <li><a val="10" href="javascript:void(0)">旅游门票</a></li>
      
		</ul>
   <div class="select_text"><input id="search" autocomplete="off" maxlength="18" type="text" value="请输入关键字" onclick="javascript:document.getElementById(&#39;search&#39;).value=&#39;&#39;;" name="searchkey"></div>
   <input type="submit" class="select_seach" name=""> 
  </div>
  </form>
  </div>  
  
    </div>
</div>
<div class="dh">
	<div class="conter">
   	  <div class="a1"><a href="http://www.byts.com.cn/zhoubian/#">所有目的地分类</a></div>
      <div class="a2">
        	<a href="http://www.byts.com.cn/index.html">首页</a>
            <a href="http://www.byts.com.cn/out/">出境游</a>
            <a href="http://www.byts.com.cn/china/">国内游</a>
            <a href="http://www.byts.com.cn/beijing/">北京游</a>
            <a href="../image/周边旅游 北京青旅_北青旅总社官网北京旅行社.htm">周边游</a>
            <a href="http://www.byts.com.cn/youlun/">邮轮游</a>
            <a href="http://www.byts.com.cn/line/maerdaifu001/">马尔代夫</a>
            <a href="http://www.byts.com.cn/jipiao/">机票</a> 
        </div>
      <div class="a3"><div style="position: absolute; left: 24px; top: 1px;"><img src="../image/HOT.png"></div>
       <a href="http://www.byts.com.cn/add/tejia.php">特价</a>
        <a href="http://www.byts.com.cn/visa/">签证</a>   
        <a href="http://www.byts.com.cn/zuche/bj/">租车</a>
        <a href="http://www.byts.com.cn/add/dingzhi.php">定制</a> 
      </div>
        <div class="clear"></div>
        
  </div>
</div>
<div class="body1">


<div class="search_nav">
    <p class="crumbs"><a href="http://www.byts.com.cn/">网站首页   &gt; </a><a href="http://www.byts.com.cn/line">旅游线路  &gt; </a><a href="http://www.byts.com.cn/zhoubian">周边旅游  &gt; </a> </p>
    
    
    
     <!-- Button BEGIN -->
    <div class="bshare-custom"><a title="分享到QQ空间" class="bshare-qzone"></a><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><a title="分享到人人网" class="bshare-renren"></a><a title="分享到腾讯微博" class="bshare-qqmb"></a><a title="分享到网易微博" class="bshare-neteasemb"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a><span class="BSHARE_COUNT bshare-share-count">0</span></div><script type="text/javascript" charset="utf-8" src="../js/buttonLite.js"></script><script type="text/javascript" charset="utf-8" src="../js/bshareC0.js"></script>
    
	<!-- Button END -->
</div>
<!--end crumb-->
<!--start left-->
    <div class="w190 fl">
    <!--start why-->
    <div class="tn_pro tn_pro_y mb_10">
        <div class="thead_pro">
            <h3>目的地指南</h3>
        </div>
        <div class="cate_list">
        
        
            <dl class="cart_wrap">
            
            
	<dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/line">[ 旅游线路 ]</a></dt>
                <dd>
                
 <span><a href="http://www.byts.com.cn/out/" target="_blank" title="出境旅游">
                                	出境旅游</a>
                                	</span><span><a href="http://www.byts.com.cn/china" target="_blank" title="国内旅游">
                                	国内旅游</a>
                                	</span><span><a href="http://www.byts.com.cn/zhoubian" target="_blank" title="周边旅游">
                                	周边旅游</a>
                                	</span><span><a href="http://www.byts.com.cn/youlun" target="_blank" title="邮轮旅游">
                                	邮轮旅游</a>
                                	</span><span><a href="http://www.byts.com.cn/beijing" target="_blank" title="北京旅游">
                                	北京旅游</a>
                                	</span>
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/hotel">[ 酒店预定 ]</a></dt>
                <dd>
                
 <span><a href="http://www.byts.com.cn/hotel/zjj" target="_blank" title="广州">
                                	广州</a>
                                	</span><span><a href="http://www.byts.com.cn/hotel/beijing" target="_blank" title="北京">
                                	北京</a>
                                	</span><span><a href="http://www.byts.com.cn/hotel/shanghaijiudian" target="_blank" title="上海">
                                	上海</a>
                                	</span><span><a href="http://www.byts.com.cn/hotel/shenchou" target="_blank" title="深圳">
                                	深圳</a>
                                	</span><span><a href="http://www.byts.com.cn/hotel/dalian" target="_blank" title="大连">
                                	大连</a>
                                	</span>
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/visa">[ 签证 ]</a></dt>
                <dd>
                
 <span><a href="http://www.byts.com.cn/visa/dayazhou" target="_blank" title="大洋洲">
                                	大洋洲</a>
                                	</span><span><a href="http://www.byts.com.cn/visa/yazhou" target="_blank" title="亚洲">
                                	亚洲</a>
                                	</span><span><a href="http://www.byts.com.cn/visa/ouzhou" target="_blank" title="欧洲">
                                	欧洲</a>
                                	</span><span><a href="http://www.byts.com.cn/visa/meizhou" target="_blank" title="美洲">
                                	美洲</a>
                                	</span><span><a href="http://www.byts.com.cn/visa/feizhou" target="_blank" title="非洲">
                                	非洲</a>
                                	</span>
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/about">[ 关于我们 ]</a></dt>
                <dd>
                
 
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/gl">[ 攻略 ]</a></dt>
                <dd>
                
 
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/help">[ 帮助中心 ]</a></dt>
                <dd>
                
 <span><a href="http://www.byts.com.cn/help/1" target="_blank" title="预订常见问题">
                                	预订常见问题</a>
                                	</span><span><a href="http://www.byts.com.cn/help/2" target="_blank" title="付款和发票">
                                	付款和发票</a>
                                	</span><span><a href="http://www.byts.com.cn/help/3" target="_blank" title="签署旅游合同">
                                	签署旅游合同</a>
                                	</span><span><a href="http://www.byts.com.cn/help/4" target="_blank" title="旅游预订优惠政策">
                                	旅游预订优惠政策</a>
                                	</span><span><a href="http://www.byts.com.cn/help/5" target="_blank" title="其他事项">
                                	其他事项</a>
                                	</span><span><a href="http://www.byts.com.cn/help/huzhao_qianzhengxiangguan" target="_blank" title="护照/签证相关">
                                	护照/签证相关</a>
                                	</span>
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/news">[ 资讯 ]</a></dt>
                <dd>
                
 <span><a href="http://www.byts.com.cn/news/1" target="_blank" title="自驾租车指南">
                                	自驾租车指南</a>
                                	</span><span><a href="http://www.byts.com.cn/news/meishizhinan" target="_blank" title="美食指南">
                                	美食指南</a>
                                	</span><span><a href="http://www.byts.com.cn/news/xiuxiangouwu" target="_blank" title="休闲购物">
                                	休闲购物</a>
                                	</span><span><a href="http://www.byts.com.cn/news/lvyouxinwen" target="_blank" title="旅游新闻">
                                	旅游新闻</a>
                                	</span>
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/guide/">[ 景点 ]</a></dt>
                <dd>
                
 <span><a href="http://www.byts.com.cn/guide/domestic" target="_blank" title="国内景点">
                                	国内景点</a>
                                	</span>
                            
                                       </dd><dt><a class="sub_h f_4e9700 fb" href="http://www.byts.com.cn/zuche">[ 租车 ]</a></dt>
                <dd>
                
 <span><a href="http://www.byts.com.cn/zuche/bj" target="_blank" title="北京租车">
                                	北京租车</a>
                                	</span>
                            
                                       </dd>                             
                   
            </dl>
        </div>
     </div>
    <!--end why-->
 
                            <!--start hot_spot-->                <div class="tn_pro mb_10">
                    <div class="thead_pro">
                    <h3>周边旅游热门景点</h3>
                    </div>
                <div class="hot_spot">
                    <dl class="hot_spot_wrap">
                        <dd>
                                                            
                                                            
                                                            <a href="http://www.byts.com.cn/guide/domestic/hainan/658.htm" target="_blank">印象海南岛</a>
<a href="http://www.byts.com.cn/guide/domestic/hainan/657.htm" target="_blank">呀诺达雨林</a>
<a href="http://www.byts.com.cn/guide/domestic/hainan/656.htm" target="_blank">天涯海角</a>
<a href="http://www.byts.com.cn/guide/domestic/bj/2014/0208/655.html" target="_blank">南宫地热博览园</a>
<a href="http://www.byts.com.cn/guide/domestic/bj/2014/0208/654.html" target="_blank">郁金香摩锐水世界</a>
<a href="http://www.byts.com.cn/guide/domestic/bj/2014/0208/653.html" target="_blank">八达岭野生动物园</a>
<a href="http://www.byts.com.cn/guide/domestic/bj/2014/0208/652.html" target="_blank">北京欢乐谷</a>
<a href="http://www.byts.com.cn/guide/domestic/bj/2014/0208/651.html" target="_blank">北京世界花卉大观园</a>
<a href="http://www.byts.com.cn/guide/domestic/bj/2013/1209/646.html" target="_blank">长城</a>

                                   
                                                        </dd>
                    </dl>
                </div>
                </div>
            <div class="tn_pro mb_10">
            <div class="like_it_too">
                <div class="thead_pro">
                    <h3>浏览本页面用户最终购买</h3>
                </div>
                <ul class="slt_rout">
                                               
                                              <li>
                                <div class="rout_wrap">
                                    <a href="http://www.byts.com.cn/line/nanbeidaihe0002/1136.htm" target="_blank" title="南北戴河、山海关老龙头、出海游船双汽2日">
                                        <img src="../image/1404388605_2391.jpg" alt="南北戴河、山海关老龙头、出海游船双汽2日">
                                    </a>
                                </div>
                                <p class="rout_title">
                                    <a href="http://www.byts.com.cn/line/nanbeidaihe0002/1136.htm" target="_blank">
                                      南北戴河、山海关老龙头、出海游船双汽2日</a>
                                </p>
                                <p class="rout_price">￥<em>300</em>起</p>
                            </li>
<li>
                                <div class="rout_wrap">
                                    <a href="http://www.byts.com.cn/line/mulanweichang0002/3835.htm" target="_blank" title="木兰围场、内蒙古乌兰布通草原2日">
                                        <img src="../image/1404643089_7531.jpg" alt="木兰围场、内蒙古乌兰布通草原2日">
                                    </a>
                                </div>
                                <p class="rout_title">
                                    <a href="http://www.byts.com.cn/line/mulanweichang0002/3835.htm" target="_blank">
                                      木兰围场、内蒙古乌兰布通草原2日</a>
                                </p>
                                <p class="rout_price">￥<em>480</em>起</p>
                            </li>
<li>
                                <div class="rout_wrap">
                                    <a href="http://www.byts.com.cn/line/chengde02/3756.htm" target="_blank" title="避暑山庄、普宁寺、普佑寺双座2日">
                                        <img src="../image/1404383744_6802.jpg" alt="避暑山庄、普宁寺、普佑寺双座2日">
                                    </a>
                                </div>
                                <p class="rout_title">
                                    <a href="http://www.byts.com.cn/line/chengde02/3756.htm" target="_blank">
                                      避暑山庄、普宁寺、普佑寺双座2日</a>
                                </p>
                                <p class="rout_price">￥<em>480</em>起</p>
                            </li>
<li>
                                <div class="rout_wrap">
                                    <a href="http://www.byts.com.cn/line/mulanweichang0002/3827.htm" target="_blank" title="木兰围场、内蒙古乌兰布通草原、蛤蟆坝3日">
                                        <img src="../image/1404618395_9762.jpg" alt="木兰围场、内蒙古乌兰布通草原、蛤蟆坝3日">
                                    </a>
                                </div>
                                <p class="rout_title">
                                    <a href="http://www.byts.com.cn/line/mulanweichang0002/3827.htm" target="_blank">
                                      木兰围场、内蒙古乌兰布通草原、蛤蟆坝3日</a>
                                </p>
                                <p class="rout_price">￥<em>580</em>起</p>
                            </li>

                                                
                                                
                                        </ul>
            </div>
        </div>
        <!-- end boughtRoute -->

      </div>
      
    <!--end left-->
    
   
<!--start right-->
    <div class="w800 fr" id="niuren_list">
      <!--start top_tour-->
      <div class="top_tour mb_20 clearfix">
                <div class="top_pro">

       
                    	<ul class="clearfix">
                        
                        <li class="t_item">
                  <div class="t_wrap">
                    <span class="cu_icon">强烈推荐</span>
                    <a href="http://www.byts.com.cn/line/nanbeidaihe0002/1136.htm" target="_blank"><img src="../image/1404388605_2391.jpg" width="178" height="134" alt="南北戴河、山海关老龙头、出海游船双汽2日"></a>
                  </div>
                  <p class="t_title"><a class="f_4e9700" href="http://www.byts.com.cn/line/nanbeidaihe0002/1136.htm" target="_blank"><span class="f_0053aa">&lt;南北戴河&gt;</span>南北戴河、山海关老龙头、出海游船双汽2日</a></p>
                  <div class="t_price">
                    <span class="fl"><em class="f18">300</em>元起</span>
                    <div class="tour_sale pt_8"><span class="dm"><em></em></span><span class="dj"><em></em></span></div>
                  </div>
                </li>
<li class="t_item">
                  <div class="t_wrap">
                    <span class="cu_icon">强烈推荐</span>
                    <a href="http://www.byts.com.cn/line/mulanweichang0002/3835.htm" target="_blank"><img src="../image/1404643089_7531.jpg" width="178" height="134" alt="木兰围场、内蒙古乌兰布通草原2日"></a>
                  </div>
                  <p class="t_title"><a class="f_4e9700" href="http://www.byts.com.cn/line/mulanweichang0002/3835.htm" target="_blank"><span class="f_0053aa">&lt;木兰围场&gt;</span>木兰围场、内蒙古乌兰布通草原2日</a></p>
                  <div class="t_price">
                    <span class="fl"><em class="f18">480</em>元起</span>
                    <div class="tour_sale pt_8"><span class="dm"><em></em></span><span class="dj"><em></em></span></div>
                  </div>
                </li>
<li class="t_item">
                  <div class="t_wrap">
                    <span class="cu_icon">强烈推荐</span>
                    <a href="http://www.byts.com.cn/line/chengde02/3756.htm" target="_blank"><img src="../image/1404383744_6802.jpg" width="178" height="134" alt="避暑山庄、普宁寺、普佑寺双座2日"></a>
                  </div>
                  <p class="t_title"><a class="f_4e9700" href="http://www.byts.com.cn/line/chengde02/3756.htm" target="_blank"><span class="f_0053aa">&lt;承德&gt;</span>避暑山庄、普宁寺、普佑寺双座2日</a></p>
                  <div class="t_price">
                    <span class="fl"><em class="f18">480</em>元起</span>
                    <div class="tour_sale pt_8"><span class="dm"><em></em></span><span class="dj"><em></em></span></div>
                  </div>
                </li>

                
                
                                </ul>
                  </div>        <!--start nr_special-->
        <div class="nr_special">
          <div class="satisf">
            <dl>
              <dt>综合满意度：<a class="f_4e9700" href="http://www.byts.com.cn/zhoubian/#" rel="nofollow" target="_blank">[?]</a></dt>
              <dd>98%</dd>
            </dl>
          </div>
          <div class="tour_stat_infor">
            <table>
              <tbody>
                <tr>
                  <td align="right" width="90px">已服务出游：</td>
                  <td><em class="f_f60">&nbsp;2762&nbsp;</em>人次</td>
                </tr>
                <tr>
                  <td align="right" width="90px">已有点评数：</td>
                  <td><em class="f_f60">98</em> 条</td>
                </tr>
              </tbody>
            </table>
          </div>
        
          <div class="fromto">
            <a class="infor" href="http://www.byts.com.cn/add/dingzhi.php" target="_blank">独立成团 个性定制</a>
          </div>
        </div>
        <!--end nr_special-->
      </div>
      <!--end top_tour-->
      <!--start filter_head-->
        <div class="filter_head">
        <a name="des" rel="nofollow"></a>
          <div class="filterHb clearfix">
            <div class="nw_tab">
	          <ul class="nw_title">
	          			          		          			          			<li class="nw_name cur"><h1><a title="周边旅游" href="http://www.byts.com.cn/zhoubian" target="_blank">周边旅游</a></h1></li>
	          			          			          			          	
	          			          			          		
	          			          			          	
	          			          			          		
	          			          			          				        	          </ul>
	        </div>
            <span class="filter_reset"><a href="http://www.byts.com.cn/zhoubian" rel="nofollow">重置筛选条件</a></span>
          </div>
        </div>
        <!--end filter_head-->
      <!--start cate_nav-->
      <div class="cate_nav">
              <!--start prop_list-->
        <div class="prop_list">
            <div class="prop_item">
            <dl>
              <dt>出发地：</dt>
              <dd>
                <ul class="content0"><li>    <a href="javascript:void(0)" onclick="ListUrl(this.id);return false;" id="id_0">不限</a>
	<a href="javascript:void(0)" onclick="ListUrl(this.id);return false;" id="id_1000">北京</a>
		  </li>                </ul>
              </dd>
            </dl>
            </div>
                        <div class="prop_item">
                <dl>
                    <dt>目的地：</dt>
                    <dd>
                        <ul class="content1">                                                        <li><a href="javascript:void(0)" id="mdd_0" onclick="ListUrl(this.id);return false;">不限</a></li>
	  
		 <li> <a href="javascript:void(0)" onclick="ListUrl(this.id);return false;" id="mdd_883">河北</a></li>
		   
		 <li> <a href="javascript:void(0)" onclick="ListUrl(this.id);return false;" id="mdd_885">京郊旅游</a></li>
		   
                                                        </ul>
                    </dd>
                </dl>
            </div>
                           
                    <div class="prop_item">
            <dl>
              <dt>行程天数：</dt>
              <dd>
                <ul class="content2">                 <li> <a href="javascript:void(0)" id="day_0" onclick="ListUrl(this.id);return false;">不限</a> </li>
      <li><a href="javascript:void(0)" id="day_1" onclick="ListUrl(this.id);return false;">1天</a> </li>
      <li> <a href="javascript:void(0)" id="day_2" onclick="ListUrl(this.id);return false;">2天</a> </li>
      <li>   <a href="javascript:void(0)" id="day_3" onclick="ListUrl(this.id);return false;">3天</a> </li>
       <li>   <a href="javascript:void(0)" id="day_4" onclick="ListUrl(this.id);return false;">4天</a> </li>
         <li> <a href="javascript:void(0)" id="day_5" onclick="ListUrl(this.id);return false;">5天</a></li>
         <li> <a href="javascript:void(0)" id="day_6" onclick="ListUrl(this.id);return false;">6天</a></li>
         <li> <a href="javascript:void(0)" id="day_7" onclick="ListUrl(this.id);return false;">7天</a></li>
         <li> <a href="javascript:void(0)" id="day_8" onclick="ListUrl(this.id);return false;">8天</a></li>
          <li><a href="javascript:void(0)" id="day_9" onclick="ListUrl(this.id);return false;">9天</a></li>
       <li>   <a href="javascript:void(0)" id="day_10" onclick="ListUrl(this.id);return false;">10天以上</a></li>
                                    </ul>
              </dd>
            </dl>
          </div>
                   
                      <div class="prop_item">
            <dl>
              <dt>出现预算：</dt>
              <dd>
                <ul class="content3">           	  <li><a href="javascript:void(0)" id="p1_0_p2_0" onclick="ListUrl(this.id);return false;">不限</a></li>
      <li><a href="javascript:void(0)" id="p1_101_p2_200" onclick="ListUrl(this.id);return false;">¥101-200</a></li>
      <li><a href="javascript:void(0)" id="p1_201_p2_500" onclick="ListUrl(this.id);return false;">¥201-500</a></li>
      <li><a href="javascript:void(0)" id="p1_501_p2_1000" onclick="ListUrl(this.id);return false;">¥501-1000</a></li>
     <li> <a href="javascript:void(0)" id="p1_1001_p2_2000" onclick="ListUrl(this.id);return false;">¥1001-2000</a></li>
     <li> <a href="javascript:void(0)" id="p1_2001_p2_20000" onclick="ListUrl(this.id);return false;">¥2000以上</a></li>
                                    </ul>
              </dd>
            </dl>
          </div>
          
                    
					
        <!--end prop_list-->
      </div>
</div>
      <!--end filter-->
      <!--start pro_list-->
      <div class="content_wrap">
            <!--start zihuyou-->
      <div class="diytour">

            <div class="item_lists">

      <div class="place">
      
      
    
                      <h3 class="list_title">周边旅游</h3>
          <div class="list_cont">
                                         
                                         
                <ul class="list_view">
                
                	
					
				  <li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/nanbeidaihe0002/1136.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404388605_2391.jpg" src="../image/bg.gif" alt="南北戴河、山海关老龙头、出海游船双汽2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/nanbeidaihe0002/1136.htm" target="_blank" title="南北戴河、山海关老龙头、出海游船双汽2日"><span class="f_f00">[南北戴河]</span>南北戴河、山海关老龙头、出海游船双汽2日</a></h3>
              <p class="short_infor">特色： 天天发团，入住准3星酒店，包含老龙头门票，如需 接站 五环以内 +30元/人 、...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>1136</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_1136" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(1136,1136)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_1136" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;1136&#39;);aid(&#39;1136&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_1136" class="clearfix" style="display:none">
                            <div id="plan_date_1136" class="m-180"></div>
                          </div>
                          <div id="site_recall_1136" class="fl_calendar" style="display: none;">
                             <div id="recall_1136" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>300</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="1136" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/mulanweichang0002/3835.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404643089_7531.jpg" src="../image/bg.gif" alt="木兰围场、内蒙古乌兰布通草原2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/mulanweichang0002/3835.htm" target="_blank" title="木兰围场、内蒙古乌兰布通草原2日"><span class="f_f00">[木兰围场]</span>木兰围场、内蒙古乌兰布通草原2日</a></h3>
              <p class="short_infor">特色： 散客周6发，团队可天天发（单团单议），包含乌兰布通草原 门票 ...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3835</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3835" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3835,3835)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期六</p><a id="plan_button_3835" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3835&#39;);aid(&#39;3835&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3835" class="clearfix" style="display:none">
                            <div id="plan_date_3835" class="m-180"></div>
                          </div>
                          <div id="site_recall_3835" class="fl_calendar" style="display: none;">
                             <div id="recall_3835" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>480</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3835" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/chengde02/3756.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404383744_6802.jpg" src="../image/bg.gif" alt="避暑山庄、普宁寺、普佑寺双座2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/chengde02/3756.htm" target="_blank" title="避暑山庄、普宁寺、普佑寺双座2日"><span class="f_f00">[承德]</span>避暑山庄、普宁寺、普佑寺双座2日</a></h3>
              <p class="short_infor">特色： 天天发团， 门票全含（避暑山庄、普宁寺、普佑寺），升级入住挂牌3星酒店...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3756</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3756" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3756,3756)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3756" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3756&#39;);aid(&#39;3756&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3756" class="clearfix" style="display:none">
                            <div id="plan_date_3756" class="m-180"></div>
                          </div>
                          <div id="site_recall_3756" class="fl_calendar" style="display: none;">
                             <div id="recall_3756" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>480</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3756" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/mulanweichang0002/3827.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404618395_9762.jpg" src="../image/bg.gif" alt="木兰围场、内蒙古乌兰布通草原、蛤蟆坝3日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/mulanweichang0002/3827.htm" target="_blank" title="木兰围场、内蒙古乌兰布通草原、蛤蟆坝3日"><span class="f_f00">[木兰围场]</span>木兰围场、内蒙古乌兰布通草原、蛤蟆坝3日</a></h3>
              <p class="short_infor">特色： 散客周二五发，7-8月暑期天天发，团队根据人数（单团单议），包含乌兰布通...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3827</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3827" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3827,3827)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3827" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3827&#39;);aid(&#39;3827&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3827" class="clearfix" style="display:none">
                            <div id="plan_date_3827" class="m-180"></div>
                          </div>
                          <div id="site_recall_3827" class="fl_calendar" style="display: none;">
                             <div id="recall_3827" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>580</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3827" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/beijingchengtuan022/3056.htm" target="_blank">
                  <img data-original="/uploads/allimg/20140604/140604115240.jpg" src="../image/bg.gif" alt="丰宁坝上草原、草原娱乐嘉年华双汽2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/beijingchengtuan022/3056.htm" target="_blank" title="丰宁坝上草原、草原娱乐嘉年华双汽2日"><span class="f_f00">[坝上草原]</span>丰宁坝上草原、草原娱乐嘉年华双汽2日</a></h3>
              <p class="short_infor">特色： 散客7-8月暑期天天发、4-6月及9-10月周二、四、六发，赠送价值190元草原娱乐场...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3056</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3056" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3056,3056)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3056" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3056&#39;);aid(&#39;3056&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3056" class="clearfix" style="display:none">
                            <div id="plan_date_3056" class="m-180"></div>
                          </div>
                          <div id="site_recall_3056" class="fl_calendar" style="display: none;">
                             <div id="recall_3056" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>300</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3056" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/chengde02/1621.htm" target="_blank">
                  <img data-original="/uploads/allimg/20140414/140414202632.jpg" src="../image/bg.gif" alt="避暑山庄、普宁寺、棒槌山双汽2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/chengde02/1621.htm" target="_blank" title="避暑山庄、普宁寺、棒槌山双汽2日"><span class="f_f00">[承德]</span>避暑山庄、普宁寺、棒槌山双汽2日</a></h3>
              <p class="short_infor">特色： 天天发团，门票全含（避暑山庄、普宁寺、棒槌山） ...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>1621</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_1621" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(1621,1621)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_1621" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;1621&#39;);aid(&#39;1621&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_1621" class="clearfix" style="display:none">
                            <div id="plan_date_1621" class="m-180"></div>
                          </div>
                          <div id="site_recall_1621" class="fl_calendar" style="display: none;">
                             <div id="recall_1621" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>520</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="1621" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/nanbeidaihe0002/959.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1432897402.jpg" src="../image/bg.gif" alt="南北戴河、沙雕大世界、出海游船双汽2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/nanbeidaihe0002/959.htm" target="_blank" title="南北戴河、沙雕大世界、出海游船双汽2日"><span class="f_f00">[南北戴河]</span>南北戴河、沙雕大世界、出海游船双汽2日</a></h3>
              <p class="short_infor">特色： 天天发团，入住准3星酒店，包含金沙湾沙雕大世界门票，如需接站五环以内...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>959</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_959" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(959,959)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期二,星期四,星期六</p><a id="plan_button_959" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;959&#39;);aid(&#39;959&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_959" class="clearfix" style="display:none">
                            <div id="plan_date_959" class="m-180"></div>
                          </div>
                          <div id="site_recall_959" class="fl_calendar" style="display: none;">
                             <div id="recall_959" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>400</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="959" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/mulanweichang0002/3760.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404618377_1897.jpg" src="../image/bg.gif" alt="木兰围场、内蒙古乌兰布通草原、塞罕坝森林公园3日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/mulanweichang0002/3760.htm" target="_blank" title="木兰围场、内蒙古乌兰布通草原、塞罕坝森林公园3日"><span class="f_f00">[木兰围场]</span>木兰围场、内蒙古乌兰布通草原、塞罕坝森林公园3日</a></h3>
              <p class="short_infor">特色： 散客周二五 发，暑期7-8月天天发，团队天天发（单团单议），包含乌兰布通草...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3760</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3760" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3760,3760)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3760" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3760&#39;);aid(&#39;3760&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3760" class="clearfix" style="display:none">
                            <div id="plan_date_3760" class="m-180"></div>
                          </div>
                          <div id="site_recall_3760" class="fl_calendar" style="display: none;">
                             <div id="recall_3760" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>660</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3760" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/beijingchengtuan022/3758.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404621644_4034.jpg" src="../image/bg.gif" alt="丰宁坝上草原、草原娱乐嘉年华双汽3日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/beijingchengtuan022/3758.htm" target="_blank" title="丰宁坝上草原、草原娱乐嘉年华双汽3日"><span class="f_f00">[坝上草原]</span>丰宁坝上草原、草原娱乐嘉年华双汽3日</a></h3>
              <p class="short_infor">特色： 散客周5发，赠送价值190元草原娱乐场套票、草原之夜露天卡拉OK篝火晚会，如...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3758</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3758" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3758,3758)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期五</p><a id="plan_button_3758" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3758&#39;);aid(&#39;3758&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3758" class="clearfix" style="display:none">
                            <div id="plan_date_3758" class="m-180"></div>
                          </div>
                          <div id="site_recall_3758" class="fl_calendar" style="display: none;">
                             <div id="recall_3758" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>350</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3758" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/chengde02/1578.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1432106100.jpg" src="../image/bg.gif" alt="避暑山庄、普宁寺、小布达拉宫双座2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/chengde02/1578.htm" target="_blank" title="避暑山庄、普宁寺、小布达拉宫双座2日"><span class="f_f00">[承德]</span>避暑山庄、普宁寺、小布达拉宫双座2日</a></h3>
              <p class="short_infor">特色： 天天发团，门票全含（避暑山庄、普宁寺+普佑寺、小布达拉宫+行宫），升级入...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>1578</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_1578" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(1578,1578)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_1578" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;1578&#39;);aid(&#39;1578&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_1578" class="clearfix" style="display:none">
                            <div id="plan_date_1578" class="m-180"></div>
                          </div>
                          <div id="site_recall_1578" class="fl_calendar" style="display: none;">
                             <div id="recall_1578" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>500</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="1578" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/beijingchengtuan022/3055.htm" target="_blank">
                  <img data-original="/uploads/allimg/20140605/1406051ZF3.jpg" src="../image/bg.gif" alt="丰宁坝上草原、大汉行宫娱乐场双汽2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/beijingchengtuan022/3055.htm" target="_blank" title="丰宁坝上草原、大汉行宫娱乐场双汽2日"><span class="f_f00">[坝上草原]</span>丰宁坝上草原、大汉行宫娱乐场双汽2日</a></h3>
              <p class="short_infor">特色： 散客7-8月暑期天天发、4-6月及9-10月周二、四、六发，包含价值380元京北第一草...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3055</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3055" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3055,3055)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3055" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3055&#39;);aid(&#39;3055&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3055" class="clearfix" style="display:none">
                            <div id="plan_date_3055" class="m-180"></div>
                          </div>
                          <div id="site_recall_3055" class="fl_calendar" style="display: none;">
                             <div id="recall_3055" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>380</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3055" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/nanbeidaihe0002/1132.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404390633_3110.jpg" src="../image/bg.gif" alt="【纯玩无自费】南北戴河、沙雕大世界双汽2日《近海3星酒店》">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/nanbeidaihe0002/1132.htm" target="_blank" title="【纯玩无自费】南北戴河、沙雕大世界双汽2日《近海3星酒店》"><span class="f_f00">[南北戴河]</span>【纯玩无自费】南北戴河、沙雕大世界双汽2日《近海3星酒店》</a></h3>
              <p class="short_infor">特色： 天天发团，入住近海准3星酒店 ，无自费无购物 ，赠 每人 1只螃蟹，包含 黄金...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>1132</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_1132" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(1132,1132)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期二,星期四,星期六</p><a id="plan_button_1132" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;1132&#39;);aid(&#39;1132&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_1132" class="clearfix" style="display:none">
                            <div id="plan_date_1132" class="m-180"></div>
                          </div>
                          <div id="site_recall_1132" class="fl_calendar" style="display: none;">
                             <div id="recall_1132" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>400</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="1132" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/chengde02/3759.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404382459_7478.jpg" src="../image/bg.gif" alt="避暑山庄、普宁寺、小布达拉宫双汽2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/chengde02/3759.htm" target="_blank" title="避暑山庄、普宁寺、小布达拉宫双汽2日"><span class="f_f00">[承德]</span>避暑山庄、普宁寺、小布达拉宫双汽2日</a></h3>
              <p class="short_infor">特色： 天天发团，门票全含（避暑山庄、普宁寺、小布达拉宫） ...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3759</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3759" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3759,3759)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3759" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3759&#39;);aid(&#39;3759&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3759" class="clearfix" style="display:none">
                            <div id="plan_date_3759" class="m-180"></div>
                          </div>
                          <div id="site_recall_3759" class="fl_calendar" style="display: none;">
                             <div id="recall_3759" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>500</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3759" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/nanbeidaihe0002/3249.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404392968_4671.jpg" src="../image/bg.gif" alt="北戴河鸽子窝、山海关双座2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/nanbeidaihe0002/3249.htm" target="_blank" title="北戴河鸽子窝、山海关双座2日"><span class="f_f00">[南北戴河]</span>北戴河鸽子窝、山海关双座2日</a></h3>
              <p class="short_infor">特色： 天天发团，包含山海关天下第一关， ★自愿参加 公主号豪华游轮+车费65元/人...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3249</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3249" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3249,3249)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3249" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3249&#39;);aid(&#39;3249&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3249" class="clearfix" style="display:none">
                            <div id="plan_date_3249" class="m-180"></div>
                          </div>
                          <div id="site_recall_3249" class="fl_calendar" style="display: none;">
                             <div id="recall_3249" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>480</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3249" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/beijingchengtuan022/3242.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404621644_4034.jpg" src="../image/bg.gif" alt="丰宁坝上草原、洒然嘉年华娱乐套票双汽2日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/beijingchengtuan022/3242.htm" target="_blank" title="丰宁坝上草原、洒然嘉年华娱乐套票双汽2日"><span class="f_f00">[坝上草原]</span>丰宁坝上草原、洒然嘉年华娱乐套票双汽2日</a></h3>
              <p class="short_infor">特色： 散客周二、四、六发，包含价值180元洒然嘉年华娱乐套票，赠送草原之夜露天...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3242</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3242" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3242,3242)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期二,星期四,星期六</p><a id="plan_button_3242" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3242&#39;);aid(&#39;3242&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3242" class="clearfix" style="display:none">
                            <div id="plan_date_3242" class="m-180"></div>
                          </div>
                          <div id="site_recall_3242" class="fl_calendar" style="display: none;">
                             <div id="recall_3242" class="m-180"></div>
                          </div>
                                          <div class="ljyh"><span class="icon_ilyh">早多优惠</span></div>              <div class="attri_price"><p class="price"><span><em>350</em>元起</span></p></div>
              <div class="pro_icon">
                <div class="comm_money"><span class="dp_fx">点评返现</span><span class="fx_num">0元</span></div>
              </div>
                                          <div class="addto_comparison">
                <a class="comparison_bg select">
                <label name="label_general_route_compare">
                <input class="cc" type="checkbox" name="general_route_compare" value="3242" onclick="label_click()">加入对比
                </label>
                </a>
                </div>
             </li><li class="list_item">
              <div class="photo">
                <a href="http://www.byts.com.cn/line/nanbeidaihe0002/3757.htm" target="_blank">
                  <img data-original="/uploads/image/hujie/1404392968_4671.jpg" src="../image/bg.gif" alt="北戴河鸽子窝、山海关、南戴河双座3日">
                </a>
              </div>
              <h3><a href="http://www.byts.com.cn/line/nanbeidaihe0002/3757.htm" target="_blank" title="北戴河鸽子窝、山海关、南戴河双座3日"><span class="f_f00">[南北戴河]</span>北戴河鸽子窝、山海关、南戴河双座3日</a></h3>
              <p class="short_infor">特色： 天天发团，包含山海关天下第一关，★自愿参加 公主号豪华游轮+车费65元/人、...</p>
                          <p class="user_tinfor">
                                                    <span class="tours_num">编号：<em>3757</em></span>
                                <span class="user_satisfy">满意度：<em>100%</em></span><a id="recall_button_3757" rel="nofollow" href="javascript:void(0);" title="查看回访记录" class="user_num" onclick="show_recall(3757,3757)">&nbsp;0&nbsp;单点评▼</a>
                                    </p>
<!--                        <div class="tuan_date"><p class="day_date">团期：--><!--</p><a href="--><!--/tours/--><!--" target="_blank" rel="nofollow">更多</a></div>-->
                          <div class="tuan_date"><p class="day_date">团期：星期一,星期二,星期三,星期四,星期五,星期六,星期日</p><a id="plan_button_3757" class="cgrey" rel="nofollow" href="javascript:void(0)" onclick="javascript:popup_show2(&#39;3757&#39;);aid(&#39;3757&#39;)">查看团期▼</a></div>
                          <div id="site_plandate_3757" class="clearfix" style="display:none">
                            <div id="plan_date_3757" class="m-180"></div>
                          </div>
                          <div id="site_recall_3757" class="fl_calendar" style="display: none;">
                             <div id="recall_3757" class="m-180"></div>
                         </div></li></ul></div></div></div></div></div></div></div></body></html>