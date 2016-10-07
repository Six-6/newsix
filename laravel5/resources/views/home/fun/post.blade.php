<?php
$u_id = Session::get("u_id");
?>
@include("home/common/top")
<link rel="stylesheet" type="text/css" href="./fun/style_4_common.css">
<link rel="stylesheet" type="text/css" href="./fun/style_4_forum_post.css">
<script type="text/javascript">var STYLEID = '4', STATICURL = 'static/', IMGDIR = 'static/image/common', VERHASH = 'SHh', charset = 'gbk', discuz_uid = '1908', cookiepre = 'TNDS_2132_', cookiedomain = '', cookiepath = '/', showusercard = '1', attackevasive = '0', disallowfloat = 'newthread', creditnotice = '1|威望|,2|金钱|,3|贡献|', defaultstyle = '', REPORTURL = 'aHR0cDovL3d3dy5sdnk4Lm5ldC9mb3J1bS5waHA/bW9kPXBvc3QmYWN0aW9uPW5ld3RocmVhZCZmaWQ9NDc=', SITEURL = 'http://www.lvy8.net/', JSPATH = 'data/cache/', CSSPATH = 'data/cache/style_', DYNAMICURL = '';</script>
<script src="./fun/common.js" type="text/javascript"></script>
<script src="./fun/jquery.js" type="text/javascript"></script>
<script type="text/javascript">
    var jq = jQuery.noConflict();
</script>
<script language="javascript" type="text/javascript">
    function killErrors() {
        return true;
    }
    window.onerror = killErrors;
