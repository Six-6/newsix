<<<<<<< HEAD
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head><script src="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/crmqq.php" async="" charset="utf-8" type="text/javascript"></script><script src="../js/contains.js" async="" charset="utf-8" type="text/javascript"></script><script src="../js/localStorage.js" async="" charset="utf-8" type="text/javascript"></script><script src="../js/Panel.js" async="" charset="utf-8" type="text/javascript"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link href="../css/style_003.css" rel="stylesheet" media="screen" type="text/css">
<link href="../css/order.css" rel="stylesheet" media="screen" type="text/css">

<title>在线预订-惠玩旅行社科技有限公司官网</title>

<script src="../js/global.js" type="text/javascript"></script>
<link href="../css/style_002.css" id="TQCSS0.559407954122853" type="text/css" rel="stylesheet"><link href="../css/style.css" id="TQCSS0.021831985253831787" type="text/css" rel="stylesheet"><script src="../js/float.js" id="TQJS0.6607777828844587"></script><script src="../js/invite.js" id="TQJS0.9040961182942016"></script><script id="_da" src="../js/i.js" async="" charset="utf-8"></script><script src="../js/scriptonline.js" id="TQJS0.1056513587403235"></script><script src="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/sendmain.txt" id="TQJS0.36502843787457273"></script><script src="../js/getrequesttype.js" id="TQJS0.9438418681445945"></script></head>

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

@include('includes.searchtop')
<div class="dh">
	<div class="conter">
   	  <div class="a1"><a href="#">所有目的地分类</a></div>
        @include('includes.dao')
        <div class="clear"></div>
        
  </div>
</div>

 <div id="page">
        <div class="order top10">
            <!--订单步骤 START-->
            <div class="orderStep">
                <ul class="step1">
                    <li class="li1 on">填写订单</li>
                    <li class="li2 ">填写游客信息</li>
                    <li class="li3 ">核对订单</li>
                    <li class="li4 ">付款</li>
                    <li class="li5 ">预订成功</li>
                </ul>
            </div>
            <!--订单步骤 END-->
            <form id="one_form" name="one_form" action="188_order_2.php" method="post">
            <div class="orderWrap">
                <div class="userInfo">
                    <h2>
                        在线预订：<a class="a1" href="http://www.byts.com.cn/line/sanyaziyouren002/4556.htm" target="_blank"> 2016年4-5月三亚自由行计划</a> &lt;北京 出发&gt;</h2>
                    <div class="checkOrderInfo">
                        <div class="hd">
                            线路信息</div>
                        <div class="bd">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <th class="lt" width="15%">
                                            线路编号
                                        </th>
                                      
                                        <th style=" text-align: left;" width="40%">
                                            出发时间与价格(点击更改)
                                        </th>
                                        <th width="18%">
                                            出游成人数
                                        </th>
                                         <th width="18%">
                                            出游儿童数
                                        </th>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <td class="lt">
                                            CHN{{$arr->s_id}}                                        </td>
                                       
                                       
                                        <td>
<div class="fastCalender2" id="fastCalender2">
<div class="p10"><span class="s10 pTimeSpan">
  <input class="pTime" value="2016-09-22 (星期四) 出发,2950元/成人, 元/儿童" style="color:#666666" id="pTime" type="text"></span>
  
                     <div class="clearfix"></div>
                            <div class="s10Trim1 pDropCalender" style="z-index:999;">
                                <div style="display: none;" class="calenderPart" id="calenderPart">
                                    <div class="calenderPartM"><ul><li id="2016-09-12" v="2016-09-12" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-12 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-13" v="2016-09-13" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-13 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-14" v="2016-09-14" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-14 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-15" v="2016-09-15" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-15 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-16" v="2016-09-16" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-16 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-17" v="2016-09-17" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-17 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-18" v="2016-09-18" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-18 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-19" v="2016-09-19" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-19 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-20" v="2016-09-20" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-20 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-21" v="2016-09-21" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-21 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-22" v="2016-09-22" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-22 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-23" v="2016-09-23" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-23 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-24" v="2016-09-24" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-24 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-25" v="2016-09-25" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-25 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-26" v="2016-09-26" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-26 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-27" v="2016-09-27" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-27 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-28" v="2016-09-28" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-28 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-29" v="2016-09-29" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-29 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-09-30" v="2016-09-30" son="" title="2950" onclick="changeGoDate(this)"> 2016-09-30 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-01" v="2016-10-01" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-01 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-02" v="2016-10-02" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-02 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-03" v="2016-10-03" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-03 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-04" v="2016-10-04" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-04 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-05" v="2016-10-05" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-05 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-06" v="2016-10-06" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-06 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-07" v="2016-10-07" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-07 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-08" v="2016-10-08" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-08 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-09" v="2016-10-09" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-09 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-10" v="2016-10-10" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-10 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-11" v="2016-10-11" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-11 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-12" v="2016-10-12" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-12 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-13" v="2016-10-13" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-13 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-14" v="2016-10-14" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-14 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-15" v="2016-10-15" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-15 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-16" v="2016-10-16" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-16 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-17" v="2016-10-17" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-17 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-18" v="2016-10-18" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-18 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-19" v="2016-10-19" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-19 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-20" v="2016-10-20" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-20 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-21" v="2016-10-21" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-21 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-22" v="2016-10-22" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-22 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-23" v="2016-10-23" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-23 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-24" v="2016-10-24" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-24 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-25" v="2016-10-25" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-25 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-26" v="2016-10-26" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-26 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-27" v="2016-10-27" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-27 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-28" v="2016-10-28" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-28 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-29" v="2016-10-29" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-29 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-30" v="2016-10-30" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-30 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-10-31" v="2016-10-31" son="" title="2950" onclick="changeGoDate(this)"> 2016-10-31 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-01" v="2016-11-01" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-01 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-02" v="2016-11-02" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-02 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-03" v="2016-11-03" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-03 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-04" v="2016-11-04" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-04 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-05" v="2016-11-05" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-05 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-06" v="2016-11-06" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-06 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-07" v="2016-11-07" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-07 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-08" v="2016-11-08" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-08 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-09" v="2016-11-09" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-09 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-10" v="2016-11-10" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-10 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-11" v="2016-11-11" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-11 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-12" v="2016-11-12" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-12 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-13" v="2016-11-13" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-13 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-14" v="2016-11-14" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-14 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-15" v="2016-11-15" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-15 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-16" v="2016-11-16" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-16 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-17" v="2016-11-17" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-17 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-18" v="2016-11-18" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-18 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-19" v="2016-11-19" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-19 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-20" v="2016-11-20" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-20 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-21" v="2016-11-21" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-21 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-22" v="2016-11-22" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-22 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-23" v="2016-11-23" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-23 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-24" v="2016-11-24" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-24 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-25" v="2016-11-25" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-25 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-26" v="2016-11-26" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-26 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-27" v="2016-11-27" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-27 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-28" v="2016-11-28" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-28 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-29" v="2016-11-29" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-29 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-11-30" v="2016-11-30" son="" title="2950" onclick="changeGoDate(this)"> 2016-11-30 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-01" v="2016-12-01" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-01 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-02" v="2016-12-02" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-02 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-03" v="2016-12-03" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-03 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-04" v="2016-12-04" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-04 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-05" v="2016-12-05" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-05 (星期一) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-06" v="2016-12-06" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-06 (星期二) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-07" v="2016-12-07" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-07 (星期三) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-08" v="2016-12-08" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-08 (星期四) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-09" v="2016-12-09" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-09 (星期五) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-10" v="2016-12-10" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-10 (星期六) 出发,<b>2950</b>元/成人, 元/儿童</li><li id="2016-12-11" v="2016-12-11" son="" title="2950" onclick="changeGoDate(this)"> 2016-12-11 (星期日) 出发,<b>2950</b>元/成人, 元/儿童</li></ul></div>
                                    <div class="calenderPartF"></div>
                                </div>
                               
                            </div>

