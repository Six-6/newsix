<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>后台欢迎页</title>
    <link rel="stylesheet" href="./css/reset.css"/>
    <link rel="stylesheet" href="./css/public.css"/>
    <link rel="stylesheet" href="./css/content.css"/>
</head>
<body marginwidth="0" marginheight="0">
<div class="container">
    <div class="public-nav">您当前的位置：<a href="">会员信息完善</a>></div>
    <div class="public-content">
        <div class="public-content-header">
            <h3>管理员添加</h3>
        </div>
        <div class="public-content-cont">
            <form action="infoAdd" method="post" onsubmit="return check()" enctype="multipart/form-data">
                <input type="hidden" name="_token" id="token" value="{{csrf_token()}}"/>
                @foreach($user as $v)
                    <div class="form-group">
                        <label for="">管理员角色</label><span
                                style="color: red; margin-top: 2px; font-size: 24px;">{{$v->rname}}</span>
                    </div>
                    <input type="hidden" name="id" value="{{$v->u_id}}"/>
                    <div class="form-group">
                        <label for="">管理员名称</label>
                        <input class="form-input-txt" type="text" onblur="return checkuname()" name="u_name" value="{{$v->u_name}}"/>
                        <span id="u_name"></span>
                    </div>
                    <div class="form-group">
                        <label for="">管理员密码</label>
                        <input class="form-input-txt" type="text" onblur="return checkpwd()" name="u_pwd" value="{{$v->u_pwd}}"/>
                        <span id="u_pwd"></span>
                    </div>
                @endforeach
                <div class="form-group">
                    <label for="">邮箱</label>
                    <input class="form-input-txt" onblur="return checkemail()" type="text" name="u_email" value="{{$v->u_email}}"/>
                    <span id="email"></span>
                </div>
                <div class="form-group">
                    <label for="">手机号</label>
                    <input class="form-input-txt" onblur="return checkphone()" type="text" name="u_phone" value="{{$v->u_phone}}"/>
                    <span id="phones"></span>
                </div>
                <div class="form-group">
                    <label for="">头像</label>

                    <div class="file"><input type="file" name="path"/>上传</div>
                </div>
                <div class="form-group">
                    <label for="">修改时间</label>
                    <input class="form-input-txt" name="u_time" value="{{$v->u_time}}"
                           onclick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})">
                </div>
                <div class="form-group" style="margin-left:150px;">
                    <input type="submit" class="sub-btn" value="提  交"/>
                    <input type="reset" class="sub-btn" value="重  置"/>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="./kingediter/kindeditor-all-min.js"></script>
<script src="./js/laydate.js"></script>
<script src="./jq.js"></script>
<script>
    KindEditor.ready(function (K) {
        window.editor = K.create('#editor_id');
    });
    /**提交验证**/
    function check() {
        if (checkuname() || checkpwd() || checkemail() || checkphone()) {
            return true;
        } else {
            return false;
        }
    }
    /**管理员验证**/
    function checkuname() {
        var uname = $("input[name=u_name]").val();
        var unames = document.getElementById("u_name");
        var tok = $("#token").val();
        if (uname.length < 3 || uname.length > 6) {
            unames.innerHTML = "<font color='red'>用户名长度为3-6位！</font>";
            return false;
        }
        $.post("checkUser", {user: uname, _token: tok}, function (msg) {
            var checku = $.parseJSON(msg);
            if (checku.success != true) {
                unames.innerHTML = "<font color='red'>用户名已存在！</font>";
                return false;
            }
        });
        unames.innerHTML = "<font color='green'>用户名可以使用</font>";
        return true;
    }
    /**密码验证**/
    function checkpwd() {
        var pwd = $("input[name=u_pwd]").val();
        var pwds = document.getElementById("u_pwd");
        if (pwd.length < 3 || pwd.length > 6) {
            pwds.innerHTML = "<font color='red'>密码长度为3-6位！</font>";
            return false;
        }
        pwds.innerHTML = "<font color='green'>密码可以使用</font>";
        return true;
    }
    ;
    /**邮箱验证**/
    function checkemail() {
        var email = $("input[name=u_email]").val();
        var emails = document.getElementById("email");
        if (!isEmail(email)) {
            emails.innerHTML = "邮箱格式不正确！";
            emails.style.color = "red";
            return false;
        }
        emails.innerHTML = "邮箱可以使用!";
        emails.style.color = "green";
        return true;
    }
    /**邮箱规则**/
    function isEmail(str) {
        var reg = /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/;
        return reg.test(str);
    }
    /**手机号验证**/
    function checkphone() {
        var u_phone=$("input[name=u_phone]").val();
        var phones=document.getElementById("phones");
        if(!u_phone){
            phones.innerHTML = "手机号不能为空!";
            phones.style.color = "red";
            return false;
        }
        if (!(/^1[3|4|5|7|8]\d{9}$/.test(u_phone))) {
            phones.innerHTML = "手机号格式不对!";
            phones.style.color = "red";
            return false;
        }
        phones.innerHTML = "手机号可以使用!";
        phones.style.color = "green";
        return true;
    }
</script>
</body>
</html>