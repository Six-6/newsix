<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<script src="../js/ga.js" async="" type="text/javascript"></script>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../css/indicator.css">
<link rel="stylesheet" type="text/css" href="../css/gonglue_channel.css">
<link rel="stylesheet" type="text/css" href="../css/jquery.css">
<link rel="stylesheet" type="text/css" href="../css/top.css">
<title>排行榜</title>
<meta content="线路排行榜,旅游排行榜, 途牛风向标, 定制排行榜" name="keywords">
<meta content="途牛旅游排行榜撷取当季最热旅游目的地,为您推荐出境长线排行榜,出境短线排行榜,国内线路排行榜,周边排行榜;让您在准备旅行时了解旅游风向,有备而行." name="description">
<link href="../css/reset.css" rel="stylesheet" type="text/css">
<script src="../js/jquery-1.js" type="text/javascript"></script>
<script src="../js/base64.js" type="text/javascript"></script>
<script src="../js/share.js"></script><link href="../css/mask.css" rel="stylesheet" type="text/css"><link href="../css/share_style0_16.css" rel="stylesheet"><link id="rightCommonCss" rel="stylesheet" type="text/css" href="../css/right_common.css"></head>
<body>
<script type="text/javascript" src="../js/in-min.js"></script>
<script type="text/javascript" src="../js/header_v2.js"></script>
<script type="text/javascript" src="../js/getDegree.js"></script>
<script type="text/javascript" src="../js/screen_size.js"></script>
<link rel="stylesheet" href="../css/index_nav_menu.css">
<link rel="stylesheet" type="text/css" href="../css/TN_date.css">
<script type="text/javascript" src="../js/search_ajax.js"></script>
<link href="../css/head_nav_new.css" rel="stylesheet" type="text/css">
<script type="text/javascript">function selectTag(showContent,selfObj){ var tag = document.getElementById("tags").getElementsByTagName("li"); var taglength = tag.length; for(i=0; i<taglength; i++){ tag[i].className = ""; } selfObj.parentNode.className = "selectTag"; for(i=1; j=document.getElementById("tagContent"+i); i++){ j.style.display = "none"; } document.getElementById(showContent).style.display = "block";}var startCity = document.getElementById("startCity");if(startCity){ startCity.onmouseover = function(){ startCity.className = "head_start_city change_tab"; }; startCity.onmouseout = function(){ startCity.className = "head_start_city"; };}function getCookie(objName){ var arrStr = document.cookie.split("; "); for(var i = 0;i < arrStr.length;i ++){ var temp = arrStr[i].split("="); if(temp[0] == objName) return unescape(temp[1]); } return false;}var tuniuPPhoneDiv = document.getElementById("tuniu_400_num_phone");var tuniuPPhoneNumber = getCookie("p_phone_400");if (tuniuPPhoneDiv) { if (tuniuPPhoneNumber) { tuniuPPhoneDiv.innerHTML = tuniuPPhoneNumber; } else { tuniuPPhoneDiv.innerHTML = "4007-999-999"; }}$(function($) { var sub = $("#keyword-input-sub").val(); if(sub && sub != ''){ $("#keyword-input").val(sub); }});</script><!-- 页面类型 -->
<input name="page_type" id="page_type" value="130000" type="hidden">


        <div class="top_area">
            <div class="wrap clearfix" style="background:#fff;">
                @include('includes.rankLogin')
            </div>
        </div>
<div class="wrapmain">
		<div class="nav-ind">
			<div class="navbar">
				<div class="indlogo"></div>
				<a href="{{URL('home/siterecommend')}}" class="indsep" id="shouye"><div class="shouye">首页</div></a>

                <a href="{{URL('home/ranking')}}" class="indsep selected" id="list"><div class="list">排行榜</div></a>
                                
				
				<a href="{{URL('home/themes')}}" class="indsep" id="theme"><div class="theme">主题推荐</div></a>
				
			</div>
		</div>
<div class="main">


<div class="top_ad">
    <a href="{{URL('/')}}}}" title="排行榜首页顶部广告" ><img src="../home/images/65464654.jpg"></a>
</div>

<div class="top_tips">
Tips: 以下线路，均根据销量进行排名，相信大家的眼光吧！
</div>