</div>
</div>

                              </td>
                                        <td>
                                        
                                           
<input value="-" name="ccc" id="ccc" class="put" title="减少成人数" type="button">
     <input id="txtHiddenPersonNum" name="txtHiddenPersonNum" value="{{$adult}}" class="txtHiddenPersonNum" type="text">
           
<input value="+" onclick="javascript:this.form.txtHiddenPersonNum.value++;" name="bbb" id="bbb" class="put" title="增加成人数" type="button">
                                        </td>
                                        <td> <input value="-" name="eee" id="eee" class="put" title="减少儿童数" type="button">
 <input id="txtHiddenChildNum" name="txtHiddenChildNum" value="{{$children}}" class="txtHiddenChildNum" type="text">
 <input value="+" name="ddd" id="ddd" class="put" title="增加儿童数" type="button"></td>
                                        
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--线路信息 END-->
                    </div>
                    
                    
                    <h2 id="h2_proadd">
                        附加产品</h2>
                    
                    
                    <div class="checkOrderInfo">
                        <!--附加产品 START-->
                        
                           <div class="hd">
                            保险产品
                            
                        </div>
                        <div class="bd" id="dd_travel_0">
                            <table id="table_0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <th class="lt" width="25%">
                                            名称
                                        </th>
                                        <th width="20%">
                                            使用日期
                                        </th>
                                        <th width="10%">
                                            价格
                                        </th>
                                        <th width="15%">
                                            单位
                                        </th>
                                        <th width="15%">
                                            份数
                                        </th>
                                        <th width="15%">
                                            小计
                                        </th>
                                    </tr>
                                    
                                    <tr id="tr_77935">
                                        <td class="lt">
                                            
                                          <span id="a_77935">旅行社责任保险15万元/人</span>
                                            
                                        </td>
                                        <td>
                                            <input id="txtHiddenIsFreeBaoxian_77935" value="0" type="hidden">
                                            <input id="txtHiddenIsUserPersonType_77935" value="0" type="hidden">
                                            <input id="txtHiddenValuationType_77935" value="1" type="hidden">
                                            <input id="txtHiddenDefaultNums_77935" value="1" type="hidden">
                                            <input id="txtHiddenDefaultOrderNums_77935" value="0" type="hidden">
                                            <input id="txtHiddenAddProductId_77935" value="17858" type="hidden">
                                            <input id="txtHiddenDateRange_77935" value="0" type="hidden">
                                            --
                                            
                                            
                                        </td>
                                        <td>
                                            
                                            <input id="txtHiddenAddProductPdateEnable_77935" value="18022" type="hidden">
                                            <input id="txtHiddenAddProductProfit_77935" value="0" name="txtHiddenAddProductProfit_77935" type="hidden">
                                            <b>￥</b><b id="td_price_77935">
                                               0                                            </b>
                                            
                                        </td>
                                        <td>
                                            <input id="hdunits_77935" value="人" type="hidden">
                                            人
                                        </td>
                                        <td>
                                            <input id="txtHiddenAddProductTypeId_77935" value="13" type="hidden">
                                            <input id="txtHiddenAddProductIncludeEnable_77935" value="0" type="hidden">
                                            <input id="txtHiddenAddProductSHAddtionPriceId_77935" value="" type="hidden">
                                            <input id="txtHiddenAddProductSHAddtionCountId_77935" value="" type="hidden">
                                            <input id="txtHiddenAddProductSupplierNO_77935" value="" type="hidden">
                                            <input id="txtHiddenAddProductName_77935" value="旅行社责任保险15万元/人" name="txtHiddenAddProductName_77935" type="hidden">
                                            <span id="spans">{{$nums}}</span>
                                        </td>
                                        <td>
                                            <b>￥</b><b id="td_total_77935">0</b>
                                        </td>
                                    </tr>
                                    <tr class="trhide">
                                        <td colspan="6" style="text-align: left; color: #666; line-height: 22px;">
                                          
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                        

                       
                        <!--优惠抵扣 START-->
                        <div class="hd hdTrim1" style="">
                            优惠抵扣</div>
                        <div class="bd" style="">
                            <table class="tb2" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                    </tr><tr>
                                        <th class="lt" width="42%">
                                            名称
                                        </th>
                                        <th width="15%">
                                            积分账户余额
                                        </th>
                                        <th width="15%">
                                            人均使用积分
                                        </th>
                                        <th width="13%">
                                            抵扣积分
                                        </th>
                                        <th width="15%">
                                            小计(四舍五入)
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="lt">
                                            积分抵扣（本次预订可抵用积分限额：<span class="s1"> 0积分</span>）
                                        </td>
                                        <td>
                                            <span class="s1" id="span_allScore">
                                                0</span>积分
                                        </td>
                                        <td>
                                            <span class="s1" id="span_canCutScore">
                                                0</span>积分/人
                                        </td>
                                        <td>
                                            <input value="0" class="input1" id="ddl_nums_person" maxlength="5" name="ddl_nums_person">
											
                                        </td>
                                        <td>
                                            <b>￥-</b><b id="span_cutScore">0</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="lt">&nbsp;
                                            
                                        </td>
                                        <td colspan="3" style="text-align: right">
                                            <div class="floatDiv">
                                                <input class="input2" id="txtActiveCode" maxlength="15" value="请输入抵扣券编号" style="color: #ccc;">
                                                <input style="color: rgb(0, 0, 0);" id="btnActionCode" value="抵扣" type="button">
                                                <input id="txtHiddenActiveCode" type="hidden">
                                            </div>
                                        </td>
                                        <td>
                                            <b>￥-</b><b id="span_ActiveCode">0</b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--优惠抵扣 END-->
                    </div>
                </div>
                <div style="top: 0px;" class="orderList">
                    <div class="hd">
                        <span></span>预订清单</div>
                    <div class="bd">
                        <ul>
                            <li class="li1">
                                <p class="p1">
                                    旅游团费</p>
                                <p>
                                    <b>￥<s id="getjiage">{{$arr->s_sprice}}</s></b> <font id="getcr">{{$adult}}</font> 成人×￥<font id="gethidChenRen">{{$arr->s_sprice}}</font>
                                </p>
                                <p>
                                    <b>￥<s id="getrtjiage">0</s></b><font id="getrt">{{$children}}</font> 儿童×￥<font id="gethidErTong"></font></p>
                            </li>
                             <li class="li1">
                                <p class="p1">
                                    附加产品</p>
                                <p>
                                    <b><s id="getjiage"><span id="sps">{{$nums}}</span></s>×0￥</b> <font id="getcr">旅行社责任保险15万/人</font><font id="gethidChenRen"></font>
                                </p>
                            </li>
                            <li style="display: none;" class="li2" id="AddPList"></li>
                            <li style="display: none;" class="li3" id="DeKouList"></li>
                        </ul>
                        <div class="li4">
                            <p>
                                 <strong>应付总额：</strong><label>￥<i id="offerPrice"></i></label>
								<input value="{{$arr->s_sprice}}" id="allp" name="allp" type="hidden">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="clearfix">
                </div>
                <div class="userInfoBtn" id="gl_return" style="display: block;">
                    <input onclick="javascript:history.go(-1) " style="background: url(http://www.byts.com.cn/ORG7188_templets/002/images/order15.gif); border-width: 0px;
                        cursor: pointer; width: 139px; height: 44px;" type="button">
                    <input id="btn_Next" onclick="writes()"
                     style="background: url(http://www.byts.com.cn/ORG7188_templets/002/images/order19.gif);
                    border-width: 0px; cursor: pointer; width: 139px; height: 44px;" type="button">
                </div>
                <div class="clearfix">
                </div>
            </div>
            
            <input id="txtHiddenPId" name="txtHiddenPId" value="4556" type="hidden">
			
            <input id="txtHiddenProductTotal" name="txtHiddenProductTotal" value="4556" type="hidden">
            <input id="txtHiddenNums" name="txtHiddenNums" value="1" type="hidden">
            <input id="txtHiddenGoDate" name="txtHiddenGoDate" value="2016-09-22" type="hidden">
            <input id="txtHiddenUzaiPrice" name="txtHiddenUzaiPrice" value="{{$arr->s_sprice}}" type="hidden">
            <input id="txtHiddenChildPrice" name="txtHiddenChildPrice" value="" type="hidden">
            
            <input id="txtHiddenProcessType" name="txtHiddenProcessType" value="1" type="hidden">
            <input id="txtHiddenMType" name="txtHiddenMType" value="3" type="hidden">
            
            <input id="txtHiddenYesOrNo" name="txtHiddenYesOrNo" value="no" type="hidden">
            
            <input id="txtSubmitHiddenAdd" name="txtSubmitHiddenAdd" value="" type="hidden">
            <input id="txtSubmitHiddenUb" name="txtSubmitHiddenUb" value="" type="hidden">
            <input id="txtSubmitHiddenUpTrain" name="txtSubmitHiddenUpTrain" value="" type="hidden">
            
                  
            <input id="txtHiddenUList" name="txtHiddenUList" value="" type="hidden">
            <input id="txtHiddenDes" name="txtHiddenDes" value="" type="hidden">
            
            <input id="txtHiddenUseScore" name="txtHiddenUseScore" value="0" type="hidden">
            <input id="txtHiddenAllScore" name="txtHiddenAllScore" value="0" type="hidden">
            </form>
        </div>

