// JavaScript Document
var stop=0;
var Time=0; //设置时间　单位：秒
var h=0;
var m=0;
var s=0;
var handle=''; 





//add by gongxiaowei 2011-08-15
//验证用户名规则
function check_username(){
	var username=$("#username").val();
	username = username.replace(/(^\s*)|(\s*$)/g,'');
	if(username==''){
		$('#user-tip').removeClass('ok');
		$('#user-tip').addClass('err');
		$('#user-tip .input-tip-inner').html('<p>请输入用户名</p>');
		$('#user-tip .input-tip-inner').show();
		return false;
	}
	if(strlen(username)>20 || strlen(username)<5){
		$('#user-tip').removeClass('ok');
		$('#user-tip').addClass('err');
		$('#user-tip .input-tip-inner').html('<p>请输入5-20位字符</p>');
		$('#user-tip .input-tip-inner').show();
		return false;
	}
	if(new RegExp("^[a-zA-Z]{1}[a-zA-Z0-9_]{4,19}$").test(username) == false){
		$('#user-tip').removeClass('ok');
		$('#user-tip').addClass('err');
		$('#user-tip .input-tip-inner').html('<p>用户名格式错误</p>');
		$('#user-tip .input-tip-inner').show();
		return false;
	}
	//验证唯一性
	var url = $("#geturl").val()+"/users/Checkucname.php?username="+username+"&cache="+Math.random();
	$.get(url,function(result){
		if(result == '2'){
			$('#user-tip').removeClass('ok');
			$('#user-tip').addClass('err');
			$('#user-tip .input-tip-inner').html('<p>该用户名已经存在</p>');
			$('#user-tip .input-tip-inner').show();
		    document.getElementById('sub_username').value=0;
		    return false;
		}else{
			$('#user-tip').removeClass('err');
			$('#user-tip').addClass('ok');
			$('#user-tip .input-tip-inner').html('<p></p>');
			document.getElementById('sub_username').value=1;
			return true;
		}
	});
}

//验证昵称规则
function check_nickname(){
	var nickname=$("#nickname").val();
	nickname = nickname.replace(/(^\s*)|(\s*$)/g,'');
	if(nickname==''){
		$('#nick-tip').removeClass('ok');
		$('#nick-tip').addClass('err');
		$('#nick-tip .input-tip-inner').html('<p>请输入昵称</p>');
		$('#nick-tip .input-tip-inner').show();
		return false;
	}
	if(strlen(nickname)>10 || strlen(nickname)<4){
		$('#nick-tip').removeClass('ok');
		$('#nick-tip').addClass('err');
		$('#nick-tip .input-tip-inner').html('<p>请输入4-10个字符的英文或是2-5个字符的中文</p>');
		$('#nick-tip .input-tip-inner').show();
		return false;
	}
	if(new RegExp("^[\u4e00-\u9fa5]{1,10}$").test(nickname) == false){
		if(new RegExp("^[a-zA-Z]{3,10}$").test(nickname) == false){
			$('#nick-tip').removeClass('ok');
			$('#nick-tip').addClass('err');
			$('#nick-tip .input-tip-inner').html('<p>昵称格式错误</p>');
			$('#nick-tip .input-tip-inner').show();
			return false;
		}
	}
	
			$('#nick-tip').removeClass('err');
			$('#nick-tip').addClass('ok');
			$('#nick-tip .input-tip-inner').html('<p></p>');
			document.getElementById('sub_nickname').value=1;
	
}


