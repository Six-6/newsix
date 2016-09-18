<meta name="csrf-param" content="_csrf">
<meta name="csrf-token" content="WllhTDdOMTUqLTINeilmUzctCnl5L2hUACA1B08aCWcsMDQpQwlEew==">
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="./fun/foot.css">

<style type="text/css">
    .logo span {
        float: left;
        width: 163px;
        height: 55px;
        margin: 5px 0 0 0;
    }
</style>
<link id="skinlayercss" href="./fun/layer.css" rel="stylesheet" type="text/css">
<link href="./fun/mask.css" rel="stylesheet" type="text/css">
<link id="rightCommonCss" rel="stylesheet" type="text/css" href="./fun/right_common.css"></head>

<script type="text/javascript" src="./fun/in-min.js"></script>
<script type="text/javascript" src="./fun/header_v2.js"></script>
<script type="text/javascript" src="./fun/getDegree.js"></script>
<script type="text/javascript" src="./fun/screen_size.js"></script>
<link rel="stylesheet" href="./fun/index_nav_menu.css">
<link rel="stylesheet" type="text/css" href="./fun/TN_date.css">
<script type="text/javascript" src="./fun/search_ajax.js"></script>

<script type="text/javascript" src="./fun/jquery-1.js"></script>
<link rel="stylesheet" type="text/css" href="./fun/jquery.css" media="screen">
<link rel="stylesheet" type="text/css" href="./fun/playingHome.css">
<link rel="stylesheet" href="./fun/pub_mod.css">

<div id="description1" class="description">
    <div class="des-show">
        <div class="yj-name">【现金征集】全球目的地玩法火热进行</div>
    </div>
</div>
<div id="description2" class="description">
    <div class="des-show">
        <div class="yj-name">【玩法】7天6晚 日本轻奢慢生活</div>
    </div>
</div>
<div id="description3" class="description">
    <div class="des-show">
        <div class="yj-name">【玩法】4天3晚伦敦，行走在阳光与阴雨下</div>
    </div>
</div>


<div class="fix-playing">
    <img src="./fun/playing.png" alt="">
</div>

