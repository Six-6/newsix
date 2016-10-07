define("com_amd/lazyloadnew.min",['jquery'],function(){(function(a) {
    a.fn.lazyload = function(b) {
        var c = {threshold: 0,failure_limit: 0,event: "scroll",mulevent: "scroll click",effect: "show",container: window,skip_invisible: true};
        if (b) {
            if (null !== b.failurelimit) {
                b.failure_limit = b.failurelimit;
                delete b.failurelimit
            }
            a.extend(c, b)
        }
        var d = this;
        var mslater = "";
        if (0 == c.event.indexOf("scroll")) {
            a(c.container).bind(c.mulevent, function(g) {
                var e = 0;
                if(mslater){
                    clearTimeout(mslater);
                }
                mslater = setTimeout(function(){
                    d.each(function() {
                        if (c.skip_invisible && !a(this).is(":visible")) {
                            return
                        }
                        if (a.abovethetop(this, c) || a.leftofbegin(this, c)) {
                        } else {
                            if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) {
                                a(this).trigger("appear")
                            } else {
                                if (++e > c.failure_limit) {
                                    return false
                                }
                            }
                        }
                    });
                    var f = a.grep(d, function(h) {
                        return !h.loaded
                    });
                    d = a(f)
                },150) 


                
            })
        }




        this.each(function() {
            var e = this;
            e.loaded = false;
            a(e).one("appear", function() {
                if (!this.loaded) {
                    a("<img />").bind("load", function() {
                        a(e).hide().attr("src", a(e).attr("data-src"))[c.effect](c.effectspeed);
                        e.loaded = true
                    }).attr("src", a(e).attr("data-src"))
                }
            });
            if (0 != c.event.indexOf("scroll")) {
                a(e).bind(c.event, function(f) {
                    if (!e.loaded) {
                        a(e).trigger("appear")
                    }
                })
            }
        });
        a(c.container).trigger(c.event);
        return this
    };
    a.belowthefold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).height() + a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top + a(d.container).height()
        }
        return b <= a(c).offset().top - d.threshold
    };
    a.rightoffold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).width() + a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left + a(d.container).width()
        }
        return b <= a(c).offset().left - d.threshold
    };
    a.abovethetop = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top
        }
        return b >= a(c).offset().top + d.threshold + a(c).height()
    };
    a.leftofbegin = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left
        }
        return b >= a(c).offset().left + d.threshold + a(c).width()
    };
    a.extend(a.expr[":"], {"below-the-fold": function(b) {
            return a.belowthefold(b, {threshold: 0,container: window})
        },"above-the-fold": function(b) {
            return !a.belowthefold(b, {threshold: 0,container: window})
        },"right-of-fold": function(b) {
            return a.rightoffold(b, {threshold: 0,container: window})
        },"left-of-fold": function(b) {
            return !a.rightoffold(b, {threshold: 0,container: window})
        }})
})(jQuery);
}

)
;define('jifen/JF_index',["jquery",'com_amd/lazyloadnew.min'],function(){var JF_index={init:function(){this.lazyload();this.bannerSlide();this.lastOrders();},navList:function(){var jfItems=$("#jfItems");var jfItems_top=parseInt(jfItems.offset().top);jfItems.find("li.jifen_item").each(function(i,n){$(n).hover(function(){var t_top=parseInt($(n).offset().top)-jfItems_top;$(n).addClass("hover").siblings().removeClass("hover");$(n).find(".jifen_list").css({"top":-(t_top+1)}).stop(true,false).animate({"right":-120},300);$(n).find(".jf_item").css({"background":"#f7f7f7"});},function(){jfItems.find("li.jifen_item").find(".jf_item").css({"background":"transparent"});jfItems.find("li.jifen_item").removeClass("hover");$(n).find(".jifen_list").css({"right":-70});});});},lazyload:function(){$("img").lazyload({effect:"fadeIn",failurelimit:35,threshold:300});},bannerSlide:function(){var bannerPic=$("#bannerPic");var bannerPic_li=bannerPic.find("li");var bannerPic_li_lg=bannerPic.find("li").length;var banner_temp=0;var banner_Timeout="";var nc_str='<p class="train_curs"><span class="nc_cur"></span>';if(bannerPic_li_lg>1){for(var j=1;j<bannerPic_li_lg;j++){nc_str+="<span></span>";}
nc_str+='</p>'
bannerPic.append(nc_str);var bannerPic_zzz_curs=bannerPic.find(".train_curs");bannerPic_zzz_curs.find("span").click(function(){var __span_n=$(this).index();bannerPic_li.fadeOut(1000);bannerPic_li.eq(__span_n).fadeIn(1000);bannerPic_zzz_curs.find("span").removeClass("nc_cur").eq(__span_n).addClass("nc_cur");});bannerPic.hover(function(){clearTimeout(banner_Timeout);},function(){banner_Timeout=setInterval(function(){banner_temp++;if(banner_temp<bannerPic_li_lg){bannerPic_li.fadeOut(1000);bannerPic_li.eq(banner_temp).fadeIn(1000);bannerPic_zzz_curs.find("span").removeClass("nc_cur").eq(banner_temp).addClass("nc_cur");}else{banner_temp=0;bannerPic_li.fadeOut(1000);bannerPic_li.eq(banner_temp).fadeIn(1000);bannerPic_zzz_curs.find("span").removeClass("nc_cur").eq(banner_temp).addClass("nc_cur");}},8000);});banner_Timeout=setInterval(function(){banner_temp++;if(banner_temp<bannerPic_li_lg){bannerPic_li.fadeOut(1000);bannerPic_li.eq(banner_temp).fadeIn(1000);bannerPic_zzz_curs.find("span").removeClass("nc_cur").eq(banner_temp).addClass("nc_cur");}else{banner_temp=0;bannerPic_li.fadeOut(1000);bannerPic_li.eq(banner_temp).fadeIn(1000);bannerPic_zzz_curs.find("span").removeClass("nc_cur").eq(banner_temp).addClass("nc_cur");}},8000);}},lastOrders:function(){var $list,change;$list=$('#last_orders .order_box');var dl_num=$list.find("dl").length;if(dl_num<=3){$list.css("height","auto");return;}
change=function(){$firstchild=$list.children('dl:eq(0)');$list.animate({scrollTop:$firstchild.outerHeight()},200,function(){$list.append($firstchild);$list.scrollTop(0);});setTimeout(change,3000);};setTimeout(change,3000);}}
return JF_index;});