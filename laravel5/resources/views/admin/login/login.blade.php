<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title></title>
	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/login.css" />
</head>
<body>
<div class="page">
	<div class="loginwarrp">
		<div class="logo">管理员登陆</div>
        <div class="login_form">
			<form id="Login" name="Login" method="post" onsubmit="return dl()" action="loin">
                <input type="hidden" name="_token" value="{{csrf_token()}}" />
				<li class="login-item">
					<span>用户名：</span>
					<input type="text" onblur="names()" name="u_name" id='na' class="login_input">
					
				</li>
				<span id="sp"></span>
				<li class="login-item">
					<span>密　码：</span>
					<input type="password" onblur="pwds()" name="u_pwd" id='pwd' class="login_input">
					
				</li>
				<span id="sppwd"></span>
				<div class="clearfix"></div>
				<li class="login-sub">
					<input type="submit" name="Submit" value="登录" />
				</li>                      
           </form>
		</div>
	</div>
</div>
</body>
</html>
<script src="js/jquery1.8.js"></script>
<script>
    function names()
    {
        var name=$("#na").val();
        if(name=='')
        {
            $("#sp").html('用户名不能为空');
            return false;
        }else
        {
            var r_name=/^[a-z]\w{5,17}$/i;
            if(!r_name.test(name))
            {
                 $("#sp").html('用户名由6-18位的字母数字下划线组成，不能由数字开头');
                 return false;
            }
            else
            {
                $("#sp").html('可用');
                return true;
            }
            
        }
    }
     function pwds()
    {
        var pwd=$("#pwd").val();
        if(pwd=='')
        {
            $("#sppwd").html('密码不能为空');
            return false;
        }else
        {
            var r_pwd=/^\w{6,}$/;
            if(!r_pwd.test(pwd))
            {
                 $("#sppwd").html('密码不能少于六位');
                 return false;
            }
            else
            {
                $("#sppwd").html('可用');
                return true;
            }
            
        }
    }
    function dl( )
    {
        if(names()&&pwds())
        {
            return true;
        }else
        {
            return false;
        }
    }
</script>