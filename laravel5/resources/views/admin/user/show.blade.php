@include("admin/index/index")
<div class="public-ifame-content">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>后台欢迎页</title>
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/content.css" />
</head>
<body marginwidth="0" marginheight="0">
<div class="container">

    <div class="public-content">
        <div class="public-content-header">
            <h3>管理员信息展示</h3>
        </div>
        <div class="public-content-cont">
            <input type="hidden" name="_token" id="token" value="{{csrf_token()}}" />
            <table class="public-cont-table">
                <tr>
                    <th style="width:5%">选择</th>
                    <th style="width:10%">ID</th>
                    <th style="width:10%">管理员名称</th>
                    <th style="width:10%">管理员角色</th>
                    <th style="width:10%">手机号</th>
                    <th style="width:10%">邮箱</th>
                    <th style="width:20%">头像</th>
                    <th style="width:10%">修改时间</th>
                    <th style="width:20%">操作</th>
                </tr>
                @foreach($data["data"] as $v)
                <tr>
                    <td><input type="checkbox"></td>
                    <td>{{$v->u_id}}</td>
                    <td>{{$v->u_name}}</td>
                    <td><span style="color:#6bc095">{{$v->rname}}</span></td>
                    <td>{{$v->u_phone}}</td>
                    <td>{{$v->u_email}}</td>
                    @if(empty($v->path))
                        <td>
                        <img class="thumb" src="./images/thumb.jpg" />
                            </td>
                    @else
                        <td>
                       <img class="thumb" src="./upload/{{$v->path}}" />
                        </td>
                    @endif
                    <td>{{$v->u_time}}</td>
                    <td>
                        <div class="table-fun">
                            <a href="userInfo?id={{$v->u_id}}">完善</a>
                                <a href="userDel?id={{$v->u_id}}">删除</a>
                        </div>
                    </td>
                </tr>
                @endforeach
            </table>
            <div class="page">
                <div class="page-bottom">
                    <a rel="nofollow" href="">一共{{$data['mexpage']}}页</a>
                    <a rel="nofollow" href="">第{{$data['page']}}页</a>
                    <a rel="nofollow" href="{{$data['url']}}?page=1">首页</a>
                    <a rel="nofollow" href="{{$data['url']}}?page={{$data['page']-1}}">上一页</a>
                    <a rel="nofollow" href="{{$data['url']}}?page={{$data['page']+1}}">下一页</a>
                    <a rel="nofollow" href="{{$data['url']}}?page={{$data['mexpage']}}">末页</a>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
    </div>
<script src="./jq.js"></script>
<script>
    $(".perfect").click(function(){
        var _this=$(this);
        var token=$("#token").val();
        var id=$(this).attr("id");
        $.post("userInfo",{id:id,_token:token},function(msg){
           _this.html(msg);
        });
    });
</script>