<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>后台欢迎页</title>
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/public.css" />
    <link rel="stylesheet" href="./css/content.css" />
</head>
<body marginwidth="0" marginheight="0">
<div class="container">
    <div class="public-nav">您当前的位置：<a href="">管理员添加</a>></div>
    <div class="public-content">
        <div class="public-content-header">
            <h3>管理员添加</h3>
        </div>
        <div class="public-content-cont">
            <form action="userAdd" method="post" onsubmit="return check()">
                <input type="hidden" name="_token" id="token" value="{{csrf_token()}}" />
                <div class="form-group">
                    <label for="">请选择角色</label>
                    <select name="rid" class="form-select">
                        @foreach($user as $v)
                            <option value="{{$v->rid}}">{{$v->rname}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="">管理员名称</label>
                    <input class="form-input-txt" onblur="return checkuname()" type="text" name="u_name" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">管理员密码</label>
                    <input class="form-input-txt" onblur="checkpwd()" type="text" name="u_pwd" value="" />
                    <span id="u_pwd"></span>
                </div>
                <div class="form-group">
                    <label for="">录入时间</label>
                    <input class="form-input-txt" name="time" onclick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})">
                </div>
                <div class="form-group" style="margin-left:150px;">
                    <input type="submit" class="sub-btn" value="提  交" />
                    <input type="reset" class="sub-btn" value="重  置" />
                </div>
            </form>
        </div>
    </div>
</div>
<script src="./kingediter/kindeditor-all-min.js"></script>
<script src="./js/laydate.js"></script>
<script src="./jq.js"></script>
<script>
    KindEditor.ready(function(K) {
        window.editor = K.create('#editor_id');
    });
    /**提交验证**/
    function check(){
        if(checkuname() || checkpwd()){
            return true;
        }else{
            return false;
        }
    }
    /**管理员验证**/
    function checkuname(){
        var uname=$("input[name=u_name]").val();
        var unames=document.getElementById("u_name");
        var tok=$("#token").val();
        if(uname.length<3||uname.length>6){
            unames.innerHTML="<font color='red'>用户名长度为3-6位！</font>";
            return false;
        }
        $.post("checkUser",{user:uname,_token:tok},function(msg){
            var checku=$.parseJSON(msg);
            if(checku.success != true){
                unames.innerHTML="<font color='red'>用户名已存在！</font>";
                return false;
            }
        });
        unames.innerHTML="<font color='green'>用户名可以使用</font>";
        return true;
    }
    /**密码验证**/
    function checkpwd(){
        var pwd=$("input[name=u_pwd]").val();
        var pwds=document.getElementById("u_pwd");
        if(pwd.length<3 || pwd.length>6){
            pwds.innerHTML="<font color='red'>密码长度为3-6位！</font>";
            return false;
        }
        pwds.innerHTML="<font color='green'>密码可以使用</font>";
        return true;
    };
</script>
</body>
</html>