<script src="../js/one_order.js" type="text/javascript"></script>
<script src="../js/jquery1.8.js" type="text/javascript"></script>

    <script src="../js/jquery.js" type="text/javascript"></script>

    <script src="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/tooltip.html" type="text/javascript"></script>

    <script src="../js/order.js" type="text/javascript"></script>
    <script>
      function writes()
      {
        var adult=$("#txtHiddenPersonNum").val();
        var children=$("#txtHiddenChildNum").val();
        var sprice=$("#offerPrice").html();
        var s_sprice={{$arr->s_sprice}};
        var s_id={{$arr->s_id}};
        location.href='write_information?adult='+adult+'&children='+children+'&sprice='+sprice+'&s_sprice='+s_sprice+'&s_id='+s_id;       
      }     
    </script>
    <script language="javascript1.2">
	
	
	$.ajax({
    type: "Get",
    url: "http://www.byts.com.cn/add/ajax_select.php?aid=4556&time=" + Math.random(),
    data: "json",
    success: function(msg) {
		
        var jason = eval("(" + msg + ")");
		
        var sonprice = "";
		var txtHiddenGoDate=$("#txtHiddenGoDate").val();
        for (var i = 0; i < jason.length; i++) {
			
                 sonprice = "" + jason[i].ChildPrice + "元/儿童";
		
	             if(txtHiddenGoDate==jason[i].Date)
				 {
					$("#pTime").val("" + jason[i].Month + "" + jason[i].Week + "出发," + jason[i].PersonPrice + "元/成人, " + sonprice + ""); 
				 }
           
                $(".p10 ul").append("<li id='" + jason[i].Month + "' v='" + jason[i].Date + "' son='" + jason[i].ChildPrice + "' title='" + jason[i].PersonPrice + "' onclick='changeGoDate(this)' > " + jason[i].Month + "" + jason[i].Week + "出发,<b>" + jason[i].PersonPrice + "</b>元/成人, " + sonprice + "</li>");
                }

      
		
		 
		  
        $("#_hidChenRen").val(ul.find("li").eq(0).attr("title"));
        $("#_hidErTong").val(ul.find("li").eq(0).attr("son"));
        $("#_hidDate").val(ul.find("li").eq(0).attr("v"));
    }

});



	$(function() {
		
		do71org88ShowCalender("fastCalender2");
});   //$(function()
	
	function  do71org88ShowCalender(obj) {
    var tg = $('#' + obj).find('div.p10').find('.calenderPart');
	

    var arrow = tg.next('.cArrow');
 
 
    tg.next(".cArrow").click(function() {
									 
  
			
            tg.show();
			
            arrow.attr("class", "cArrow cup");
       
    });


    tg.parents('div.p10').find('span.pTimeSpan').click(function() {
																
        tg.show();
        arrow.attr("class", "cArrow cup");
    });



      tg.parents('div.p10').find('span.pTimeSpan').click(function() {
																
        tg.show();
        arrow.attr("class", "cArrow cup");
    });




    //点击Li日期下拉选项
    tg.find('li').live("click", function() {

        var o = $(this);
		
        tg.parents('div.p10').find('input.pTime').val(o.text());
        tg.hide();
        arrow.attr("class", "cArrow cdown");
        $("#txtHiddenUzaiPrice").val(o.attr("title")); //成人价
		$("#gethidChenRen").text(o.attr("title")); //预定清单成人价
		 var getjiage=$("#txtHiddenUzaiPrice").val()*$("#txtHiddenPersonNum").val(); //计算价格
		 $("#getjiage").text(getjiage);
		
        $("#txtHiddenChildPrice").val(o.attr("son")); //儿童价
		$("#gethidErTong").text(o.attr("son")); //预定清单儿童价
		var getrtjiage=$("#txtHiddenChildPrice").val()*$("#txtHiddenChildNum").val();
					   $("#getrtjiage").text(getrtjiage);
		
        $("#txtHiddenGoDate").val(o.attr("v")); // 日期
		
		
		sumAll();
       // $("#_hidPersonNum").val($("#person2").val());
        //$("#_hidChildNum").val($("#child2").val());

    });

  
  

    $(document).click(function(e) {
							   
        var t = $(e.target);
        var v1 = "#" + obj + " .pTime" + ",#" + obj + " .pDropCalender" + ",#" + obj + " .pDropCalender *,#submit_a,#btnFastCalender,#submit_a";
		
		
        if (!t.is(v1)) {
			
            tg.hide();
            arrow.attr("class", "cArrow cdown");
        }
    });
	}
	</script>
	</div>
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
<span>优质带宽由<a href="http://www.62idc.com/">中睿科技</a>提供 <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_5896591'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "v1.cnzz.com/stat.php%3Fid%3D5896591' type='text/javascript'%3E%3C/script%3E"));</script><span id="cnzz_stat_icon_5896591"><a href="http://www.cnzz.com/stat/website.php?web_id=5896591" target="_blank" title="站长统计">站长统计</a></span><script src="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/stat.php" type="text/javascript"></script><script src="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/core.php" charset="utf-8" type="text/javascript"></script></span>
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
<iframe style="display: block; position: fixed; z-index: 2147483646 ! important; left: auto; right: 8px; margin-left: 0px; top: 50%; bottom: auto; margin-top: -138px;" src="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/a.html" allowtransparency="true" scrolling="no" frameborder="0" height="277" width="121"></iframe><script charset="utf-8" type="text/javascript" src="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/wpa.php"></script>
<!-- WPA Button End -->
<script language="JavaScript" src="../js/floatcard.js"></script><script src="../js/all_20100501.js"></script><script id="TQGetrequestUser_JS"></script>
<script id="TQGetIsNewMsg_JS"></script><script src="../js/as.js"></script><object id="tq_as" name="tq_as" style="position:absolute;left:0px;top:-5px;" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" height="1" width="1"><param name="movie" value="http://sysimages.tq.cn/js/vip/shareObject.swf"><param name="allowScriptAccess" value="always"><object id="tq_as2" name="tq_as2" style="position:absolute;left:0px;top:-5px;" type="application/x-shockwave-flash" data="%E5%A1%AB%E5%86%99%E8%AE%A2%E5%8D%95_files/shareObject.swf" height="1" width="1"><param name="allowScriptAccess" value="always"></object></object>

