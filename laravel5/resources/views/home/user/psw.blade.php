@include("home/common/left")
<h2 class="common_h2">修改密码</h2>
<form action="index.php" method="post" name="add_place_form" id="user_info_edit_form" onsubmit="return false;">
    <input type="hidden" name="do" id="do" value="pwd">
    <input type="hidden" name="post" id="post" value="save">
    <input type="hidden" name="sub_oldpwd" id="sub_oldpwd"/>
    <input type="hidden" name="sub_yesold" id="sub_yesold"/>

    <div class="common-w1 gstyle mb15">
        <table width="790" border="0" cellpadding="0" cellspacing="0" class="form-table3">
            <tr>
                <td align="right"><span>请输入原密码：</span></td>
                <td><input type="text" name="oldpwd" id="oldpwd" class="txt-sss" style="float:left; margin-top:5px;"
                           onfocus="hide_note('oldpwd-tip');" onblur="check_oldpwd();"/>

                    <div class="input-tip" id="oldpwd-tip">
                        <div class="input-tip-inner"><p></p></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td align="right"><span>输入新密码：</span></td>
                <td><input type="text" name="pwd" id="pwd" class="txt-sss" style=" float:left; margin-top:5px;"/>

                    <div class="input-tip" id="password-tip">
                        <div class="input-tip-inner"><p></p></div>
                </td>
            </tr>
            <tr id="email_tip2">
                <td colspan="2"></td>
            </tr>
            <tr>
                <td width="120" align="right">再次输入新密码：</td>
                <td><input type="text" name="passwordagain" id="passwordagain" class="txt-sss"
                           onblur="check_passwordagain();" style="float:left; margin-top:5px;"/>

                    <div class="input-tip" id="passwordagain-tip">
                        <div class="input-tip-inner"><p></p></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td align="right">&nbsp;</td>

                <td height="36"><input type="button" class="orbtn2"
                                       onclick="try{ var s=s_gi(s_account);s.linkTrackVars='eVar25,events';s.linkTrackEvents='event15';s.events='event15';s.eVar25='';s.tl(this,'o','register');_gaq.push(['_trackEvent', '[会员注册]','[常规]','[提交并验证手机]']);}catch(err){}info_submit()">
                </td>
            </tr>
        </table>
    </div>
    </div>
</form>
@include("home/common/footer")