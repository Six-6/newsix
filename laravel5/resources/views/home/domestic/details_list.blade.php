@include("home/common/top")
<!DOCTYPE html>
<html class="hasFontSmoothing-true" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>【快速换票】惠玩国际自由行 - 惠玩国际自由行</title>

    <meta name="keywords" content="自由行,自助游">
    <meta name="description" content="">


    <link href="../css/cssbasecssjquery.css" rel="stylesheet" type="text/css">


    <script language="javascript" src="../js/jsjquery-1.js" type="text/javascript"></script>
    <script type="text/javascript">
        var __mfw_uid = parseInt('31821509');
    </script>

    <link href="../css/csssalessales-detail-v4cssmfweditormfwedi
torZ1w1474961390.css" rel="stylesheet" type="text/css">

    <link href="../css/jquery.css" rel="stylesheet">
    <style type="text/css">.fancybox-margin {
            margin-right: 17px;
        }</style>
</head>
<body style="position: relative;">


<div id="header" xmlns="http://www.w3.org/1999/html" style="margin-top: 10px">



    <script>
        //判断是否显示 下拉bar
        ;
        (function () {
            window.showBarFlag = true;
            var realPathName = location.pathname;
            var regExp = /localdeals|sales|insurance|activity/gi;
            var pathArr = realPathName.match(regExp);
            if (window.Env.flag == 'gonglue_campaign') {
                $('.dropdown-bar').hide();
                return;
            }
            if (realPathName == '/sales/0-0-0-5-0-0-0-0.html' || window.Env.salesType == 5) {
                $('.ul-dropdown-bar > li:eq(4)').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType == 21) {
                $('.ul-dropdown-bar > li:eq(3)').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4) {
                $('.ul-dropdown-bar > li:eq(2)').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.salesType) {
                switch (window.Env.salesType | 0) {
                    case 1:
                    case 3:
                    case 6:
                        $('.ul-dropdown-bar > li:eq(0)').addClass('on');
                        break;
                    case 2:
                        $('.ul-dropdown-bar > li:eq(1)').addClass('on');
                    default:
                        $('.ul-dropdown-bar > li:eq(1)').addClass('on');
                }
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }
            else {
                if (pathArr) {
                    if (pathArr.length == 1 && pathArr[0] != 'activity') {
                        switch (pathArr[0]) {
                            case 'localdeals':
                                $('.ul-dropdown-bar > li:eq(1)').addClass('on');
                                break;
                            case 'insurance':
                                $('.ul-dropdown-bar > li:eq(5)').addClass('on');
                                break;
                            case 'sales':
                                $('.ul-dropdown-bar > li:eq(0)').addClass('on');
                                break;
                            default:
                                break;
                        }
                        window.showBarFlag = false;
                        $('.dropdown-bar').show();
                    } else {
                        if ('activity'.indexOf(pathArr) != -1) {
                            window.showBarFlag = true;
                            $('.dropdown-bar').hide();
                        }
                    }
                }
            }
            // 点击时触发
            $('.ul-dropdown-bar > li').on('click', function () {
                $(this).addClass('on').siblings().removeClass('on');
            });
        })();

    </script>

</div>