=======
<!DOCTYPE html>
<html class=" hasFontSmoothing-true" xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>请确认支付 旅游优惠 - 蚂蜂窝当地游 - 蚂蜂窝自由行</title>

<meta http-equiv="pragma" content="no-cache">

<script src="%E8%AF%B7%E7%A1%AE%E8%AE%A4%E6%94%AF%E4%BB%98%20%E6%97%85%E6%B8%B8%E4%BC%98%E6%83%A0%20-%20%E8%9A%82%E8%
9C%82%E7%AA%9D%E5%BD%93%E5%9C%B0%E6%B8%B8%20-%20%E8%9A%82%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/core.php" charset="utf-8" async="" type="text/javascript"></script><script src="%E8%AF%B7%E7%A1%AE%E8%AE%A4%E6%94%AF%E4%BB%98%20%E6%97%85%E6%B8%B8%E4%BC%98%E6%83%A0%20-%20%E8%9A%82%E8%9C%82%E7%AA%9D%E5%BD%93%E5%9C%B0%E6%B8%B8%20-%20%E8%9A%82%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/c.php" charset="utf-8" async="" type="text/javascript"></script><script type="text/javascript">
window.Env = {"WWW_HOST":"www.mafengwo.cn","IMG_HOST":"images.mafengwo.net","P_HOST":"passport.mafengwo.cn","P_HTTP":"https:\/\/passport.mafengwo.cn","UID":31821509,"CSTK":"b0e3b9608aae59dc9105470c97b29113_4be2a3ce117c232889750398d9f2ceae"};
</script>

<link href="../css/cssbasecssjquery.css" rel="stylesheet" type="text/css">



<script language="javascript" src="../js/jsjquery-1.js" type="text/javascript"></script>
<script type="text/javascript">
var __mfw_uid = parseInt('31821509');
</script>
<script language="javascript" src="../js/jscommonjquery.js" type="text/javascript"></script>
<link href="../css/csslocaldealsldordercsspluginsjquery.css" rel="stylesheet" type="text/css">
<script language="javascript" src="../js/jspluginsjquery.js" type="text/javascript"></script>

<script src="../js/jsDropdownjsjquery.js" async=""></script></head>
<body style="position: relative;">
    
    
    

<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="蚂蜂窝自由行" href="http://www.mafengwo.cn/"></a></div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index" data-cs-p="index"><a href="http://www.mafengwo.cn/">首页</a></li>
                <li class="head-nav-place" data-cs-p="mdd"><a href="http://www.mafengwo.cn/mdd/" title="目的地">目的地</a></li>
                <li class="head-nav-gonglve" data-cs-p="gonglve"><a href="http://www.mafengwo.cn/gonglve/" title="旅游攻略">旅游攻略</a></li>
                <li class="head-nav-sales head-nav-dropdown _j_sales_nav_show" id="_j_nav_sales" data-cs-p="sales">
                    <a class="drop-toggle" href="http://www.mafengwo.cn/sales/" style="cursor: pointer;display: block;border-bottom:0 none;" data-sales-nav="自由行商城">
                        <span>自由行商城<i class="icon-caret-down"></i></span>
                    </a>
                    <div class="dropdown-menu dropdown-sales hide _j_sales_top" id="_j_sales_panel" data-cs-t="sales_nav">
                        <ul>
                            <li><a target="_blank" href="http://www.mafengwo.cn/sales/" data-sales-nav="机票＋酒店">机票＋酒店<i class="i-hot">hot</i></a></li>
                            <li><a target="_blank" href="http://www.mafengwo.cn/localdeals/" data-sales-nav="当地游">当地游<i class="i-new">new</i></a></li>
                            <li><a target="_blank" href="http://www.mafengwo.cn/sales/visa/" data-sales-nav="签证">签证</a></li>
                            <li><a target="_blank" href="http://zuche.mafengwo.cn/" data-sales-nav="国际租车">国际租车</a></li>
                            <li><a target="_blank" href="http://www.mafengwo.cn/insure/" data-sales-nav="保险">保险</a></li>
                        </ul>
                    </div>
                </li>
                <li class="head-nav-hotel" data-cs-p="hotel"><a href="http://www.mafengwo.cn/hotel/" title="酒店">酒店</a></li>
                <li class="head-nav-community head-nav-dropdown _j_shequ_nav_show" id="_j_nav_community" data-cs-p="community">
                    <div class="drop-toggle"><span>社区<i class="icon-caret-down"></i></span></div>
                    <!-- 社区下拉面板 begin -->
                    <div class="dropdown-panel dropdown-community hide _j_shequ_top no-image" id="_j_community_panel" data-cs-t="community_nav">
                        <div class="panel-wrapper">
                            <ul class="nav-list clearfix">
                                <li class="h"><a href="http://www.mafengwo.cn/wenda/" target="_blank" title="问答" data-cs-p="wenda">问答<i class="i-hot">hot</i></a></li>
                                <li><a href="http://www.mafengwo.cn/mall/things.php" target="_blank" title="蚂蜂窝周边" data-cs-p="things">蚂蜂窝周边<i class="i-new">new</i></a></li>
                                <li><a href="http://www.mafengwo.cn/mall/" target="_blank" title="蚂蜂窝商店" data-cs-p="mall">蜂蜜兑换</a></li>
                                <li><a href="http://www.mafengwo.cn/together/" target="_blank" title="结伴" data-cs-p="together">结伴</a></li>
                            </ul>
                            <ul class="nav-list-sub clearfix">
                                
                                <li><a href="http://www.mafengwo.cn/group/" target="_blank" title="蚂蜂窝旅行家" data-cs-p="group">小组论坛</a></li>
                                <li><a href="http://www.mafengwo.cn/rudder/" target="_blank" title="分舵同城" data-cs-p="rudder">分舵同城</a></li>
                                <li><a href="http://www.mafengwo.cn/auction/" target="_blank" title="蚂蜂窝拍卖行" data-cs-p="paimai">蚂蜂窝拍卖行</a></li>
                                <li><a href="http://www.mafengwo.cn/club/" target="_blank" title="蜂首聚乐部" data-cs-p="club">蜂首聚乐部</a></li>
                                <!--<li><a href="http://www.mafengwo.cn/postal/" target="_blank" title="游记纪念工厂" data-cs-p="postal">游记纪念工厂</a></li>-->
                                <li><a href="http://www.mafengwo.cn/photo_pk/pk.php" target="_blank" title="照片PK" data-cs-p="photo_pk">照片PK</a></li>
                                <li><a href="http://www.mafengwo.cn/focus/" target="_blank" title="真人兽" data-cs-p="focus">真人兽</a></li>
                                <li><a href="http://www.mafengwo.cn/mall/virtual_goods.php" target="_blank" title="道具商店" data-cs-p="virtual">道具商店</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <!-- 社区下拉面板 end -->
                </li>
                <li class="head-nav-app" data-cs-p="app"><a href="http://www.mafengwo.cn/app/intro/gonglve.php" title="APP">APP</a></li>
            </ul>
            <div class="head-search">
                <div class="head-search-wrapper">
                    <div class="head-searchform">
                        <input name="q" id="_j_head_search_input" autocomplete="off" type="text">
                        <a role="button" href="javascript:" class="icon-search" id="_j_head_search_link"></a>
                    </div>
                </div>
            </div>
                            <div class="login-info">
                    <div class="head-user" id="_j_head_user">
                        <a class="drop-trigger" href="http://www.mafengwo.cn/u/31821509.html" title="小哪吒_77140的窝" rel="nofollow">
                            <div class="user-image"><img src="../home/homepage/wKgB6lR9MMWAYgUuAAAGbKJTJYY889.gif" alt="小哪吒_77140的窝" height="32" width="32"></div>
                            <i class="icon-caret-down"></i>
                        </a>
                    </div>
                    <div class="head-msg" id="_j_head_msg">
                        <a class="drop-trigger" href="javascript:" rel="nofollow">
                            <i class="icon-msg"></i>
                            消息
                            <i class="icon-caret-down"></i>
                            <span style="display: inline;" class="head-msg-new hide">1</span>
                        </a>
                    </div>
                    <div class="head-daka ">
                        <a class="btn head-btn-daka" href="javascript:" rel="nofollow" id="head-btn-daka" title="打卡" data-japp="daka">打卡</a>
                                                <a class="btn-active head-btn-daka" href="javascript:" rel="nofollow" id="head-btn-daka-active" title="打卡推荐" data-japp="daka">打卡推荐</a>
                                            </div>
                </div>
                                </div>
        <div class="dropdown-group">
            <!-- 消息下拉菜单 begin -->
            <div class="dropdown-menu dropdown-msg hide" id="_j_msg_panel" style="z-index:10;">
                <ul>
                    <li class=""><a href="http://www.mafengwo.cn/msg/entry/sys" target="_blank" rel="nofollow">系统通知<span class="num">1</span></a></li>

