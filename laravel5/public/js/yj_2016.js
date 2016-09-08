$(function(){yj_home.initShow();yj_home.tabClick();yj_home.searchAjax();yj_home.bindEvent();var totalPage=Math.ceil($render_data.count);if(totalPage>=1){yj_home.initPagers(1,0,totalPage);$('.list-img').attr('target','_blank');$('.list-img').attr('rel','nofollow');$('.page-bottom a').attr("rel","nofollow");}
JPlaceHolder.init();yj_home.searchAjax();});var yj_home={initShow:function(){$('.yj-tab li').eq(0).addClass('current');$('.slide-bg').eq(0).hide();$('.interview-img-show').eq(0).fadeIn();$('.interview-list li .interview-des').eq(0).slideDown();$('.interview-list li').find('.interview-name').eq(0).addClass('interview-name-hover');$('.yj-list').eq(0).fadeIn();$('.commen-loadding').hide();$('.input_search').attr('autocomplete','off');},tabClick:function(){$('.yj-tab li').each(function(index,el){$(this).click(function(event){if($(this).attr('class')=="current"){}else{$('.yj-tab li').removeClass('current')
$(this).addClass('current');$('.yj-list').hide();$('[data-init]').hide();$('.commen-loadding').show();$('.pager').remove();$('.yj-list-show').after("<div class='pager pagination' data-init='pager' style='display:none'></div>"
+"<div class='pager pagination' data-init='pager' style='display:none'></div>"
+"<div class='pager pagination' data-init='pager' style='display:none'></div>");yj_home.getTourListAjax(index);}});});$('.interview-list li').each(function(index,el){$(this).hover(function(){if($(this).find(".interview-des").is(":visible")==false){$('.interview-img-show').fadeOut('slow').eq(index).fadeIn('slow');$('.interview-list li').find('.interview-des').slideUp().eq(index).slideDown();$('.interview-list li').find('.interview-name').removeClass('interview-name-hover');$('.interview-list li').find('.interview-name').eq(index).addClass('interview-name-hover');}});});},searchAjax:function(){var search_form=$('#yjsearch_form');var input=$('.J_input');var submit=$('.J_sub_btn');submit.on('click',function(){if(/^\s*$/.test(input.val())){input.val('');}else{search_form.submit();}});},getTourListAjax:function(type){var request={sortType:type+1,page:1,limit:10};var self=this;$show=$('.yj-list').eq(type);$.ajax({url:"/travels/index/ajax-list",data:request,dataType:"json",type:'get',cache:false,success:function(response){var totalPage=response&&Math.ceil(response.data.pageCount);self.renderList(response.data,$show);self.initPagers(1,type,totalPage);$('.page-bottom a').attr("rel","nofollow");}});},renderList:function(data,$show){var tour='<% for(var i=0,len=rows.length; i<len; i++) { %>\
                            <li>\
                                 <a class="list-img"  target="_blank" rel="nofollow" href="http://www.tuniu.com/trips/<%=rows[i].id%>">\
                                      <% if(rows[i].picUrl) { %>\
                                        <img src="<%=rows[i].picUrl%>" alt="">\
                                      <% }else{%>\
                                         <img src="http://img1.tuniucdn.com/site/images/yj_2016/default-img.png" >\
                                      <% } %>\
                                      <% if(rows[i].bindOrder) { %>\
                                       <div class="list-type"></div>\
                                      <% } %>\
                                      <% if(rows[i].stamp == 0) { %>\
                                      <% }else if(rows[i].stamp == 1) {%>\
                                       <div class="list-recommend gl-mt"></div>\
                                      <% }else if(rows[i].stamp == 2 || rows[i].stamp == 3) {%>\
                                       <div class="list-recommend gl-gl"></div>\
                                      <% }else{%>\
                                       <div class="list-recommend gl-jh"></div>\
                                      <% } %>\
                                </a>\
                            <div class="list-show">\
                           <a  target="_blank" rel="nofollow" href="http://www.tuniu.com/trips/<%=rows[i].id%>">\
                           <div class="list-name"><%=rows[i].name%></div>\
                           <div class="list-des"><%=rows[i].summary%></div>\
                           </a>\
                           <div class="list-auther">\
                              <div class="list-auther-left">\
                                    <a  target="_blank" rel="nofollow" href="http://www.tuniu.com/person/<%=rows[i].authorIndentity%>">\
                                      <% if(rows[i].authorHeadImg) { %>\
                                        <img src="<%=rows[i].authorHeadImg%>" alt="">\
                                      <% }else{%>\
                                         <img src="http://img2.tuniucdn.com/img/20140211/guide/default_head.png" alt="">\
                                      <% } %>\
                                   <div class="list-auther-name"><%=rows[i].authorName%></div>\
                                    </a>\
                                   <div class="list-scan"><i></i><%=rows[i].viewCount%> &nbsp;</div>\
                                   <div class="list-comment">\
                                       <i></i><%=rows[i].commentCount%> &nbsp;</div>\
                              </div>\
                              <% if(!rows[i].hasLike) { %>\
                                    <% if(rows[i].likeCount == 0) { %>\
                                          <div class="list-auther-right ding_yes" id="dingAjax" data-id="<%=rows[i].id%>">\
                                              <i></i>\
                                             <span>为TA加牛</span>\
                                          </div>\
                                        <% }else{ %>\
                                          <div class="list-auther-right ding_yes" id="dingAjax" data-id="<%=rows[i].id%>">\
                                             <i></i>\
                                            <span><%=rows[i].likeCount%></span>\
                                          </div>\
                                        <% } %>\
                              <% }else{ %>\
                                    <div class="list-auther-right ding_no dingLikes" id="dingAjax" data-id="<%=rows[i].id%>">\
                                        <i></i>\
                                            <span><%=rows[i].likeCount%></span>\
                                    </div>\
                              <% } %>\
                           </div>\
                          </div>\
                            </li>\
                       <% } %>';if(data.rows&&data.rows.length>0){var render=template.compile(tour);var html=render(data);$('.commen-loadding').hide();$show.html('');$show.append(html);$('html, body').animate({scrollTop:750},1000);$show.fadeIn(2000);};},likes:function(sel,id,clsName,op){$.ajax({url:"/travels/index/ajax-like",dataType:"json",type:"get",data:{tid:id,op:op},cache:false,success:function(response){if(!response.success){if(response.msg==="请先登录"){window.location.href='http://www.tuniu.com/u/login?origin='+location.href;}}else{var $index=$(sel).children('span').eq(0);if(op==1){if($index.text()=="为TA加牛"){$index.text('1');}
else{$index.text(parseInt($index.text())+1);}
$(sel).addClass("ding_no");$(sel).addClass(clsName);$(sel).removeClass("ding_yes");$(sel).append('<p class="likes-word">+1</p>');$(".likes-word").animate({bottom:90},'slow',function(){$(this).remove()});}else{if($index.text()==1){$index.text('为TA加牛');}
else{$index.text(parseInt($index.text())-1);}
$(sel).removeClass(clsName);$(sel).addClass("ding_yes");$(sel).removeClass("ding_no");$(sel).append('<p class="likes-word">已取消</p>');$(".likes-word").animate({bottom:90},'slow',function(){$(this).remove()});}}}});},initPagers:function(page,index,totalCout){var self=this,$show=$('.yj-list').eq(index);$('[data-init="pager"]').hide().eq(index).show();$('[data-init="pager"]').eq(index).initPager({totalPage:totalCout,showPage:5,ajax:function(params){var _page=params.page
$(window).scrollTop(600);$show.hide();$('.commen-loadding').show();$.ajax({url:"/travels/index/ajax-list",dataType:"json",type:'get',data:{sortType:index+1,page:_page,limit:10},cache:false,success:function(response){params.callback(response.data);self.renderList(response.data,$show);$show.fadeIn('fast');}});}});},bindEvent:function(){$(document).on("click",".list-auther-right",function(){var id=$(this).attr("data-id");if($(this).hasClass("dingLikes")){yj_home.likes(this,id,"dingLikes",2)}else{yj_home.likes(this,id,"dingLikes",1)}}).on("mouseover",".list-auther-right",function(){if($(this).hasClass("ding_yes")){$(this).removeClass("ding_yes").addClass("ding_no");}}).on("mouseout",".list-auther-right",function(){if(!$(this).hasClass("dingLikes")){$(this).removeClass("ding_no").addClass("ding_yes");}})}};var JPlaceHolder={_check:function(){return'placeholder'in document.createElement('input');},init:function(){if(!this._check()){this.fix();}},fix:function(){jQuery(':input[placeholder]').each(function(index,element){var self=$(this),txt=self.attr('placeholder');self.wrap($('<div></div>').css({position:'relative',zoom:'1',border:'none',background:'none',padding:'none',margin:'none'}));var pos=self.position(),h=self.outerHeight(true),paddingleft=self.css('padding-left');var holder=$('<div></div>').text(txt).css({fontSize:"18px",float:"left",position:'absolute',left:pos.left,top:pos.top+"7px",height:h,lienHeight:h,paddingLeft:paddingleft,color:'#aaa'}).appendTo(self.parent());$(".J_sub_btn").remove();self.parent().append("<input class='search_btn J_sub_btn' type='button' />");self.focusin(function(e){holder.hide();}).focusout(function(e){if(!self.val()){holder.show();}});holder.click(function(e){holder.hide();self.focus();});});}};