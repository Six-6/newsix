<<<<<<< HEAD
=======
@include("home/common/top")

>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
<link rel="stylesheet" type="text/css" href="./exchange/layout.css">
<link rel="stylesheet" type="text/css" href="./exchange/gallery.css">
<link rel="stylesheet" type="text/css" href="./exchange/jifen_common.css">
<link rel="stylesheet" type="text/css" href="./exchange/detail.css">
<link rel="stylesheet" type="text/css" href="./exchange/autocomplete.css">

<div class="wrap_box clearfix">
    <!-- wrap_top S -->
<<<<<<< HEAD
    <div class="wrap_top clearfix">
        <div class="lef_box wrap_w">
=======
    <div class="wrap_top clearfix" >

        <div class="lef_box wrap_w" style="margin-left: 160px; margin-top: 5px">
            <h1 style="color: white;font-size: 18px; font-weight:bo;width: 100px; margin-bottom: 5px; height: 30px; line-height: 30px; background-color: #ff9d00" >道具商店</h1>
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
            <form action="detailsOrder" method="post">
                @foreach($re as $v)
                    <input type="hidden" name="e_price" value="{{$v['e_price']}}"/>
                    <input type="hidden" name="e_name" value="{{$v['e_name']}}"/>
                    <input type="hidden" name="e_img" value="{{$v['e_img']}}"/>
                    <dl class="detail_box clearfix">
                        <dt>
                            <input type="hidden" name="_token" value="{{csrf_token()}}"/>
                        <div style="width: 405px;" id="gallery" class="gy-gallery">
                            <div class="gallery_con">
                                <div class="gallery_item clearfix">
                                    <div style="width: 405px; height: 227px;"
                                         class="gy-image-wrapper num-image-wrapper1">
                                        <div style="width: 405px; height: 225.99px; top: 0.505px; left: 0px;"
                                             class="gy-image">
<<<<<<< HEAD
                                            <img src="./exchange/Cii-T1e9Mo-IOYlJAABZ0fjuR1MAABqBwEh5GYAAFnp632_w500_h280_c1_.jpg"
                                                 height="225.98999999999998" width="405">
                                        </div>
                                        <img style="display: none;" class="gy-loader" src="./exchange/loader.gif">

                                        <div style="height: 227px;" class="gy-next">
                                            <div style="opacity: 0.7; display: none;" class="gy-next-image"></div>
                                        </div>
                                        <div style="height: 227px;" class="gy-prev">
                                            <div style="opacity: 0.7; display: none;" class="gy-prev-image"></div>
=======
                                            <img src="{{$v['e_img']}}" width="500px" height="255px">
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
                                        </div>
                                    </div>
                                </div>
                                <div class="gallery_item clearfix"></div>
                            </div>
                        </div>

                        </dt>

                        <dd class="detail_cont">
                            <p class="d_tt" title="{{$v['e_name']}}">{{$v['e_name']}}</p>

                            <p class="sub_tt" title="{{$v['e_content']}}">{{$v['e_content']}}</p>

                            <div class="dc_bg">
                                <p class="">
                                    <span class="">牛大头兑换</span><em class="cl_f60 f_24 f_bold">{{$v['e_price']}}</em><em
                                            class="cl_f60">牛大头</em>
                                </p>

                                <p class="">
                                    <span>市场价</span><s>¥ {{$v['r_price']}}</s>
                                </p>
                            </div>
                            <!-- change_num S -->
                            <div class="change_num clearfix">
                                <p class="cn_1">数量</p>

                                <p>
                                    <input type="button" value="+" id="add" style="width: 20px">
                                    <input type="text" name="num" id="num" value="1" class="num_add clearfix">
                                    <input type="button" value="-" id="reduce" style="width: 20px">
                                </p>
                                <input type="hidden" name="e_num" value="{{$v['e_num']}}"/>
                                <p class="cn_2">库存{{$v['e_num']}}件</p>
                                <input value="903" id="availableNum" type="hidden">
                            </div>
                            <!-- change_num E -->

                            <!-- order_area S -->
                            <div class="order_area clearfix">
                                <button id="placeOrder" onclick="toPlace(90000401)" class="order_btn" type="submit">立即兑换
                                </button>
                                <span id="errorInfo" style="color:#ff0000;">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </div>
                            <!-- order_area E -->
                        </dd>
                    </dl>

            </form>
        </div>
    </div>
    <!-- wrap_top E -->
    <!-- list_box S -->
    <div class="list_box">