<li><a href="http://www.mafengwo.cn/msg/sms/index" target="_blank" rel="nofollow">私信</a></li>
<li><a href="http://www.mafengwo.cn/msg/entry/article" target="_blank" rel="nofollow">文章消息</a></li>
<li><a href="http://www.mafengwo.cn/msg/entry/group" target="_blank" rel="nofollow">小组消息</a></li>
<li><a href="http://www.mafengwo.cn/msg/entry/ask" target="_blank" rel="nofollow">问答消息</a></li>

                </ul>
            </div>
            <div style="display: block;" class="dropdown-menu dropdown-msg hide" id="_j_msg_float_panel">
                <ul><li><a href="http://www.mafengwo.cn/msg/entry/sys" target="_blank" rel="nofollow">系统通知<span class="num">1</span></a></li></ul>
                <a href="javascript:" class="close-newmsg">×</a>
            </div>
            <!-- 消息下拉菜单 end -->
            <!-- 用户下拉菜单 begin -->
            <div class="dropdown-menu dropdown-user hide" id="_j_user_panel" data-cs-t="user_nav">
                <div class="user-info">
                    <a class="coin" href="http://www.mafengwo.cn/mall/" target="_blank" id="head-my-coin" rel="nofollow" data-cs-p="coin">蜂蜜 0</a> / <a class="coin" href="http://www.mafengwo.cn/user/lv.php#coin" target="_blank" id="head-my-coin" rel="nofollow" data-cs-p="coin">金币 0</a>
                </div>
                <ul>
                    <li><a href="http://www.mafengwo.cn/u/31821509.html" target="_blank" title="我的蚂蜂窝" rel="nofollow" data-cs-p="wo"><i class="icon-wo"></i>我的蚂蜂窝<span class="level">LV.1</span> </a></li>
                    <li><a href="http://www.mafengwo.cn/note/create_index.php" target="_blank" class="drop-write" title="写游记" rel="nofollow" data-cs-p="writenotes"><i class="icon-writenotes"></i>写游记</a></li>
                    <li><a href="http://www.mafengwo.cn/note/activity/appointment/" target="_blank" class="drop-write" title="预约游记" rel="nofollow" data-cs-p="appointnotes"><i class="icon-ordernotes"></i>预约游记</a></li>
                    <li data-cs-t="足迹_首页" data-cs-p="页头_我的足迹"><a href="http://www.mafengwo.cn/path/31821509.html" target="_blank" title="我的足迹" rel="nofollow"><i class="icon-path"></i>我的足迹</a></li>
                    <li><a href="http://www.mafengwo.cn/wenda/u/31821509.html" target="_blank" title="我的问答" rel="nofollow" data-cs-p="wenda"><i class="icon-wenda"></i>我的问答</a></li>
                    <li><a href="http://www.mafengwo.cn/friend/index/follow" target="_blank" title="我的好友" rel="nofollow" data-cs-p="friend"><i class="icon-friend"></i>我的好友</a></li>
                    <li><a href="http://www.mafengwo.cn/plan/fav_type.php" title="我的收藏" target="_blank" rel="nofollow" data-cs-p="collect"><i class="icon-collect"></i>我的收藏</a></li>
                    <li><a href="http://www.mafengwo.cn/plan/route.php" title="我的路线" target="_blank" rel="nofollow" data-cs-p="route"><i class="icon-route"></i>我的路线</a></li>
                    <li><a href="http://www.mafengwo.cn/sales/order.php" title="我的订单" target="_blank" rel="nofollow" data-cs-p="order"><i class="icon-order"></i>我的订单</a></li>
                    <li><a href="http://www.mafengwo.cn/sales/coupon.php" title="我的优惠券" target="_blank" rel="nofollow" data-cs-p="coupon"><i class="icon-coupon"></i>我的优惠券</a></li>
                    <li><a href="http://www.mafengwo.cn/home/userinfo.php" title="我的设置" target="_blank" relindex.html="nofollow" data-cs-p="settings"><i class="icon-settings"></i>设置</a></li>
                    <li><a href="http://www.mafengwo.cn/s/loginout.html" title="退出登录" rel="nofollow"><i class="icon-logout" data-cs-p="logout"></i>退出</a></li>
                </ul>
            </div>
            <!-- 用户下拉菜单 end -->

        </div>
        <div class="shadow"></div>
    </div>
    

    <!-- 新自由行菜单 begin -->
<div class="dropdown-bar" style="">
    <div class="content">
        <ul class="clearfix ul-dropdown-bar">
            <li><a href="http://www.mafengwo.cn/sales/">机票＋酒店</a></li>
            <li class="on"><a href="http://www.mafengwo.cn/localdeals/">当地游</a></li>
            <li><a href="http://www.mafengwo.cn/sales/visa/">签证</a></li>
            <li><a href="http://www.mafengwo.cn/localdeals/0-0-0-21-0-0-0-0.html">全球WiFi</a></li>
            <li><a href="http://www.mafengwo.cn/sales/0-0-0-5-0-0-0-0.html">邮轮</a></li>
            
            <li><a href="http://www.mafengwo.cn/insurance/">旅游保险</a></li>
        </ul>
    </div>

</div>
<!-- 新自由行菜单 end -->

<script>
    //判断是否显示 下拉bar
