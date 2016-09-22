@include("admin/index/index")
<div class="public-ifame-content">
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台欢迎页</title>
	<link rel="stylesheet" href="../admin/css/reset.css" />
	<link rel="stylesheet" href="../admin/css/content.css" />
</head>
<body marginwidth="0" marginheight="0">
	<div class="container">

		<div class="public-content">
			<div class="public-content-header">
				<h3>修改网站配置</h3>
			</div>
			<div class="public-content-cont">
				<table class="public-cont-table">
					<tr>
						<th style="width:2%">评论编号</th>
						<th style="width:2%">景点图</th>
						<th style="width:5%">评论景点</th>
						<th style="width:5%">评论内容</th>
						<th style="width:5%">评论时间</th>
						<th style="width:5%">评论所获积分</th>
						<th style="width:5%">评论人</th>
						<th style="width:5%">评论状态</th>
					</tr>
					@foreach($examine as $v)
					<tr id="yi{{ $v->tr_id }}">
						<td>{{$v->tr_id}}</td>
						<td><img class="thumb" src="../home/images/{{$v->s_img}}" width="30px" height="30px" /></td>
						<td>{{$v->s_name}}</td>
						<td>{{$v->comment_name}}</td>						
						<td>{{$v->comment_time}}</td>
						@if(($v->to_examine)==1)
						<td>{{$v->comment_integral}}</td>
						@elseif(($v->to_examine)==0)
						<td onclick="dians({{ $v->tr_id }})" id="he{{ $v->tr_id }}">              
	                        <input type="text" id="aa{{$v->tr_id}}" value="{{$v->comment_integral}}" style="display:none" onblur="gai({{$v->tr_id}})">
	                        <span id="s{{$v->tr_id}}">{{$v->comment_integral}}</span>
                        </td>
						@endif
						<td>{{$v->user}}</td>						
						<td id="sen{{ $v->tr_id }}">
						@if(($v->to_examine)==1)
							<a>已审核</a>
						@elseif(($v->to_examine)==0)
							<a href="javascript:void(0)" onclick="toExamine({{ $v->tr_id }})">未审核/不合格</a>
						@endif
						</td>
					</tr>
					@endforeach
				</table>
				<!-- <div class="page">
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
				</div> -->
			</div>
		</div>
	</div>
</body>
</html>
</div>
<script src="../admin/js/jquery.min.js"></script>
<script>
	//审核用户评论
	function toExamine(examineId){
		 $.ajax({
            type:"get",
            url:"{{URL('admin/examine')}}",
            data:"examineId="+examineId,
            success:function(exa){
            	$("#sen"+examineId).html("已审核");
            	//$("#he"+examineId).html("{{$v->comment_integral}}");
            }
         })
	}
    //即点即改
    function dians(tr_id){
        $("#aa"+tr_id).show();
        $("#aa"+tr_id).focus();
        $("#s"+tr_id).hide();
    }
    function gai(tr_id){
        var vals=$("#aa"+tr_id).val();//span name值
        $.ajax({
            type:"get",
            url:"{{URL('admin/jgaiExamine')}}",
            data:"s_id="+tr_id+"&&vals="+vals,
            success:function(data){
                if (data == 1) {
                    $("#s"+tr_id).show();
                    $("#aa"+tr_id).hide();
                    $("#s"+tr_id).html(vals);
                }else{
                    $("#s"+tr_id).show();
                    $("#aa"+tr_id).hide();
                    $("#s"+tr_id).html(vals);
                }
            }
        })
    }
</script>