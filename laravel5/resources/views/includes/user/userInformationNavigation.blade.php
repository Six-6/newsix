    <div class="center clearfix">
                <div class="MAvatar clearfix">
            <div class="MAvaImg flt1">
                <img width="120" height="120" alt="" src="../home/mafengwo/wKgBs1fqN1eAARJhAAVRROtlm7w34(1).jpeg">
                            </div>
            <div class="MAvaEasyWord flt1">
                <span class="MAvaName">{{Session::get('name')}}</span>
                <!-- <span class="MAvaLevel">Lv.4</span> -->
            </div>
        </div>
        <ul class="flt2">
            <li><a class="tags_link" href="{{URL('home/uhome')}}" title="我的窝">我的窝</a></li>
            <li><a class="tags_link" href="{{URL('home/publishs')}}" title="我的游记">我的游记</a></li>
            <li><a class="tags_link" href="{{URL('home/userCollection')}}" title="我的收藏">我的收藏</a></li>
            <li id="_j_pathnav"><a class="tags_link" href="" title="我的足迹">我的足迹</a></li>
            <li><a class="tags_link" href="{{URL('home/userComment')}}" title="我的点评">我的点评</a></li>
            <li><a class="tags_link" href="{{URL('home/userOrderDetails')}}" title="我的订单">我的订单</a></li>
                        <li class="more ">
                <span class="tags_link" role="button" title="更多" style="cursor:default">更多<i class="MDownMore"></i></span>
                <div class="tags_more_list">
                    <ul>
                        <li><a href="{{URL('home/userInformation')}}" title="我的信息"><i class="ico_group"></i><span>我的信息</span></a></li>
                        <li><a href="{{URL('home/userHeadPortrait')}}" title="我的头像"><i class="ico_order"></i><span>我的头像</span></a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>