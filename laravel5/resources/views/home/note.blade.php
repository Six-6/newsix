<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html class="ie8"><![endif]-->
<!--[if IE 9 ]><html class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html><!--<![endif]--><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>游记</title>
    <meta content="游记,旅游游记,游记攻略,自助游游记" name="keywords">
    <meta content="途牛游记频道,最佳的自助游游记攻略,靠谱的旅游游记,海量的旅游行程美图,在途牛驴友中秀出你的风采,分享您在旅游过程中的点点滴滴.尽在途牛旅游网(Tuniu.com)游记频道" name="description">
    <link rel="stylesheet" type="text/css" href="../css/foot.css">
    <script src="../js/ga.js" async="" type="text/javascript"></script><script type="text/javascript">
        var analyTuniuBeginTime=(new Date()).getTime();
    </script>
    <style type="text/css">
        .logo span { float:left; width:163px; height:55px; margin:5px 0 0 0;}
    </style>
    <meta name="csrf-param" content="_csrf">
    <meta name="csrf-token" content="UWRpZldlYUI9UywCLVNXDAsVGA4TEyx0OQ4zF2MAOHMDKBMTEgwLFg==">
<link href="../css/mask.css" rel="stylesheet" type="text/css"><link id="rightCommonCss" rel="stylesheet" type="text/css" href="../css/right_common.css"></head>
<body>

<link rel="stylesheet" href="../css/index_nav_menu.css">
<link rel="stylesheet" type="text/css" href="../css/TN_date.css">
<script type="text/javascript" src="../js/search_ajax.js">
</script><link href="../css/head_nav_new.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
function selectTag(showContent,selfObj){ var tag = document.getElementById("tags").getElementsByTagName("li"); var taglength = tag.length; for(i=0; i<taglength; i++){ tag[i].className = ""; } selfObj.parentNode.className = "selectTag"; for(i=1; j=document.getElementById("tagContent"+i); i++){ j.style.display = "none"; } document.getElementById(showContent).style.display = "block";}var startCity = document.getElementById("startCity");if(startCity){ startCity.onmouseover = function(){ startCity.className = "head_start_city change_tab"; }; startCity.onmouseout = function(){ startCity.className = "head_start_city"; };}function getCookie(objName){ var arrStr = document.cookie.split("; "); for(var i = 0;i < arrStr.length;i ++){ var temp = arrStr[i].split("="); if(temp[0] == objName) return unescape(temp[1]); } return false;}var tuniuPPhoneDiv = document.getElementById("tuniu_400_num_phone");var tuniuPPhoneNumber = getCookie("p_phone_400");if (tuniuPPhoneDiv) { if (tuniuPPhoneNumber) { tuniuPPhoneDiv.innerHTML = tuniuPPhoneNumber; } else { tuniuPPhoneDiv.innerHTML = "4007-999-999"; }}$(function($) { var sub = $("#keyword-input-sub").val(); if(sub && sub != ''){ $("#keyword-input").val(sub); }});</script><!-- 页面类型 -->
<input name="page_type" id="page_type" value="130000" type="hidden">


<link rel="stylesheet" type="text/css" href="../css/slides.css" media="screen">
<link rel="stylesheet" type="text/css" href="../css/yj_2016.css">
<link rel="stylesheet" href="../css/pub_mod.css">
<div class="top_area">
            <div class="wrap clearfix" style="background:#fff;">
                @include('home/common/top')
				
            </div>
        </div> 
