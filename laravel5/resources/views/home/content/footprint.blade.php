
@include("home/common/left")
<h2 class="common_h2">个人资料</h2>
<form action="personUpd" method="post" name="add_place_form" id="user_info_edit_form" onsubmit="return check()">
    <input name="do" id="do" value="edt" type="hidden">
    <input name="post" id="post" value="save" type="hidden">
    <input name="sub_tel" id="sub_tel" type="hidden">
    <input name="sub_email" id="sub_email" type="hidden">

    <div class="common-w1 gstyle mb15" id="tihuan">
        <ul class='clearfix'>
            @foreach($flights as $k=>$v)
            <li class='lineitem ' style='float:left'>
                <div class='img fn-left'>
                <a href="{{$v->o_id}}" target='_blank' title="{{$v->o_name}}">
                <img width='118px' height='67px' data-original="{{$v->path}}" src="{{$v->path}}" alt='景点图' style='display: inline;'>
                </a>
                <div class='prd-num'>产品编号：{{$v->o_id}}</div>
                <input type='hidden' id='sid' value="{{$v->o_id}}" />
                </div>
                <dl class='info fn-left'>
                <dt class='t'>
                <a href='http://www.byts.com.cn/tours/4376.htm' target='_blank' title="{{$v->o_name}}">{{$v->o_name}}</a>
                </dt>
                <dd class='desc'> 界航大型飞船 ，入住5年普吉车 当地 精选 5星 酒店 ◆ 尽享美食 金鲨酒 楼泰式 绝望深怨...</dd>
                <dd class='moredesc'>
                <span>满意度：<span class='n'>100%</span></span>
                <span class='pin'><span class='n'>&nbsp;0&nbsp;</span>人点评</span>
                <span>最近出发班期：<span class='n'>星期二,星期四,星期日</span></span>
                </dd>
                <dd id="caoz{{$v->o_id}}" style='display:none'>
                <textarea name='evaluatename' id='evaluatename' rows='' cols='30px'></textarea><span><input type='button' onclick="hidd({{$v->o_id}})" value='发表评价'/></span>
                </dd>
                </dl>
                <div class='detail fn-right'>
                <span class='sup'>网订优惠</span>
                <p class='price'><span class='u'></span><span class='n'>￥{{$v->c_price}}</span>起</p>
                <span class='s m-5 J_powerFloat' rel='J_popDisong' data-song='200'><em class='dsnum'></em></span>
                <input type='hidden' name='_token' value="{{ csrf_token() }}">
                <p class='price'><input type='button' onclick="shows({{$v->o_id}})" value='我要评价'/></p>
                </div>
                </li>
                @endforeach
        </ul>
    </div>


    <!-- rightBar end -->
</form>
<div class="clr"></div>
@include("includes.foot")