</script>
<script type="text/javascript" charset="utf-8" src="./utf8-php/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="./utf8-php/ueditor.all.min.js"></script>
<div id="append_parent">
    <div id="calendar" style="display:none; position:absolute; z-index:100000;" onclick="doane(event)">
        <div style="width: 210px;">
            <table style="text-align: center;" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                <tr id="calendar_week" align="center">
                    <td onclick="refreshcalendar(yy, mm-1)" title="上一月" style="cursor: pointer;"><a
                                href="javascript:;">&#171;</a></td>
                    <td colspan="5" style="text-align: center"><a href="javascript:;"
                                                                  onclick="showdiv('year');doane(event)"
                                                                  class="dropmenu" title="点击选择年份" id="year"></a>&nbsp;
                        - &nbsp;<a id="month" class="dropmenu" title="点击选择月份" href="javascript:;"
                                   onclick="showdiv('month');doane(event)"></a></td>
                    <td onclick="refreshcalendar(yy, mm+1)" title="下一月" style="cursor: pointer;"><a
                                href="javascript:;">&#187;</a></td>
                </tr>
                <tr id="calendar_header">
                    <td>日</td>
                    <td>一</td>
                    <td>二</td>
                    <td>三</td>
                    <td>四</td>
                    <td>五</td>
                    <td>六</td>
                </tr>
                <tr>
                    <td id="d1" height="19">0</td>
                    <td id="d2" height="19">0</td>
                    <td id="d3" height="19">0</td>
                    <td id="d4" height="19">0</td>
                    <td id="d5" height="19">0</td>
                    <td id="d6" height="19">0</td>
                    <td id="d7" height="19">0</td>
                </tr>
                <tr>
                    <td id="d8" height="19">0</td>
                    <td id="d9" height="19">0</td>
                    <td id="d10" height="19">0</td>
                    <td id="d11" height="19">0</td>
                    <td id="d12" height="19">0</td>
                    <td id="d13" height="19">0</td>
                    <td id="d14" height="19">0</td>
                </tr>
                <tr>
                    <td id="d15" height="19">0</td>
                    <td id="d16" height="19">0</td>
                    <td id="d17" height="19">0</td>
                    <td id="d18" height="19">0</td>
                    <td id="d19" height="19">0</td>
                    <td id="d20" height="19">0</td>
                    <td id="d21" height="19">0</td>
                </tr>
                <tr>
                    <td id="d22" height="19">0</td>
                    <td id="d23" height="19">0</td>
                    <td id="d24" height="19">0</td>
                    <td id="d25" height="19">0</td>
                    <td id="d26" height="19">0</td>
                    <td id="d27" height="19">0</td>
                    <td id="d28" height="19">0</td>
                </tr>
                <tr>
                    <td id="d29" height="19">0</td>
                    <td id="d30" height="19">0</td>
                    <td id="d31" height="19">0</td>
                    <td id="d32" height="19">0</td>
                    <td id="d33" height="19">0</td>
                    <td id="d34" height="19">0</td>
                    <td id="d35" height="19">0</td>
                </tr>
                <tr>
                    <td id="d36" height="19">0</td>
                    <td id="d37" height="19">0</td>
                    <td id="d38" height="19">0</td>
                    <td id="d39" height="19">0</td>
                    <td id="d40" height="19">0</td>
                    <td id="d41" height="19">0</td>
                    <td id="d42" height="19">0</td>
                </tr>
                <tr id="hourminute" class="pns">
                    <td colspan="4" align="left"><input size="1" id="hour" class="px vm"
                                                        onkeyup='this.value=this.value > 23 ? 23 : zerofill(this.value);controlid.value=controlid.value.replace(/\d+(:\d+)/ig, this.value+"$1")'
                                                        type="text">点<span id="fullhourselector"><input size="1"
                                                                                                        id="minute"
                                                                                                        class="px vm"
                                                                                                        onkeyup='this.value=this.value > 59 ? 59 : zerofill(this.value);controlid.value=controlid.value.replace(/(\d+:)\d+/ig, "$1"+this.value)'
                                                                                                        type="text">分</span><span
                                id="halfhourselector"><select id="minutehalfhourly"
                                                              onchange='this.value=this.value > 59 ? 59 : zerofill(this.value);controlid.value=controlid.value.replace(/(\d+:)\d+/ig, "$1"+this.value)'>
                                <option selected="selected" value="00">00</option>
                                <option value="30">30</option>
                            </select>分</span></td>
                    <td colspan="3" align="right">
                        <button class="pn" onclick="confirmcalendar();"><em>确定</em></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="calendar_year" onclick="doane(event)" style="display: none;z-index:100001;">
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(2020, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2020">2020</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2019, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2019">2019</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2018, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2018">2018</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2017, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2017">2017</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2016, mm);$('calendar_year').style.display='none'"><span
                        class="calendar_today" id="calendar_year_2016">2016</span></a><br><a href="javascript:;"
                                                                                             onclick="refreshcalendar(2015, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2015">2015</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2014, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2014">2014</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2013, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2013">2013</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2012, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2012">2012</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2011, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2011">2011</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(2010, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2010">2010</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2009, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2009">2009</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2008, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2008">2008</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2007, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2007">2007</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2006, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2006">2006</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2005, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2005">2005</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2004, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2004">2004</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2003, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2003">2003</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2002, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2002">2002</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(2001, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2001">2001</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(2000, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_2000">2000</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1999, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1999">1999</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1998, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1998">1998</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1997, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1997">1997</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1996, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1996">1996</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1995, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1995">1995</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1994, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1994">1994</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1993, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1993">1993</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1992, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1992">1992</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1991, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1991">1991</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(1990, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1990">1990</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1989, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1989">1989</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1988, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1988">1988</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1987, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1987">1987</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1986, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1986">1986</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1985, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1985">1985</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1984, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1984">1984</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1983, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1983">1983</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1982, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1982">1982</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1981, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1981">1981</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(1980, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1980">1980</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1979, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1979">1979</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1978, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1978">1978</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1977, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1977">1977</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1976, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1976">1976</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1975, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1975">1975</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1974, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1974">1974</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1973, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1973">1973</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1972, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1972">1972</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1971, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1971">1971</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(1970, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1970">1970</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1969, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1969">1969</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1968, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1968">1968</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1967, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1967">1967</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1966, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1966">1966</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1965, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1965">1965</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1964, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1964">1964</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1963, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1963">1963</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1962, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1962">1962</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1961, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1961">1961</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(1960, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1960">1960</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1959, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1959">1959</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1958, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1958">1958</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1957, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1957">1957</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1956, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1956">1956</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1955, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1955">1955</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1954, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1954">1954</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1953, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1953">1953</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1952, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1952">1952</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1951, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1951">1951</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(1950, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1950">1950</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1949, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1949">1949</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1948, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1948">1948</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1947, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1947">1947</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1946, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1946">1946</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1945, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1945">1945</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1944, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1944">1944</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1943, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1943">1943</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1942, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1942">1942</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1941, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1941">1941</span></a><br></div>
        <div class="col"><a href="javascript:;"
                            onclick="refreshcalendar(1940, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1940">1940</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1939, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1939">1939</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1938, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1938">1938</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1937, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1937">1937</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1936, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1936">1936</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1935, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1935">1935</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1934, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1934">1934</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1933, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1933">1933</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1932, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1932">1932</span></a><br><a href="javascript:;"
                                                                      onclick="refreshcalendar(1931, mm);$('calendar_year').style.display='none'"><span
                        id="calendar_year_1931">1931</span></a><br></div>
    </div>
    <div id="calendar_month" onclick="doane(event)" style="display: none;z-index:100001;"><a href="javascript:;"
                                                                                             onclick="refreshcalendar(yy, 0);$('calendar_month').style.display='none'"><span
                    id="calendar_month_1">1&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 1);$('calendar_month').style.display='none'"><span
                    id="calendar_month_2">2&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 2);$('calendar_month').style.display='none'"><span
                    id="calendar_month_3">3&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 3);$('calendar_month').style.display='none'"><span
                    id="calendar_month_4">4&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 4);$('calendar_month').style.display='none'"><span
                    id="calendar_month_5">5&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 5);$('calendar_month').style.display='none'"><span
                    id="calendar_month_6">6&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 6);$('calendar_month').style.display='none'"><span
                    id="calendar_month_7">7&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 7);$('calendar_month').style.display='none'"><span
                    id="calendar_month_8">8&nbsp; 月</span></a><br><a href="javascript:;"
                                                                     onclick="refreshcalendar(yy, 8);$('calendar_month').style.display='none'"><span
                    class="calendar_today" id="calendar_month_9">9&nbsp; 月</span></a><br><a href="javascript:;"
                                                                                            onclick="refreshcalendar(yy, 9);$('calendar_month').style.display='none'"><span
                    id="calendar_month_10">10 月</span></a><br><a href="javascript:;"
                                                                 onclick="refreshcalendar(yy, 10);$('calendar_month').style.display='none'"><span
                    id="calendar_month_11">11 月</span></a><br><a href="javascript:;"
                                                                 onclick="refreshcalendar(yy, 11);$('calendar_month').style.display='none'"><span
                    id="calendar_month_12">12 月</span></a><br></div>
