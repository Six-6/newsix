var tucNva=$('.tuc-nav');var index=true;var trackHome=$('.track-home');var trackForeign=$('.track-foreign');var home=$('#J_InnerList');var foreign=$('#J_OuterList');var leftWrap=$('.J_tucNav');var comload=$('#J_TrackWrap');;$(function(){navToggle(trackHome,home);navToggle(trackForeign,foreign);$('.tuc-track-left').on({"mouseenter":function(){$(this).removeClass('track-city').addClass('track-selected');},"mouseleave":function(){$(this).removeClass('track-selected').addClass('track-city');}},'#J_InnerList > a,#J_OuterList > a');if(tucNva.length>0){index=false;}
if(!index){tripNav();}
surveyWrap();$(window).resize(function(){surveyWrap();});remmondTips();controlWord();function navToggle(name,id){name.on('click',function(){id.slideToggle();if($(this).hasClass('track-icon')){$(this).removeClass('track-icon').addClass('track-down');}else if($(this).hasClass('track-down')){$(this).removeClass('track-down').addClass('track-icon');}})}
function surveyWrap(){var _width=~~($(window).width());if(_width>=1200){$('#tourDoyenCenter').removeClass().addClass('index1200');}else{$('#tourDoyenCenter').removeClass().addClass('index1000');}}
function tripNav(){if(isIndex){return;}
if(leftWrap&&leftWrap.length>0){var _orginH=leftWrap.offset().top;$(window).scroll(function(){var _scrollTop=$(this).scrollTop();if(_scrollTop>=_orginH){leftWrap.addClass('scroll-nav')}else{leftWrap.removeClass('scroll-nav')}})}}
changeList('tucWant');changeList('tucRemmmond');changeList('tucPop')
changeList('remRoute');changeStyle('tucWant','tuc-list-item','tuc-list-item-s');changeStyle('tucRemmmond','tuc-nominate-item','tuc-nominate-item-s');changeStyle('tucPop','tuc-pop-item','tuc-pop-item-s');changeStyle('remRoute','tuc-route-item','tuc-route-item-s');function changeStyle(id,style1,style2){$('#'+id).on('mouseenter','"div.'+style2+',div.'+style1+'"',function(){if(this.className.indexOf(style2)>-1||this.className.indexOf(style1)>-1){$('#'+id+' > .'+style1).removeClass(style1).addClass(style2);$(this).removeClass(style2).addClass(style1);}});}
function clickLike(){$('.doyen-list-user p.tuc-deyon-c').toggle(function(){var _this=$(this);var _add='<span class="doyen-addone">+1</span>';var data={'num':'1512','flag':false};if(data!=0&&data.flag!=true){_this.append(_add);_this.find('span').eq(0).animate({'opacity':1,'top':'-18px'},'slow');_this.find('span').eq(0).queue(function(){$(this).remove();_this.html(parseInt(data.num)+1);});}},function(){var _this=$(this);var _add='<span class="doyen-addone">-1</span>';var data={'num':'1513','flag':false};if(data!=0&&data.flag!=true){_this.append(_add);_this.find('span').eq(0).animate({'opacity':1,'top':'-18px'},'slow');_this.find('span').eq(0).queue(function(){$(this).remove();_this.html(parseInt(data.num)-1);});}})}
function changeList(_id){var dom=document.getElementById(_id);$(dom).on('click','p.tuc-pro-change',function(){switch(_id){case'tucWant':$.wantTour();break;case'tucRemmmond':$.remmondSpot(function(){remmondTips();controlWord();});break;case'tucPop':$.tucPop();break;case'remRoute':$.remRoute();break;default:break;}})}
var time;$('.tuc-warp').on({'mouseenter':function(){var _left=$(this).offset().left;var _top=$(this).offset().top;$('.bdsharebuttonbox').css({'left':_left-3,'top':_top+30}).show();$('#bd_share_place').val($(this).attr("share_place"));},'mouseleave':function(){time=setTimeout(function(){$('.bdsharebuttonbox').hide();},100)}},'a.share');$(document).on({'mouseenter':function(){clearTimeout(time);$('.bdsharebuttonbox').show();},'mouseleave':function(){$('.bdsharebuttonbox').hide();}},'.bdsharebuttonbox');function remmondTips(){$('#tucRemmmond').on('mouseover','.J-ReasonPop',function(){var _name=$(this).data('name');var _em='<em class="J-ReasonDetail reason-details">'+_name+'</em>';$(this).append(_em);}).on('mouseout','.J-ReasonPop',function(){$(this).find('.J-ReasonDetail').remove();});}
$('.J-UserPic').on({'mouseenter':function(){$(this).find('.pic-edit').show();},'mouseleave':function(){$(this).find('.pic-edit').hide();}});function controlWord(){var ele=$('.J-ReasonPop');var eleVal;var len;ele.each(function(){eleVal=$.trim($(this).attr('data-name'));if(eleVal==null)return 0;if(typeof eleVal!="string"){eleVal+="";}
len=eleVal.replace(/[^\x00-\xff]/g,"01").length;if(len>20){eleVal=sliceWord(eleVal,16)+'...';}
$(this).html(eleVal)})}
function sliceWord(s,n){return s.slice(0,n).replace(/([^x00-xff])/g,"$1a").slice(0,n).replace(/([^x00-xff])a/g,"$1");}});$("<div class='tuc_uptop_wrapper' id='tuc_gotop'><div class='tuc_uptop_icon'>回顶部</div></div>").prependTo("body");$(function(){var icon=$("#tuc_gotop");var icon_h=icon.innerHeight();var icon_t=$('.tuc_uptop_icon')
var doc=$(document);var win=$(window);win.on("scroll",function(){var doc_w=doc.width();var win_h=win.height();var top=win_h-icon_h-30;var left=(doc_w-1000)/2+1100;var right=10;if(doc.scrollTop()==0){icon.fadeOut(300);}
else if(doc_w>1200){icon.css({"left":left,"right":"auto","top":top}).fadeIn(300);}
else{icon.css({"left":"auto","right":right,"top":top}).fadeIn(300);}});icon.on({"click":function(){if($.browser.msie){doc.scrollTop(0);}else{$("body,html").animate({scrollTop:0});}},"mouseenter":function(){icon_t.css('color','#333');},"mouseleave":function(){icon_t.css('color','#666');}});});window.onload=function(){comload.find('.J_SpotComment').each(function(){var Val=$.trim($(this).attr('data-name'));var len=Val.replace(/[^\x00-\xff]/g,"01").length;if(len>80){Val=Val.slice(0,80).replace(/([^x00-xff])/g,"$1a").slice(0,80).replace(/([^x00-xff])a/g,"$1")+'...';}
$(this).html(Val)});if(window.isIndex){var spot=home.find('a').length||foreign.find('a').length;if(spot>0){$('.J_AMore').show();}else{$('.J_AMore').hide();}}
var rightH=comload.height();var leftH=leftWrap.height();if(parseInt(rightH+40)<leftH&&isIndex){trackHome.removeClass('track-down').addClass('track-icon');home.hide();trackForeign.removeClass('track-down').addClass('track-icon');foreign.hide();}}