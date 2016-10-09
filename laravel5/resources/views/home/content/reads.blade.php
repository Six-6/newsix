@include("home/common/left");

<div id="main">
    <div class="common_head cf">
        <h2>积分详情</h2>

        <div class="tabBox">
            <div id="tab_1">
                <ul class="order_cate">
                    <li class="csel"><a id="all"  href="javascript:void(0)">我的积分史</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="tabContent">
        <table cellpadding="0" cellspacing="0" border="0" class="common-table mbt10" width="750">
            <tr>
                <th width="20" scope="col">积分号</th>
                <th width="20" scope="col">加/减分数</th>
                <th width="100" scope="col">原因</th>
                <th width="30" scope="col">时间</th>
            </tr>
            @if($recorddata)
                @foreach($recorddata as $v)
                <tr>
                    <td>{{$v['i_id']}}</td>
                    <td>
					@if($v['i_distinguish'])
						<font color="red">+ {{$v['i_num']}}</font>
					@else
						<font color="green">- {{$v['i_num']}}</font>
					@endif
					</td>
                    <td>{{$v['i_reason']}}</td>
                    <td>{{$v['i_time']}}</td>
                </tr>
                @endforeach
            @else
              <tr><td colspan="8" align="center" style="font-weight:bold; color:#FF6600;">目前没有点评记录</td></tr>
            @endif
        </table>

    </div>
</div>

</div>  </div>  </div>

