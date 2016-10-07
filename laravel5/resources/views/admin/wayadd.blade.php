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
						<td>景点图</td>
						<td><input type="files"></td>
					</tr>
					<tr>
						<td>风景名</td>
						<td><input type="text" name=""></td>
					</tr>
					<tr>
						<td>所在地区</td>
						<td>
						<select>
				    		<!-- <option  selected>/</option> -->
				    		@foreach($arr as $s=>$k)
							    <option id='{{ $k->r_id }}' value="{{ $k->r_id }}" />&nbsp;{{ $k->r_region }}</option>
						    @endforeach
						</select>
						</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
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