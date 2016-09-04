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
		<div class="public-nav">您当前的位置：<a href="">管理首页</a>><a href="">信息列表</a></div>
		<div class="public-content">
			<div class="public-content-header">
				<h3 style="display: inline-block;">修改网站配置</h3>
				<div class="public-content-right fr">
					<a href="" style="height: 24px; width: 60px;border: 1px solid #ccc;font-size: 12px;text-align:center">添加信息</a>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="public-content-cont two-col">
				<!-- <div class="public-cont-left col-1">
					<div class="public-cont-title">
						<h3>信息分类</h3>
					</div>
					<ul class="public-cate-list">
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
						<li class="public-cate-item"><a href="#">+轻松一刻</a></li>
					</ul>
				</div>
				 -->
				<table class="public-cont-table col-2">
					<tr>
						<th style="width:5%">选择</th>
						<th style="width:5%">类型</th>	
						<th style="width:5%">所属类型</th>					
						<th style="width:15%">操作</th>
					</tr>
					@foreach($typearr as $v)
					<tr id="dds{{$v->r_id}}">
						<td><input type="checkbox" /></td>
						<!-- <td><span style="color:#999">{{$v->r_region}}</span></td> -->
						<td onclick="dians({{ $v->r_id }})">              
	                        <input type="text" id="aa{{$v->r_id}}" value="{{$v->r_region}}" style="display:none" onblur="gai({{$v->r_id}})">
	                        <span id="s{{$v->r_id}}">{{$v->r_region}}</span>
                        </td>
						<td><span style="color:#999">{{$names}}</span></td>
						<td>
							<div class="table-fun">
								<input type="button" onclick="del({{$v->r_id}})" value="删除"> 
							</div>
						</td>
					</tr>
					@endforeach
				</table>
			</div>
		</div>
	</div>
</body>
</html>
<script src="../assets/js/jquery-2.1.4.min.js"></script>
<script>
	function del(id){
		$.ajax({
			type:'get',
			url:"{{URL('admin/delsmall')}}",
			data:"id="+id,
			success:function(msg){
				if (msg == 1) {
					$("#dds"+id).remove();
				};
			}
		});
	}
    //即点即改
    function dians(s_id){
        $("#aa"+s_id).show();
        $("#aa"+s_id).focus();
        $("#s"+s_id).hide();
    }
    function gai(s_id){
        var vals=$("#aa"+s_id).val();//span name值
        $.ajax({
            type:"get",
            url:"{{URL('admin/jgaitypes')}}",
            data:"s_id="+s_id+"&&vals="+vals,
            success:function(data){
                if (data == 1) {
                    $("#s"+s_id).show();
                    $("#aa"+s_id).hide();
                    $("#s"+s_id).html(vals);
                }else{
                    alert("修改失败");
                }
            }
        })
    }
</script>