//验证确认密码
function check_passwordagain(){
	var password = $("#password").val();
	password = password.replace(/(^\s*)|(\s*$)/g,'');
	var passwordagain = $("#passwordagain").val();
	passwordagain = passwordagain.replace(/(^\s*)/g, "");
	if(passwordagain == ''){
		$('#passwordagain-tip').removeClass('ok');
		$('#passwordagain-tip').addClass('err');
		$('#passwordagain-tip .input-tip-inner').html('<p>请输入确认密码</p>');
		$('#passwordagain-tip .input-tip-inner').show();
		if(password=='')
		{	
			$('#password-tip').removeClass('ok');
			$('#password-tip').addClass('err');
			$('#password-tip .input-tip-inner').html('<p>请输入密码</p>');
			$('#password-tip .input-tip-inner').show();
		}
		return false;
	}
	if(password != ''){
		if(passwordagain != password){
			$('#passwordagain-tip').removeClass('ok');
			$('#passwordagain-tip').addClass('err');
			$('#passwordagain-tip .input-tip-inner').html('<p>两次密码输入不一致，请重新输入</p>');
			$('#passwordagain-tip .input-tip-inner').show();
			return false;
		}
	}
	if(password.length<6){
		$('#password-tip').removeClass('ok');
		$('#password-tip').addClass('err');
		$('#password-tip .input-tip-inner').html('<p>请输入6位以上密码</p>');
		$('#password-tip .input-tip-inner').show();
		$('#password-strength').hide();
        $('#rating-msg').empty();
		return false;
	}
	if(password.length>16){
		$('#password-tip').removeClass('ok');
		$('#password-tip').addClass('err');
		$('#password-tip .input-tip-inner').html('<p>请输入16位以下密码</p>');
		$('#password-tip .input-tip-inner').show();
		$('#password-strength').hide();
        $('#rating-msg').empty();
		return false;
	}
	$('#passwordagain-tip').addClass('ok');
	$('#passwordagain-tip').removeClass('err');
	$('#passwordagain-tip .input-tip-inner').html('<p></p>');
	return true;
}

//验证手机
function check_tel(){
	var tel = $("#tel").val();
	tel = tel.replace(/(^\s*)|(\s*$)/g,'');
	if(tel == ''){
		$('#tel-tip').removeClass('ok');
		$('#tel-tip').addClass('err');
		$('#tel-tip .input-tip-inner').html('<p>请输入手机号</p>');
		$('#tel-tip .input-tip-inner').show();
		return false;
	}
	if(new RegExp("^((13[0-9])|(15[0-35-9])|(18[0-9])|147)[0-9]{8,8}$").test(tel) == false){
		$('#tel-tip').removeClass('ok');
		$('#tel-tip').addClass('err');
		$('#tel-tip .input-tip-inner').html('<p>请输入正确的手机号</p>');
		$('#tel-tip .input-tip-inner').show();
		return false;
	}
	//ajax 的异步调用 此方法可取check_tel()方法的返回值  但  取不到这个方法的返回值  按钮控制
	
		//验证唯一性
	var url = $("#geturl").val()+"/users/CheckMobile.php?mb="+tel+"&cache="+Math.random();
	
	
	
	$.get(url,function(result){
	
		if(result == '2'){
			$('#tel-tip').removeClass('ok');
			$('#tel-tip').addClass('err');
			$('#tel-tip .input-tip-inner').html('<p>改手机号码已经注册</p>');
			$('#tel-tip .input-tip-inner').show();
		    document.getElementById('sub_tel').value=0;
		    return false;
		}else{
			$('#tel-tip').removeClass('err');
			$('#tel-tip').addClass('ok');
			$('#tel-tip .input-tip-inner').html('<p></p>');
			document.getElementById('sub_tel').value=1;
			return true;
		}
	});
	

		
		
	
}

//验证邮件
function check_email(){
	var email = $("#email").val();
	email = email.replace(/(^\s*)|(\s*$)/g,'');
	

	//whileEmailAddress('email', fm.selectEmail);
	if(email == ''){
		$('#email-tip').removeClass('ok');
		$('#email-tip').addClass('err');
		$('#email-tip .input-tip-inner').html('<p>请输入邮箱</p>');
		$('#email-tip .input-tip-inner').show();
		return false;
	}
	if(new RegExp("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$").test(email) == false || '' == email){
		$('#email-tip').removeClass('ok');
		$('#email-tip').addClass('err');
		$('#email-tip .input-tip-inner').html('<p>邮箱格式错误</p>');
		$('#email-tip .input-tip-inner').show();
		return false;
	}
	
	$('#email-tip').removeClass('err');
			$('#email-tip').addClass('ok');
			$('#email-tip .input-tip-inner').html('<p></p>');
			document.getElementById('sub_email').value=1;
			return true;
	/**
	var url = "/main.php?do=user_reg_check_name&email="+email+"&flag=email&cache="+Math.random();
	$.get(url,function(result){
		if(result == '2'){
			$('#email-tip').removeClass('ok');
			$('#email-tip').addClass('err');
			$('#email-tip .input-tip-inner').html('<p>该邮箱已注册</p>');
			$('#email-tip .input-tip-inner').show();
			document.getElementById('sub_email').value=0;
			return false;
		}else{
			$('#email-tip').removeClass('err');
			$('#email-tip').addClass('ok');
			$('#email-tip .input-tip-inner').html('<p></p>');
			document.getElementById('sub_email').value=1;
			return true;
		}
	});
	**/
}

