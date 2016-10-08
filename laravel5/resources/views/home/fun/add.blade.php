<<<<<<< HEAD
<link rel="stylesheet" type="text/css" href="./add/style_4_common.css">
<link rel="stylesheet" type="text/css" href="./add/style_4_forum_viewthread.css">
<link href="./add/share_style0_32.css" rel="stylesheet">
<link href="./add/share_popup.css" rel="stylesheet">
<link href="./add/select_share.css" rel="stylesheet">
<div id="wp" class="wp">
       <div id="ct" class="wp cl">
        <div id="pgt" class="pgs mbm cl ">
            <div class="pgt"></div>
            <span class="y pgb"><a href="funReplay">返回列表</a></span>
            <a href="funPost"><img src="./add/pn_post.png" alt="发新帖"></a>
        </div>
        <div id="postlist" class="pl bm">
            @foreach($re as $v)
            <table cellpadding="0" cellspacing="0">
                <tbody>

                <tr>
                    <td class="pls ptn pbn">
                        <div class="hm ptn">
                          <span class="xg1">回复:</span> <span class="xi1">0</span>
                        </div>
                    </td>
                    <td class="plc ptm pbn vwthd">
                        <div class="y">
                            <a href="funWrite?f_id={{$v['f_id']-1}}"
                               title="上一主题"><img src="./add/thread-prev.png" alt="上一主题" class="vm"></a>
                            <a href="funWrite?f_id={{$v['f_id']+1}}"
                               title="下一主题"><img src="./add/thread-next.png" alt="下一主题" class="vm"></a>
                        </div>
                        <h1 class="ts">
                            <span id="thread_subject">{{$v['f_name']}}</span>
                        </h1>
                        <span class="xg1">
                        &nbsp;<img src="./add/hot_3.gif" alt="" title="热度: 224">
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
            <table class="ad" cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                    <td class="pls">
                    </td>
                    <td class="plc">
                    </td>
                </tr>
                </tbody>
            </table>
            @endforeach
            <div id="post_44">
                <table id="pid44" class="plhin" summary="pid44" cellpadding="0" cellspacing="0">
                    <tbody>

                    <tr>
                        <td class="pls" rowspan="2">
                            <div style="top: 0px;" id="favatar44" class="pls favatar">
                                <div class="pi">
                                    <div class="authi">
                                        <a href="http://www.lvy8.net/space-uid-1.html" target="_blank" class="xw1">{{$name}}</a>
                                    </div>
                                </div>
                                <div class="p_pop blk bui card_gender_0" id="userinfo44" style="display: none; margin-top: -11px;">
                                    <div class="i y">
                                        <div>
                                            <strong><a href="" target="_blank" class="xi2">{{$name}}</a></strong>
                                            <em>当前离线</em>
                                        </div>
                                        <dl class="cl">
                                            <dt>积分</dt>
                                            <dd>
                                                <a href="" target="_blank" class="xi2">378</a>
                                            </dd>
                                        </dl>
                                        <div id="avatarfeed"><span id="threadsortswait"></span></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="avatar"><a href="personAdd" class="avtm" target="_blank"><img src="./add/avatar.jpg"></a></div>
                                </div>
                                <div class="tns xg2">

                                </div>
                                <p><em><a href="personAdd"
                                          target="_blank">用户信用度</a></em></p>
                                <p><span><img src="./add/star_level3.gif" alt="Rank: 9">
                                        <img src="./add/star_level3.gif" alt="Rank: 9">
                                        <img src="./add/star_level1.gif" alt="Rank: 9">
                                    </span>
                                </p>
                                <dl class="pil cl">
                                    <dt>积分</dt>
                                    <dd>
                                        <a href="integralAdd" target="_blank" class="xi2">{{$res[0]}}</a></dd>
                                </dl>
                                <dl class="pil cl"></dl>
                            </div>
                        </td>
                        <td class="plc">
                            <div class="pi">
                                <div class="pti">
                                    <div class="pdbt">
                                    </div>
                                    <div class="authi">
                                        <img class="authicn vm" id="authicon44" src="./add/online_admin.gif">
                                        <em id="authorposton44">发表于 {{$v['f_time']}}</em>
                                    </div>
                                </div>
                            </div>
                            <div class="pct">
                                <style type="text/css">.pcb {
                                        margin-right: 0
                                    }</style>
                                <div class="pcb">
                                    <div class="pcbs">
                                        <div class="act pbm cl">
                                            <div class="spvimg">
                                                <a href="javascript:;">
                                                    <img src="{{$v['f_img']}}" width="300"></a></div>
                                            <div class="spi">
                                                <dl>
                                                    <dt>活动类型:</dt>
                                                    <dd><strong>{{$v['t_name']}}</strong></dd>
                                                    <dt>开始时间:</dt>
                                                    <dd>
                                                        {{$v['start_time']}}
                                                    </dd>
                                                    <dt>活动地点:</dt>
                                                    <dd>{{$v['f_place']}}</dd>
                                                    <dt>性别:</dt>
                                                    <dd>
                                                        不限
                                                    </dd>
                                                    <dt>每人花销:</dt>
                                                    <dd>{{$v['f_price']}} 元</dd>
                                                </dl>

                                                <dl class="nums mtw">
                                                    <dt>已报名人数:</dt>
                                                    <dd>
                                                        <em>{{$v['p_num']}}</em> 人
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>
                                                    <dd>
                                                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                                                        <input type="hidden" name="f_id" value="{{$v['f_id']}}"/>
                                                        <button class="pn" id="{{$uid}}">报名</button>
                                                    </dd>
                                                    </dt>
                                                </dl>
                                                <dl>
                                                    <dt>剩余名额:</dt>
                                                    <dd>
                                                        {{$surplus}} 人
                                                    </dd>
                                                    <dt>报名截止:</dt>
                                                    <dd>{{$v['end_time']}}</dd>
                                                    <dt></dt>
                                                    <dd>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <table cellpadding="0" cellspacing="0">
                                            <tbody>
                                            <tr>
                                                <td class="t_f" id="postmessage_44">
                                                    {{$v['f_content']}}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div class="ptm pbm xs1" id="applylist_28">
                                            <h2>已通过 ({{$v['p_num']}} 人)</h2>
                                            <table class="dt">
                                                <tbody>
                                                <tr>
                                                    <th width="140">&nbsp;</th>
                                                    <th>人物</th>
                                                    <th width="60">每人花销</th>
                                                    <th width="110">申请时间</th>
                                                </tr>
                                                @foreach($user as $v)
                                                <tr>
                                                    <td>
                                                        <a target="_blank"
                                                           href="http://www.lvy8.net/home.php?mod=space&amp;uid=1"
                                                           class="ratl vm"><img src="./add/avatar_002.jpg"></a>
                                                        <a target="_blank"
                                                           href="http://www.lvy8.net/home.php?mod=space&amp;uid=1">{{$v->name}}</a>
                                                    </td>
                                                    <td></td>
                                                    <td>自付</td>
                                                    <td>{{$v['u_times']}}</td>
                                                </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<script src="./jq.js"></script>
