@include("home/common/left");
<div id="main">
            <div class="common_head cf">
                                <h2>酒店订单</h2>
                                <input type="hidden" name="create_type_flag" id="create_type_flag" value="4"></input>
                <div class="tabBox">
                    <div id="tab_1">
                        <ul class="order_cate">
                            <li class="csel"><a id="all"  href="{{URL('home/publishs')}}">写游记</a></li>

                        </ul>
                    </div>

                </div>
            </div>
            <div class="tabContent">
               <table cellpadding="0" cellspacing="0" border="0" class="common-table mbt10" width="750">
            <tr>
                <th width="150" scope="col">发表时间</th>
                <th width="350" scope="col">标题</th>
                 <th width="70" scope="col">积赞</th>
                <th scope="70" align="left">评论次数</th>
                <th scope="70" align="left">状态</th>
            </tr>
            @if(!empty($data['myyou']))
            @foreach($data['myyou'] as $v)
            <tr>                      
                <td>{{$v['t_times']}}</td>
                <td><a style="text-decoration:none" href="{{URL('home/details')}}?sid={{$v['tt_id']}}">{{$v['t_title']}}</a></td>
                <td>{{$v['t_zambia']}}</td>
                <td>{{$v['t_commentint']}}</td>
                <td >
                    @if($v['t_state']==0)
                       <span style="color:red">待审核</span>
                    @else
                       <span style="color:green">已审核</span>
                    @endif
                </td>                                            
            </tr>
            @endforeach
            @else
  <tr><td colspan="8" align="center" style="font-weight:bold; color:#FF6600;">你还没有游记<a href="{{URL('home/publishs')}}">快去写</a></td></tr>
            @endif
    </table>

            </div>
        </div>

 </div> </div> </div>
