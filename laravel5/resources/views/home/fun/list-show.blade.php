<ul style="display: block;" class="list-data">
    @foreach($res as $val)
    <li>
        <a href="" target="_blank">
            <div class="playing-img">
                <img src="{{$val['f_img']}}"
                     alt="" class="playing-img-show">
                <img src="" alt="" class="playing-meng">

                <div class="playing-des">
                    <div class="playing-top">
                        <div class="playing-days">
                            <span class="day-num">{{$val['f_day']}}</span>
                            <span class="day-day">DAYS</span>
                        </div>
                        <div class="playing-tit"></div>
                    </div>
                    <div class="playing-hover-show">
                        <p>D1 </p>

                        <p>D2 </p>

                        <p>D3 </p>

                        <p>D4 </p>

                        <p>D5 </p>

                        <p>D6 </p>
                    </div>
                </div>
            </div>
        </a>

        <div class="playing-tit-show">
            <div class="playing-ding" id="dingAjax" data-id="189358"><i></i>4</div>
            <div class="playing-comment"><i></i>5</div>
            <div class="playing-scan"><i></i></div>
            <a href="" target="_blank">
                <img src="./fun/Cii9EVdiC6WIXTkhAAAUT2FlVgYAAGkbwP_xCAAABRn641_w120_h120_c1_.jpg"
                     alt="">

                <div class="playing-auther-name"></div>
            </a>
        </div>
    </li>
    @endforeach
</ul>
<div class="pager pagination" data-init="pager" style="display:none"></div>
<div data-curpage="1" data-pager-inited="true" class="pager pagination" data-init="pager" style="">
    <div class="page-bottom">
        <a href="javascript:void(0)" >上一页</a>
        <a href="javascript:void(0)"  style="display: none;">1</a>
        <a href="javascript:void(0);">1</a>
        <a href="javascript:void(0);">2</a>
        <a href="javascript:void(0);">3</a>
        <a href="javascript:void(0);">4</a>
        <a href="javascript:void(0);">5</a>
        <a href="javascript:void(0)">9</a>
        <a href="javascript:void(0)">下一页</a>
    </div>
</div>
<div class="pager pagination" data-init="pager" style="display:none"></div>