<<<<<<< HEAD
        <div class="lef_box mr15">
=======
        <div class="lef_box mr15" style="margin-left: 160px; margin-top: 5px">
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
            <!-- l_innner_box S -->
            <div class="l_innner_box">
                <div id="lib_tt_box" class="lib_tt_box">
                    <div style="position: static; top: 0px;" class="lib_tt">
                        <h3 class="lib_name">商品详情</h3>

                        <p class="lib_fuc">
                            <span class="c_1 cl_f60 f_bold">{{$v['e_price']}}</span>
                            <em class="cl_f60">牛大头</em>
                            <s class="c_2">市场价：¥{{$v['r_price']}}</s>
                            <input type="submit" value="立即兑换"/>
                        </p>
                    </div>
                </div>
                <!-- lib_cont S -->
                <div class="lib_cont">
                    <!-- 打印商品详情 -->
                    <p style="margin-top:auto;margin-bottom:auto;text-align:left;line-height:19px;">
                        <span style="font-size:16px;color:rgb(255,0,0);font-family:'微软雅黑', 'Microsoft YaHei';">
                            注意事项：
                            <br> 1.优惠券一经兑换，概不退还；
                            <br> 2.兑换完成后，您将收到短信，显示兑换的优惠券券码；
                            <br>3.优惠券的绑定与查看：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br> &nbsp; 绑定：登陆会员中心【我的】-【优惠券】页面右上角点击加号，输入【优惠券号码】，点击【绑定】，此张优惠券即成功
                        </span>
                    </p>

                    <p style="margin-top:auto;margin-bottom:auto;text-align:left;line-height:19px;">
                        <span style="font-size:16px;color:rgb(255,0,0);font-family:'微软雅黑', 'Microsoft YaHei';">&nbsp; 绑定至账户；<br> &nbsp; 查看：在【优惠券】内可查看到已绑定优惠券及其具体使用规则。</span>
                    </p>

<<<<<<< HEAD
                    <p><img src="./exchange/Cii-TFfGbpCIOAjTAASZ40JruSEAAB5igHOuAgABJn7831_w800_h0_c0_t0.jpg"
=======
                    <p><img src="{{$v['e_img']}}"
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
                            alt="Cii-TFfGbpCIOAjTAASZ40JruSEAAB5igHOuAgAB"></p></div>
                <!-- lib_cont E -->
            </div>
            <!-- l_innner_box E -->
        </div>
    </div>
    <!-- list_box E -->
</div>
@endforeach
<script src="./jq.js"></script>
<script>
    /**
     * 失去焦点事件
     */
    $("#num").blur(function () {
        var e_num = $("input[name=e_num]").val();
        var nums = $("input[name=num]").val();
        var tok = $("input[name=_token]").val();
        var num = document.getElementById("num");
        if (parseInt(nums) > parseInt(e_num) - 1) {
            $("input[name=num]").val(e_num);
            alert("不能超过最大数量");
        } else if (parseInt(nums) <= 1) {
            $("input[name=num]").val(1);
            alert("数量不能低于1");
        }
    });
    /**
     * 点击事件1
     */
    $("#add").on("click", function () {
        var e_num = $("input[name=e_num]").val();
        var nums = $("input[name=num]").val();
        var tok = $("input[name=_token]").val();
        var num = document.getElementById("num");
        if (parseInt(nums) > parseInt(e_num) - 1) {
            $("input[name=num]").val(e_num);
            alert("不能超过最大数量");
        } else {
            num.value = parseInt(num.value) + 1;
        }

    });
    /**
     * 点击事件2
     */
    $("#reduce").on("click", function () {
        var e_num = $("input[name=e_num]").val();
        var nums = $("input[name=num]").val();
        var tok = $("input[name=_token]").val();
        var num = document.getElementById("num");
        if (parseInt(nums) <= 1) {
            $("input[name=num]").val(1);
            alert("数量不能低于1");
        } else {
            num.value = parseInt(num.value) - 1;
        }
    });

<<<<<<< HEAD
</script>
=======
</script>
@include("home/common/footer")
>>>>>>> eb60688d885dc38c09b2ef04a72af515036a4e99
