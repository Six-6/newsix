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
                @foreach($user as $v)
                <tr>
                    <td><input type="checkbox"></td>
                    <td>{{$v->u_id}}</td>
                    <td>{{$v->u_name}}</td>
                    <td><span style="color:#6bc095">{{$v->rname}}</span></td>
                    <td>{{$v->u_phone}}</td>
                    <td>{{$v->u_email}}</td><td>
                    @if(empty($v->path))
                        <img class="thumb" src="./images/thumb.jpg" />
                    @else
                       <img class="thumb" src="./upload/{{$v->path}}" />
                    @endif
                    </td>
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
                <form action="" method="get">
                    共<span>42</span>个站点
                    <a href="">首页</a>
                    <a href="">上一页</a>
                    <a href="">下一页</a>
                    第<span style="color:red;font-weight:600">12</span>页
                    共<span style="color:red;font-weight:600">120</span>页
                    <input type="text" class="page-input">
                    <input type="submit" class="page-btn" value="跳转">
                </form>
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