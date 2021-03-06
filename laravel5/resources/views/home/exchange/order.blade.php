<link rel="stylesheet" type="text/css" href="./exchange/layout.css">
<link rel="stylesheet" type="text/css" href="./exchange/index.css">
<link rel="stylesheet" type="text/css" href="./exchange/autocomplete.css">
<link rel="stylesheet" type="text/css" href="./exchange/jifen_captchas.css">
@include("home/common/top")
<form action="orderAdds" method="post" onsubmit="return check()" >
    <div class="write_addr wrap_box">
        <h4 class="hh_title">填写并核对订单信息</h4>
        <p class="person_tt">收货人信息</p>
        <!-- addr_list S -->
        <dl class="wr_infor clearfix">
            <dt><span class="red">*</span> 姓名</dt>
            <dd>
                <input name="a_name" onblur="return check_name()" value="" class="wi_t" type="text">
                <span id="names"></span>
            </dd>
        </dl>
        <dl class="wr_infor clearfix">
            <dt><span class="red">*</span> 手机</dt>
            <dd>
                <input name="a_phone" onblur="return check_phone()" value="" class="wi_t" onkeydown="pureTip(1)" type="text">
                <span id="phones" class="f_grey">电子券将以短信的形式发放，请正确填写手机</span>
            </dd>
        </dl>
      {{--  <input type="hidden" name="e_name" value="{{$re['e_name']}}"/>
        <input type="hidden" name="e_price" value="{{$re['e_price']}}"/>
        <input type="hidden" name="num" value="{{$re['num']}}"/>
        <input type="hidden" name="e_img" value="{{$re['e_img']}}"/>--}}
        <input type="hidden" name="_token" value="{{csrf_token()}}" />
        <p class="mana"><a href="javascript:void(0)">&nbsp;</a></p>
        <p class="confirm_tt">确认订单信息</p>
        <ul class="confirm_list">
            <li class="clearfix cl_tt">
                <p class="cl_1">商品名称</p>
                <p class="cl_2">兑换牛大头</p>
                <p class="cl_3">数量</p>
                <p class="cl_4">小计</p>
            </li>
            <li class="clearfix">
                <p class="cl_1">
                    <input name="productIds[0]" value="90000402" type="hidden">
                    <a href="" target="_blank" class="prod_detail">
                        <img src="<?php echo Session::get('re')['e_img']?>" height="50" width="70">
                        <span title="<?php echo Session::get('re')['e_name']?>"><?php echo Session::get('re')['e_name']?></span>
                    </a>
                </p>
                <p class="cl_2" data-jifen="100">
                    <?php echo Session::get('re')['e_price']?>牛大头
                </p>
                <p class="cl_3">
				<span class="contrl_num clearfix" id="contrlNum" data="363">
					<?php echo Session::get('re')['num']?>
				</span>
                </p>
                <p class="cl_4">
                    <span class="cl_colr"><?php echo Session::get('re')['e_price']?>牛大头</span>
                </p>
            </li>
        </ul>
        <div class="conf_ex">
           <input type="submit" style="width: 100px; height: 30px; background-color: darkorange; font-family: bold" value="确认兑换"/>
        </div>
    </div>
</form>
<script src="./jq.js"></script>
<script>
    /**地址验证**/
    function check(){
        if(check_name() || check_phone()){
            return true;
        }else{
            return false;
        }
    }
    /**收货人**/
    function check_name(){
        var a_name=$("input[name=a_name]").val();
        var names=document.getElementById("names");
        if(a_name=="" || a_name==null){
            names.innerHTML="<font style='color: red'>收货人不能为空！</font>";
            return false;
        }
        names.innerHTML="<font style='color: green'>ok！</font>";
        return true;
    }
    /**手机号**/
    function check_phone(){
        var a_phone=$("input[name=a_phone]").val();
        var phones=document.getElementById("phones");
        if(a_phone=="" || a_phone==null){
            phones.innerHTML="<font style='color: red'>手机号不能为空！</font>";
            return false;
        }
        if(!a_phone.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
            phones.innerHTML="<font style='color: red'>手机号格式不对！</font>";
            return false;
        }
        phones.innerHTML="<font style='color: green'>ok！</font>";
        return true;
    }
</script>
@include("home/common/footer")