<!-- 游记新版轮播 start -->
<div id="full-screen-slider" class="head">

	    <!-- 游记banner 大图 start -->
    <ul id="slides">
			@foreach ($data['carousel'] as $error1)
			<li style="background: transparent url(&quot;{{$error1['t_img']}} &quot;) no-repeat scroll center top; z-index: 900; "><a href="{{URL('home/details')}}?id={{$error1['tt_id']}}"  rel="nofollow"></a></li>
			@endforeach	
	</ul>
			
    <!-- 游记banner 大图 end -->
    <div class="slide-center">
        <!-- 游记banner 小图 start -->
        <ul style="margin-left: 341px;" id="pagination">
			@foreach ($data['carousel'] as $error2)
        	<li class="">
                <div style="display: block;" class="slide-bg"></div>
                <a href="javascript:void(0)">
				<img width="220" height="152" src="{{$error2['t_img']}}">				
				</a>
            </li>
			@endforeach	
    		        </ul>
        <!-- 游记banner 小图 end -->
        <!-- 游记作者描述 start -->
        <ul id="description">
			@foreach ($data['carousel'] as $error3)
        	<li style="display: none; z-index: 900;">
                <a href="{{URL('home/details')}}?id={{$error3['tt_id']}}">
                    <div class="yj-name">{{$error3['t_title']}}</div>
                </a>
                <a href="{{URL('home/details')}}?id={{$error3['tt_id']}}">
                    <div class="auther-show">
                        <img src="{{$error3['path']}}" alt="">
                        <div class="auther-name">{{$error3['name']}}</div>
                    </div>
                </a>
            </li>
			@endforeach	
    		        </ul>
        <!-- 游记作者描述 end -->
    </div>
  
    <script src="../js/jquery.1.12.js"></script>
    <script>
        $(function(){
            $('#search_btn').click(function(){
                var token = $('#token').val();
                var search = $('#search').val();
            
               $.ajax({
                    url:"{{URL('home/search')}}",
                    type:"POST",
                    data:{
                        token:token,
                        search:search
                    },
               })
            })
        })
    </script>
    <!-- 游记搜索框 end -->
</div><!-- 游记新版轮播 end -->
<!-- 游记内容 start -->
<div class="yj-content">
    <!-- 左侧内容 start-->
    <div class="yj-left-show">
    	
<!-- 广告位  -->
    <a href="" class="yj-left-show"  rel="nofollow">
        <img src="../image/Cii-TFfPij-IRbuzAAEzXSfoIwsAACJHAP60W8AATN195_w800_h0_c0_t0.jpg" alt="游记首页banner1【PC】">
    </a>
        <div class="yj-left-top">
            <!-- 游记tab start-->
            <ul class="yj-tab">
                <li><a href="{{URL('home/note')}}">推荐游记</a></li>   
                <li><a href="{{URL('home/lnews')}}">最新发布</a></li>
            </ul>
            <div class="content-title-right">
                <a class="my-note" href="{{URL('home/mysit')}}"  rel="nofollow">
                    <span></span>
                    <em>我的游记</em>
                </a>
                <a class="write-note" href="{{URL('home/publishs')}}"  rel="nofollow">
                    <span></span>
                    <em>发表游记</em>
                </a>
            </div>
        </div>
        <!-- 游记tab end-->
        
<!-- 游记列表 start-->
        <div class="yj-list-show">
            <div style="display: none;" class="commen-loadding">
				
			</div>
            <ul style="display: block;" class="yj-list">
				@foreach ($data['refined'] as $error4)
    			<li>
                    <a class="list-img" href="{{URL('home/details')}}?id={{$error4 ->tt_id}}"  rel="nofollow">
                        <img src="{{$error4->t_img}}" alt="">
                        <div class="list-recommend gl-jh"></div>
                    </a>
                    <div class="list-show">
                        <a href="{{URL('home/details')}}?id={{$error4 ->tt_id}}"  rel="nofollow">
                            <div class="list-name">{{$error4->t_title}}</div>
                            <div class="list-des">{{$error4->s_desc}}</div>
                        </a>
                        <div class="list-auther">
                            <div class="list-auther-left">
                            <a href="{{URL('home/details')}}?id={{$error4 ->tt_id}}">
                                <img src="{{$error4->path}}" alt="">
                                <div class="list-auther-name">{{$error4->name}}</div>
                            </a>
                                <div class="list-scan"><i></i>{{$error4->t_browse}}&nbsp;</div>
                                <div class="list-comment"><i></i>{{$error4->t_commentint}}&nbsp;</div>
                            </div>
                            
                                <div class="list-auther-right ding_yes" id="dingAjax" data-id="10106094">
                                <i></i>
								<span>{{$error4->t_zambia}}</span>
                                </div>
                        </div>
                    </div>
                </li>
				@endforeach
            </ul>
    		<ul class="yj-list"></ul>
            <ul class="yj-list"></ul>
            <ul class="yj-list"></ul>
                    </div>
        <!-- 游记列表 end-->
        <!-- 分页 -->
        <div data-curpage="1" data-pager-inited="true" class="pager pagination" data-init="pager" style="display: block;">
		<div class="page-bottom">		
		<a rel="nofollow"  href="javascript:void(0)" data-page="">共{{$data['mexpage']}}页</a>
		<a rel="nofollow"  href="javascript:void(0)" data-page="">第{{$data['page']}}页</a>
		<a rel="nofollow" class="page" href="{{URL('home/note')}}?page=1" pid="1" data-page="">首页</a>
		<a rel="nofollow" class="page" href="{{URL('home/note')}}?page={{$data['page']-1}}" pid="{{$data['page']-1}}">上一页</a>		
		<a rel="nofollow" class="page" href="{{URL('home/note')}}?page={{$data['page']+1}}" pid="{{$data['page']+1}}">下一页</a>
		<a rel="nofollow" class="page" href="{{URL('home/note')}}?page={{$data['mexpage']}}" pid="{{$data['mexpage']}}">尾页</a>
		</div>
		</div>
        <div class="pager pagination" data-init="pager" style="display:none"></div>
        <div class="pager pagination" data-init="pager" style="display:none"></div>
        <div class="pager pagination" data-init="pager" style="display:none"></div>
		        <!-- 交互数据 -->
    
