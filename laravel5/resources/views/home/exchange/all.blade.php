@include("home/common/top")
<link rel="stylesheet" type="text/css" href="./exchange/layout.css">
<link rel="stylesheet" type="text/css" href="./exchange/jifen_common.css">
<link rel="stylesheet" type="text/css" href="./exchange/jifen_index.css">
<link rel="stylesheet" type="text/css" href="./exchange/autocomplete.css">
<img src="./exchange/bg.jpg" class="one" width="1000px" alt=""/>
<div class="wrap_box clearfix" style="margin-left: 200px">
    <input type="hidden" name="i_num" value="{{$re[0]}}"/>

    <h1 align="center" style="color: red; font-size: 24px">用户您好：当前积分为{{$re[0]}}</h1>
    @foreach($res as  $v)
        <div class="lef_box mr15">
            <input type="hidden" name="_token" value="{{csrf_token()}}"/>
            <div class="rr_tl">
                <p class="rr_tt">{{$v[0]['t_name']}}</p>
            </div>
            <div class="spec_box">
                <a class="floor-show" href="http://www.mafengwo.cn/mall/exchangelist.php?c=2" target="_blank"></a>
                <ul class="sb_lists clearfix">
                    @foreach($v as $val)
                        <!-- sb_list S -->
                        <li class="sb_list">
                            <a href="#" target="_blank" class="sb_img">
                                <img style="display: inline;" src="{{$val['e_img']}}" alt="">
                            </a>

                            <div class="sb_des">
                                <a href="#" target="_blank" class="sb_line">
                                    <strong title="{{$val['e_name']}}">{{$val['e_name']}}</strong>
                                    <span>{{$val['e_content']}}</span>
                                </a>

                                <p class="sb_btn">
                                    <input type="hidden" name="e_id" value="{{$val['e_id']}}"/>
                                    <input type="hidden" name="e_price" value="{{$val['e_price']}}"/>
                                    <span class="cl_f60"><em class="f_18">{{$val['e_price']}}</em>牛大头</span>
                                    <span class="cl_999 m_lr">市场价：<s>¥{{$val['r_price']}}起</s></span>
                                    <input type="button" value="兑换" class="go_ex but_w"/>
                                </p>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    @endforeach
</div>

<script src="./jq.js"></script>
<script>
    $(":button").click(function (msg) {
        var tok = $("input[name=_token]").val();
        var e_id = $(this).siblings('input[name="e_id"]').val();
        var i_num = $("input[name=i_num]").val();
        var e_price = $(this).siblings('input[name="e_price"]').val();
        if (i_num * 1 < e_price * 1) {
            alert("您的积分过低不能兑换此商品");
        } else {
            $.post("detailsShow", {e_id: e_id, _token: tok, i_num: i_num}, function (msg) {
                location.href = "detailsSel";
            });
        }

    });
</script>
@include("home/common/footer")