;(function () {
    window.showBarFlag = true;
    var realPathName = location.pathname;
    var regExp = /localdeals|sales|insurance|activity/gi;
    var pathArr = realPathName.match(regExp);
        if(window.Env.flag == 'gonglue_campaign') { $('.dropdown-bar').hide();return;}
        if(realPathName == '/sales/0-0-0-5-0-0-0-0.html' || window.Env.salesType ==5){
            $('.ul-dropdown-bar > li:eq(4)').addClass('on');
            window.showBarFlag = false;
            $('.dropdown-bar').show();
        }else if(realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType ==21){
            $('.ul-dropdown-bar > li:eq(3)').addClass('on');
            window.showBarFlag = false;
            $('.dropdown-bar').show();
        }else if(window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4){
            $('.ul-dropdown-bar > li:eq(2)').addClass('on');
            window.showBarFlag = false;
            $('.dropdown-bar').show();
        } else if(window.Env.salesType) {
            switch(window.Env.salesType|0) {
                case 1:
                case 3:
                case 6:
                    $('.ul-dropdown-bar > li:eq(0)').addClass('on');
                    break;
                case 2:
                    $('.ul-dropdown-bar > li:eq(1)').addClass('on');
                default:
                    $('.ul-dropdown-bar > li:eq(1)').addClass('on');
            }
            window.showBarFlag = false;
            $('.dropdown-bar').show();
        }
        else {
            if( pathArr){
                if(pathArr.length == 1 && pathArr[0] != 'activity'){
                    switch(pathArr[0]){
                        case 'localdeals':
                            $('.ul-dropdown-bar > li:eq(1)').addClass('on');
                            break;
                        case 'insurance':
                            $('.ul-dropdown-bar > li:eq(5)').addClass('on');
                            break;
                        case 'sales':
                            $('.ul-dropdown-bar > li:eq(0)').addClass('on');
                            break;
                        default:
                            break;
                    }
                    window.showBarFlag = false;
                    $('.dropdown-bar').show();
                }else {
                    if('activity'.indexOf(pathArr) != -1){
                        window.showBarFlag  = true;
                        $('.dropdown-bar').hide();
                    }
                }
        }
    }
        // 点击时触发
        $('.ul-dropdown-bar > li').on('click',function () {
            $(this).addClass('on').siblings().removeClass('on');
        });
})();

</script>

</div>




