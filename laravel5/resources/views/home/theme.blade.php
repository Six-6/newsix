<!DOCTYPE html>
<html><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../css/top.css">
<link rel="stylesheet" type="text/css" href="../css/gonglue_channel.css">
<link rel="stylesheet" type="text/css" href="../css/jquery.css">
<title>主题</title>
<meta content="主题旅游,旅行风向标,途牛风向标" name="keywords">
<meta content="途牛风向标提供最全面的主题旅游推荐：自驾、蜜月、亲子、踏青、赏花、漂流、温泉等各式主题旅游推荐,总有一款主题让您满意……最新最快的掌握当季旅游活动,一站式贴心旅游服务尽在途牛风向标。" name="description">
<link href="../css/reset.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="../css/sideright.css">
<link rel="stylesheet" type="text/css" href="../css/pageration.css">
<script src="../js/ga.js" async="" type="text/javascript"></script><script src="../js/jquery-1.js" type="text/javascript"></script>
<script src="../js/base64.js" type="text/javascript"></script>
<link href="../css/mask.css" rel="stylesheet" type="text/css"><link id="rightCommonCss" rel="stylesheet" type="text/css" href="../css/right_common.css"></head>
<body>
<script type="text/javascript" src="../js/in-min.js"></script><script type="text/javascript" src="../js/header_v2.js"></script><script type="text/javascript" src="../js/getDegree.js"></script><script type="text/javascript" src="../js/screen_size.js"></script><link rel="stylesheet" href="../css/index_nav_menu.css"><link rel="stylesheet" type="text/css" href="../css/TN_date.css"><script type="text/javascript" src="../js/search_ajax.js"></script><link href="./css/head_nav_new.css" rel="stylesheet" type="text/css"><script type="text/javascript">function selectTag(showContent,selfObj){ var tag = document.getElementById("tags").getElementsByTagName("li"); var taglength = tag.length; for(i=0; i<taglength; i++){ tag[i].className = ""; } selfObj.parentNode.className = "selectTag"; for(i=1; j=document.getElementById("tagContent"+i); i++){ j.style.display = "none"; } document.getElementById(showContent).style.display = "block";}var startCity = document.getElementById("startCity");if(startCity){ startCity.onmouseover = function(){ startCity.className = "head_start_city change_tab"; }; startCity.onmouseout = function(){ startCity.className = "head_start_city"; };}function getCookie(objName){ var arrStr = document.cookie.split("; "); for(var i = 0;i < arrStr.length;i ++){ var temp = arrStr[i].split("="); if(temp[0] == objName) return unescape(temp[1]); } return false;}var tuniuPPhoneDiv = document.getElementById("tuniu_400_num_phone");var tuniuPPhoneNumber = getCookie("p_phone_400");if (tuniuPPhoneDiv) { if (tuniuPPhoneNumber) { tuniuPPhoneDiv.innerHTML = tuniuPPhoneNumber; } else { tuniuPPhoneDiv.innerHTML = "4007-999-999"; }}$(function($) { var sub = $("#keyword-input-sub").val(); if(sub && sub != ''){ $("#keyword-input").val(sub); }});</script><!-- 页面类型 -->
<input name="page_type" id="page_type" value="130000" type="hidden">

<div class="top_area">
            <div class="wrap clearfix" style="background:#fff;">
                 @include('home/common/top')
            </div>
        </div> 


<div class="wrapmain">
		<div class="nav-ind">
			<div class="navbar">
				<div class="indlogo"></div>
				<a href="{{URL('home/siterecommend')}}" class="indsep" id="shouye"><div class="shouye">首页</div></a>

                <a href="{{URL('home/ranking')}}" class="indsep" id="list"><div class="list">排行榜</div></a>
                                
				
				<a href="{{URL('home/themes')}}" class="indsep selected" id="theme"><div class="theme">主题推荐</div></a>

			</div>
		</div>


	
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <link rel="stylesheet" href="../css/pub_mod.css">
	    <link rel="stylesheet" type="text/css" href="../css/index.css">
	    <link rel="stylesheet" type="text/css" href="../css/package.css">
	    <link rel="stylesheet" type="text/css" href="../css/toparea.css">
        <link rel="stylesheet" type="text/css" href="../css/gonglue-center.css">				
		<link rel="stylesheet" type="text/css" href="../css/ind-filter.css">
		<link rel="stylesheet" type="text/css" href="../css/trip.css">
        <script type="text/javascript" src="../js/ind-filter.js"></script>

	
	
