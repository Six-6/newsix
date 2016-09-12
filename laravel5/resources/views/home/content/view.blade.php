@include("home/common/left");

<div id="main">
    <div class="common_head cf">
        <h2>我的点评</h2>

        <div class="tabBox">
            <div id="tab_1">
                <ul class="order_cate">
                    <li class="csel"><a id="all"  href="javascript:void(0)">所有点评</a></li>

                </ul>
            </div>

        </div>
    </div>
    <div class="tabContent">
        <table cellpadding="0" cellspacing="0" border="0" class="common-table mbt10" width="750">
            <tr>
                <th width="60" scope="col">订单编号</th>
                <th width="120" scope="col">点评时间</th>
                <th scope="col" align="left">点评名称</th>
                <th scope="col" width="50">满意度</th>
                <th width="60" scope="col">点评状态</th>
                <th width="80"  scope="col">获得积分</th>
            </tr>
            @foreach($view as $v)
            <tr>
                <td>{{$v['v_id']}}</td>
                <td>{{$v['v_time']}}</td>
                <td>{{$v['v_content']}}</td>
                <td>{{$v['v_satis']}}</td>
                <td >
                    @if($v['v_state']==0)
                        等待付款
                    @else
                        已付款
                    @endif
                </td>
                <td>{{$v['v_num']}}</td>
            </tr>
            @endforeach
            <tr><td colspan="8" align="center" style="font-weight:bold; color:#FF6600;">目前没有点评记录</td></tr>
        </table>

    </div>
</div>

</div>  </div>  </div>