</div>
<script src="./fun/common_smilies_var.js" charset="gbk" type="text/javascript"></script>
<div id="wp" class="wp">
    <script src="./fun/forum_post.js" type="text/javascript"></script>
    <form method="post" action="funAdd" onsubmit="return validate(this)" enctype="multipart/form-data">
        <input type="hidden" name="u_id" value="{{$u_id}}"/>
        <div id="ct" class="ct2_a ct2_a_r wp cl">
            <div class="bm bw0 cl">
                <h1 style="color:#ff9d00;font-size: 16px;">发起活动</h1>
                <div id="postbox">
                    <div class="pbt cl">
                        <div class="z">
                            <span><input required name="f_name" id="subject" class="px"
                                         onblur="if($('tags')){relatekw('-1','-1');doane();}"
                                         onkeyup="strLenCalc(this, 'checklen', 80);" style="width: 25em" tabindex="1"
                                         type="text"></span>
                            <span id="subjectchk">还可输入 <strong id="checklen">80</strong> 个字符</span>
                            <script type="text/javascript">strLenCalc($('subject'), 'checklen', 80)</script>
                        </div>
                    </div>
                    <div class="exfm cl">
                        <div class="sinf sppoll z">
                            <dl>
                                <dt><span class="rq">*</span>活动时间:</dt>
                                <dd>
                                    <div id="certainstarttime">
                                        <input name="start_time" id="starttimefrom_1" class="px"
                                               onclick="showcalendar(event, this, true)" autocomplete="off" tabindex="1"
                                               type="text"><span> ~ </span><input
                                                onclick="showcalendar(event, this, true)" autocomplete="off"
                                                id="starttimeto" name="end_time" class="px" tabindex="1" type="text">
                                    </div>
                                </dd>
                                <dt><span class="rq">*</span><label for="activityplace">活动地点:</label></dt>
                                <dd>
                                    <input name="f_place" id="activityplace" required class="px oinf" tabindex="1"
                                           type="text">
                                </dd>
                                <dt><label for="activitycity">所在城市:</label></dt>
                                <dd><input name="f_city" id="activitycity" class="px" tabindex="1" type="text" required>
                                </dd>
                                <dt><span class="rq">*</span><label for="activityclass">活动类别:</label></dt>
                                <dd class="hasd cl">
                                    <select name="f_tid">
                                        @foreach($type as $v)
                                            <option value="{{$v['f_tid']}}">{{$v['t_name']}}</option>
                                        @endforeach
                                    </select>
                                </dd>
                                <dt><label for="activitynumber">需要人数:</label></dt>
                                <dd>
                                    <input name="f_num" required id="activitynumber" class="px z" style="width:55px;"
                                           onkeyup="checkvalue(this.value, 'activitynumbermessage')" tabindex="1"
                                           type="text">
                                    <span class="ftid">
                                       <select name="f_sex" id="">
                                           <option value="0">不限</option>
                                           <option value="1">男</option>
                                           <option value="2">女</option>
                                       </select>
                                    </span>
                                </dd>
                            </dl>
                        </div>
                        <div class="sadd z">
                            <dl>
                                <dt><label for="activitycredit">消耗积分:</label></dt>
                                <dd>
                                    <input name="f_integral" id="activitycredit" required class="px" type="text">威望<p
                                            class="xg1">活动参与者需消耗的金钱</p>
                                </dd>
                                <dt><label for="cost">每人花销:</label></dt>
                                <dd>
                                    <input name="f_price" id="cost" required class="px"
                                           onkeyup="checkvalue(this.value, 'costmessage')" tabindex="1" type="text">元
                                    <span id="costmessage"></span>
                                </dd>
                                <dt><label for="activityexpiration">报名截止:</label></dt>
                                <dd class="hasd cl">
                                    <span>
                                    <input name="f_time" id="activityexpiration" class="px"
                                           onclick="showcalendar(event, this, true)" autocomplete="off" tabindex="1"
                                           type="text">
                                    </span>
                                    <a href="javascript:;" class="dpbtn"
                                       onclick="showselect(this, 'activityexpiration')">^</a>
                                </dd>
                                <dt>活动图片:</dt>
                                <dd class="pns">
                                    <p>
                                        <input type="file" name="f_img"/>
                                    </p>
                                    <span class="xg1">
                                    添加一张好看的图片，让活动更吸引人
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <input type="hidden" name="_token" value="{{csrf_token()}}"/>

                    <div>
                        <h1>地点简介</h1>
                        <script id="editor" name="f_content" required type="text/plain"
                                style="width:1024px;height:500px;"></script>
                    </div>
                    <div class="mtm mbm pnpost">
                        <button type="submit" id="postsubmit" class="pn pnc" value="true">
                            <span>发起活动</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
<script src="./fun/calendar.js" type="text/javascript"></script>
<script src="./fun/upload.js" type="text/javascript"></script>
<script>
    var ue = UE.getEditor('editor');
</script>
@include("home/common/footer")