<div class="content">
	<!--顶部出游提示-->
	<div class="top_tip">
<!--		<strong>主题推荐：</strong>自驾、蜜月、亲子、踏青、赏花、漂流、温泉等各式主题旅游推荐，总有一款主题让您满意……-->
        <div class="search_wrapper clearfix">
            <div class="filter_innerbox">
                <div id="J_FilterItems" class="pkg_filter_item clearfix">
                	                    <dl>

	                    <dd class="pkg_filter_properties J_properties01">

	                        <div class="pkg_filter_others">
	                            <div class="fenlei01 all_02">
									<a href="{{URL('home/themes')}}" rel="nofollow" class="a1 ">权威</a>
									<a href="{{URL('home/freshs')}}" rel="nofollow" class="a1 ">尝鲜</a>     		                        
                                	<a href="{{URL('home/shutter')}}" rel="nofollow" class="a1 ">快门</a>     		                        
									<a href="{{URL('home/cate')}}" rel="nofollow" class="a1 ">美食</a>     		                        
									<a href="{{URL('home/shopping')}}" rel="nofollow" class="a1 ">购物</a>     		                        
                                	<a href="{{URL('home/literature')}}" rel="nofollow" class="a1 ">文艺</a>     		                     			    		                                                        	                                </div>
		                    </div>	   		                                       
			                	
	                    </dd>
	                </dl>
	                                                                            
                </div>
            </div>
        </div>
	</div>
	<!--chujing content-->
	<!--theme content s-->
	<div class="thcontent clearfix">
	
	<div class="w1030">
		@foreach($data['data'] as $esson)
		<div class="square themebg">	 
			<span class="sprite sprite1"></span>
			<a class="pic imgbox" href="{{URL('home/details')}}?sid={{$esson->tt_id}}" > 
			<img style="display: inline;" height="200" src="{{$esson -> t_img}}" />
			</a> <a href="{{URL('home/details')}}?id={{$esson->tt_id}}"  class="lh40" title="{{$esson -> t_title}}">{{$esson -> t_title}}</a>
		</div> 
		@endforeach

    </div>
	</div>
	
	
	<!-- 分页start -->
	<div class="pagination">
		<div class="page-bottom">
			<a rel="nofollow" href="">一共{{$data['mexpage']}}</a>
			<a rel="nofollow" href="">第{{$data['page']}}</a>
			<a rel="nofollow" href="{{$data['url']}}?page=1">首页</a>
			<a rel="nofollow" href="{{$data['url']}}?page={{$data['page']-1}}">上一页</a>
			<a rel="nofollow" href="{{$data['url']}}?page={{$data['page']+1}}">下一页</a>
			<a rel="nofollow" href="{{$data['url']}}?page={{$data['mexpage']}}">末页</a>
		</div>
	</div>
	<!-- 分页end -->
</div>

</div>
<!--start foot-->
<!-- siteMap S -->
<link rel="stylesheet" type="text/css" href="../css/common_foot_v3.css"> <div class="trav_sev">
        
    </div><!-- siteMap E -->
<!-- three sun S -->
<div class="three_trav">
    <div class="thr_trav">
        <a href="http://www.tuniu.com/static/sunshine_ensure/" target="_blank" style="display:block;width:100%;height:100%;">
            <em class="tn_text" id="service_phone_head_text">客户服务电话（免长途费）</em>
            <em class="tn_phone" id="service_phone_head_phone">4007-999-999</em>
        </a>
    </div>
</div>
<!-- three sun E -->

   



<!-- search_inputBox end -->
@include('home/common/footer')</body></html>