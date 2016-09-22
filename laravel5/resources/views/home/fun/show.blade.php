<link rel="stylesheet" type="text/css" href="./fun/style_2_common.css">
<link rel="stylesheet" type="text/css" href="./fun/style_2_portal_index.css">
<script src="./fun/jquery.js" type="text/javascript"></script>
<script type="text/javascript">
    var jq = jQuery.noConflict();
</script>

<script type="text/javascript">
    jq(function () {
        jq('.deanblb').hover(function () {
            jq(".cover", this).stop().animate({top: '270px'}, {queue: false, duration: 160});
        }, function () {
            jq(".cover", this).stop().animate({top: '390px'}, {queue: false, duration: 160});
        });
        jq('.deanphoto').hover(function () {
            jq(".cover", this).stop().animate({top: '10px'}, {queue: false, duration: 160});
        }, function () {
            jq(".cover", this).stop().animate({top: '177px'}, {queue: false, duration: 160});
        });
    });
</script>
<div id="one"  height="285" width="1000">
<div style="height:15px;"></div>
<table style="MARGIN-RIGHT: auto; MARGIN-LEFT: auto;" align="center" border="0" cellpadding="0" cellspacing="0"
       height="285" width="1000" style="width:100%;table-layout:fixed">
    <tr>
        @foreach($re as $v)
        <td width="330"  style="margin-right: 40px">
                    <span style="font-size:20px; font-family:微软雅黑;  height:30px;">
                        <a href="#">志同道合</a>
                    </span>
                <div class="deanpics">
                    <ul style="margin-right: 20px">
                        <div id="deanpics" class="area">
                            <li>
                                <div class="deanphoto"><a href="http://www.lvy8.net/thread-28-1-1.html"
                                                          target="_blank"><img
                                                src="{{$v['f_img']}}" border="0" height="180"
                                                width="297"></a>
                                    <div style="top: 177px;" class="cover deanphl"><a
                                                href="http://www.lvy8.net/thread-28-1-1.html" target="_blank">{{$v['f_name']}}</a>
                                    </div>
                                </div>
                            </li>
                            <li style="BORDER-TOP: #EBEAEA 1px solid;BORDER-RIGHT: #EBEAEA 1px solid;BORDER-LEFT: #EBEAEA 1px solid; BORDER-BOTTOM: #EBEAEA 1px solid; height:193px;">
                                <table style="BORDER-BOTTOM: #EBEAEA 1px solid;" border="0" cellpadding="0"
                                       cellspacing="0" height="30" width="100%">
                                    <tbody>
                                    <tr>
                                        <td style="font-size:14px;" height="30" width="149">&nbsp;需要人数：<span
                                                    style="font-size:14px; color:#FF0000">{{$v['f_num']}}</span>人
                                        </td>
                                        <td style="BORDER-LEFT: #EBEAEA 1px solid;font-size:14px;" width="148">
                                            &nbsp;剩余名额：<span style="font-size:14px; color:#FF0000">{{$v['count']}}</span>人
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table style="BORDER-BOTTOM: #EBEAEA 1px solid;" border="0" cellpadding="0"
                                       cellspacing="0" height="30" width="100%">
                                    <tbody>
                                    <tr>
                                        <td style="font-size:14px;" width="149">&nbsp;开始时间：{{$v['start_time']}}</td>
                                        <td style="font-size:14px;BORDER-LEFT: #EBEAEA 1px solid;" width="148">
                                            &nbsp;报名截止：{{$v['end_time']}}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table style="BORDER-BOTTOM: #EBEAEA 1px solid;" border="0" cellpadding="0"
                                       cellspacing="0" height="30" width="100%">
                                    <tbody>
                                    <tr>
                                        <td style="font-size:14px;" height="30">&nbsp;活动类别：{{$v['t_name']}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table style="BORDER-BOTTOM: #EBEAEA 1px solid;" border="0" cellpadding="0"
                                       cellspacing="0" height="30" width="100%">
                                    <tbody>
                                    <tr>
                                        <td style="font-size:14px;" height="30">&nbsp;活动地点：{{$v['f_place']}}</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" height="50" width="100%">
                                    <tbody>
                                    <tr>
                                        <td height="50" width="282">
                                            <div style="height:7px;"></div>
                                            <a href="funWrite?f_id={{$v['f_id']}}"
                                               style="font-size:14px;font-weight:bold;"><img src="./fun/bm.jpg"
                                                                                             border="0"></a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                        </div>
                    </ul>
                </div>
            </td>
        @endforeach
    </tr>

</table>
</div>