<div class="container">
    <div class="wrapper">

        <div class="sales-intro clearfix">
            <div class="intro-l">
                <div class="sales-photo">
                    <ul style="width: 2200px; margin-left: -1320px;">
                        <li><img src="../home/homepage/wKgBs1b3OLiABa0JAACmB1hPYlI64.jpg"></li>
                        <li><img src="../home/homepage/wKgBs1dyMCaAS1v2AAemtMIlPK813.jpg"></li>
                        <li><img src="../home/homepage/wKgBs1dyMC-AHhVBAAI3aff7NN019.jpg"></li>
                        <li><img src="../home/homepage/wKgBs1dyMDeABy5vAAGaNoLXEl857.jpg"></li>
                        <li><img src="../home/homepage/wKgBs1dyMDyASOl-AAF8lFJG_aY12.jpg"></li>
                    </ul>
                    <span class="btn-prev"><i></i></span>
                    <span class="btn-next"><i></i></span>

                    <div class="dot">
                        <span class=""></span>
                        <span class=""></span>
                        <span class=""></span>
                        <span class=""></span>
                        <span class="on"></span>
                    </div>
                    <span class="sales-id">ID:{{$arr->s_id}}</span>
                    <!--APP 下单减图片 -->
                </div>
            </div>
            <div class="intro-r">
                <div class="sales-title">
                    <h1>
                        {{$arr->s_name}}
                    </h1>

                </div>

                <div class="price-panel clearfix">

                </div>
                <div class="info-panel">

                    <div class="info-promo clearfix">


                    </div>
                    <div class="info-tips">
                        <span class="label">预订须知</span>

                        <div class="info-tips-box">
                            <p>
                                <span class="t-today">可订今日</span>
                                <span data-desc="">营业时间内10:00 - 17:00，需至少两小时出票</span>
                            </p>
                        </div>
                        <span class="label">温馨提示</span>

                        <div class="info-tips-box">
                            <p>

                                <span data-desc="">七岁以下儿童完全免费,如若不是请自觉按成人买票,如若违反造成的损失自己负责</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="r-line"></div>

                <!-- //Stock Begin -->
                <div class="property-panel">
                    <div id="stock_wrap">

                    </div>
                    <!-- 出行日期 -->
                    <dl class="clearfix top-bar" id="top_calendar_block" style="">
                        <dt class="label">选择日期</dt>
                        <dd>
                            <div class="ui-date">
                                <div class="trigger bookDate-trigger">

                                    <!-- <span class="label" data-date="">2016-09-29</span> -->
                                    <select class="label" name="" id="selects">
                                        @foreach($date as $val)
                                            <option value="{{$val}}">{{$val}}</option>
                                        @endforeach
                                    </select>

                                </div>
                                <div class="s_popup bookDate-pop" style="display: none;">
                                    <i class="i-arrow"></i>

                                    <div class="book-calendar" id="top_calendar_wrap">
                                        <div data-stocklevel="">
                                            <div class="cal-month"><span
                                                        class="arrow arrow-prev disabled"><i></i></span><span
                                                        class="arrow arrow-next"><i></i></span>
                                                <ul class="cal-tab">
                                                    <li class="on"><span data-month-tab="2016-09"
                                                                         href="javascript:void(0);">2016年09月</span></li>
                                                    <li><span data-month-tab="2016-10" href="javascript:void(0);">2016年10月</span>
                                                    </li>
                                                    <li><span data-month-tab="2016-11" href="javascript:void(0);">2016年11月</span>
                                                    </li>
                                                    <li><span data-month-tab="2016-12" href="javascript:void(0);">2016年12月</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <table data-calendar="2016-09" class="cal-day">
                                                <thead>
                                                <tr>
                                                    <td>日</td>
                                                    <td>一</td>
                                                    <td>二</td>
                                                    <td>三</td>
                                                    <td>四</td>
                                                    <td>五</td>
                                                    <td>六</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>01</td>
                                                    <td>02</td>
                                                    <td>03</td>
                                                </tr>
                                                <tr>
                                                    <td>04</td>
                                                    <td>05</td>
                                                    <td>06</td>
                                                    <td>07</td>
                                                    <td>08</td>
                                                    <td>09</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                    <td>14</td>
                                                    <td>15</td>
                                                    <td>16</td>
                                                    <td>17</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>19</td>
                                                    <td>20</td>
                                                    <td>21</td>
                                                    <td>22</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>26</td>
                                                    <td data-stock-id="34519609" data-child-type="0" data-level="1"
                                                        data-name="2016-09-27" data-price="89" data-remain="46"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">27</a></td>
                                                    <td data-stock-id="34519610" data-child-type="0" data-level="1"
                                                        data-name="2016-09-28" data-price="89" data-remain="44"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">28</a></td>
                                                    <td class="on" data-stock-id="34519611" data-child-type="0"
                                                        data-level="1" data-name="2016-09-29" data-price="89"
                                                        data-remain="34" data-single-room-price="0" data-max="10"
                                                        data-min="1"><a href="javascript:void(0);" class="day">29</a>
                                                    </td>
                                                    <td data-stock-id="34519612" data-child-type="0" data-level="1"
                                                        data-name="2016-09-30" data-price="89" data-remain="20"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">30<span
                                                                    class="remain">余<br>20</span></a></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table data-calendar="2016-10" class="cal-day" style="display:none">
                                                <thead>
                                                <tr>
                                                    <td>日</td>
                                                    <td>一</td>
                                                    <td>二</td>
                                                    <td>三</td>
                                                    <td>四</td>
                                                    <td>五</td>
                                                    <td>六</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td data-stock-id="34519613" data-child-type="0" data-level="1"
                                                        data-name="2016-10-01" data-price="89" data-remain="21"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">01<span
                                                                    class="remain">余<br>21</span></a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519614" data-child-type="0" data-level="1"
                                                        data-name="2016-10-02" data-price="89" data-remain="19"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">02<span
                                                                    class="remain">余<br>19</span></a></td>
                                                    <td data-stock-id="34519615" data-child-type="0" data-level="1"
                                                        data-name="2016-10-03" data-price="89" data-remain="35"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">03</a></td>
                                                    <td data-stock-id="34519616" data-child-type="0" data-level="1"
                                                        data-name="2016-10-04" data-price="89" data-remain="26"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">04<span
                                                                    class="remain">余<br>26</span></a></td>
                                                    <td data-stock-id="34519617" data-child-type="0" data-level="1"
                                                        data-name="2016-10-05" data-price="89" data-remain="32"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">05</a></td>
                                                    <td data-stock-id="34519618" data-child-type="0" data-level="1"
                                                        data-name="2016-10-06" data-price="89" data-remain="17"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">06<span
                                                                    class="remain">余<br>17</span></a></td>
                                                    <td data-stock-id="34519619" data-child-type="0" data-level="1"
                                                        data-name="2016-10-07" data-price="89" data-remain="44"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">07</a></td>
                                                    <td data-stock-id="34519620" data-child-type="0" data-level="1"
                                                        data-name="2016-10-08" data-price="89" data-remain="48"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">08</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519621" data-child-type="0" data-level="1"
                                                        data-name="2016-10-09" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">09</a></td>
                                                    <td data-stock-id="34519622" data-child-type="0" data-level="1"
                                                        data-name="2016-10-10" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">10</a></td>
                                                    <td data-stock-id="34519623" data-child-type="0" data-level="1"
                                                        data-name="2016-10-11" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">11</a></td>
                                                    <td data-stock-id="34519624" data-child-type="0" data-level="1"
                                                        data-name="2016-10-12" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">12</a></td>
                                                    <td data-stock-id="34519625" data-child-type="0" data-level="1"
                                                        data-name="2016-10-13" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">13</a></td>
                                                    <td data-stock-id="34519626" data-child-type="0" data-level="1"
                                                        data-name="2016-10-14" data-price="89" data-remain="47"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">14</a></td>
                                                    <td data-stock-id="34519627" data-child-type="0" data-level="1"
                                                        data-name="2016-10-15" data-price="89" data-remain="48"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">15</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519628" data-child-type="0" data-level="1"
                                                        data-name="2016-10-16" data-price="89" data-remain="43"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">16</a></td>
                                                    <td data-stock-id="34519629" data-child-type="0" data-level="1"
                                                        data-name="2016-10-17" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">17</a></td>
                                                    <td data-stock-id="34519630" data-child-type="0" data-level="1"
                                                        data-name="2016-10-18" data-price="89" data-remain="46"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">18</a></td>
                                                    <td data-stock-id="34519631" data-child-type="0" data-level="1"
                                                        data-name="2016-10-19" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">19</a></td>
                                                    <td data-stock-id="34519632" data-child-type="0" data-level="1"
                                                        data-name="2016-10-20" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">20</a></td>
                                                    <td data-stock-id="34519633" data-child-type="0" data-level="1"
                                                        data-name="2016-10-21" data-price="89" data-remain="47"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">21</a></td>
                                                    <td data-stock-id="34519634" data-child-type="0" data-level="1"
                                                        data-name="2016-10-22" data-price="89" data-remain="48"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">22</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519635" data-child-type="0" data-level="1"
                                                        data-name="2016-10-23" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">23</a></td>
                                                    <td data-stock-id="34519636" data-child-type="0" data-level="1"
                                                        data-name="2016-10-24" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">24</a></td>
                                                    <td data-stock-id="34519637" data-child-type="0" data-level="1"
                                                        data-name="2016-10-25" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">25</a></td>
                                                    <td data-stock-id="34519638" data-child-type="0" data-level="1"
                                                        data-name="2016-10-26" data-price="89" data-remain="45"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">26</a></td>
                                                    <td data-stock-id="34519639" data-child-type="0" data-level="1"
                                                        data-name="2016-10-27" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">27</a></td>
                                                    <td data-stock-id="34519640" data-child-type="0" data-level="1"
                                                        data-name="2016-10-28" data-price="89" data-remain="48"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">28</a></td>
                                                    <td data-stock-id="34519641" data-child-type="0" data-level="1"
                                                        data-name="2016-10-29" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">29</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519642" data-child-type="0" data-level="1"
                                                        data-name="2016-10-30" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">30</a></td>
                                                    <td data-stock-id="34519643" data-child-type="0" data-level="1"
                                                        data-name="2016-10-31" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">31</a></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table data-calendar="2016-11" class="cal-day" style="display:none">
                                                <thead>
                                                <tr>
                                                    <td>日</td>
                                                    <td>一</td>
                                                    <td>二</td>
                                                    <td>三</td>
                                                    <td>四</td>
                                                    <td>五</td>
                                                    <td>六</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td data-stock-id="34519644" data-child-type="0" data-level="1"
                                                        data-name="2016-11-01" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">01</a></td>
                                                    <td data-stock-id="34519645" data-child-type="0" data-level="1"
                                                        data-name="2016-11-02" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">02</a></td>
                                                    <td data-stock-id="34519646" data-child-type="0" data-level="1"
                                                        data-name="2016-11-03" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">03</a></td>
                                                    <td data-stock-id="34519647" data-child-type="0" data-level="1"
                                                        data-name="2016-11-04" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">04</a></td>
                                                    <td data-stock-id="34519648" data-child-type="0" data-level="1"
                                                        data-name="2016-11-05" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">05</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519649" data-child-type="0" data-level="1"
                                                        data-name="2016-11-06" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">06</a></td>
                                                    <td data-stock-id="34519650" data-child-type="0" data-level="1"
                                                        data-name="2016-11-07" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">07</a></td>
                                                    <td data-stock-id="34519651" data-child-type="0" data-level="1"
                                                        data-name="2016-11-08" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">08</a></td>
                                                    <td data-stock-id="34519652" data-child-type="0" data-level="1"
                                                        data-name="2016-11-09" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">09</a></td>
                                                    <td data-stock-id="34519653" data-child-type="0" data-level="1"
                                                        data-name="2016-11-10" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">10</a></td>
                                                    <td data-stock-id="34519654" data-child-type="0" data-level="1"
                                                        data-name="2016-11-11" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">11</a></td>
                                                    <td data-stock-id="34519655" data-child-type="0" data-level="1"
                                                        data-name="2016-11-12" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">12</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519656" data-child-type="0" data-level="1"
                                                        data-name="2016-11-13" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">13</a></td>
                                                    <td data-stock-id="34519657" data-child-type="0" data-level="1"
                                                        data-name="2016-11-14" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">14</a></td>
                                                    <td data-stock-id="34519658" data-child-type="0" data-level="1"
                                                        data-name="2016-11-15" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">15</a></td>
                                                    <td data-stock-id="34519659" data-child-type="0" data-level="1"
                                                        data-name="2016-11-16" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">16</a></td>
                                                    <td data-stock-id="34519660" data-child-type="0" data-level="1"
                                                        data-name="2016-11-17" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">17</a></td>
                                                    <td data-stock-id="34519661" data-child-type="0" data-level="1"
                                                        data-name="2016-11-18" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">18</a></td>
                                                    <td data-stock-id="34519662" data-child-type="0" data-level="1"
                                                        data-name="2016-11-19" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">19</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519663" data-child-type="0" data-level="1"
                                                        data-name="2016-11-20" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">20</a></td>
                                                    <td data-stock-id="34519664" data-child-type="0" data-level="1"
                                                        data-name="2016-11-21" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">21</a></td>
                                                    <td data-stock-id="34519665" data-child-type="0" data-level="1"
                                                        data-name="2016-11-22" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">22</a></td>
                                                    <td data-stock-id="34519666" data-child-type="0" data-level="1"
                                                        data-name="2016-11-23" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">23</a></td>
                                                    <td data-stock-id="34519667" data-child-type="0" data-level="1"
                                                        data-name="2016-11-24" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">24</a></td>
                                                    <td data-stock-id="34519668" data-child-type="0" data-level="1"
                                                        data-name="2016-11-25" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">25</a></td>
                                                    <td data-stock-id="34519669" data-child-type="0" data-level="1"
                                                        data-name="2016-11-26" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">26</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519670" data-child-type="0" data-level="1"
                                                        data-name="2016-11-27" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">27</a></td>
                                                    <td data-stock-id="34519671" data-child-type="0" data-level="1"
                                                        data-name="2016-11-28" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">28</a></td>
                                                    <td data-stock-id="34519672" data-child-type="0" data-level="1"
                                                        data-name="2016-11-29" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">29</a></td>
                                                    <td data-stock-id="34519673" data-child-type="0" data-level="1"
                                                        data-name="2016-11-30" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">30</a></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table data-calendar="2016-12" class="cal-day" style="display:none">
                                                <thead>
                                                <tr>
                                                    <td>日</td>
                                                    <td>一</td>
                                                    <td>二</td>
                                                    <td>三</td>
                                                    <td>四</td>
                                                    <td>五</td>
                                                    <td>六</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td data-stock-id="34519674" data-child-type="0" data-level="1"
                                                        data-name="2016-12-01" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">01</a></td>
                                                    <td data-stock-id="34519675" data-child-type="0" data-level="1"
                                                        data-name="2016-12-02" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">02</a></td>
                                                    <td data-stock-id="34519676" data-child-type="0" data-level="1"
                                                        data-name="2016-12-03" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">03</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519677" data-child-type="0" data-level="1"
                                                        data-name="2016-12-04" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">04</a></td>
                                                    <td data-stock-id="34519678" data-child-type="0" data-level="1"
                                                        data-name="2016-12-05" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">05</a></td>
                                                    <td data-stock-id="34519679" data-child-type="0" data-level="1"
                                                        data-name="2016-12-06" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">06</a></td>
                                                    <td data-stock-id="34519680" data-child-type="0" data-level="1"
                                                        data-name="2016-12-07" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">07</a></td>
                                                    <td data-stock-id="34519681" data-child-type="0" data-level="1"
                                                        data-name="2016-12-08" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">08</a></td>
                                                    <td data-stock-id="34519682" data-child-type="0" data-level="1"
                                                        data-name="2016-12-09" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">09</a></td>
                                                    <td data-stock-id="34519683" data-child-type="0" data-level="1"
                                                        data-name="2016-12-10" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">10</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519684" data-child-type="0" data-level="1"
                                                        data-name="2016-12-11" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">11</a></td>
                                                    <td data-stock-id="34519685" data-child-type="0" data-level="1"
                                                        data-name="2016-12-12" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">12</a></td>
                                                    <td data-stock-id="34519686" data-child-type="0" data-level="1"
                                                        data-name="2016-12-13" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">13</a></td>
                                                    <td data-stock-id="34519687" data-child-type="0" data-level="1"
                                                        data-name="2016-12-14" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">14</a></td>
                                                    <td data-stock-id="34519688" data-child-type="0" data-level="1"
                                                        data-name="2016-12-15" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">15</a></td>
                                                    <td data-stock-id="34519689" data-child-type="0" data-level="1"
                                                        data-name="2016-12-16" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">16</a></td>
                                                    <td data-stock-id="34519690" data-child-type="0" data-level="1"
                                                        data-name="2016-12-17" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">17</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519691" data-child-type="0" data-level="1"
                                                        data-name="2016-12-18" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">18</a></td>
                                                    <td data-stock-id="34519692" data-child-type="0" data-level="1"
                                                        data-name="2016-12-19" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">19</a></td>
                                                    <td data-stock-id="34519693" data-child-type="0" data-level="1"
                                                        data-name="2016-12-20" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">20</a></td>
                                                    <td data-stock-id="34519694" data-child-type="0" data-level="1"
                                                        data-name="2016-12-21" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">21</a></td>
                                                    <td data-stock-id="34519695" data-child-type="0" data-level="1"
                                                        data-name="2016-12-22" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">22</a></td>
                                                    <td data-stock-id="34519696" data-child-type="0" data-level="1"
                                                        data-name="2016-12-23" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">23</a></td>
                                                    <td data-stock-id="34519697" data-child-type="0" data-level="1"
                                                        data-name="2016-12-24" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">24</a></td>
                                                </tr>
                                                <tr>
                                                    <td data-stock-id="34519698" data-child-type="0" data-level="1"
                                                        data-name="2016-12-25" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">25</a></td>
                                                    <td data-stock-id="34519699" data-child-type="0" data-level="1"
                                                        data-name="2016-12-26" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">26</a></td>
                                                    <td data-stock-id="34519700" data-child-type="0" data-level="1"
                                                        data-name="2016-12-27" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">27</a></td>
                                                    <td data-stock-id="34519701" data-child-type="0" data-level="1"
                                                        data-name="2016-12-28" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">28</a></td>
                                                    <td data-stock-id="34519702" data-child-type="0" data-level="1"
                                                        data-name="2016-12-29" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">29</a></td>
                                                    <td data-stock-id="34519703" data-child-type="0" data-level="1"
                                                        data-name="2016-12-30" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">30</a></td>
                                                    <td data-stock-id="34519704" data-child-type="0" data-level="1"
                                                        data-name="2016-12-31" data-price="89" data-remain="50"
                                                        data-single-room-price="0" data-max="10" data-min="1"><a
                                                                href="javascript:void(0);" class="day">31</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p>营业时间内10:00 - 17:00，需至少两小时出票</p></div>
                            </div>
                        </dd>
                    </dl>
                    <!-- 出行日期 end-->
                    <dl class="clearfix">
                        <dt class="label">数量选择</dt>
                        <dd>
                            <ul class="ui-numProp clearfix">
                                <li class="amount-adult">
                                    <!-- <div class="amount"> -->

                                    <!-- <span class="btns"> -->
                                    <!-- <a class="btn-plus" data-action="plus" data-value="adult" href="javascript:void(0);"><i>+</i></a>
                                            <a class="btn-minus" data-action="minus" data-value="adult" href="javascript:void(0);"><i>-</i></a> -->
                                    <input type="button" id="add" onclick="add()" value="+">
                                    <span class="input"><span data-adult="">数量</span> <span class="num"
                                                                                            id="sps">1</span></span>
                                    <input type="button" id="jian" onclick="jian()" value="-">
                                    <!-- </span> -->
                                    <!-- </div> -->
                                    <!--       <div class="s_popup num-tips hide">
                                        <i class="i-arrow i-arrCenter"></i>
                                        <p><span data-adult="">数量</span>：<span class="price">89</span>元</p>
                                    </div> -->
                                </li>

                                <li style="display: inline-block;" class="stock-remain">

                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <input type="hidden" id="uid" value="{{$uid}}">
                </div>

                <script>
                    $("#selects").click(function () {
                        var times = $("#selects").val();
                        $("#sp_time").html(times);
                        // alert(times)
                    })
                    function add() {
                        var num = $("#sps").html();
                        var newnum = num * 1 + 1;
                        var sprice = newnum * {{$arr->s_sprice}};
                        $("#sps").html(newnum);
                        $("#strsprice").html(sprice);
                        $("#sp_num").html(newnum);
                        $("#sp_sprice").html(sprice)
                    }
                    function jian() {
                        var num = $("#sps").html();
                        if (num <= 1) {
                            return false;
                        }
                        var newnum = num * 1 - 1;
                        var sprice = newnum *{{$arr->s_sprice}};
                        $("#sps").html(newnum);
                        $("#strsprice").html(sprice);
                        $("#sp_num").html(newnum);
                        $("#sp_sprice").html(sprice)
                    }
                    function tj() {
                        var uid = $("#uid").val();
                        if (uid == '') {
                            alert('请先登录');
                            top.location = "{{ url('blo') }}" + '?url=home/scenicDetails&sid=' + "{{$arr->s_id}}";
                            return false;
                        }
                        var num = $("#sps").html();
                        var numsprice = $("#strsprice").html();
                        var sid = "{{$arr->s_id}}";
                        var sprice = "{{$arr->s_sprice}}";
                        var times = $("#selects").val();
                        location.href = "fill?num=" + num + '&numsprice=' + numsprice + '&sid=' + sid + '&sprice=' + sprice + '&times=' + times;
                    }
                </script>
                <div class="action-panel clearfix">
                    <div class="total">
                        <em>￥</em><strong id="strsprice">{{$arr->s_sprice}}</strong>
                        <span style="display: none;" class="total-price-ext"></span>
                        <span class="price-sg-room" style="display: none">(包含<span
                                    class="total-price">0</span>元单房差)</span></div>
                    <div class="on-countdown-hide">
                                                <span class="buy">
                                                <!-- <a href="" onclick="tj()">立即购买</a> -->
                                                <input type="button" onclick="tj()" value="立即购买">
                                                </span>
                    </div>
                    <span class="not-start on-countdown-show" style="display: none;">距开售:<span class="dd">0</span>天<span
                                class="hh">00</span>时<span class="mm">00</span>分<span class="ss">00</span>秒</span>
                </div>
                <div class="s_popup cart-pop" style="display:none;">
                    <i class="i-arrow"></i>
                    <ul class="cart-list">


                        <li class="cart-action clearfix">
                            <span class="cart-total">总价：<strong>￥0</strong></span>
                            <a class="btn" href="javascript:void(0);">组合购买</a>
                        </li>
                    </ul>
                </div>
                <!-- //Stock End -->
                <div class="safeguard">
                    <span><i></i>全时中文</span>
                    <span><i></i>快速响应</span>
                </div>
            </div>
        </div>
        <div class="sales-nav-wrap">
            <div class="sales-nav">
                <ul class="clearfix">

                    <li class="on"><a href="#target_introduce">产品介绍</a></li>


                    <li class=""><a href="#target_cost">费用说明</a></li>


                    <li class=""><a href="#target_consume">使用说明</a></li>


                    <li class=""><a href="#target_purchase">购买须知</a></li>

                    <li class="">
                        <a href="#target_review">
                            用户点评


                        </a>
                    </li>
                    <li class=""><a href="#target_deal">成交记录</a></li>
                </ul>
            </div>
        </div>
        <div class="clearfix detail-wrapper">
            <div style="" class="side-bar">
                <div class="m-book">
                    <div id="sidebar_stock_wrapper">
                        <div data-stock-level="0" class="stock_0">
                            <dl class="clearfix">
                                <dd>
                                    <div class="ui-bookDrop">
                                        <div class="s_popup" style="display: none">
                                            <i class="i-arrow"></i>
                                            <ul class="drop-menu">
                                                <li class="on" data-stock-id="30792739" data-child-type="2"
                                                    data-level="0" data-name="台北101电子兑换券">
                                                    <a href="javascript:void(0);"><span>{{$arr->s_name}}</span><i></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <dl class="clearfix" id="sidebar_calendar_block" style="">
                        <dt>选择日期</dt>
                        <dd>
                            <div class="ui-bookDrop">
                                <div class="trigger bookDate-trigger">
                                    <span data-date="" class="label" id="sp_time">{{$times}}</span>
                                    <i></i>
                                </div>
                            </div>
                        </dd>
                    </dl>

                    <div class="book-action clearfix">
                        <span class="price-total"><em>￥</em><span id="sp_sprice">{{$arr->s_sprice}}</span></span>
            <span class="buy on-countdown-hide">
                                    <a class="btn" href="javascript:void(0);">立即购买</a>
                            </span>
            <span class="buy on-countdown-show" style="display: none">
                <a class="btn btn-disabled not-start" href="javascript:void(0);">即将开售</a>
            </span>
                        <!-- <p class="tips clearfix">（<span class="price-adult"><span data-adult="">数量</span><span class="num">1</span> x ￥<span class="price">89</span></span><span class="price-kid" style="display: none">&nbsp;&nbsp;儿童 <span class="num">0</span> x ￥<span class="price">0</span></span><span class="price-infant" style="display: none">&nbsp;&nbsp;婴儿 <span class="num">0</span></span><span class="price-sg-room" style="display: none">&nbsp;&nbsp;单房差 ￥<span class="total-price">0</span></span>）</p> -->
                    </div>
                </div>
            </div>
            <div class="main-detail">

                <div class="m-panel">
                    <div class="m-hd">
                        <h2>产品介绍</h2>
                    </div>
                    <div class="m-bd">
                        <!--机票-->
                        <dl class="detail-notes">
                            <dt class="subtitle">
                                景点简介
                            </dt>

                            <dd class="m-place clearfix">
                                <div class="item-place">
                                    <div class="card">
                                        <div class="image"><img
                                                    src="../home/homepage/wKgBpU7O-rXx5hhlAAGZVjCO-Gg99_002.jpg"></div>
                                        <div class="info">
                                            <div class="title">
                                                <strong>101大楼</strong>
                                                <span class="star star4"></span>
                                            </div>
                                            <div class="summary">
                                                台北101大楼，位于台北市信义区，是台北最显眼的地标性建筑，在2004年12月31日至2010年1月4日它曾一直是“世界第一高楼”。
                                                台北101大楼分为地上101层和地下5层。其中B1至4楼共有5层楼的购物中心， 86至88楼为观景餐厅，89楼为室内观景...
                                            </div>
                                        </div>
                                    </div>
                                    <div class="s_popup pop-place" style="display: none;">
                                        <i class="i-arrLeft"></i>

                                        <div class="image"><img
                                                    src="../home/homepage/wKgBpU7O-rXx5hhlAAGZVjCO-Gg99.jpg"><a
                                                    class="btn-close" href="javascript:void(0);"><i></i></a></div>
                                        <div class="info">
                                            <div class="title">
                                                <strong>101大楼</strong>
                                                <br>
                                                <span class="star star4"></span><a target="_blank"
                                                                                   href="http://www.mafengwo.cn/poi/586.html#commentlist">3733条评论</a>
                                            </div>
                                            <div class="summary">台北101大楼，位于台北市信义区，是台北最显眼
                                                的地标性建筑，在2004年12月31日至2010年1月4日它曾一直是“世界第一高楼”。
                                                台北101大楼分为地上101层和地下5层。其中B1至4楼共有5层楼的购物中心，
                                                86至88楼为观景餐厅，89楼为室内观景层，91楼为室外观景台。在室内观景台可以透过落地窗俯瞰整个台北，夜幕降临后，更是成为欣赏台北夜景的最佳地
                                                点之一。观景台楼层还有相关纪念品可以购买，如果想要寄明信片也可以选在这寄出，这里有多种样式的明信片及邮票，写完明信片可以直接投进邮筒。
                                                这里的购物中心拥有许多精品旗舰店，如BALLY、LV、Prada、Gucci、Cartier、DIOR及FENDI等。这里还是美食的天堂，餐厅楼
                                                层聚集着鼎泰丰、代官山居食屋、晶汤匙泰式料理、九如浙江美食、川滇食尚等各式美味。
                                            </div>
                                            <ul>

                                                <li>
                                                    <i class="i-link"></i><span>网&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</span><span
                                                            class="value">http://www.taipei-101.com.tw/tw/index.asp</span>
                                                </li>
                                                <li><i class="i-traffic"></i><span>交&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通</span><span
                                                            class="value">捷运：<br>乘坐板南线至捷运市政府站下车，沿市政府路步行10分钟即可。<br>公交车：<br>乘坐公交28、281、537、647、915、棕6、棕7、棕18、棕21、绿1至捷运台北101/世贸站（市府）下车即可。<br>乘坐公交207、797、信义干线、信义干线副、信义新干线、蓝5、蓝5区至捷运台北101/世贸站（信义）下车即可。</span>
                                                </li>
                                                <li>
                                                    <i class="i-ticket"></i><span>门&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;票</span><span
                                                            class="value">全票500新台币；<br>优惠票450新台币（限学生、军警）；<br>团体票450新台币；<br>1.15米以下儿童免费，但需由一名成人陪同。</span>
                                                </li>
                                                <li><i class="i-time"></i><span>用时参考</span><span class="value">半天</span>
                                                </li>
                                            </ul>
                                            <div class="mention clearfix">
                                                <div class="item">
                                                    <strong>“室内观景台”</strong>
                                                    <span>592人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“世界上最快电梯”</strong>
                                                    <span>44人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“夜景很美”</strong>
                                                    <span>33人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“世界第一高楼”</strong>
                                                    <span>216人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“新台币500”</strong>
                                                    <span>194人提及</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-place">
                                    <div class="card">
                                        <div class="image"><img
                                                    src="../home/homepage/wKgBpVW7LAqAFYYBAAsRJs_KXTU116_002.png"></div>
                                        <div class="info">
                                            <div class="title">
                                                <strong>台北101景观台</strong>
                                                <span class="star star4"></span>
                                            </div>
                                            <div class="summary">台北101大楼是目前全球第二高大楼，仅次于迪拜
                                                的哈法利塔。101大楼集办公大楼、观景台和购物中心于一体，是台北市的地标性建筑。89楼为室内观景层，91楼为室外观景台，这里有全方位绝佳的观景视
                                                野、纪念证书的摄影服务、语音导览柜台、冰淇淋商店、纪念品商店、另...
                                            </div>
                                        </div>
                                    </div>
                                    <div class="s_popup pop-place" style="display: none;">
                                        <i class="i-arrLeft"></i>

                                        <div class="image"><img
                                                    src="../home/homepage/wKgBpVW7LAqAFYYBAAsRJs_KXTU116.png"><a
                                                    class="btn-close" href="javascript:void(0);"><i></i></a></div>
                                        <div class="info">
                                            <div class="title">
                                                <strong>台北101景观台</strong>
                                                <br>
                                                <span class="star star4"></span><a target="_blank"
                                                                                   href="http://www.mafengwo.cn/poi/104029.html#commentlist">575条评论</a>
                                            </div>
                                            <div class="summary">台北101大楼是目前全球第二高大楼，仅次于迪拜
                                                的哈法利塔。101大楼集办公大楼、观景台和购物中心于一体，是台北市的地标性建筑。89楼为室内观景层，91楼为室外观景台，这里有全方位绝佳的观景视
                                                野、纪念证书的摄影服务、语音导览柜台、冰淇淋商店、纪念品商店、另有世界最高的信箱，可在观景台将祝福寄给国内外的好友。南侧还有91楼售票处与出入口
                                                （北侧为出口）。
                                            </div>
                                            <ul>

                                                <li><i class="i-traffic"></i><span>交&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通</span><span
                                                            class="value">捷运：<br>乘坐板南线至捷运市政府站下车，沿市政府路步行10分钟即可。<br>公交车：<br>乘坐公交28、281、537、647、915、棕6、棕7、棕18、棕21、绿1至捷运台北101/世贸站（市府）下车即可。<br>乘坐公交207、797、信义干线、信义干线副、信义新干线、蓝5、蓝5区至捷运台北101/世贸站（信义）下车即可。</span>
                                                </li>
                                                <li>
                                                    <i class="i-ticket"></i><span>门&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;票</span><span
                                                            class="value">全票500新台币，优惠票450新台币（限学生、军警），团体票450新台币，1.15米以下儿童免费，但需由一名成人陪同。</span>
                                                </li>
                                                <li><i class="i-time"></i><span>用时参考</span><span
                                                            class="value">1-2小时</span></li>
                                            </ul>
                                            <div class="mention clearfix">
                                                <div class="item">
                                                    <strong>“9折”</strong>
                                                    <span>11人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“户外观景台”</strong>
                                                    <span>178人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“直达89楼”</strong>
                                                    <span>36人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“人民币100”</strong>
                                                    <span>28人提及</span>
                                                </div>
                                                <div class="item">
                                                    <strong>“登上101观景台”</strong>
                                                    <span>28人提及</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dd>

                        </dl>

                        <!--  -->

                        <!--机票-->
                        <dl class="detail-notes">
                            <dt class="subtitle">
                                图文详情
                            </dt>
                            <dd class="notes-content">

                                <p>【91楼户外观景台】<br>经由89楼楼梯到达91楼户外观景台，可感受全然不同的观景体验。游客可在超高大楼的顶端感受高空风力，云雾围绕以及宽阔的视野，并以最近距离仰望大楼最高点508公尺高的塔尖。<br>＊91F为不定期开放楼层，以现场公告为主<br><img
                                            src="./homepage/wKgB6lSypoqAb7H_AAmVVqNfdXs64.jpg">
                                </p>

                                <p>【89楼室内观景台】<br>高度382公尺的89楼观景台，拥有360度绝佳的台北观景视野外，并提供其他多项设施，包括：超高倍数望远镜、纪念照摄影服务、饮料吧、11种各国语言导览器、世界最高邮筒等。<br><img
                                            src="./homepage/wKgBpVX9KO-AMGTdABkZadhWA6o20.jpg"><br><br>
                                </p>

                                <p>【88楼世界最大风阻尼球区】<br>89楼往88楼为台北101镇楼之宝风阻尼器区，可近距离观赏世界最大：5.5公尺、最重：660公吨风阻尼器的完整主体结构，游客可以最接近的距离与风阻尼器合影。<br><img
                                            src="./homepage/wKgB6lSypt2AAqYmAA8JatO8nV037.jpg">
                                </p>

                            </dd>
                        </dl>


                    </div>
                </div>
                <a id="target_cost" class="nav-anchor"></a>
                <!--费用说明-->
                <div class="m-panel m-cost">
                    <div class="m-hd">
                        <h2>费用说明</h2>
                    </div>
                    <div class="m-bd">

                        <dl class="detail-notes">
                            <dt class="subtitle">费用包含</dt>
                            <dd class="notes-content">
                                <p>1. 台北101观景台电子票一张。</p>
                            </dd>
                        </dl>
                        <dl class="detail-notes">
                            <dt class="subtitle">费用不含</dt>
                            <dd class="notes-content">
                                <div>1. 餐食及饮料；</div>
                                <div>
                                    <div>2. 一切个人消费及费用包含中未提及之费用。</div>
                                </div>
                            </dd>
                        </dl>
                        <dl class="detail-notes">
                            <dt class="subtitle">特别说明</dt>
                            <dd class="notes-content">
                                <p>1. 关于儿童：身高115公分以下儿童免费入场，须由一位成人陪同；超过115公分的儿童与成人同价；<br>2. 关于效期：指定效期区间2016-06-01 ~
                                    2016-12-31，逾期失效。</p>
                            </dd>
                        </dl>

                    </div>
                </div>

                <a id="target_consume" class="nav-anchor"></a>
                <!--兑换及使用-->

                <div class="m-panel">
                    <div class="m-hd">
                        <h2>使用说明</h2>
                    </div>
                    <div class="m-bd">
                        <dl class="detail-notes">
                            <dt class="subtitle">兑换方式</dt>

                            <dd class="notes-content"><p><strong><span style="font-size: 16px; color: #ff0000;">自您付款后需2小时左右出票，如您的时间比较紧张，请现场购买门票！</span></strong>
                                </p>

                                <p>
                                    出发前您的邮箱将会收到确认单，内容包含当地的中文联系电话、出行通知、行程单等电子兑换信息，确认单是您出行的唯一凭证，请仔细核对信息并妥善保管（预订人联系方式请务必留中国手机号码，以便接收确认短信）。</p>

                                <p>【订单确认时长】<br>预订今日急单，我们将优先为您安排；<br>预订明日急单，我们最迟在今日20:00之前发送确认邮件；<br>预订其他日期，我们将尽量在24小时之内发送确认邮件，请耐心等待。
                                </p></dd>

                        </dl>
                        <dl class="detail-notes">
                            <dt class="subtitle">集合时间及地点</dt>

                            <dd class="notes-content"><p>1. 入场时间：09:00am - 09:15pm；<br>2. 参观时间：09:00am - 10:00pm；<br>3.
                                    票券种类：出示订单编号至网络预购票柜台兑换实体门票（请代表人代为领取即可）；<br>4. 兑换地点：台北101大楼5楼网络预购票柜台（台北市信义路五段七号）。</p>
                            </dd>

                        </dl>
                        <dl class="detail-notes">
                            <dt class="subtitle">注意事项</dt>

                            <dd class="notes-content"><p>1. 次产品仅限自由行旅客预订，不适用于团体；<br>2. 凭票仅限入内游览1次；<br>3.
                                    服装不整或着拖鞋者谢绝入场；<br>4.&nbsp;请勿携带外食、宠物、违禁品及危险品进场；<br>5.
                                    确认单上将只有一个电子码，凭码可兑换本单所有同行客人门票，不分平假日均可使用；<br>6. 现场服务人员指示排队进场并配合随身对象安全检查；<br>7.
                                    本券恕不与其他优惠活动合并使用，并不适用台北101跨年烟火震撼票活动；<br>8. 票券使用方式与时间若有异动，依照台北101官网或现场公告为准；<br>9.
                                    票券具有特殊防伪功能，影印或非真品恕不受理；<br>10.
                                    在免税店前台需要您出示入台证原件、台湾通行证原件、返程机票行程单进行登记，以便离台时在全台任意机场（包括金门）的昇恒昌店提货点取货直接搭乘飞机，非常方便又省时。</p>
                            </dd>

                        </dl>
                        <dl class="detail-notes">
                            <dt class="subtitle">其他推荐，预定请猛戳↓↓↓</dt>

                            <dd class="notes-content"><p class="p1">【入台必备】<br><span class="s1">&gt;&gt;&gt; </span><span
                                            class="s2">预订</span><span class="s1"> <a><span class="s3">【爆款热销】入台证全国办理（可免填表</span><span
                                                    class="s4">/</span><span class="s3">可免紧急联系人</span><span
                                                    class="s4">/</span><span
                                                    class="s3">可免财力，加送免税店代金券）<br></span></a></span><span class="s1">&gt;&gt;&gt; </span><span
                                            class="s2">预订</span><span class="s1"> <a
                                             ><span class="s3">【台湾专用】惠玩国际</span><span
                                                    class="s4">Wi-Fi</span><span
                                                    class="s3">设备<br></span></a></span><span
                                            class="s1">&gt;&gt;&gt; </span><span class="s2">预订</span><span
                                            class="s1"> <a><span
                                                    class="s3">台湾大哥大</span><span class="s4">4G</span><span class="s3">电话卡（可桃园机场、高雄机场取卡）</span></a></span>
                                </p>

                                <p class="p1">【台湾交通必备】<br><span class="s1">&gt;&gt;&gt; </span><span
                                            class="s2">预订</span><span class="s1"> <a><span class="s3">台湾</span>
                                            <span class="s3">高铁单程</span><span class="s4">8</span><span
                                                    class="s3">折电子票<br></span></a></span><span
                                            class="s5">&gt;&gt;&gt; </span>预订 <a>台北悠游卡<span class="s5">/</span>交通卡黑熊限定版</a></p>

                                <p class="p1">【经典门票】<br><span class="s1">&gt;&gt;&gt; </span><span
                                            class="s2">预订</span><span class="s1"> <a
                                               ><span class="s3">台北故宫博物院</span><span
                                                    class="s4">+</span><span class="s3">原住民博物馆联合电子票</span></a></span>
                                </p>

                                <p class="p1">【台北一日游推荐】<br><span class="s1">&gt;&gt;&gt; </span>预订 <a
                                            target="_blank">野柳、九份、十分一日游<br></a><span
                                            class="s1">&gt;&gt;&gt; </span>预订 <a
                                           target="_blank">台北经九份至花莲拼车一日游（双向出发）</a>
                                </p></dd>

                        </dl>
                    </div>
                </div>

                <a id="target_purchase" class="nav-anchor"></a>
                <!--购买须知-->
                <div class="m-panel m-notice">
                    <div class="m-hd">
                        <h2>购买须知</h2>
                    </div>
                    <div class="m-bd">


                        <dl class="detail-alert">
                            <dt class="subtitle">退改政策</dt>
                            <dd class="notes-content">
                                1. 本产品一经预定后，不可退订。<br>
                                2. 有效期2016-06-01 ~ 2016-12-31内皆可使用，无需改期。<br>
                            </dd>
                        </dl>
                        <dl class="detail-notes">
                            <dt class="subtitle">重要提示</dt>
                            <dd class="notes-content">
                                <div><span style="color: #ff6600;">1. 此产品可适用于非中华人民共和国护照持有者，若您是境外人士，请在“台湾通行证号(保险用)”栏位填写护照号；</span>
                                </div>
                                <div>2. 惠玩国际尊重并保护用户隐私，用户信息只会用于协助用户预订旅游产品；<br>3. 本产品将通过惠玩国际认证商家提供服务；<br>4.
                                    关于购买：预订订单，需要在支付时限内支付全款，超出时限的支付将被视为无效支付，需要联系商家退回款项，重新购买。购买成功会收到确认邮件及短信；<br>5.
                                    关于优惠券：每张优惠券只能使用一次，不能兑换成现金，也不能与其它优惠同享；<br>6. 境外旅行社提供产品，暂不提供开发票服务；
                                </div>
                                <div>7. 在当地有任何意外情况或者行程进行中有任何与预订要求不符合的情况，请立即联系当地的中文服务热线，服务商会及时处理解决。行程结束后，无法追究责任和补偿退款。
                                </div>
                            </dd>
                        </dl>


                    </div>
                </div>


            </div>
            <div class="paginator" id="review_page_box" align="right"><span class="this-page">1</span><a
                        href="javascript:void(0);" class="ti">2</a><a href="javascript:void(0);" class="ti">3</a><a
                        href="javascript:void(0);" class="ti">4</a><a href="javascript:void(0);" class="ti">5</a><a
                        href="javascript:void(0);" class="ti">6</a><a href="javascript:void(0);" class="ti">...10</a><a
                        href="javascript:void(0);" class="ti next">Next&gt;&gt;</a></div>
        </div>
    </div>
    <a id="target_deal" class="nav-anchor"></a>

