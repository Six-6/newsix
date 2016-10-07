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
</script>
