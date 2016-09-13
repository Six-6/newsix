
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
				<h3 style="display: inline-block;">修改网站配置</h3>
				<div class="public-content-right fr">
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="public-content-cont two-col">

	<table class="public-cont-table col-2">
		<thead>
			<tr>
				<th>当季推荐标题</th>
			    <th>图片</th>
				<th>选择</th>
				<th>操作</th>
			</tr>
		</thead>
		@foreach($T_flig as $arrer)
		<form method="post" action="{{URL('admin/fileaddse')}}"  enctype="multipart/form-data">		
		<tr>
            <input type="hidden" name="_token" value="{{csrf_token()}}" />
            <input type="hidden" name="s_id" value="{{$arrer->s_id}}" />
			<td><input type="text" value="{{$arrer -> s_name}}" name="s_name"></td>		    
			<td><img width="100" height="100" src="{{$arrer -> s_image}}" name="file"></td>		    
			<td><input type="file" name="file"></td>		    
			<td><input type="submit" value="更换"></td>		    
		</tr>
		</form>
		@endforeach
	</table>
	
	<span id="ti"></span>
			</div>
		</div>
	</div>
</body>
</html>
</div>