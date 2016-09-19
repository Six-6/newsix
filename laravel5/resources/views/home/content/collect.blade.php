@include("home/common/left");
<style>
        *{ margin:0; padding:0; list-style:none;}
        a{ text-decoration:none;}
        a:hover{ text-decoration:none;}
        .tcdPageCode{padding: 15px 20px;text-align: left;color: #ccc;}
        .tcdPageCode a{display: inline-block;color: #428bca;display: inline-block;height: 25px; line-height: 25px;  padding: 0 10px;border: 1px solid #ddd; margin: 0 2px;border-radius: 4px;vertical-align: middle;}
        .tcdPageCode a:hover{text-decoration: none;border: 1px solid #428bca;}
        .tcdPageCode span.current{display: inline-block;height: 25px;line-height: 25px;padding: 0 10px;margin: 0 2px;color: #fff;background-color: #428bca; border: 1px solid #428bca;border-radius: 4px;vertical-align: middle;}
        .tcdPageCode span.disabled{ display: inline-block;height: 25px;line-height: 25px;padding: 0 10px;margin: 0 2px; color: #bfbfbf;background: #f2f2f2;border: 1px solid #bfbfbf;border-radius: 4px;vertical-align: middle;}
        </style>
<div id="main">
    <div class="common_head cf">
        <h2>我的收藏</h2>
    </div>
    <div class="tabContent">

        <table cellpadding="0" cellspacing="0" border="0" class="common-table mbt10" width="750">
            <tr>
                <th width="40" scope="col">景点编号</th>
                <th width="30" scope="col">景点图</th>
                <th width="100" scope="col">景点名称</th>
                <th scope="col" align="left">景点简介</th>
                <th width="60" scope="col">交通方式</th>
                <th width="80"  scope="col">网购优惠</th>
                <th width="100" scope="col">发布时间</th>
                <th width="60" scope="col">操作</th>
            </tr>
            @if($collect)
                @foreach($collect as $k=>$j)
                <tr id="qux{{$j['s_id']}}">
                    <td>{{$j['s_id']}}</td>
                    <td><img src="../home/images/{{$j['s_img']}}" white="30px" height="30px" alt="景点图"></td>
                    <td>{{$j['s_name']}}</td>
                    <td>{{$j['s_characteristic']}}</td>
                    <td>{{$j['s_traffic']}}</td>
                    <td>{{$j['s_sprice']}}</td>
                    <td>{{$j['s_times']}}</td>
                    <td><a href="javascript:void(0)" onclick="qux({{$j['s_id']}})">取消收藏</a></td>
                </tr>
                @endforeach
            @else
              <tr><td colspan="8" align="center" style="font-weight:bold; color:#FF6600;">目前没有收藏记录</td></tr>
            @endif
        </table>
        
        <input type="hidden" id="pages" value="{{$nums}}">
        <input type="hidden" id="pageday" value="{{$p}}">        
        <div class="tcdPageCode"></div>
        
    </div>
</div>

</div>  </div>  </div>
<script src="assets/js/jquery-2.1.4.min.js"></script>
<script src="http://www.lanrenzhijia.com/ajaxjs/jquery.min.js"></script>
<script src="http://www.lanrenzhijia.com/ajaxjs/jquery.page.js"></script>
<script>
    /**
     * 分页
     * [pages description]
     * @type {[type]}
     */
    var pages=$("#pages").val();
    var pageday=$("#pageday").val();
    $(".tcdPageCode").createPage({
        pageCount:pages,//总页数
        current:pageday,  //当前页
        backFn:function(p){
            //单击回调方法，p是当前页码
            location.href="{{URL('home/collect')}}?p="+p;
            //console.log(p);
        }
    });

    /**
     * @取消收藏
     * @return
     */
    function qux(xid){
        $.get('cancel',{'xid':xid},function(msg){
            if ( msg == 1 ) {
                $("#qux"+xid).remove();
            }else{
                alert("取消失败");
            }
        })
    }
</script>
        
        
        