<style>
    .rInfo .rbd .t3 span {display:inline-block}
    .wrapper .dropmenu{display: none;}
    .wrapper .bd li i.down{pointer-events: none}
    .contact-edit-panel {display: none;}
    .coupon .dropmenu{width: auto;}
    .coupon .dropmenu a{padding-right:10px;}
    .wx-mfw-pop{ width:420px;height:285px;padding-top:45px;background:#fff url(/images/post/i_wx.png) 48px 20px no-repeat;text-align:center;font-size:16px;color:#666;line-height:1.8em}
    .wx-mfw-pop img{ margin-top:10px }
    .ui-autocomplete{  max-width:250px;max-height: 200px;overflow-y: auto;overflow-x: hidden; }
</style>

<div class="wrapper">
        
            <div class="hd"><i>1</i>出行人信息（<span>用于安排出行人行程</span>）</div>
                    <div class="sub-tit">
                <span class="name">主要出行人</span>
                            </div>
            <div class="plist clearfix">
                            </div>
            <div class="bd template-form">
            <ul class="clearfix">
            <li class="Required">
<input class="template-field" placeholder="中文姓名" onblur="names()" id="name" data-required="1" data-key="name" data-parentid="19" data-rule="1" type="text">


            <!-- <label for="template_2" class="label hide"><i></i>请填写中文姓名</label> -->
            </li>
            <li class="Required">
            <input class="template-field" placeholder="手机号" onblur="phones()" id="phone" data-required="1" data-key="name_en" data-parentid="19" data-rule="12" type="text">


            <!-- <label for="template_3" class="label hide"><i></i>请填写拼音姓名</label> -->
            </li>
            <li class="Required">
            <input class="template-field" placeholder="护照号" onblur="codes()" id="code" data-required="1" data-key="passport" data-parentid="19" data-rule="6" type="text">


            <!-- <label for="template_4" class="label hide"><i></i>请填写护照号</label> -->
            </li>
            <li class="Required">
            <input data-type="select" class="template-field" onblur="sess()" placeholder="性别" id="sex" data-required="1" data-key="gender" data-parentid="19" readonly="readonly" type="text"><i class="down"></i>
            <div class="dropmenu">
            <a href="javascript:void(0);">男(male)</a>
            <a href="javascript:void(0);">女(female)</a>
            </div>

            <!-- <label for="template_94" class="label hide"><i></i>请填写性别</label> -->
            </li>
            </ul>
            </div>
            
    
    <div class="hd"><i>2</i>预订人信息（<span>用于接收订单反馈</span>）</div>
    <div class="forms" id="baseInfoForm">
                <div class="contact">
            <!-- <a href="javascript:void(0);" class="edit"><i></i>修改</a> -->
            <p>姓名：{{$userarr->user}}</p>
            <p>邮箱：{{$userarr->email}}</p>
                        <p>微信：{{$userarr->phone}}</p>
                        <p>手机：{{$userarr->phone}}</p>
        </div>
                <div class="contact-edit-panel">
            <dl class="clearfix">
                <dt>姓名</dt>
                <dd><input id="base_name" placeholder="请填写您的真实姓名" value="维森" data-required="1" type="text"></dd>
            </dl>
            <dl class="clearfix">
                <dt>邮箱</dt>
                <dd class="parentCls"><span style="display:inline-block;position:relative;"><div id="mailListBox_0" class="justForJs parentCls" style="min-width:215.6px;_width:215.6px;position:absolute;left:-6000px;top:33.6px;z-index:5;"></div><input data-e="" id="base_email" placeholder="请填写可及时联络邮箱" value="23434554@qq.com" data-required="1" type="text"></span></dd>
            </dl>
                        <dl class="clearfix">
                <dt>微信</dt>
                <dd><input id="base_wechat" placeholder="仅作为备用联系方式" value="13021082314" data-required="0" type="text"></dd>
            </dl>
                        <dl class="clearfix">
                <dt>手机</dt>
                <dd><input id="base_phone" placeholder="填写可及时联络手机号，重要！" value="13021082314" data-required="1" type="text"></dd>
            </dl>
            <dl class="clearfix valid-sms" style="display: none;">
                <dt>验证码</dt>
                <dd><input id="valid_code" type="text"><button class="btn-send" id="btn_valid">发送验证码</button></dd>
            </dl>
        </div>
        <div class="title">备注信息:</div>
        <div class=""><textarea id="base_description" class="textarea"></textarea></div>
    </div>
    <div style="height: 0px;" id="fixheight"></div>
    <!--FootTotal-->
    <div class="footTotal">
        <div style="margin-bottom:10px;">
            <input checked="checked" id="agreement" type="checkbox">
            <label for="agreement">我已阅读并同意</label><a href="http://www.mafengwo.cn/s/localagreement.html" target="_blank">《蚂蜂窝商城服务使用协议》</a>
        </div>

        <div class="total">
            支付总金额：<em>￥</em><span id="money_payment">160</span>
            <div class="confirm-form">
                <a id="sub" onclick="tj()" href="javascript:void(0);">提交订单</a>
                <!-- <input type="button"  value="提交订单"> -->
            </div>
        </div>
    </div>
    <!--FootTotalEnd-->
    <!--RightInfo-->
    <div style="position: fixed; top: 155px;" class="rInfo">
        <div class="rhd">
            供应商：会玩国内游        </div>
        <div class="rbd">
            <p class="t1" id="s_name">{{$arr->s_name}}</p>
                        <p class="t2">出行日期</p>
            <div class="t3" id="times">{{$times}}</div>
            <p class="t2">结束日期</p>
            <div class="t3" id="endtime">{{$endtime}}</div>
                        <p class="t2">数量</p>
            <div class="t3"><span>成人<strong>{{$num}}</strong></span><span></span><span></span>
            </div>
        </div>
    </div>
    <!--RightInfoEnd-->
</div>

<div style="width: 420px;" id="popup_container2" class="popup-box hide">
    <a class="close-btn" href="javascript:void(0);"><i></i></a>
    <div class="pop-ico"></div>
    <div id="wx" class="pop-ctn">
        <p class="hd"></p><div class="wx-mfw-pop">
            <p>使用微信“扫一扫”去砍价</p><p>动动手指，就能为这款产品砍个好价格喔！</p>
            <p>本订单至多可砍掉¥<span></span>，邀请<span></span>个好友帮砍吧！</p>
            <p>
                <img src="" height="150" width="150"></p></div><p></p>
    </div>
</div>
<script type="text/javascript">
    var SALES_ID = '1000866';
    var MDD_ID = '10130';
    var STOCK_ID = '30833307';
    var GO_DATE = '2016-09-29';
    var ADULT_NUM = '1';
    var KID_NUM = '0';
    var INFANT_NUM = '0';
    var TOTAL_PRICE = {{$numsprice}};
    var APP_REDUCE_PRICE = 0;
    var EXT_QUERY = "&cid=1010605";
    var USER_PHONE = '13021082314';
    var VALID_MOBILE = false;
    var GIFT_CODE = '';
    var OTHER_PEOPLE = {};
    var BARGAIN_ORDER = '';
    var HONEY_MAX = 0;
</script>

<script>
    bookingFun.init();
    $('#sel_coupon').change(function(){
        var code = $(this).data('value');
        bookingData.couponCode = code;
        if(code) {
            bookingData.couponPrice = parseFloat($('.coupon [data-value="' + code + '"]').data('price'));
            bookingData.conditionPrice = parseFloat($('.coupon [data-value="' + code + '"]').data('condition'));
        } else {
            bookingData.couponPrice = 0;
            bookingData.conditionPrice = 0;
        }
        if( TOTAL_PRICE >= bookingData.conditionPrice ){
            bookingFun.onPriceChange();
        }

    });
    $('.other-people-select').click(function(){
        var $i = $(this).find('i');
        if($i.hasClass('up')) {
            $(this).html('展开<i></i>');
            $(this).parent().next().children('label:gt(4)').hide();
        } else {
            $(this).html('收起<i class="up"></i>');
            $(this).parent().next().children('label:gt(4)').show();
        }
    });
    var $baseInfoForm = $('#baseInfoForm');
    $baseInfoForm.find('.edit').click(function(){
        $baseInfoForm.find('.contact').hide();
        $baseInfoForm.find('.contact-edit-panel').show();
        $(window).trigger('resize');
    });

    $("#validate_coupon").click(function (e) {
        e.preventDefault();
        var coupon_code = $("#ipt_coupon_code").val().trim();
        var data = {
            action: 'preCheck',
            coupon_code: coupon_code,
            price: bookingData.totalPrice,
            sales_id: SALES_ID,
            phone: $.trim($('[name=base_phone]').val()),
            email: $.trim($('[name=base_email]').val())
        };
        mfwRest.post('/localdeals/coupon/', data, function (res) {
            if (res.errno) {
                alert(res.error);
            } else {
                var $a = $('.coupon [data-value="'+coupon_code+'"]');
                if(!$a.length) {
                    $a = $('<a>',{
                        'data-value':coupon_code,
                        'data-price':res.data.after,
                        'href':'javascript:void(0)'
                    }).html('减'+res.data.after+'元（'+coupon_code+'）').appendTo('.coupon .dropmenu');
                }
                $a.click();
                $('#pnl_success').show();
                $("#ipt_coupon_code").val('');
            }
        },'preCheck','price');
    });
    $("#ipt_coupon_code").on('keydown change',function(){
        $('#pnl_success').hide();
    });
    (function() {
        var $box = $('.rInfo');
        var onscroll = function(){
            var fixedTop = 155;
            var minRelativeTop = 30;
            //底部横线的位置－底部横线的margin－产品信息的高度
            var fixHeightTop = $('#fixheight');
            var boxMaxY = fixHeightTop.offset().top - $box.height();
            //底部横线的位置－底部横线的margin－产品信息的高度 - 产品信息的Top
            var maxScrollY = boxMaxY - fixedTop;
            if($(window).scrollTop() > maxScrollY) {
                boxMaxY -= $('.wrapper').offset().top;
                if(boxMaxY<minRelativeTop) {
                    fixHeightTop.show().height(minRelativeTop-boxMaxY);
                    boxMaxY = minRelativeTop;
                } else {
                    fixHeightTop.height(0);
                }
                $box.css({
                    position: 'absolute',
                    top: boxMaxY
                });
            } else {
                fixHeightTop.height(0);
                $box.css({
                    position: 'fixed',
                    top: fixedTop
                });
            }
        };
        $(window).on('scroll resize', onscroll);
        onscroll();
    })();

    // 邮箱提示
    //邮箱输入提示
    $("[data-E]").mailAutoComplete({
        boxClass: "parentCls", //外部box样式
        /* listClass: "list_box", //默认的列表样式
         focusClass: "focus_box", //列表选样式中
         markCalss: "mark_box", //高亮样式*/
        autoClass: false,
        textHint: false, //提示文字自动隐藏
        hintText: "请输入邮箱地址"
    });
</script>

<script>
    if($.browser && ($.browser.msie && parseFloat($.browser.version) <=8)) {

        $('input[placeholder]').each(function() {
            var $placeholder = $('<label>');
            $placeholder.html($(this).attr('placeholder')).insertBefore($(this));
            $placeholder.attr('for', this.id);
            $placeholder.addClass('ie_placeholder');
            $(this).focus(function() {
                $placeholder.hide();
            });
            $(this).blur(function() {
                if(!$(this).val().length) {
                    $placeholder.show();
                }
            });
        });
    }
    $(function() {
        $.autoComplete(".wrapper","/localdeals/ajax_new.php?act=getHotel",MDD_ID);
    });
</script><link href="../css/mfw-footer.css" rel="stylesheet" type="text/css">
<script src="../js/jquery1.8.js"></script>
<script>

    function names()
    {
        var name=$("#name").val();
        var reg=/^[\u4E00-\u9FA5]{1,6}$/;
        if(name ==' '){
            $("#name").val('请填写一个正确的用户名');
            return false;
        }else if(!reg.test(name)){
            $("#name").val('请填写一个正确的用户名');
            return false;
        }else{
           
            return true;
        }
    }

    function phones()
    {
        var phone=$("#phone").val();
        var reg=/^1[34578]\d{9}$/;
        if(phone ==' '){
            $("#phone").val('请填写一个正确的手机号码');
            return false;
        }else if(!reg.test(phone)){
            $("#phone").val('请填写一个正确的手机号码');
            return false;
        }else{
            return true;
        }
    }

    function codes()
    {
        var code=$("#code").val();
        var reg=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
        if(code ==' '){
            $("#code").val('请填写一个正确的身份证号');
            return false;
        }else if(!reg.test(code)){
            $("#code").val('请填写一个正确的身份证号');
            return false;
        }else{
            return true;
        }
    }

    // function sexs()
    // {
    //     var sex=$("#sex").val();
    //     var reg=/^[a-zA-Z]\w{3,15}$/ig;
    //     if(sex ==' '){
    //         $("#sex").val('请选择性别');
    //         return false;
    //     }else if(!reg.test(sex)){
    //         $("#sex").val('请选择性别');
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }
    function tj()
    {
        if(names() && phones() && codes())
        {
            var start={{$start}};
            var starts={{$starts}};
            if (start==1) {
                    alert('你已经下过单了,请去付款');
                    location.href='userOrderDetails';            
            }else if(starts==1){
                    alert('你已经下过单了,请勿重复下单,以免给你造成损失');
                    location.href='userOrderDetails';
            }else{
                 var sid={{$arr->s_id}};
                 var times=$("#times").html();
                 var endtime=$("#endtime").html();
                 var numsprice={{$numsprice}};
                 var sprice={{$sprice}};
                 var s_name=$("#s_name").html();
                 var num={{$num}};
                 var name=$("#name").val();
                 var phone=$("#phone").val();
                 var code=$("#code").val();

                 location.href='write_information?sid='+sid+'&times='+times+'&endtime='+endtime+'&numsprice='+numsprice+'&sprice='+sprice+'&s_name='+s_name+'&num='+num+'&name='+name+'&phone='+phone+'&code='+code;
            }
        }
    }
