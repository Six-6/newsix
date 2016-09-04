<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台欢迎页</title>
	<link rel="stylesheet" href="../admin/css/reset.css" />
	<link rel="stylesheet" href="../admin/css/public.css" />
	<link rel="stylesheet" href="../admin/css/content.css" />
</head>
<body marginwidth="0" marginheight="0">
	<div class="container">
		<div class="public-nav">您当前的位置：<a href="">管理首页</a>></div>
		<div class="public-content">
			<div class="public-content-header">
				<h3>修改网站配置</h3>
			</div>
			<div class="public-content-cont">
			    <form method="post" action="{{URL('admin/uploas')}}" enctype="multipart/form-data">
				<div class="form-group">
					<label for="">请选择分类</label>
					<select name="" class="form-select">
			    		@foreach($arr as $s=>$k)
						<option id='types' value="{{ $k->r_id }}" />&nbsp;{{ $k->r_region }}</option>
					    @endforeach
					</select>

				</div>
				<div class="form-group">
					<label for="">风景名</label>
					<input class="form-input-txt" type="text" name="SiteName" id="SiteName" value="" onblur="SiteName2()" />
					<span id="fj"></span>
				</div>
				<div class="form-group">
					<label for="">往返交通</label>
					<input class="form-input-txt" type="text" name="traffic" id="traffic" value="" onblur="traffic2()"/>
				</div>
				<div class="form-group">
					<label for="">旅游价格</label>
					<input class="form-input-txt" type="text" name="sprice" id="sprice" value="" onblur="sprice2()"/>
				</div>
				<div class="form-group">
					<label for="">旅游天数</label>
					<input class="form-input-txt" type="text" name="day" id="day" value="" onblur="day2()" />
				</div>
				<div class="form-group">
					<label for="">发布人</label>
					<input class="form-input-txt" type="button" name="username" id="username" value="{{Session::get('username')}}" />
				</div>
				<div class="form-group">
					<label for="">图</label>
    				<input type="hidden" name="_token" value="{{csrf_token()}}" />
					<div class="file"><input type="file" name="file" id="file" />选择文件</div>
					<!-- <div class="file"><input type="submit" class="form-input-file"/>上传</div> -->
				</div>
				<br>
				<div style="margin-left:150px;">
					<!-- <input type="button" class="sub-btn" onclick="addway()" value="提  交" /> -->
					<input type="submit" class="sub-btn" value="提  交" />
					<input type="reset" class="sub-btn" value="重  置" />
				</div>
				</form>
			</div>
		</div>
	</div>
<script src="../admin/kingediter/kindeditor-all-min.js"></script>
<script src="../admin/js/laydate.js"></script>
<script>
	 KindEditor.ready(function(K) {
                window.editor = K.create('#editor_id');
        });
</script>
<script src="../assets/js/jquery-2.1.4.min.js"></script>
<script>
	function SiteName2(){
		var SiteName=$("#SiteName").val();
		if (SiteName=='') {
			alert("风景名不能为空");
		}
	}
	function traffic2(){
		var traffic=$("#traffic").val();
		if (traffic=='') {
			alert("往返交通不能为空");
		}
	}
	function sprice2(){
		var sprice=$("#sprice").val();
		if (sprice=='') {
			alert("价格不能为空");
		}
	}
	function day2(){
		var day=$("#day").val();
		if (day=='') {
			alert("旅游时间不能为空");
		}
	}
	function addway(){
	var types=$("#types").val();
	var SiteName=$("#SiteName").val();
	var traffic=$("#traffic").val();
	var day=$("#day").val();
	var files=$("#files").val();
	if(types==''||SiteName==''||traffic==''||day==''||files==''){
		alert("不能为空");
	}else{
		$.ajax({
			type:'get',
			url:"{{URL('admin/addway')}}",
			data:"types="+types+"&&SiteName="+SiteName+"&&traffic="+traffic+"&&day="+day+"&&files="+files,
			success:function(msg){
				if (msg==1) {
					location.href="{{URL('admin/waysel')}}"
				}else{
					alert("添加失败");
				}
			}
		});
	}
	}
</script>
</body>
</html>