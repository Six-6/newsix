$(function(){clearItemTheme();})
var _indexState=true;var changeBg;var addHovered;var alreadOut;var $theme=$("#item-theme");function themeAnimate(){$theme=$("#item-theme");var $themeLen=$theme.find(".left_title");var $themeBg=$theme.find("#item-theme_bg");changeBg=setTimeout(function(){$("#item-theme_bg").fadeIn(200);setTimeout(function(){$("#item-theme_bg").fadeOut(200);},200)},1000);addHovered=setTimeout(function(){$theme.addClass("hovered");},1600);var showList=setTimeout(function(){$theme.find(".theme_market_list").animate({left:"0px"},600,"easeInOutQuint");},1600);alreadOut=setTimeout(function(){$theme.removeClass("hovered");},6600);}
function hideItemTheme(){$theme.removeClass("hovered");}
function clearItemTheme(){$("#_JD_ALLSORT div.item").bind("mouseenter",function(){clearTimeout(changeBg);clearTimeout(addHovered);if($(this).attr('id')=="item-theme"){$theme.addClass("hovered");}else{clearTimeout(alreadOut);hideItemTheme();}})
$("#_JD_ALLSORT div.item").bind("mouseleave",function(){clearTimeout(changeBg);clearTimeout(alreadOut);hideItemTheme();})}
$('.categorys').hover(function(){$(this).addClass('hover');$("#_JD_ALLSORT").css({"display":"block"});if(_indexState){_indexState=false;}},function(){$(this).removeClass('hover');$("#_JD_ALLSORT").css({"display":"none"});hideItemTheme();clearTimeout(changeBg);clearTimeout(addHovered);});function getHeaderMenu(str){if(str!=''){var arr=str;if(document.getElementById("categorys")){document.getElementById("categorys").innerHTML=arr.content;}}(function($){$.fn.menuAim=function(opts){this.each(function(){init.call(this,opts);});return this;};function init(opts){var $menu=$(this),activeRow=null,mouseLocs=[],lastDelayLoc=null,timeoutId=null,options=$.extend({rowSelector:"> div",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:$.noop,exit:$.noop,activate:$.noop,deactivate:$.noop,exitMenu:$.noop},opts);var MOUSE_LOCS_TRACKED=3,DELAY=300;var mousemoveDocument=function(e){mouseLocs.push({x:e.pageX,y:e.pageY});if(mouseLocs.length>MOUSE_LOCS_TRACKED){mouseLocs.shift();}};var mouseleaveMenu=function(){if(timeoutId){clearTimeout(timeoutId);}
if(options.exitMenu(this)){if(activeRow){options.deactivate(activeRow);}
activeRow=null;}};var mouseenterRow=function(){if(timeoutId){clearTimeout(timeoutId);}
options.enter(this);possiblyActivate(this);},mouseleaveRow=function(){options.exit(this);};var clickRow=function(){activate(this);};var activate=function(row){if(row==activeRow){options.activate(row);activeRow=row;return;}
asyMenuImg(row);if(activeRow){options.deactivate(activeRow);}
options.activate(row);activeRow=row;};var asyMenuImg=function(r){var cover_img=$(r).find(".cover-img img");var cover_img_data_src=cover_img.attr("data-src");var cover_img_src=cover_img.attr("src");if(cover_img_data_src&&cover_img_data_src.length>0){if(cover_img_data_src==cover_img_src){return;}else{cover_img.attr("src",cover_img_data_src)}}}
var possiblyActivate=function(row){var delay=activationDelay();if(delay){timeoutId=setTimeout(function(){possiblyActivate(row);},delay);}else{activate(row);}};var activationDelay=function(){if(!activeRow||!$(activeRow).is(options.submenuSelector)){return 0;}
var offset=$menu.offset(),upperLeft={x:offset.left,y:offset.top-options.tolerance},upperRight={x:offset.left+$menu.outerWidth(),y:upperLeft.y},lowerLeft={x:offset.left,y:offset.top+$menu.outerHeight()+options.tolerance},lowerRight={x:offset.left+$menu.outerWidth(),y:lowerLeft.y},loc=mouseLocs[mouseLocs.length-1],prevLoc=mouseLocs[0];if(!loc){return 0;}
if(!prevLoc){prevLoc=loc;}
if(prevLoc.x<offset.left||prevLoc.x>lowerRight.x||prevLoc.y<offset.top||prevLoc.y>lowerRight.y){return 0;}
if(lastDelayLoc&&loc.x==lastDelayLoc.x&&loc.y==lastDelayLoc.y){return 0;}
function slope(a,b){return(b.y-a.y)/(b.x-a.x);};var decreasingCorner=upperRight,increasingCorner=lowerRight;if(options.submenuDirection=="left"){decreasingCorner=lowerLeft;increasingCorner=upperLeft;}else if(options.submenuDirection=="below"){decreasingCorner=lowerRight;increasingCorner=lowerLeft;}else if(options.submenuDirection=="above"){decreasingCorner=upperLeft;increasingCorner=upperRight;}
var decreasingSlope=slope(loc,decreasingCorner),increasingSlope=slope(loc,increasingCorner),prevDecreasingSlope=slope(prevLoc,decreasingCorner),prevIncreasingSlope=slope(prevLoc,increasingCorner);if(decreasingSlope<prevDecreasingSlope&&increasingSlope>prevIncreasingSlope){lastDelayLoc=loc;return DELAY;}
lastDelayLoc=null;return 0;};$menu.mouseleave(mouseleaveMenu).find(options.rowSelector).mouseenter(mouseenterRow).mouseleave(mouseleaveRow).click(clickRow);$(document).mousemove(mousemoveDocument);};})(jQuery);;leftCatv2();slideMenu();}
function leftCatv2(){var x=$("#_JD_SORTLIST").remove().html();$("#_JD_ALLSORT").html(x).attr("load","1");}
function slideMenu(){var $menu=$("#_JD_ALLSORT");$menu.menuAim({activate:activateSubmenu,deactivate:deactivateSubmenu,exitMenu:exitMenu});function activateSubmenu(row){var $row=$(row),submenuId=$row.data("submenuId"),$submenu=$("#"+submenuId),height=$menu.outerHeight(),width=$menu.outerWidth();$submenu.css({left:width-2});$menu.find(">div").removeClass("hover");$row.addClass("hover");}
function deactivateSubmenu(row){var $row=$(row),submenuId=$row.data("submenuId"),$submenu=$("#"+submenuId);$row.removeClass("hover");}
function exitMenu(row){var $row=$(row),submenuId=$row.data("submenuId"),$submenu=$("#"+submenuId);$row.find(">div").removeClass("hover");}}