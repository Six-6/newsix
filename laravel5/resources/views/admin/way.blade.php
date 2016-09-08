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
				<div class="public-cont-left col-1">
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
				<table class="public-cont-table col-2">
					<tr>
						<th style="width:5%">选择</th>
						<th style="width:5%">景点编号</th>
						<th style="width:35%">景点名称</th>
						<th style="width:5%">地区</th>
						<th style="width:5%">开始时间</th>
						<th style="width:5%">旅游天数</th>
						<th style="width:10%">交通工具</th>						
						<th style="width:15%">操作</th>
					</tr>
					@foreach($wayarr as $wayv)
					<tr>
						<td><input type="checkbox" /></td>
						<td>{{$wayv->s_id}}</td>						
						<td onclick="d({{$wayv->s_id}})"><img class="state-img" src="../image/{{$wayv->s_img}}" />{{$wayv->s_name}}</td>
						<td><span style="color:#6bc095">{{$wayv->r_region}}</span></td>
						<td><span style="color:#999">{{$wayv->s_times}}</span></td>
						<td><span style="color:#999">{{$wayv->s_day}}</span></td>
						<td><span style="color:#999">{{$wayv->s_traffic}}</span></td>
						<td>
							<div class="table-fun">
								<a href="">删除</a>
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
	function d(id){
		//alert(id);
		$.ajax({
			type:'get',
			url:"{{URL('admin/waydetail')}}",
			data:"id="+id,
			success:function(msg){
				alert(msg); 
			}
		});
	}
</script>