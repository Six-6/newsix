@include("home/common/left");

<div id="main">
    <div class="common_head cf">
        <h2>我的点评</h2>

        <div class="tabBox">
            <div id="tab_1">
                <ul class="order_cate">
                    <li class="csel"><a id="all"  href="javascript:void(0)">景点点评</a></li>
                </ul>
            </div>

        </div>
    </div>
    <div class="tabContent">
        <table cellpadding="0" cellspacing="0" border="0" class="common-table mbt10" width="750">
            <tr>
                <th width="40" scope="col">订单号</th>
                <th width="30" scope="col">景点图</th>
                <th width="100" scope="col">景点名称</th>
                <th scope="col" align="left">点评内容</th>
                <th width="120" scope="col">点评时间</th>
                <th width="60" scope="col">评论状态</th>
                <th width="80"  scope="col">获得积分</th>
            </tr>
            @if($recorddata)
                @foreach($recorddata as $v)
                <tr>
                    <td>{{$v['tr_id']}}</td>
                    <td><img src="../home/images/{{$v['s_img']}}" white="30px" height="30px" alt="景点图"></td>
                    <td>{{$v['s_name']}}</td>
                    <td>{{$v['comment_name']}}</td>
                    <td>{{$v['comment_time']}}</td>
                    <td >
                        @if($v['comment_state']==0)
                            旅游中。。。
                        @else
                            旅游结束
                        @endif
                    </td>
                    <td>{{$v['comment_integral']}}</td>
                </tr>
                @endforeach
            @else
              <tr><td colspan="8" align="center" style="font-weight:bold; color:#FF6600;">目前没有点评记录</td></tr>
            @endif
        </table>

    </div>
</div>

</div>  </div>  </div>

