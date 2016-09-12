@include("home/common/left")
<div id="main">
    <h2 class="common_h2">我的积分</h2>
    <div class="common-w2">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td><strong>积分总余额：</strong><strong class="cdyellow"><span class="f18">0</span> </strong></td>
            </tr>
        </table>
    </div>
    <div id="user_order_w" class="common_switch_w mbt50">
        <div>
            <span class="rf" id="message_1"><b>积分消费记录：</b></span>

        </div>

        <div class="totalPay">
            <table cellpadding="0" cellspacing="0" border="0" class="common-table" style="font-size:13px;">
                <tr>
                    <th align="center" width="50">编号</th>
                    <th align="center" width="70">面额</th>
                    <th align="center" width="220">有效期至</th>
                    <th align="center" width="220">使用时间</th>
                    <th align="center" width="240">兑换方式</th>
                </tr>
                @foreach($integral as $v)
                <tr>
                    <td>{{$v['i_id']}}</td>
                    <td>{{$v['i_num']}}</td>
                    <td>{{$v['i_time']}}</td>
                    <td>{{$v['start_time']}}</td>
                    <td><a href="exchangeShow?id={{$v['i_id']}}">兑换</a></td>
                </tr>
                @endforeach
            </table>
        </div>
    </div>
</div>

