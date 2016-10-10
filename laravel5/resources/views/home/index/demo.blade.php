<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>旅游攻略,自由行,自助游攻略,旅游社交分享网站 - 惠玩</title>
    <meta name="keywords" content="自由行,旅游攻略,自助游">
    <meta name="description" content="惠玩!靠谱的旅游攻略,最佳的自由行,自助游分享社区,海量旅游景点图片、游记、交通、美食、购物等自由行旅游攻略信息,惠玩旅游网获取自由行,自助游攻略信息更全面">
    <meta name="author" content="惠玩">
    <meta property="qc:admins" content="1571256654651656777636">
    <link rel="stylesheet" href="homepage/style_003.css">
    <link rel="stylesheet" href="homepage/index.css">
    <link href="./homepage/site.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" async="" charset="utf-8"
            src="./index/core.php"></script>
    <script type="text/javascript" async="" charset="utf-8"
            src="./index/c.php"></script>
    <script src="./index/jq.js"></script>
    <script>
        /**
         * @查询替换
         * @param  {[type]} showsjd [根据showsjd查询出当前地区下的景点]
         * @return {[type]}         [description]
         */
        function showsjd(showsjd,fid){
            var ass='';
            $.ajax({
                type: "get",
                url: "{{URL('home/scenic')}}",
                data: "showsjd="+showsjd,
                success: function(ms){
                    ass+="<ul class='clearfix'>"
                    for (var i = 0; i < ms.length; i++) {
                        ass+="<li class='lineitem cfix'>"
                        ass+="<div class='img fn-left'>"
                        ass+="<a href='"+ms[i]['s_id']+"' target='_blank' title='"+ms[i]['s_name']+"'>"
                        ass+="<img width='118px' height='67px' data-original='./images/"+ms[i]['s_img']+"' src='./images/"+ms[i]['s_img']+"' alt='景点图' style='display: inline;'>"
                        ass+="</a>"
                        ass+="<div class='prd-num'>产品编号："+ms[i]['s_id']+"</div>"
                        ass+="</div>"
                        ass+="<dl class='info fn-left'>"
                        ass+="<dt class='t'>"
                        ass+="<a href='{{URL("home/scenicDetails")}}?sid="+ms[i]['s_id']+"' target='_blank' title='"+ms[i]['s_name']+"'>"+ms[i]['s_name']+"</a><img src='./homepage/tuijian.gif'>"
                        ass+="</dt>"
                        ass+="<dd class='desc'> "+ms[i]['s_characteristic']+"</dd>"
                        ass+="<dd class='moredesc'>"
                        ass+="<span>目的地：<span class='n'>"+ms[i]['r_region']+"</span></span>"
                        ass+="<span class='pin'><span class='n'>&nbsp;"+ms[i]['r_hot']+"&nbsp;</span>人点评</span>"
                        ass+="<span>旅游交通方式：<span class='n'>"+ms[i]['s_traffic']+"</span></span>"
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
                    $("#tihuan"+fid).html(ass);
                }
            },'json');

        }

        function yis(yid){
            var over=$("#div2_"+yid);
            over.css("color","red");
        }
        function yic(yid){
            var out=$("#div2_"+yid);
            out.css("color","#999999");
        }
        /**
         * @根据地区查询景点
         * @param  {[type]} rid []
         */
        function inClassId(rid){
            location.href="./regionid?rid="+rid;
        }
        function inClassId2(rid){
            location.href="./regionid?rid="+rid;
        }
        function smallClassId(rid){
            location.href="./regionid?rid="+rid;
        }
        function inClassId3(rid){
            location.href="./regionid?rid="+rid;
        }
        function smallClassId3(rid){
            location.href="./regionid?rid="+rid;
        }

    </script>
    <script type="text/javascript">
        window.Env = {
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "UID": 51100629,
            "CSTK": "4129c8526d96fea2fa4d6eac63c1cc14_2bba3c0556b7f3e12b08ce440797935f"
        };
    </script>

    <link href="./index/cssbasecssjquery.css"
          rel="stylesheet" type="text/css">

    <link href="./index/cssmfw-index.css"
          rel="stylesheet" type="text/css">


    <script language="javascript"
            src="./index/jsjquery-1.js"
            type="text/javascript"></script>

    <script async=""
            src="./index/jsDropdownjsjquery.js"></script>
</head>
<body style="position: relative;">


<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="惠玩自由行" style="cursor: pointer"></a></div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index head-nav-active" data-cs-p="index"><a href="">首页</a>
                </li>
                <li class="head-nav-place" data-cs-p="mdd"><a href="" title="周边游">周边游</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve"><a href="domestic" title="国内游">国内游</a>
                </li>
                <li class="head-nav-sales head-nav-dropdown _j_sales_nav_show" id="_j_nav_sales" data-cs-p="sales">
                    <a class="drop-toggle"
                       style="cursor: pointer;display: block;border-bottom:0 none;" data-sales-nav="惠玩商城">
                        <span>惠玩商城<i class="icon-caret-down"></i></span>
                    </a>

                    <div class="dropdown-menu dropdown-sales hide _j_sales_top" id="_j_sales_panel"
                         data-cs-t="sales_nav">
                        <ul>
                            <li><a target="_blank" href="siterecommend" data-sales-nav="">风向标<i
                                            class="i-hot">hot</i></a></li>
                            <li><a target="_blank" href="note" data-sales-nav="随笔">随笔<i
                                            class="i-new">new</i></a></li>
                        </ul>
                    </div>
                </li>
                <li class="head-nav-community head-nav-dropdown _j_shequ_nav_show" id="_j_nav_community" data-cs-p="community">
                    <div class="drop-toggle"><span>社区<i class="icon-caret-down"></i></span></div>
                    <!-- 社区下拉面板 begin -->
                    <div class="dropdown-panel dropdown-community hide _j_shequ_top no-image" id="_j_community_panel" data-cs-t="community_nav">
                        <div class="panel-wrapper">
                            <ul class="nav-list clearfix">
                                <li class="h"><a href="exchangeShow" target="_blank" title="惠玩兑换" data-cs-p="wenda">惠玩兑换<i class="i-hot">hot</i></a></li>
                                <li><a href="funShow" target="_blank" title="结伴" data-cs-p="things">结伴<i class="i-new">new</i></a></li>
                                 </ul>
                            <ul class="nav-list-sub clearfix">
                                <li><a href="exchangeShow" target="_blank" title="道具商店" data-cs-p="virtual">道具商店</a></li>
                                <li><a href="funShow" target="_blank" title="活动展示" data-cs-p="rudder">活动展示</a></li>
                                <li><a href="funPost" target="_blank" title="活动发起" data-cs-p="group">活动发起</a></li>

                            </ul>
                        </div>

                    </div>
                    <!-- 社区下拉面板 end -->
                </li> <li class="head-nav-app" data-cs-p="app"><a href="http://www.mafengwo.cn/app/intro/gonglve.php"
                                                            title="APP">APP</a></li>


            </ul>
            <div class="head-search">
                <div class="head-search-wrapper">
                    <div class="head-searchform">
                        <input name="q" id="_j_head_search_input" autocomplete="off" type="text">
                        <a role="button" href="javascript:" class="icon-search" id="_j_head_search_link"></a>
                    </div>
                </div>
            </div>
            @if(empty(Session::get("name")))
                <div class="login-out">
                    <a class="weibo-login" href="https://passport.mafengwo.cn/weibo" title="微博登录" rel="nofollow"></a>
                    <a class="qq-login" href="https://passport.mafengwo.cn/qq" title="QQ登录" rel="nofollow"></a>
                    <a class="weixin-login" href="https://passport.mafengwo.cn/wechat" title="微信登录" rel="nofollow"></a>
                    <a id="_j_showlogin" title="登录蚂蜂窝" href="{{URL("blo")}}" rel="nofollow">登录</a>
                    <span class="split">|</span>
                    <a href="{{URL("register")}}" title="注册帐号" rel="nofollow">注册</a>
                </div>
            @else
                <div class="login-info">
                    <div class="head-user" id="_j_head_user">
                        <a class="drop-trigger" href="http://www.mafengwo.cn/u/51100629.html" title="summer_余生i💋的窝" rel="nofollow">
                            <div class="user-image"><img src="http://images.mafengwo.net/images/pp32.gif" height="32" width="32" alt="summer_余生i💋的窝"></div>
                            <i class="icon-caret-down"></i>
                        </a>
                    </div>

                </div>
        </div>
        <div class="dropdown-group">
            <!-- 消息下拉菜单 begin -->
            <div class="dropdown-menu dropdown-msg hide" id="_j_msg_panel" style="z-index:10;">
                <ul>

                    <li><a href="http://www.mafengwo.cn/msg/sms/index" target="_blank" rel="nofollow">私信</a></li>
                    <li><a href="http://www.mafengwo.cn/msg/entry/article" target="_blank" rel="nofollow">文章消息</a></li>
                    <li><a href="http://www.mafengwo.cn/msg/entry/sys" target="_blank" rel="nofollow">系统通知</a></li>
                    <li><a href="http://www.mafengwo.cn/msg/entry/ask" target="_blank" rel="nofollow">问答消息</a></li>

                </ul>
            </div>
            <div class="dropdown-menu dropdown-msg hide" id="_j_msg_float_panel">
                <ul></ul>
                <a href="javascript:" class="close-newmsg">×</a>
            </div>
            <!-- 消息下拉菜单 end -->
            <!-- 用户下拉菜单 begin -->
            <div class="dropdown-menu dropdown-user hide" id="_j_user_panel" data-cs-t="user_nav">
                <div class="user-info">
                    <a class="coin" href="{{URL('home/uhome')}}" target="_blank" id="head-my-coin" rel="nofollow" data-cs-p="coin">{{Session::get('name')}}</a> / 
                    <a class="coin" href="{{URL('home/integralAdd')}}" target="_blank" id="head-my-coin" rel="nofollow" data-cs-p="coin">金币 0</a>
                </div>
                <ul>
                    <li><a href="{{URL('home/uhome')}}" target="_blank" title="我的蚂蜂窝" rel="nofollow" data-cs-p="wo"><i class="icon-wo"></i>我的蚂蜂窝<span class="level">LV.1</span> </a></li>
                    <li><a href="{{URL('home/publishs')}}" target="_blank" class="drop-write" title="写游记" rel="nofollow" data-cs-p="writenotes"><i class="icon-writenotes"></i>写游记</a></li>
                    <li><a href="{{URL('home/userCollection')}}" title="我的收藏" target="_blank" rel="nofollow" data-cs-p="collect"><i class="icon-collect"></i>我的收藏</a></li>
                    <li><a href="{{URL('home/userOrderDetails')}}" title="我的订单" target="_blank" rel="nofollow" data-cs-p="order"><i class="icon-order"></i>我的订单</a></li>
                    <li><a href="personDel" title="退出登录" rel="nofollow"><i class="icon-logout" data-cs-p="logout"></i>退出</a></li>
                </ul>
            </div>
            @endif
        </div>

        <div class="shadow"></div>
    </div>


    
    <script>
        //判断是否显示 下拉bar
        ;
        (function () {
            window.showBarFlag = true;
            var realPathName = location.pathname;
            var regExp = /localdeals|sales|insurance|activity/gi;
            var pathArr = realPathName.match(regExp);
            if (window.Env.flag == 'gonglue_campaign') {
                $('.dropdown-bar').hide();
                return;
            }
            if (realPathName == '/sales/0-0-0-5-0-0-0-0.html' || window.Env.salesType == 5) {
                $('.ul-dropdown-bar > li:eq(4)').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType == 21) {
                $('.ul-dropdown-bar > li:eq(3)').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4) {
                $('.ul-dropdown-bar > li:eq(2)').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.salesType) {
                switch (window.Env.salesType | 0) {
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
                if (pathArr) {
                    if (pathArr.length == 1 && pathArr[0] != 'activity') {
                        switch (pathArr[0]) {
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
                    } else {
                        if ('activity'.indexOf(pathArr) != -1) {
                            window.showBarFlag = true;
                            $('.dropdown-bar').hide();
                        }
                    }
                }
            }
            // 点击时触发
            $('.ul-dropdown-bar > li').on('click', function () {
                $(this).addClass('on').siblings().removeClass('on');
            });
        })();

    </script>

</div>


<div class="mfw-focus" id="_j_mfw_focus">
    <div class="show-slider" id="_j_top_pic_container" style="height: 450px;">
        <ul class="show-image">
            <li class="first" style="display: none;">
                <a href="http://www.mafengwo.cn/i/5693228.html" target="_blank" class="show-pic"><img
                            src="./index/wKgBs1fiUE2AeG7OAAZ0JOjru5U05.jpg"></a>
                <a href="http://www.mafengwo.cn/i/5693228.html" target="_blank" class="show-title dark">
                    <div class="date">
                        <span class="day">26</span>/Sep.2016
                    </div>
                    <h3>西北｜丝路遗韵大漠风尘，河西走廊大环线</h3>
                </a>

                <p class="show-info">图片来自于<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/31808.html"
                                target="_blank">西北</a></font>，此目的地共收藏了<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/photo/mdd/31808.html" target="_blank"
                                rel="nofollow">720556</a></font>张<a
                            href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/31808.html" target="_blank">西北</a>图片。本片由<font
                            color="#FF9900"><a href="http://www.mafengwo.cn/u/5350202.html"
                                               target="_blank">红小兔Summer</a></font>荣誉出品！</p>
            </li>
            <li style="display: none;">
                <a href="http://www.mafengwo.cn/i/5663912.html" target="_blank" class="show-pic"><img
                            src="./index/wKgBs1fiT3iAMVFPAAe0U8G9kUk76.jpg"></a>
                <a href="http://www.mafengwo.cn/i/5663912.html" target="_blank" class="show-title dark">
                    <div class="date">
                        <span class="day">25</span>/Sep.2016
                    </div>
                    <h3>北海道的夏日初体验——15日辞职之旅</h3>
                </a>

                <p class="show-info">图片来自于<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10746.html"
                                target="_blank">北海道</a></font>，此目的地共收藏了<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/photo/mdd/10746.html" target="_blank"
                                rel="nofollow">450258</a></font>张<a
                            href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10746.html" target="_blank">北海道</a>图片。本片由<font
                            color="#FF9900"><a href="http://www.mafengwo.cn/u/42512967.html"
                                               target="_blank">小友子</a></font>荣誉出品！</p>
            </li>
            <li style="display: none;">
                <a href="http://www.mafengwo.cn/i/5641313.html" target="_blank" class="show-pic"><img
                            src="./index/wKgBs1fiTxSAfjuDAAe5paTVBSw31.jpg"></a>
                <a href="http://www.mafengwo.cn/i/5641313.html" target="_blank" class="show-title dark">
                    <div class="date">
                        <span class="day">24</span>/Sep.2016
                    </div>
                    <h3>九月末十月初，在济州岛</h3>
                </a>

                <p class="show-info">图片来自于<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/11030.html"
                                target="_blank">济州岛</a></font>，此目的地共收藏了<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/photo/mdd/11030.html" target="_blank"
                                rel="nofollow">476611</a></font>张<a
                            href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/11030.html" target="_blank">济州岛</a>图片。本片由<font
                            color="#FF9900"><a href="http://www.mafengwo.cn/u/84784159.html"
                                               target="_blank">govil</a></font>荣誉出品！</p>
            </li>
            <li style="display: list-item;">
                <a href="http://www.mafengwo.cn/i/5707067.html" target="_blank" class="show-pic"><img
                            src="./index/wKgBs1fjaZOAXx7ZAAd9l5fQeeU24.jpg"></a>
                <a href="http://www.mafengwo.cn/i/5707067.html" target="_blank" class="show-title dark">
                    <div class="date">
                        <span class="day">23</span>/Sep.2016
                    </div>
                    <h3>新加坡——从「新」发现爱</h3>
                </a>

                <p class="show-info">图片来自于<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10754.html"
                                target="_blank">新加坡</a></font>，此目的地共收藏了<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/photo/mdd/10754.html" target="_blank"
                                rel="nofollow">860186</a></font>张<a
                            href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10754.html" target="_blank">新加坡</a>图片。本片由<font
                            color="#FF9900"><a href="http://www.mafengwo.cn/u/5462065.html"
                                               target="_blank">刘顺儿妞</a></font>荣誉出品！</p>
            </li>
            <li style="display: none;">
                <a href="http://www.mafengwo.cn/i/5670638.html" target="_blank" class="show-pic"><img
                            src="./index/wKgBs1fiShmAW-0UAAeajieed7w68.jpg"></a>
                <a href="http://www.mafengwo.cn/i/5670638.html" target="_blank" class="show-title dark">
                    <div class="date">
                        <span class="day">22</span>/Sep.2016
                    </div>
                    <h3>时隔三年，那一片蓝，叫渔山（最新详细攻略）</h3>
                </a>

                <p class="show-info">图片来自于<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/45833.html"
                                target="_blank">渔山岛</a></font>，此目的地共收藏了<font color="#FF9900"><a
                                href="http://www.mafengwo.cn/photo/mdd/45833.html" target="_blank"
                                rel="nofollow">7681</a></font>张<a
                            href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/45833.html" target="_blank">渔山岛</a>图片。本片由<font
                            color="#FF9900"><a href="http://www.mafengwo.cn/u/5536634.html"
                                               target="_blank">喵小森君</a></font>荣誉出品！</p>
            </li>
        </ul>
        <ul class="show-nav">
            <li class=""><a href="javascript:"><img
                            src="./index/wKgBs1fiUDuAS0gbAAOmlBWkKu408.jpg"
                            height="62" width="110"><span></span></a></li>
            <li class=""><a href="javascript:"><img
                            src="./index/wKgBs1fiT2OANNnUAAcTCIs3HyA39.jpg"
                            height="62" width="110"><span></span></a></li>
            <li class=""><a href="javascript:"><img
                            src="./index/wKgBs1fiTv6AUXkmAAWqGPaWRoI96.jpg"
                            height="62" width="110"><span></span></a></li>
            <li class="active"><a href="javascript:"><img
                            src="./index/wKgBs1fjaYeAMT9PAAVu4NR9-F865.jpg"
                            height="62" width="110"><span></span></a></li>
            <li class=""><a href="javascript:"><img
                            src="./index/wKgBs1fiSf2AbV2UAAVRBE8Bsvw16.jpg"
                            height="62" width="110"><span></span></a></li>
        </ul>
        <a class="show-more" target="_blank" href="http://www.mafengwo.cn/app/calendar.php">历历在目</a>
    </div>
    <div class="search-container" id="_j_index_search">
        <div class="search-group">
            <div class="searchtab" id="_j_index_search_tab">
                <ul class="clearfix">
                    <li class="tab-selected" data-index="0"><i></i>全部</li>
                    <li data-index="1"><i></i>酒店</li>
                    <li data-index="2"><i></i>目的地</li>
                    <li data-index="3"><i></i>自由行商城</li>
                </ul>
            </div>
            <!-- 全部 begin -->
            <div class="searchbar" id="_j_index_search_bar_all">
                <div class="search-wrapper">
                    <div class="search-input">
                        <input name="q" placeholder="搜目的地/攻略/酒店/旅行特价" id="_j_index_search_input_all" autocomplete="off"
                               value="和NASA宇航员共进午餐" type="text">
                    </div>
                </div>
                <div class="search-button" id="_j_index_search_btn_all">
                    <a role="button" href="javascript:"><i class="icon-search"></i></a>
                </div>
            </div>
            <!-- 全部 end -->
            <!-- 酒店 begin -->
            <div class="searchbar searchbar-hotel hide" id="_j_index_search_bar_hotel">
                <div class="search-wrapper">
                    <form action="/hotel/s.php" method="get">
                        <div class="search-input">
                            <input name="sKeyWord" placeholder="请输入国家、地区、城市名称" id="_j_index_search_input_hotel"
                                   autocomplete="off" type="text">
                        </div>
                    </form>
                    <div class="search-date" id="_j_check_in">
                        <input readonly="readonly" id="dp1474870377639" class="hasDatepicker" value="未定" type="text">
                        <span></span>
                        <i class="icon-cal"></i>
                    </div>
                    <div class="search-date" id="_j_check_out">
                        <input readonly="readonly" id="dp1474870377640" class="hasDatepicker" value="未定" type="text">
                        <span></span>
                        <i class="icon-cal"></i>
                    </div>
                </div>
                <div class="search-button" id="_j_index_search_btn_hotel">
                    <a role="button" href="javascript:"><i class="icon-search"></i></a>
                </div>
            </div>
            <!-- 酒店 end -->
            <!-- 目的地 begin -->
            <div class="searchbar hide" id="_j_index_search_bar_mdd">
                <form action="/group/s.php" method="get">
                    <div class="search-wrapper">
                        <div class="search-input">
                            <input name="q" placeholder="我要去..." id="_j_index_search_input_mdd" autocomplete="off"
                                   type="text">
                        </div>
                    </div>
                    <div class="search-button" id="_j_index_search_btn_mdd">
                        <a role="button" href="javascript:"><i class="icon-search"></i></a>
                    </div>
                </form>
            </div>
            <!-- 目的地 end -->
            <!-- 出行服务 begin -->
            <div class="searchbar hide" id="_j_index_search_bar_sales">
                <div class="search-wrapper">
                    <div class="search-input">
                        <input placeholder="产品名称/目的地/优惠" id="_j_index_search_input_sales" autocomplete="off"
                               type="text">
                    </div>
                </div>
                <div class="search-button" id="_j_index_search_btn_sales">
                    <a role="button" href="javascript:"><i class="icon-search"></i></a>
                </div>
            </div>
            <!-- 出行服务 end -->
            <!-- 目的地suggest begin -->
            <div class="search-suggest-panel search-suggest-place hide" id="_j_index_suggest_list_mdd">
                <ul class="suggest-list"></ul>
            </div>
            <!-- 目的地suggest end -->
            <!-- 酒店suggest begin -->
            <div class="search-suggest-panel search-suggest-hotel hide" id="_j_index_suggest_list_hotel">
            </div>
            <!-- 酒店suggest end -->
        </div>
    </div>
</div>



    <!--旅游开始-->
    @foreach($arr1 as $vb=>$xc)
        <div class="newChannel clearfix">
            <h2 class="travel-Hd">
                <span class="travel-Hd-type travel-gn-type" id="{{ $xc->r_id }}">{{$xc->r_region }}</span><span class="travel-Hd-msg">机+门票、酒+当地跟团游，个性、时尚、一应俱全！</span>
                <p class="newChannel-more"><a href="" target="_blank" title="更多国内旅游">更多国内旅游线路&gt;&gt;</a></p>
            </h2>
            <div class="newChannel-Bd cfix">
                <!-- 景点左侧地区分类开始 -->
                <div class="newChannel-left">
                    <dl>
                        @foreach($xc->child as $zx)
                            <dt>
                                <a href="javascript:void(0)" target="_blank" id="{{ $zx->r_id }}" onclick="inClassId3({{ $zx->r_id }})">{{$zx->r_region }}</a>
                            </dt>
                            <dd class="cfix">
                                @foreach($zx->child as $asds)
                                    <a href="javascript:void(0)" onmouseout="yic({{ $asds->r_id }})" onmouseover="yis({{ $asds->r_id }})" id="div2_{{ $asds->r_id }}" onclick="smallClassId3({{ $asds->r_id }})">{{$asds->r_region }}</a>
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
                            <li id="{{ $zxtop->r_id }}" onclick="showsjd({{ $zxtop->r_id }},{{$xc->r_id}})">
                                {{$zxtop->r_region }}
                            </li>
                        @endforeach
                    </ul>
                    <!-- 景点上边地区分类 -->
                    <div class="newChannel-list J-newChannel-list visible">

                        <ul class="clearfix" id="tihuan{{$xc->r_id}}">
                            <!-- 景点展示开始 -->
                            @foreach($arr3 as $a=>$scenic)
                                <li class="lineitem cfix">
                                    <div class="img fn-left">
                                        <a href="javascript:void(0)" target="_blank" title="{{ $scenic->s_name }}">
                                            <img style="display: inline;" data-original="./images/{{ $scenic->s_img }}" src="./images/{{ $scenic->s_img }}" alt="" height="67px" width="118px">
                                        </a>
                                        <div class='prd-num'>产品编号：{{ $scenic->s_id }}</div>
                                    </div>
                                    <dl class='info fn-left'>
                                        <dt class='t'>
                                            <a href="{{URL('home/scenicDetails')}}?sid={{ $scenic->s_id }}" target='_blank' title='{{ $scenic->s_name }}'>{{ $scenic->s_name }}</a><img src='./homepage/tuijian.gif'>
                                        </dt>
                                        <dd class='desc'> {{ $scenic->s_characteristic }}</dd>
                                        <dd class='moredesc'>
                                            <span>目的地：<span class='n'>{{ $scenic->r_region }}</span></span>
                                            <span class='pin'><span class='n'>&nbsp;{{ $scenic->r_hot }}&nbsp;</span>人点评</span>
                                            <span>旅游交通方式：<span class='n'>{{ $scenic->s_traffic }}</span></span>
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

                    </div>

                </div>
            </div>
        </div>
    @endforeach
    <!--旅游结束-->

<link href="./index/mfw-footer.css" rel="stylesheet" type="text/css">

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
                <dd><a>关于惠玩</a></dd>
                <dd><a>网络信息侵权通知指引</a></dd>
                <dd><a >隐私政策</a></dd>
                <dd><a >服务协议</a></dd>
                <dd><a >联系我们</a></dd>
                <dd><a class="joinus highlight" title="惠玩团队招聘">加入惠玩</a></dd>
            </dl>
            <dl class="ft-info-col ft-info-service">
                <dt>旅行服务</dt>
                <dd>
                    <ul class="clearfix">
                        <li><a>旅游攻略</a></li>
                        <li><a>酒店预订</a></li>
                        <li><a>旅游特价</a></li>
                        <li><a>国际租车</a></li>
                        <li><a>旅游问答</a></li>
                        <li><a>旅游保险</a></li>
                        <li><a>旅游指南</a></li>
                        <li><a>订火车票</a></li>
                        <li><a>旅游资讯</a></li>
                        <li><a>APP下载</a></li>
                        <li><a>全球供应商入驻</a></li>
                    </ul>
                </dd>
            </dl>
            <dl class="ft-info-col ft-info-qrcode">
                <dd>
                    <span class="ft-qrcode-tejia"></span>
                    <p>惠玩良品</p>
                </dd>
                <dd>
                    <span class="ft-qrcode-weixin"></span>
                    <p>惠玩官方微信</p>
                </dd>
            </dl>
            <dl class="ft-info-social">
                <dt>关注我们</dt>
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
</body>
</html>