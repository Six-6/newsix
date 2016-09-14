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
					<a href="" style="height: 24px; width: 60px;border: 1px solid #ccc;font-size: 12px;text-align:center">添加信息</a>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="public-content-cont two-col">
				<table class="public-cont-table col-2">
		<thead>
			<tr>
				<th>旅游类型</th>
			    <th>查看小类</th>
				<th>小类管理</th>
				<th>删除</th>
			</tr>
		</thead>
		@foreach($arr as $k)
		<tr id="dds{{$k->r_id}}">

			<td onclick="dians({{ $k->r_id }})">
                <input type="text" id="a{{ $k->r_id }}" value="{{ $k->r_region }}" style="display:none" onblur="gai({{ $k->r_id }})">
                <span id="s{{ $k->r_id }}">{{ $k->r_region }}</span>
            </td>
		    <td>
		    	<select>
		    		<!-- <option  selected>/</option> -->
					@foreach($k->child as $v=>$c)
				    <option id='{{ $c->r_id }}' value="{{ $c->r_id }}" />&nbsp;{{ $c->r_region }}</option>
				    @endforeach
				</select>
			</td>
			<td>
			    <!-- <button type="button" onclick="types({{$k->r_id}})">
			    	<a href="javascript:void(0)" >
			    		管理小类
			    	</a>
			    </button> -->
			    <a href="{{URL('admin/types')}}?id={{$k->r_id}}&&name={{ $k->r_region }}" ><input type="button" value="管理小类"></a>
            </td>
			<td>
				<input type="button" onclick="delesp({{$k->r_id}})" value="删除">
			</td>
		</tr>
		@endforeach

	</table>
	<span id="ti"></span>
			</div>
		</div>
	</div>
</body>
</html>
</div>
<script src="../assets/js/jquery-2.1.4.min.js"></script>
<script>
	function types(id){
		$.ajax({
			type:'get',
			url:"{{URL('admin/types')}}",
			data:"id="+id,
			success:function(msg){
				alert(msg); 
				
			}
		});
	}
	//删除
	function delesp(rid){
		$.ajax({
			type:'get',
			url:"{{URL('admin/typedel')}}",
			data:"rid="+rid,
			success:function(msg){
				if (msg == 1) {
					alert("请先处理子分类");
				}else
				if (msg == 2) {
					$("#dds"+rid).remove();
				}else{
					alert("删除失败");
				}
			}
		})
	}
</script>