</div>
    <!-- 左侧内容 end-->
    <!-- 右侧内容 start-->
<!--     <div class="yj-right-show">
		<div class="right-traverler">
    <div class="right-commen-tit">
        <p class="right-tit">大玩家</p>
        <a href="http://www.tuniu.com/traveler" class="right-more"  rel="nofollow">更多&nbsp;&gt;</a>
    </div>
    <div class="traverler-auther">
        <div class="traverler-img">
            <div class="traverler-sex  sex-men"></div>
            <a href="http://www.tuniu.com/person/AA9C5314291E4783C30A743717A49B4A"  rel="nofollow"><img src="../image/Cii-T1fNC3iIda7IADShmFy-wBoAACEVgBXhkgANKGw952_w90_h90_c1_t0.jpg" alt="" class="traverler-title-img"></a>
        </div>
        <div class="traverler-name">贱公子</div>
        <div class="traverler-des">大玩家，曾进义工旅行一年，爱摄影
一流的丽江混混，半吊子户外领队，三流的摄影师还是个不入流的旅行作家。对，我的生活，我的兴趣从2010年起就如同旅行和摄影是我每天的日常生活</div>
        <ul class="traverler-label">
                            	                		<li>摄影</li>
                	                            	                		<li>写攻略</li>
                	                            	                		<li>制定线路</li>
                	                            	                    </ul>
        <a href="http://www.tuniu.com/traveler/recruit/" class="master-btn" >申请大玩家</a>
    </div>
</div>       
		  
 <div class="right-commen-tit">
        <p class="right-tit">当前活动</p>
    </div>
    <ul class="activity-list">
       
               <li>
            <a href="{{URL('home/publishs')}}"  rel="nofollow">
                <div class="activity-img" style="background-image:url(http://m.tuniucdn.com/fb2/t1/G2/M00/26/06/Cii-T1e6_nCIDMvoAAAGNPLmob8AAAvHwP_-bQAAAZM836.png) "></div>
                <div class="activity-show">
                    <div class="activity-name">游记征文</div>
                    <div class="activity-des">写游记，赢千元大奖！</div>
                </div>
            </a>
        </li>   
                
            </ul>
  				
     
    </div> -->
    <!-- 右侧内容 end-->
</div>
<!-- 游记内容 end -->

<script type="text/javascript" src="../js/jquery-1.js"></script>
<script type="text/javascript" src="../js/template.js"></script>
<script type="text/javascript" src="../js/slides.js"></script>



<!--start foot-->
<!-- siteMap S -->
<link rel="stylesheet" type="text/css" href="../css/common_foot_v3.css"> 
<!-- three sun S -->
@include('home/common/footer')
</body></html>