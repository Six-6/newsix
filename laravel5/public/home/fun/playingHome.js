$(function(){playing.initShow();sliderFix();function sliderFix(){var screenWidth=$('body').width(),sliderImgsWidth=$('.nivo-imageLink').children('img').width();$('.nivoSlider').css('marginLeft','-'+((sliderImgsWidth-screenWidth)/2)+'px');(screenWidth>=800)&&$('.nivo-caption').css('paddingLeft',((sliderImgsWidth-screenWidth)/4)+'px');}
$(window).resize(function(){sliderFix();});});var playing={hasClick:false,initShow:function(){this.initResize();this.bindEvent();this.getBkRecommend();$('#slider').nivoSlider({directionNav:false});$('.nivo-control*').html('');$('.commen-loadding').hide();$('.list-data').eq(0).fadeIn();$('img').unveil();var totalPage=Math.ceil($render_data.count);if(totalPage>1){this.initPagers(1,1,totalPage);};},initResize:function(){$(window).resize(function(){if(window.innerWidth<1200){$('body').removeClass('index1200');$('body').addClass('index1000');}else{$('body').removeClass('index1000');$('body').addClass('index1200');}});},getListAjax:function(type){var type=type;switch(type){case 0:type=1;break;case 1:type=0;break;case 2:type=-1;break;}
var request={type:type,page:1,limit:15};var self=this;$show=$('.list-data').eq(type);$.ajax({url:"/way/list",data:request,dataType:"json",type:'get',cache:false,success:function(response){var totalPage=response.data.count;if(totalPage==0){$('.commen-loadding').hide();$show.append('<div class="no-data">暂无数据哦！</div>');$show.show();}else{$('.no-data').hide();self.renderListData(response.data,$show);self.initPagers(1,type,totalPage);}}});},renderListData:function(data,$show){var playing_list='<% for(var i=0,len=list.length; i<len; i++) { %>\
                           <li>\
                               <a href="/way/<%=list[i].contentId%>" target="_blank">\
                                     <div class="playing-img">\
                                         <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/07/2F/Cii9EVbNEqaIIpXmAAGPyGo67ggAACQ5ALl6WQAAY_g60_w400_h300_c1_t0.jpeg" data-src="<%=list[i].background%>" alt="" class="playing-img-show">\
                                         <img src="http://img1.tuniucdn.com/site/images/playing/recbg.png" alt="" class="playing-meng">\
                                         <div class="playing-des">\
                                            <div class="playing-top">\
                                                <div class="playing-days">\
                                                     <span class="day-num"><%=list[i].dayCost%></span>\
                                                     <span class="day-day">DAYS</span>\
                                                 </div>\
                                                 <div class="playing-tit"><%=list[i].title%></div>\
                                            </div>\
                                            <% if(list[i].placesByDay.length>0){ %>\
                                            <div class="playing-hover-show">\
                                                <% for(var j=0;j<list[i].placesByDay.length;j++) { %>\
                                                <p>D<%=list[i].placesByDay[j].dayIndex %>&nbsp;<%=list[i].placesByDay[j].places%></p>\
                                                <% } %>\
                                            </div>\
                                            <% } %>\
                                         </div>\
                                     </div>\
                                </a>\
                                <div class="playing-tit-show">\
                                     <div class="playing-ding" id="dingAjax" data-id="<%=list[i].contentId%>"><i></i><%=list[i].praiseCnt%></div>\
                                     <div class="playing-comment"><i></i><%=list[i].commentCnt%></div>\
                                     <div class="playing-scan"><i></i><%=list[i].pvCnt%></div>\
                                     <a href="/person/<%=list[i].userInfo.custIndentity%>" target="_blank">\
                                        <img src="http://m.tuniucdn.com/filebroker/cdn/snc/2a/45/2a4576e6ea09bac20225e74e101aecb1_w90_h90_c1_t0.png" data-src="<%=list[i].userInfo.headImage%>" alt="">\
                                        <div class="playing-auther-name"><%=list[i].userInfo.nickName%></div>\
                                     </a>\
                                </div>\
                           </li>\
                       <% } %>';if(data.list&&data.list.length>0){var render=template.compile(playing_list);var html=render(data);$('.commen-loadding').hide();$show.html(html);$show.show();$('img').unveil();}else{$show.html('');};},getBkRecommend:function(){var self=this;var request={};$.ajax({url:"/way/temai",data:request,dataType:"json",type:'get',cache:false,success:function(response){if(response.data.length==0){$('.bk-recommend').hide();}else{$('.bk-recommend').show();self.renderBkList(response);}}});},renderBkList:function(data){var $show_bk=$('.bk-list');var bk_list='<% for(var i=0;i<data.length; i++) { %>\
                            <li>\
                                 <a href="http://temai.tuniu.com/tours/<%=data[i].id%>/" target="_blank">\
                                <img src="<%=data[i].pic%>" data-src="<%=data[i].pic%>"alt="" class="bk-img">\
                                <div class="bk-des-show">\
                                     <p class="bk-name"><%=data[i].temaiProductName%></p>\
                                     <p class="bk-des"><%=data[i].desc%></p>\
                                     <div class="price-show">\
                                         <span class="bk-type"><%=data[i].productType%></span>\
                                         <div class="bk-price">\
                                             <span class="price-num">￥<%=data[i].adultPrice%></span>\
                                             起\
                                         </div>\
                                     </div>\
                                </div>\
                            </a>\
                            </li>\
                       <% } %>';if(data.data&&data.data.length>0){var render=template.compile(bk_list);var html=render(data);$('.commen-loadding').hide();$show_bk.append(html);$('img').unveil();};},initPagers:function(page,index,totalCout){var self=this;if(!playing.hasClick){$show=$('.list-data').eq(0);}else{$show=$('.list-data').eq(index);}
$('[data-init="pager"]').hide().eq(index).show();$('[data-init="pager"]').eq(index).initPager({totalPage:totalCout,showPage:5,ajax:function(params){var _page=params.page
$(window).scrollTop(1100);$show.hide();$('.commen-loadding').show();$.ajax({url:"/way/list",dataType:"json",type:'get',data:{page:_page,limit:15,type:index},cache:false,success:function(response){params.callback(response.data);self.renderListData(response.data,$show);$show.fadeIn('fast');}});}});},likes:function(sel,contentId,clsName){$.ajax({url:"/way/praise",dataType:"json",type:"get",data:{objId:contentId},cache:false,success:function(response){if(!response.success){if(response.errorCode==10000){window.location.href='http://www.tuniu.com/u/login?origin='+location.href;}else{layer.alert(response.msg);}}else{if(response.data.state){var likesNum=parseInt($(sel).text())+1;$(sel).addClass(clsName).html("<i></i>"+likesNum);$(sel).find('.dong-false').remove();if(clsName=='pro-dingLikes'){$(sel).append('<div class="dong-white dong-true">+1</div>');}else{$(sel).append('<div class="dong-yellow dong-true">+1</div>');}
$(sel).find('.dong-true').css('opacity','1').animate({"top":"-18px",'opacity':'0'},500);}else{var likesNum=parseInt($(sel).text())-1;$(sel).removeClass(clsName).html("<i></i>"+likesNum);$(sel).find('.dong-true').remove();if(clsName=='pro-dingLikes'){$(sel).append('<div class="dong-white dong-false">已取消</div>');}else{$(sel).append('<div class="dong-yellow dong-false">已取消</div>');}
$(sel).find('.dong-false').css('opacity','1').animate({"top":"-18px",'opacity':'0'},500);}}}});},bindEvent:function(){var self=this,$doc=$(document),nowtemp=0,nowwidth=400,len=$('.pro-list li').length;$doc.on('click','.master-tab span',function(){var index=$(this).index();$('.master-tab span').removeClass('current').eq(index).addClass('current');$('.maseter-list').hide().eq(index).show();}).on('click','.playing-tab li',function(){playing.hasClick=true;var index=$(this).index();$('.list-data').hide();$('.playing-tab li').removeClass('current').eq(index).addClass('current');$('.commen-loadding').show();$('[data-init]').hide();$('.page-cur').removeClass('page-cur');self.getListAjax(index);$.each($('.pagination'),function(ind,obj){var pageFirst=$(this).find('.page-first'),firstShowing=$(this).find('.firstshowing');if(pageFirst.length>0){if(pageFirst.css('display')=='block'){pageFirst.addClass('page-cur');}else{firstShowing.addClass('page-cur');}}else{pageFirst.removeClass('page-cur');firstShowing.addClass('page-cur');}})}).on('click','#pro-next',function(){if(nowtemp<len-3){nowtemp++;$(".pro-list").animate({"left":-nowtemp*nowwidth});}}).on('click','#pro-prev',function(){if(nowtemp>0){nowtemp--;$(".pro-list").animate({"left":-nowtemp*nowwidth});}}).on('click','.write-playing',function(event){var e=event;e.preventDefault();$.ajax({url:"/way/is-expert",dataType:"json",type:"get",cache:false,data:{},success:function(response){e.preventDefault();if(!response.success){if(response.errorCode==10000){window.location.href='http://www.tuniu.com/u/login?origin='+location.href;}else{layer.alert('网络异常，请重新操作！');}}else{if(response.data.state){window.location.href='http://www.tuniu.com/way/write/';}else{var _html='<div class="show-errer">\
                                             <img src="http://img1.tuniucdn.com/site/images/playing/info.jpg" alt="" />\
                                             <a href="/traveler/recruit/" class="appy-master" target="_blank">申请途牛大玩家</a>\
                                        </div>';$.layer({type:1,title:['提示','background:none;height:0'],shade:[0.5,'#000'],border:[10,0.3,'#000'],closeBtn:[0,true],shadeClose:true,btns:0,btn:[''],area:['430px','230px'],page:{html:_html}});}}}})}).on("click",".playing-ding",function(){var contentId=$(this).attr("data-id")
self.likes(this,contentId,"playing-dingLikes");}).on("click",".pro-ding",function(event){var contentId=$(this).attr("data-id");self.likes(this,contentId,"pro-dingLikes");return false;})}}