<dl class="top_summary chuchang">
<dt>出境长线<span class="top_res icon_top"></span>前五</dt>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="">马尔代夫度假榜</a></h5>                 
		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
        @foreach($data['Maldives'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1->s_id}}" >&lt;{{$error1->s_name}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1->s_id}}" >&lt;{{$error1->s_name}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
				</li>
			@endif
		@endforeach	
	</ul>

</dd>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="">欧洲文艺都市榜</a></h5>

			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">           
            @foreach($data['literature'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1->s_id}}" >&lt;{{$error1->s_name}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1->s_id}}" >&lt;{{$error1->s_name}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
				</li>
			@endif
		@endforeach	
	</ul>
	
</dd>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="">复联二热血之旅榜</a></h5>

                  

			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
        @foreach($data['Blood'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1->s_id}}" >&lt;{{$error1->s_name}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1->s_id}}" >&lt;{{$error1->s_name}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
				</li>
			@endif
		@endforeach	
	</ul>

</dd>


</dl><dl class="top_summary chuduan">



<dt>国内线路<span class="top_res icon_top"></span>前五</dt>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="">全国最热景点榜</a></h5>

                      
			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
        @foreach($data['nationwide'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1['s_id']}}" >&lt;{{$error1['s_name']}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1['s_sprice']}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1['s_id']}}" >&lt;{{$error1['s_name']}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1['s_sprice']}}</div>
				</li>
			@endif
		@endforeach
	</ul>

</dd>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="">全国最美古镇榜</a></h5>


			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
        @foreach($data['Town'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1['s_id']}}" >&lt;{{$error1['s_name']}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1['s_sprice']}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1['s_id']}}" >&lt;{{$error1['s_name']}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1['s_sprice']}}</div>
				</li>
			@endif
		@endforeach
	</ul>

</dd>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="http://top.tuniu.com/line/detail-28-0-0/">跑男文化之旅榜</a></h5>

                        

			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
        @foreach($data['culture'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
				</li>
			@endif
		@endforeach	
	</ul>

</dd>


</dl><dl class="top_summary zhoubian">
<dt>周边<span class="top_res icon_top"></span>前五</dt>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>
		<div class="col2">
			<h5><a href="http://top.tuniu.com/line/detail-86-0-0/">一日游榜单</a></h5>

                      

			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
        @foreach($data['oneday'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
				</li>
			@endif
		@endforeach

            

	</ul>

</dd>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="">二日游榜单</a></h5>

			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
            
        @foreach($data['twoday'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
				</li>
			@endif
		@endforeach

            

	</ul>

</dd>


<dd>
	<div class="top_type">
		<div class="col1">
                    <a href="" title="" ><img style="display: block;" src="../home/images/top_default_1.jpg" data-src="http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg" onerror="this.src='http://img.tuniucdn.com/img/20150518/indicator/top_default_1.jpg'"></a>
		</div>

		<div class="col2">
			<h5><a href="http://top.tuniu.com/line/detail-88-0-0/">三日游榜单</a></h5>

                     
			

		</div>

                <div style="clear: both;"></div>
	</div>
	<ul class="top_list2">
            
        @foreach($data['threeday'] as $key => $error1) 
			@if($key+1 < 4)
            <li class="list_item2">				
                <div class="item_num">{{$key+1}}</div>
                <a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
                <div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
			</li>
			@else
				 <li class="list_item2 grey">
					<div class="item_num">{{$key+1}}</div>
					<a href="{{URL('home/scenicDetails')}}?sid={{$error1 ->s_id}}" >&lt;{{$error1->s_name}}</a>
					<div class="item_price"><span class="sign">￥</span>{{$error1->s_sprice}}</div>
				</li>
			@endif
		@endforeach
            

	</ul>

</dd>


</dl>

</div>



<!--start foot-->
<!-- siteMap S -->
<link rel="stylesheet" type="text/css" href="../css/common_foot_v3.css"> <div class="trav_sev">
 
<div class="three_trav">
    <div class="thr_trav">
        <a href="http://www.tuniu.com/static/sunshine_ensure/"  style="display:block;width:100%;height:100%;">
            <em class="tn_text" id="service_phone_head_text">客户服务电话（免长途费）</em>
            <em class="tn_phone" id="service_phone_head_phone">4007-999-999</em>
        </a>
    </div>
</div>
</body>@include('includes.foot')</html>