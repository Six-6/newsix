<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/public.css">
</head>
<body>
<div class="public-header-warrp">
    <div class="public-header">
        <div class="content">
            <div class="public-header-logo"><a href=""><i>LOGO</i>
                    <h3>拓源网络科技</h3></a></div>
            <div class="public-header-admin fr">
                <p class="admin-name">{{$name}}管理员 您好！</p>

                <div class="public-header-fun fr">
                    <a href="" class="public-header-man">管理</a>
                    <a href="javascript:void(0)" onclick="unsession()" class="public-header-loginout">安全退出</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<!-- 内容展示 -->
<div class="public-ifame mt20">

    <div class="content" style="height: 550px">
        <!-- 左侧导航栏 -->
        <div class="public-ifame-leftnav">
            <div class="public-title-warrp">
                <div class="public-ifame-title ">
                    <a href="in">首页</a>
                </div>
            </div>
            <ul class="left-nav-list">
                @foreach($ar as $val)
                    <li class="public-ifame-item">
                        <a href="javascript:;">{{$val->pname}}</a>
                        <div class="ifame-item-sub">
                            <ul>
                                @if(!empty($val->child))
                                    @foreach($val->child as $va)
                                        @if(!empty($va->pname))
                                            <li class="active"><a href="{{URL($va->p_url)}}">{{$va->pname}}</a></li>
                                        @endif
                                    @endforeach
                                @endif
                            </ul>
                        </div>
                    </li>
                @endforeach
            </ul>
        </div>
        <!-- 右侧内容展示部分 -->
        <div class="public-ifame-content">

        </div>
    </div>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/jquery1.8.js"></script>
<script>
    $().ready(function () {
        var item = $(".public-ifame-item");

        for (var i = 0; i < item.length; i++) {
            $(item[i]).on('click', function () {
                $(".ifame-item-sub").hide();
                if ($(this.lastElementChild).css('display') == 'block') {
                    $(this.lastElementChild).hide()
                    $(".ifame-item-sub li").removeClass("active");
                } else {
                    $(this.lastElementChild).show();
                    $(".ifame-item-sub li").on('click', function () {
                        $(".ifame-item-sub li").removeClass("active");
                        $(this).addClass("active");
                    });
                }
            });
        }
    });
    function unsession() {
        location.href = 'unsession';
    }
</script>
<!-- </body>
</html> -->




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