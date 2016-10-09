<style>
    .oof{background: #FFA820}
</style>
<script>
    $('a').click(function(){
        $(this).addClass('on').siblings().removeClass('oof');
    })
</script>
<div class="aside" id="bian">
    <a href="{{URL('home/userInformation')}}"><i class="i1"></i>我的信息</a><!--  class="on" -->
    <a href="{{URL('home/userHeadPortrait')}}"><i class="i2"></i>我的头像</a>
    <!-- <a href="https://passport.mafengwo.cn/setting/wallet/"><i class="i10"></i>我的钱包</a> -->
</div>