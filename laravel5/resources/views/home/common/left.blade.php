<link href="./index/cssbasecssjquery.css"
      rel="stylesheet" type="text/css">

<link href="./index/cssmfw-index.css"
      rel="stylesheet" type="text/css">


<script language="javascript"
        src="./index/jsjquery-1.js"
        type="text/javascript"></script>

<script async=""
        src="./index/jsDropdownjsjquery.js"></script>
<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="惠玩自由行" style="cursor: pointer"></a></div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index head-nav-active" data-cs-p="index"><a href="indexShow">首页</a>
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
                    <a class="coin" href="http://www.mafengwo.cn/mall/" target="_blank" id="head-my-coin" rel="nofollow" data-cs-p="coin">蜂蜜 0</a> / <a class="coin" href="http://www.mafengwo.cn/user/lv.php#coin" target="_blank" id="head-my-coin" rel="nofollow" data-cs-p="coin">金币 0</a>
                </div>
                <ul>
                    <li><a href="http://www.mafengwo.cn/u/51100629.html" target="_blank" title="我的蚂蜂窝" rel="nofollow" data-cs-p="wo"><i class="icon-wo"></i>我的蚂蜂窝<span class="level">LV.1</span> </a></li>
                    <li><a href="http://www.mafengwo.cn/note/create_index.php" target="_blank" class="drop-write" title="写游记" rel="nofollow" data-cs-p="writenotes"><i class="icon-writenotes"></i>写游记</a></li>
                    <li><a href="http://www.mafengwo.cn/note/activity/appointment/" target="_blank" class="drop-write" title="预约游记" rel="nofollow" data-cs-p="appointnotes"><i class="icon-ordernotes"></i>预约游记</a></li>
                    <li data-cs-t="足迹_首页" data-cs-p="页头_我的足迹"><a href="http://www.mafengwo.cn/path/51100629.html" target="_blank" title="我的足迹" rel="nofollow"><i class="icon-path"></i>我的足迹</a></li>
                    <li><a href="http://www.mafengwo.cn/wenda/u/51100629.html" target="_blank" title="我的问答" rel="nofollow" data-cs-p="wenda"><i class="icon-wenda"></i>我的问答</a></li>
                    <li><a href="http://www.mafengwo.cn/friend/index/follow" target="_blank" title="我的好友" rel="nofollow" data-cs-p="friend"><i class="icon-friend"></i>我的好友</a></li>
                    <li><a href="http://www.mafengwo.cn/plan/fav_type.php" title="我的收藏" target="_blank" rel="nofollow" data-cs-p="collect"><i class="icon-collect"></i>我的收藏</a></li>
                    <li><a href="http://www.mafengwo.cn/plan/route.php" title="我的路线" target="_blank" rel="nofollow" data-cs-p="route"><i class="icon-route"></i>我的路线</a></li>
                    <li><a href="http://www.mafengwo.cn/sales/order.php" title="我的订单" target="_blank" rel="nofollow" data-cs-p="order"><i class="icon-order"></i>我的订单</a></li>
                    <li><a href="http://www.mafengwo.cn/sales/coupon.php" title="我的优惠券" target="_blank" rel="nofollow" data-cs-p="coupon"><i class="icon-coupon"></i>我的优惠券</a></li>
                    <li><a href="http://www.mafengwo.cn/home/userinfo.php" title="我的设置" target="_blank" relindex.html="nofollow" data-cs-p="settings"><i class="icon-settings"></i>设置</a></li>
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