//处理英文、中文长度计算
function strlen(str) {  
	var len = 0;  
    for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 255 || str.charCodeAt(i) < 0){
			len += 2;
		} else {
			len ++;
		}  
	}
	return len;  
}



function wait_identify_fi(){
	$("#identify_img").css('display','');
	$("#wait_identify").css('display','none');	
}

//验证阅读协议
function check_agreement(){
	if($("#agreement").attr("checked") == false){
		$('#agree-tip .input-tip-inner').html('请阅读会员协议');
		$('#agree-tip').show();
		return false;
	}
	return true;
}

//验证网页验证码
function check_icode(){
	var identify = $("#identify_code").val();
	identify = identify.replace(/(^\s*)|(\s*$)/g,'');
	//var tel = $("#tel").val();
	//tel = tel.replace(/(^\s*)|(\s*$)/g,'');
	 
	if(identify==""){
		$('#identify-tip').removeClass('ok');
		$('#identify-tip').addClass('err');
		$('#identify-tip .input-tip-inner').html('<p>请输入验证码</p>');
		$('#identify-tip .input-tip-inner').show();
		return false;
	}
	
	var url= $("#geturl").val()+'/users/reg.php?do=user_check_identify_code&identify_code='+identify;
	
	$.get(url,function(data){
				  
		if(data=='验证码错误'){
			change_indenty_img();
			$('#identify-tip').removeClass('ok');
			$('#identify-tip').addClass('err');
			$('#identify-tip .input-tip-inner').html('<p>验证码错误</p>');
			$('#identify-tip .input-tip-inner').show();
			return false;
		}else if(data.indexOf('发送失败')!=-1){
			$('#identify-tip').removeClass('ok');
			$('#identify-tip').addClass('err');
			$('#identify-tip .input-tip-inner').html('<p>发送失败</p>');
			$('#identify-tip .input-tip-inner').show();
			document.getElementById('sub_identify').value=0;
			return false;
		}else{
			$('#identify-tip').removeClass('err');
			$('#identify-tip').addClass('ok');
			$('#identify-tip .input-tip-inner').html('<p></p>');
			document.getElementById('sub_identify').value=1;
			return true;
		}
	});
}

//验证码错误时 更换验证码
function change_indenty_img(){
	var rd= Math.random();
	$('#identify_img').attr('src','/identify2.php?flag=101&cache='+rd);
}

function info_submit(){
	
	check_username();
	check_nickname();
	check_passwordagain();
	check_agreement();
	check_tel();
	check_email();
	

	//所有验证通过
	var pwda_flag=check_passwordagain();
	var agree_flag=check_agreement();
	
	var sub_username=(document.getElementById('sub_username').value==1);
	var sub_nickname=(document.getElementById('sub_nickname').value==1);
	var sub_tel=(document.getElementById('sub_tel').value==1);
	var sub_email=(document.getElementById('sub_email').value==1);
	
		
	if(sub_username && sub_nickname && sub_tel && sub_email  && pwda_flag && agree_flag){
	
			
		
		$('#registerFrm').submit();
	}
}

//焦点移至输入框 触发事件
function hide_note(data){
	if(data == 'tel-tip'){
		$('#tel-tip').removeClass('ok');
		$('#tel-tip').removeClass('err');
		$('#tel-tip .input-tip-inner').html('<p>请输入手机号以便接收订单信息</p>');
		$('#tel-tip .input-tip-inner').show();
	}else if(data == 'user-tip'){
		$('#user-tip').removeClass('ok');
		$('#user-tip').removeClass('err');
		$('#user-tip .input-tip-inner').html('<p>必须为英文字母开头，5位以上英文字母、数字或下划线组成</p>');
		$('#user-tip .input-tip-inner').show();
	}else if(data == 'nick-tip'){
		$('#nick-tip').removeClass('ok');
		$('#nick-tip').removeClass('err');
		$('#nick-tip .input-tip-inner').html('<p>必须为中文或英文，4位以上字符</p>');
		$('#nick-tip .input-tip-inner').show();
	}else if(data == 'identify-tip'){
		$('#identify-tip').removeClass('ok');
		$('#identify-tip').removeClass('err');
		$('#identify-tip .input-tip-inner').html('<p>请输入验证码</p>');
		$('#identify-tip .input-tip-inner').show();
	}
}

