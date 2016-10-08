<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>帐号注册 - 惠玩国际</title>
    <link href="./home/login/login_v2.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="./home/login/jsglobaljson2jsm.js" type="text/javascript"></script>
</head>
<body>
<div class="wrapper">
    <div class="container">
        <a href="http://www.mafengwo.cn/" title="返回首页" class="logo">惠玩国际</a>
        <div class="signup-forms">
            <div class="signup-box">
                <div class="add-info" >
                    <div class="hd">帐号注册</div>
                    <form action="onregister" method="post" onsubmit="return check_all()">
                       <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <div class="form-field m-t-10">
                            <input name="name" placeholder="您的名号" onblur="check_name()" type="text">
                            <span id="names"></span>
                        </div>
                        <div class="form-field">
                            <input name="pwd" placeholder="您的密码" onblur="check_pwd()" type="password">
                            <span id="pwds"></span>
                        </div>
                        <div class="form-field">
                            <input name="phone" placeholder="输入手机号" onblur="check_phone()" type="text">
                            <span id="phones"></span>
                        </div>
                        <div class="form-field">
                            <input type="hidden" name="_token" value="{{csrf_token()}}" />
                            <div class="clearfix">
                                <a id="aa" style="cursor: pointer; font-weight: bold; color: #ffa800"  class="vcode-send verify-code-send">免费获取验证码</a>
                                <input id="smscode" placeholder="短信验证码" class="vcode-input verification[required,funcCall[checkSMSCode]]" type="text">
                            </div>
                            <div class="err-tip clearfix"></div>
                        </div>

                        <div class="submit-btn">
                            <button type="submit">完成注册</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script language="javascript" src="./home/login/jquery-1.js" type="text/javascript"></script>

<script language="javascript" src="./home/login/jspluginsjquery.js" type="text/javascript"></script>


<script language="javascript" src="./home/login/jsmfw.js" type="text/javascript"></script>

<img src="./home/login/24.jpg" style="width: 1366px; height: auto; margin-top: -148px;"></body>
</html>
<script src="./home/jq.js"></script>
<script>
    /**
     * 手机号
     */
    $("#aa").click(function(){
        var tok=$("input[name=_token]").val();
        var phone = $("input[name=phone]").val();
        $.ajax({
            url:'num',
            data:{'phone':phone,_token:tok},
            type:"POST",
            dataType:"Json",
            success:function(msg){
                if(msg['stat']=='100'){
                    alert('短信发送成功了');
                }else{
                    alert('短信发送失败了');
                }
            }
        });
    });
    /**
     * 注册验证
     */
    function check_all() {
        if (check_name() && check_pwd() && check_phone()) {
            return false;
        } else {
            return true
        }
    }
    /**
     * 用户名验证
     */
    function check_name() {
        var name = $("input[name=name]").val();
        var names = document.getElementById("names");
        var tok=$("input[name=_token]").val();
        if (name == "" || name == null) {
            names.innerHTML = "<font style='color: red'>用户名不能为空！</font>";
            return false;
        }else{
            $.post("name", {name: name,_token:tok}, function (msg) {
                if (msg == 0) {
                    names.innerHTML = "<font style='color: red'>ok！</font>";
                    return true;
                }else if(msg==1){
                    names.innerHTML = "<font style='color: red'>用户名已经被注册！</font>";
                    return false;
                }
            })
        }
    }
    /**
     * 手机号验证
     */
    function check_phone() {
        var phone = $("input[name=phone]").val();
        var phones = document.getElementById("phones");
        var tok=$("input[name=_token]").val();
        if (phone == "" || phone == null) {
            phones.innerHTML = "<font style='color: red'>手机号不能为空！</font>";
            return false;
        }
        if (!phone.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) {
            phones.innerHTML = "<font style='color: red'>手机号格式不对！</font>";
            return false;
        }
        $.post("phone", {phone: phone,_token:tok}, function (msg) {
            if (msg == 1) {
                phones.innerHTML = "<font style='color: red'>手机号已经被注册！</font>";
                return false;
            }else if(msg==0){
                phones.innerHTML = "<font style='color: red'>ok！</font>";
                return true;
            }
        })

    }
    /**
     * 密码验证
     */
    function check_pwd() {
        var pwd = $("input[name=pwd]").val();
        var pwds = document.getElementById("pwds");
        if (pwd == "" || pwd == null) {
            pwds.innerHTML = "<font style='color: red'>密码不能为空！</font>";
            return false;
        } else if (pwd.length<6) {
            pwds.innerHTML = "<font style='color: red'>密码不能低于6位！</font>";
            return false;
        }else{
            pwds.innerHTML = "<font style='color: red'>ok！</font>";
            return true;
        }
    }
    /**
     * 邮箱验证
     */
    function check_email() {
        var email = $("input[name=email]").val();
        var emails = document.getElementById("email");
        if (email == "" || email == null) {
            emails.innerHTML = "<font style='color: red'>邮箱不能为空！</font>";
            return false;
        }else if(!isEmail(email)){
            emails.innerHTML = "<font style='color: red'>邮箱格式不对！</font>";
            return false;
        }else{
            emails.innerHTML = "<font style='color: red'>ok！</font>";
            return true;
        }}

    /**
     * 邮箱规则
     * @param str
     * @returns {boolean|*}
     */
    function isEmail(str){
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        return reg.test(str);
    }
</script>