</script>
<div id="footer">
    <div class="ft-content">
        <div class="ft-info clearfix">
    <dl class="ft-info-col ft-info-intro">
        <dt>中国领先的自由行服务平台</dt>
        <dd>覆盖全球200多个国家和地区</dd>
        <dd><strong>100,000,000</strong> 位旅行者</dd>
        <dd><strong>920,000</strong> 家国际酒店</dd>
        <dd><strong>21,000,000</strong> 条真实点评</dd>
        <dd><strong>382,000,000</strong> 次攻略下载</dd>
        <dd><a class="highlight" href="http://www.mafengwo.cn/activity/sales_report2015/index" target="_blank">中国旅游行业第一部“玩法”</a></dd>
    </dl>
    <dl class="ft-info-col ft-info-about">
        <dt>关于我们</dt>
        <dd><a href="http://www.mafengwo.cn/s/about.html" rel="nofollow">关于蚂蜂窝</a></dd>
        <dd><a href="http://www.mafengwo.cn/s/property.html" rel="nofollow">网络信息侵权通知指引</a></dd>
        <dd><a href="http://www.mafengwo.cn/s/private.html" rel="nofollow">隐私政策</a></dd>
        <dd><a href="http://www.mafengwo.cn/s/agreement.html" rel="nofollow">服务协议</a></dd>
        <dd><a href="http://www.mafengwo.cn/s/contact.html" rel="nofollow">联系我们</a></dd>
        <dd><a class="joinus highlight" title="蚂蜂窝团队招聘" target="_blank" href="http://www.mafengwo.cn/s/hr.html" rel="nofollow">加入蚂蜂窝</a></dd>
    </dl>
    <dl class="ft-info-col ft-info-service">
        <dt>旅行服务</dt>
        <dd>
            <ul class="clearfix">
                <li><a target="_blank" href="http://www.mafengwo.cn/gonglve/">旅游攻略</a></li>
                <li><a target="_blank" href="http://www.mafengwo.cn/hotel/">酒店预订</a></li>
                <li><a target="_blank" href="http://www.mafengwo.cn/sales/">旅游特价</a></li>
                <li><a target="_blank" href="http://zuche.mafengwo.cn/">国际租车</a></li>
                <li><a target="_blank" href="http://www.mafengwo.cn/wenda/">旅游问答</a></li>
                <li><a target="_blank" href="http://www.mafengwo.cn/insure/">旅游保险</a></li>
                <li><a target="_blank" href="http://z.mafengwo.cn/">旅游指南</a></li>
                <li><a target="_blank" href="http://huoche.mafengwo.cn/">订火车票</a></li>
                <li><a target="_blank" href="http://www.mafengwo.cn/travel-news/">旅游资讯</a></li>
                <li><a target="_blank" href="http://www.mafengwo.cn/app/intro/gonglve.php">APP下载</a></li>
                <li><a target="_blank" href="http://www.mafengwo.cn/sales/union.php" class="highlight">全球供应商入驻</a></li>
            </ul>
        </dd>
    </dl>
    <dl class="ft-info-col ft-info-qrcode">
        <dd>
            <span class="ft-qrcode-tejia"></span>
            <p>蚂蜂窝良品</p>
        </dd>
        <dd>
            <span class="ft-qrcode-weixin"></span>
            <p>蚂蜂窝官方微信</p>
        </dd>
    </dl>
    <dl class="ft-info-social">
        <dt>关注我们</dt>
        <dd>
            <a class="ft-social-weibo" target="_blank" href="http://weibo.com/mafengwovip" rel="nofollow"><i class="ft-social-icon"></i></a>
            <a class="ft-social-qqt" target="_blank" href="http://t.qq.com/mafengwovip" rel="nofollow"><i class="ft-social-icon"></i></a>
            <a class="ft-social-qzone" target="_blank" href="http://1213600479.qzone.qq.com/" rel="nofollow"><i class="ft-social-icon"></i></a>
        </dd>
    </dl>
</div>

        <div class="ft-copyright">
    <div class="ft-safety">
        <a class="s-a" target="_blank" href="https://search.szfw.org/cert/l/CX20140627008255008321" id="___szfw_logo___"></a>
        <a class="s-b" href="https://ss.knet.cn/verifyseal.dll?sn=e130816110100420286o93000000&amp;ct=df&amp;a=1&amp;pa=787189" target="_blank" rel="nofollow"></a>
        <a class="s-c" href="http://www.itrust.org.cn/Home/Index/itrust_certifi/wm/1669928206.html" target="_blank" rel="nofollow"></a>
    </div>
    <a href="http://www.mafengwo.cn/"><i class="ft-mfw-logo"></i></a>
    <p>© 2016 Mafengwo.cn <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">京ICP备11015476号</a>   京公网安备110105013401号   京ICP证110318号</p>
    <p>新出网证(京)字242号 全国统一客服电话：<span class="highlight">4006-345-678</span><a target="_blank" href="http://www.mafengwo.cn/s/sitemap.html" class="highlight m_l_10">网站地图</a></p>
</div>
    </div>
</div>



<link href="../css/mfw-toolbar.css" rel="stylesheet" type="text/css">

<div style="display: block;" class="mfw-toolbar" id="_j_mfwtoolbar">
    <div style="display: none;" class="toolbar-item-top">
        <a role="button" class="btn _j_gotop">
            <i class="icon_top"></i>
            <em>返回顶部</em>
        </a>
    </div>
    <div class="toolbar-item-feedback">
        <a role="button" data-japp="feedback" class="btn">
            <i class="icon_feedback"></i>
            <em>意见反馈</em>
        </a>
    </div>
    <div class="toolbar-item-code">
        <a role="button" class="btn">
            <i class="icon_code"></i>
        </a>
        <a role="button" class="mfw-code _j_code">
            <img src="..//qrcode-weixin.gif">
        </a>
        <!--<div class="wx-official-pop"><img src="http://images.mafengwo.net/images/qrcode-weixin.gif"><i class="_j_closeqrcode"></i></div>-->
    </div>
    
</div>



<script language="javascript" type="text/javascript">
if (typeof M !== "undefined" && typeof M.loadResource === "function") {
M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+jquery.upnum:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+TopTip:js+AHeader:js+M+module+Storage:js+jquery.jgrowl.min:js+AMessage:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^ZlRa^1472813961.js");
}
</script>
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99



</body></html>