<div class="content-bg">
    <!-- 游玩内容 start -->
    <div class="content-wrapper">
        <!-- 玩法描述 按钮 start-->
        <div class="play-description">
            <div class="description-show">
                <img src="./fun/desbg.png" alt="">
            <span>
                旅行，就是去玩！同一个世界，玩法不同，体验也不同。玩法是旅行达人经验和情怀的产物，是达人以
                自己的方式体验某个目的地之后，沉淀出来的有温度，有深度的游玩指南。玩法，让旅行更简单！
            </span>
            </div>
            <div class="description-btn">
                <a href="javascript:;" class="write-playing">我要写玩法</a>
                <a href="funWrite" class="my-playing">我的玩法</a>
            </div>
        </div>
        <!-- 玩法描述 按钮 end-->
        <!-- 玩法推荐 start-->
        <div class="play-recommend">
            <p class="recommend-tit">热门玩法</p>

            <p class="recommend-des">选择最中意的玩法，探索未知的精彩世界！</p>

            <div class="list-container">
                <ul class="pro-list">
                    @foreach($res as $v)
                    <li>
                        <a href="http://www.tuniu.com/way/188645" target="_blank">
                            <div class="pro-img">
                                <img src="{{$v->f_img}}" alt=""
                                     class="pro-img-show">
                                <img src="./fun/recbg.png" alt="" class="tit-meng">

                                <div class="pro-tit-show">
                                    <img src="{{$v->f_person}}"
                                         alt="">

                                    <div class="pro-auther-name">{{$v->f_name}}</div>
                                    <div class="pro-ding" id="dingAjax" data-id="188645"><i></i>2</div>
                                    <div class="pro-comment"><i></i>0</div>
                                    <div class="pro-scan"><i></i>5441</div>
                                </div>
                            </div>
                            <div class="pro-detail">
                                <div class="detail-days">
                                    <span class="day-num">{{$v->f_num}}</span>
                                    <span class="day-day">DAYS</span>
                                </div>
                                <div class="detail-show">
                                    <div class="detail-tit">{{$v->f_title}}</div>
                                    <div class="detail-line">{{$v->f_content}}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    @endforeach
                </ul>
            </div>
            <a href="javascript:;" class="pro-prev" id="pro-prev"></a>
            <a href="javascript:;" class="pro-next" id="pro-next"></a>
        </div>
        <!-- 玩法推荐 end-->
        <!-- 游玩内容 start-->

        <div class="playing-content">

            <!-- 左侧内容 游玩列表 start-->
            <div class="content-left">
                <!-- 广告位  -->
                <a href="" target="_blank" rel="nofollow">
                    <img src="./fun/Cii-TFfE8umIJBlLAAF8zvL72aIAAB27AIKknMAAXzm79_w800_h0_c0_t0.jpg" alt="玩法头条">
                </a>
                <input type="hidden" name="_token" value="{{csrf_token()}}" />
                <div class="left-top">
                    <!-- 游记tab start-->
                    <ul class="playing-tab">
                        @foreach($ar as $v)
                            <li class="current"><a href="javascript: void(0)" class="huan" id="{{$v['f_tid']}}">{{$v['t_name']}}</a></li>
                        @endforeach
                    </ul>
                </div>

                <div id="list-show">
                    <ul style="display: block;" class="list-data">
                        @foreach($v['selAll'] as $val)
                            <li>
                                <a href="" target="_blank">
                                    <div class="playing-img">
                                        <img src="{{$val['f_img']}}"
                                             alt="" class="playing-img-show">
                                        <img src="" alt="" class="playing-meng">

                                        <div class="playing-des">
                                            <div class="playing-top">
                                                <div class="playing-days">
                                                    <span class="day-num">{{$val['f_day']}}</span>
                                                    <span class="day-day">DAYS</span>
                                                </div>
                                                <div class="playing-tit"></div>
                                            </div>
                                            <div class="playing-hover-show">
                                                <p>D1 </p>

                                                <p>D2 </p>

                                                <p>D3 </p>

                                                <p>D4 </p>

                                                <p>D5 </p>

                                                <p>D6 </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div class="playing-tit-show">
                                    <div class="playing-ding" id="dingAjax" data-id="189358"><i></i>4</div>
                                    <div class="playing-comment"><i></i>5</div>
                                    <div class="playing-scan"><i></i></div>
                                    <a href="" target="_blank">
                                        <img src="./fun/Cii9EVdiC6WIXTkhAAAUT2FlVgYAAGkbwP_xCAAABRn641_w120_h120_c1_.jpg"
                                             alt="">

                                        <div class="playing-auther-name"></div>
                                    </a>
                                </div>
                            </li>
                        @endforeach
                    </ul>
                    <div class="pager pagination" data-init="pager" style="display:none"></div>
                    <div data-curpage="1" data-pager-inited="true" class="pager pagination" data-init="pager" style="">
                        <div class="page-bottom">
                            <a href="javascript:void(0)" >上一页</a>
                            <a href="javascript:void(0)">下一页</a>
                        </div>
                    </div>
                    <div class="pager pagination" data-init="pager" style="display:none"></div>
                </div>

            </div>
            <!-- 左侧内容 游玩列表end-->
            <!-- 右侧内容 start-->
            <div class="content-right">
                <div class="right-traverler">
                    <div class="right-commen-tit">
                        <p class="right-tit">大玩家</p>
                        <a href="" class="right-more" target="_blank" rel="nofollow">更多&nbsp;&gt;</a>
                    </div>
                    <div class="traverler-auther">
                        <div class="traverler-img">
                            <div class="traverler-sex  sex-women"></div>
                            <a href="" target="_blank"
                               rel="nofollow"><img
                                        src="./fun/Cii-TlfRwXeIJ5y0AAbidFjkLeEAACMygNQFYsABuKM545_w90_h90_c1_t0.jpg"
                                        alt="" class="traverler-title-img"></a>
                        </div>
                        <div class="traverler-name">无食不欢</div>
                        <div class="traverler-des">唯有美景与美食不可辜负，用眼睛和舌头来探索，用心去体悟。
                            偶是发动了洪荒之力来品鉴的萌萌哒小女子。
                            作为三明四季旅行家受邀参加三明悠然四季行的旅行活动。
                        </div>
                        <ul class="traverler-label">
                            <li>摄影</li>
                            <li>写攻略</li>
                            <li>美食</li>
                        </ul>
                        <a href="" class="master-btn" target="_blank">申请大玩家</a>
                    </div>
                </div>
                <div class="mater-show">
                    <div class="right-commen-tit">
                        <p class="right-tit">玩家排行榜</p>
                    </div>
                    <!--周排行-->
                    <ul class="maseter-list">
                        <li>
                            <a href="" target="_blank">
                                <div class="master-img">
                                    <img src="./fun/Cii9EFdzuv6IWd9ZAAB6ZQCxKl4AAG0BgC58YEAAHp964_w120_h120_c1_t.jpg"
                                         alt="" class="master-titimg">

                                    <div class="master-sort sort1"></div>
                                </div>
                                <div class="master-detail">
                                    <p class="master-name">qyyhades</p>
                                </div>
                            </a>

                            <div class="master-ding" id="dingAjax">
                                <i></i>

                                <p>116</p>
                            </div>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <div class="master-img">
                                    <img src="./fun/Cii9EVc7RJSIPJSnAArJSvi9vkAAAF4RAEKY4cACsli433_w120_h120_c1_.jpg"
                                         alt="" class="master-titimg">

                                    <div class="master-sort sort2"></div>
                                </div>
                                <div class="master-detail">
                                    <p class="master-name">大大江</p>
                                </div>
                            </a>

                            <div class="master-ding" id="dingAjax">
                                <i></i>

                                <p>83</p>
                            </div>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <div class="master-img">
                                    <img src="./fun/6c84d91a557cace0295020b23c073514_w120_h120_c1_t0.jpg" alt=""
                                         class="master-titimg">

                                    <div class="master-sort sort3"></div>
                                </div>
                                <div class="master-detail">
                                    <p class="master-name">活猪子</p>
                                </div>
                            </a>

                            <div class="master-ding" id="dingAjax">
                                <i></i>

                                <p>74</p>
                            </div>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <div class="master-img">
                                    <img src="./fun/Cii9EVdztKeIBBE6AAKqrokOQTgAAG0AAI8VVgAAqrG730_w120_h120_c1_.jpg"
                                         alt="" class="master-titimg">

                                    <div class="master-sort sort4"></div>
                                </div>
                                <div class="master-detail">
                                    <p class="master-name">WHV视界</p>
                                </div>
                            </a>

                            <div class="master-ding" id="dingAjax">
                                <i></i>

                                <p>70</p>
                            </div>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <div class="master-img">
                                    <img src="./fun/Cii-TFeqdtGIVj2OAABMYn7ocjQAABAXgNUpAEAAEx6853_w120_h120_c1_.jpg"
                                         alt="" class="master-titimg">

                                    <div class="master-sort sort5"></div>
                                </div>
                                <div class="master-detail">
                                    <p class="master-name">太空精灵</p>
                                </div>
                            </a>

                            <div class="master-ding" id="dingAjax">
                                <i></i>

                                <p>68</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="bk-recommend">
                    <div class="right-commen-tit">
                        <p class="right-tit">爆款推荐</p>
                        <a href="http://temai.tuniu.com/" class="right-more">更多&nbsp;&gt;<i></i></a>
                    </div>
                    <ul class="bk-list">
                        <li><a href="" target="_blank"> <img
                                        src="./fun/39e7ea198c053f2bf5ff85c34e055a34_w180_h180_c1_t0.jpg"
                                        data-src=""
                                        alt="" class="bk-img">

                                <div class="bk-des-show"><p class="bk-name">[含签]&lt;普吉岛-皮皮岛5晚6日或7日游&gt;畅玩珍珠岛十合一娱乐项目，升级国五酒店</p>

                                    <p class="bk-des">含签，畅玩珍珠岛十合一娱乐项目，升级国五酒店</p>

                                    <div class="price-show"><span class="bk-type">跟团游</span>

                                        <div class="bk-price"><span class="price-num">￥1799.00</span> 起</div>
                                    </div>
                                </div>
                            </a></li>
                        <li><a href="" target="_blank"> <img
                                        src="./fun/Cii9EVcHYJGIZd-vAAizmDtsNDQAADCtQIadHIACLOw820_w180_h180_c1_.jpg"
                                        data-src=""
                                        alt="" class="bk-img">

                                <div class="bk-des-show"><p class="bk-name">丽江-香格里拉-玉龙雪山双飞5日游</p>

                                    <p class="bk-des">冰川大索道，虎跳峡，普达措，一晚古城客栈，藏家体验，品牦牛火锅，赠丽水金沙</p>

                                    <div class="price-show"><span class="bk-type">跟团游</span>

                                        <div class="bk-price"><span class="price-num">￥1099.00</span> 起</div>
                                    </div>
                                </div>
                            </a></li>
                        <li><a href="" target="_blank"> <img
                                        src="./fun/Cii-TFfIHruILG6IAAcoHLt2zpgAAB8wgPAGlcAByg0604_w180_h180_c1_.jpg"
                                        data-src=""
                                        alt="" class="bk-img">

                                <div class="bk-des-show"><p class="bk-name">长滩岛4晚5日半自助游</p>

                                    <p class="bk-des">赠送苏州往返交通，赠送回程到上海一晚住宿，赠送特色欢迎午餐，指定入住杜鹃花或高尔夫或同级</p>

                                    <div class="price-show"><span class="bk-type">跟团游</span>

                                        <div class="bk-price"><span class="price-num">￥2199.00</span> 起</div>
                                    </div>
                                </div>
                            </a></li>
                    </ul>
                </div>
            </div>
            <!-- 右侧内容 end-->
        </div>
        <!-- 游玩内容 start-->
    </div>
    <!-- 游玩内容 end -->
</div>

<script type="text/javascript" src="./fun/template.js"></script>
<script type="text/javascript" src="./fun/jquery.js"></script>
<script type="text/javascript" src="./fun/playingHome.js"></script>
<script type="text/javascript" src="./fun/unveil.js"></script>
<script type="text/javascript" src="./fun/pager.js"></script>
<script type="text/javascript" src="./fun/layer.js"></script>

<script>
  $(".huan").click(function(){
      var tok=$("input[name=_token]").val();
      var id=$(this).attr("id");
      $.post("funExchange",{id:id,_token:tok},function(msg){
            $("#list-show").html(msg);
      });
  });
</script>