</div>



<!-- 酒店地图 -->
<div id="pnl_mappop" class="map_pop">
    <div id="hotel_map_box" style="width:100%;height:100%"></div>
    <a href="javascript:" rel="nofollow" id="btn_close_map">关闭</a>
</div>
<script id="sales_pagination" type="text/html">
</script>
<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+sales+navbar:js+localdeals+rest:js+sales+stock:js+sales+sidebar:js+sales+cart-v2:js+sales+countdown:js+jquery.tmpl:js+M+module+Pagination:js+sales+deals:js+sales+map:js+sales+slider:js+m.sns.share:js+sales+share:js+sales+favorite:js+sales+comment:js+sales+review:js+sales+detail^YV1S^1474447881.js");
    }
</script>
<script>
    M.closure(function (require) {
        var SalesDetail = require('/js/sales/detail');
        var detail = new SalesDetail({
            sales: {
                'id': 2038766,
                'name': '【快速换票】台北 101摩天大楼观景台电子兑换券',
                'img': 'http://c3-q.mafengwo.net/s9/M00/3A/B1/wKgBs1b3OLiABa0JAACmB1hPYlI64.jpeg?imageMogr2%2Fthumbnail%2F%21450x300r%2Fgravity%2FCenter%2Fcrop%2F%21450x300%2Fquality%2F100',
                'scope': 'localdeals',
                'is_unknow_travel': false
            },
            allow_comment: false,
            allow_show_review: true,
            allow_show_deal: true,
            gift_code: ''
        });
        detail.init();
    });
</script>
@include("home/common/footer")
<link href="../css/mfw-footer.css" rel="stylesheet" type="text/css">
<link href="../css/mfw-toolbar.css" rel="stylesheet" type="text/css">
</body>
</html>