﻿<!DOCTYPE html>
<html><head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>帐号登录 - 惠玩国际</title>
    <link href="./home/login/login-popup_data/login_popup_v2.css" rel="stylesheet" type="text/css">
</head>
<body style="background: url('./home/login/30.jpg')">
<form action="{{URL("bloin")}}" method="post" onsubmit="return check_all()">
    <input name="url" type="hidden" value="{{ $url }}"/>
    <input name="sid" type="hidden" value="{{ $sid }}"/>
    <div class="login-popup-box">
        <div class="login-box">
            <div class="errer-info hide"></div>
            <h2>登录惠玩国际</h2>
            <p>在惠玩国际可以查找攻略，分享旅行，结识朋友</p>
            <div class="login-input">
                <input name="name" placeholder="您的邮箱/手机号" onblur="return check_name()"  data-verification-name="帐号" class="verification[required,funcCall[checkShowCode]" type="text">
            </div>
            <span id="names"></span>
            <div class="login-input">
                <input name="pwd" placeholder="您的密码" onblur="return check_pwd()" data-verification-name="密码" class="verification[required]" type="password">
            </div>
            <span id="pwds"></span>
            <input type="hidden" name="_token" value="{{csrf_token()}}" />
            <div class="login-buttons">
                <button type="submit">登录</button>
                <span><a href="">忘记密码?</a></span>
            </div>

        </div>
        <div class="connect-box">
            <h3>用合作网站账户直接登录：</h3>
            <div class="connect-buttons">
                <a href="https://passport.mafengwo.cn/qq" class="qq"><i></i>QQ直接登录</a>
                <a href="https://passport.mafengwo.cn/weibo" class="weibo"><i></i>微博直接登录</a>
                <a href="https://passport.mafengwo.cn/wechat" class="weixin"><i></i>微信直接登录</a>
            </div>
            <div class="regist-link">还没有注册？<a href="register">立即注册&gt;&gt;</a></div>
        </div>
    </div>
</form>

<script language="javascript" src="./home/login/login-popup_data/jspluginsjquery.js" type="text/javascript"></script>

</body></html>
<script src="./home/jq.js"></script>
<script>
    /**
     * 登陆验证
     */
    function check_all(){
        if(check_name()||check_pwd()){
            return true;
        }else{
            return false
        }
    }
    /**
     * 用户名验证
     */
    function check_name(){
        var name=$("input[name=name]").val();
        var pwd=$("input[name=pwd]").val();
        var names=document.getElementById("names");
        var tok=$("input[name=_token]").val();
        if(name=="" || name==null){
            names.innerHTML="<font style='color: red'>用户名不能为空！</font>";
            return false;
        }else{
            $.post("uname",{username:name,pwd:pwd,_token:tok},function(msg){
                if(msg==1){
                    names.innerHTML="<font style='color: red'>用户名输入有误！</font>";
                    return false;
                }else{
                    names.innerHTML="<font style='color: red'>ok！</font>";
                    return true;
                }
            })
        }
    }
    /**
     * 密码验证
     */
    function check_pwd(){
        var pwd=$("input[name=pwd]").val();
        var pwds=document.getElementById("pwds");
        if(pwd=="" || pwd==null){
            pwds.innerHTML="<font style='color: red'>密码不能为空！</font>";
            return false;
        }else{
            pwds.innerHTML="<font style='color: red'>ok！</font>";
            return true;
        }
    }
</script>
