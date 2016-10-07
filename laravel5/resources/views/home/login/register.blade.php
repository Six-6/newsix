<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>帐号注册 - 蚂蜂窝</title>
    <link href="./home/login/login_v2.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="./home/login/jsglobaljson2jsm.js" type="text/javascript"></script>
</head>
<body>
<div class="wrapper">
    <div class="container">
        <a href="http://www.mafengwo.cn/" title="返回首页" class="logo">蚂蜂窝</a>
        <div class="signup-forms">
            <div class="signup-box">
                <div class="add-info">
                    <div class="hd">帐号注册</div>
                    <form action="/regist/mobile" method="post" id="_j_signup_mobile_form">
                        <input name="mobile" value="18763297980" type="hidden">
                        <div class="form-field m-t-10">
                            <input name="name" placeholder="您的名号" autocomplete="off" data-verification-name="名号" class="verification[required]" type="text">
                            <div class="err-tip"></div>
                        </div>
                        <div class="form-field">
                            <input name="password" placeholder="您的密码" autocomplete="off" data-verification-name="密码" class="verification[required,minSize[6],maxSize[50]]" type="password">
                            <div class="err-tip"></div>
                        </div>
                        <div class="form-field">
                            <input name="rpassword" placeholder="确认密码" autocomplete="off" data-verification-name="密码" class="verification[equals[password]]" type="password">
                            <div class="err-tip"></div>
                        </div>
                        <div class="form-field">
                            <div class="clearfix">
                                <a href="#" class="vcode-send verify-code-send"><img src="./home/login/verifyCode.jpg"></a>
                                <input name="code" placeholder="验证码" autocomplete="off" data-verification-name="验证码" class="vcode-input verification[required,funcCall[checkCode]]" type="text">
                            </div>
                            <div class="err-tip clearfix"></div>
                        </div>
                        <div class="form-field">
                            <div class="clearfix">
                                <a href="#" class="vcode-send sms-code-send">免费获取验证码</a>
                                <input name="smscode" placeholder="短信验证码" autocomplete="off" data-verification-name="短信验证码" class="vcode-input verification[required,funcCall[checkSMSCode]]" type="text">
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
    $(".submit-btn").click(function() {
        var phone = $("input[name=phone]").val();
        $.ajax({
            type: "GET",
            url: "phones",
            data: {phone: phone},
            dataType: "json",
            success: function (msg) {
                //alert(msg);
                $(".signup-box").html(msg);
            }
        });
    });
</script>
<script>
    /**
     * 注册验证
     */
    function check_all() {
        if (check_name() || check_pwd() || check_email() || check_phone()) {
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
        $.post("onregister", {name: name}, function (msg) {
            if (msg == 0) {
                names.innerHTML = "<font style='color: red'>用户名已经被注册！</font>";
                return false;
            }
        })
        return true;
    }
    /**
     * 手机号验证
     */
    function check_phone() {
        var phone = $("input[name=phone]").val();
        var phones = document.getElementById("phones");
        if (phone == "" || phone == null) {
            phones.innerHTML = "<font style='color: red'>手机号不能为空！</font>";
            return false;
        }
        if (!phone.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) {
            phones.innerHTML = "<font style='color: red'>手机号格式不对！</font>";
            return false;
        }
        $.post("onregister", {phone: phone}, function (msg) {
            if (msg == 0) {
                names.innerHTML = "<font style='color: red'>手机号已经被注册！</font>";
                return false;
            }
        })
        return true;
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
        } else if (strlen(pwd) < 6) {
            pwds.innerHTML = "<font style='color: red'>密码不能低于6位！</font>";
            return false;
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
        }
    }
</script>