<script>
    $(".pn").click(function(msg){
        var u_id=$(this).attr("id");
=======
@include("home/common/top")
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>志同道合报名</title>
    <link href="./fun/csstogethertogether_v2cssjquery-ui-1.css" rel="stylesheet" type="text/css">

<body style="position: relative;">
<div class="container">
    @foreach($re as $v)
    <div class="detail-hd">
        <div class="cover" style="background-image:url({{$v['f_img']}});width: 1346px;margin-left: -184px">
            <div class="bg"></div>
            <div class="shadow"></div>
        </div>
        <div class="wrapper">
            <div class="info">
                <div class="middle">
                    <img src="{{$v['f_img']}}" width="140px" height="80px" alt=""/>
                    <h1>{{$v['f_name']}}</h1>
                    <div class="total">
                        <span>需要</span>{{$v['f_num']}}人
                        <em class="dot"></em>
                        <span>{{$v['p_num']}}</span>人报名
                    </div>
                </div>
            </div>
        </div>
        <div class="event-btns">
            <div class="cell-join">
                <a class="btn-join _j_together_add"><i class="pn"></i><span class="pn">我要报名</span></a>
            </div>
            <div class="cell-collect">
                <a class="btn-collect _j_together_care"><i></i><span class="_j_together_text">关注此结伴</span></a>
            </div>
        </div>

    </div>
        <input type="hidden" name="_token" value="{{csrf_token()}}" />
        <input type="hidden" name="f_id" value="{{$v['f_id']}}"/>
        <input type="hidden" name="u_id" value="{{$uid}}"/>
    <div class="row-bg2">
        <div class="summary">
            <ul class="clearfix">
                <li><i class="icon-startTime"></i><span>出发时间：{{$v['start_time']}}</span></li>
                <li><i class="icon-days"></i><span>截止时间：{{$v['end_time']}}</span></li>
                <li><i class="icon-destination"></i><span>目的地：{{$v['f_place']}}</span></li>
                <li><i class="icon-departure"></i><span>出发地：{{$v['f_city']}}</span></li>
                <li><i class="icon-people"></i><span>希望人数：{{$v['f_num']}}人</span></li>
            </ul>
            <div class="contact _j_contact">
                联系方式
    <span class="invisible">
        ------报名后可见-------
    </span>

            </div>
        </div>
    </div>
    @endforeach
</div>
@include("home/common/footer")
</body>
<script src="./jq.js"></script>
<script>
    $(".pn").click(function(msg){
        var u_id=$("input[name=u_id]").val();
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
        var tok=$("input[name=_token]").val();
        var f_id=$("input[name=f_id]").val();
        $.post("funUser",{u_id:u_id,f_id:f_id,_token:tok},function(msg){
            if(msg==1){
                alert("请不要重复参加活动");
            }else if(msg==0){
                alert("参加活动成功");
            }else if(msg==3){
                alert("您参加的活动有冲突");
            }
        });
    });
<<<<<<< HEAD
</script>
=======
</script>
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