//验证手机短信验证码
function check_code(){
	$("#codeTip").html('');
	var tel = $('#hid_tel').val();
	var code = $('#code').val();
	code = code.replace(/(^\s*)|(\s*$)/g,'');
	var url = '/main.php?do=user_tel_activate&flag=2&tel='+tel+'&code='+code;
		$.get(url,function(data){
		if('3' == data){
			//输入正确  保存注册信息 显示 验证成功页面
			$("#codeTip").html('信息正在提交中...');
			$("#check_num").val(code);
			$("#regcheckFrm").submit();
		}else{
			$("#codeTip").html('<p>您输入的短信验证码有误，请重新输入或重新发送短信验证码。</p>');
		}
	});
}


//重新发送手机短信验证码
function send_again(){
	var tel = $("#hid_tel").val();
	tel = tel.replace(/(^\s*)|(\s*$)/g,'');
	window.location.href="http://"+window.location.host+"/main.php?do=user_reg_phone&sub_flag=2&tel="+tel;
	//$.get('/main.php?do=user_reg_phone&sub_flag=2&tel='+tel+'',function(data){
	if($("#hid_error").val()=='1'){
		$("#codeTip").html('<p>今天已向您发送三条验证码，已不能重新发送短信验证码，请输入其中任何一条。</p>');
		$("#send_link").hide();
		$("#send_again_60_second").hide();
	}
	//});
}

//同意协议 跳转取回手机号
function goto_phoneback(){
	var tel=$("#hid_tel").val();
	var username=$("#hid_username").val();
	var nickname=$("#hid_nickname").val();
	var email=$("#hid_email").val();
	window.location.href="http://"+window.location.host+"/main.php?do=user_reg_phone&sub_flag=1&hid_flag=1&username="+username+"&nickname="+nickname+"&email="+email+"&tel="+tel;
}

//返回注册页
function goto_reg(){
	//保存原先填写的注册信息
	var tel=$("#hid_tel").val();
	var username=$("#hid_username").val();
	var nickname=$("#hid_nickname").val();
	var email=$("#hid_email").val();
	window.location.href="http://"+window.location.host+"/main.php?do=user_register&username="+username+"&nickname="+nickname+"&email="+email+"&tel="+tel;
}

//注册成功页 重新发送邮件
function email_resend(){
	var user_id = $("#hid_userid").val();
	var email = $("#hid_email").val();
	var url = "/main.php?do=user_activate_ajax&id="+user_id+"&flag=";
	url = url+"email&email="+email+"&mark=0&cache="+Math.random();
	$.get(url,function(result){
		if(result=='1'){
			$("#emailTip").html('<p>已向您重新发送了邮件，请查收。</p>');
			return 1;
		}else{
			$("#emailTip").html('<p>重新发送邮件失败，请稍后重试。</p>');
			return 0;
		}
	});
}



var isStop = false;
var memoryVal = "";
var status;
var memoryEle;
var isOpen = false;
//轮循电子邮件地址sina.com/163.com/126.com/qq.com/sina.cn/hotmail.com/gmail.com/sohu.com/yahoo.com/139.com/189.cn/yeah.net
function whileEmailAddress(tag, div) {
    var txt = tag.value.split('@')[0];
    var lis = "<ul id=\"addr\" class=\"selectEmailAddress\" onmouseover=\"javascript:status=true;\" onmouseout=\"javascript:status=false;\">";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@sina.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@163.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@126.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@qq.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@sina.cn</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@hotmail.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@gmail.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@sohu.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@yahoo.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@139.com</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@189.cn</li>";
        lis += "<li onclick=\"setTagVal(this);\">" + txt + "@yeah.net</li>";
        lis += "</ul>";
    
    if (isStop) {
        return;
    } 
    if (tag.value.length > 0) {
        div.style.display = consts.display.block;
        if (tag.value != memoryVal) { //防止抖动
            div.innerHTML = lis;
            memoryVal = tag.value;
        }
    } else {
        div.style.display = consts.display.none;
    }
    var _self = function () {
        whileEmailAddress(tag, div);
    };
    window.setTimeout(_self,100);
}