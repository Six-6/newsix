(function(a) {
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
                                //if (++e > c.failure_limit) {
                                    //return false
                                //}
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
;$(function(){$('img').lazyload({effect:"show",failurelimit:50,threshold:100});showTitle();})
function showTitle(){$("#startNav li a").hover(function(){$(this).attr("title",$(this).text());})};$(function(){hoverMask();popUpBox();clickReplyBtn();})
var authorName=$("#author_name").text();var convertNR=function(tag,b){var h=["<BR>","\r\n"],c=["<br/>","\n"],e=["&nbsp;"," "],d=0===b?1:0;return tag.replace(RegExp(h[d],"igm"),h[b]).replace(RegExp(c[d],"igm"),c[b]).replace(RegExp(e[d],"igm"),e[b]);return this.replace(/[\n\r]/g,tag||'<br/>')}
function hoverMask(){var super_m=$(".super");var details_pic=$(".details-pic");details_pic.each(function(i,n){var Font=$(this).children("div[class^=font-]");var Banner=$(this).children("div[class^=banner-]");$(n).hover(function(){$(this).find(".super").stop(true).show().animate({"right":"0"},300);Font.css({'height':'auto'});Banner.height(Font.height()+17);},function(){$(this).find(".super").stop(true).animate({"right":"-102"},300).hide();Font.css({'height':'21px'});Banner.height(Font.height()+17);});})
super_m.each(function(i,n){var likeBtn=$(n).find(".super_like");var shareBtn=$(n).find(".super_share");var quoteBtn=$(n).find(".super_quote");quoteBtn.click(function(){var _this=$(this);var parent=_this.parents(".details-pic").eq(0);var imgUrl=parent.find("img").attr("src");var imgId=_this.attr("ImgId");$("#commentImgId").val(imgId);var reviewBox=$("#reviewBox");$("#w_comment").val("");if($("#commentName").text()=="")
{$("#commentName").text(authorName);}
reviewBox.find("#imgUrl").attr("id",imgUrl);alertCommentBox();});});}
function clickReplyBtn(){$("#commentary a.author-operation").click(function(){var _this=$(this);var commentId=_this.attr("commentId");var selfflag=_this.attr("selfflag");if(selfflag=="1"){$("#updateFlag").val("1");$.ajax({url:'/singletravelajax/getcomment?commentId='+commentId,type:"POST",timeout:100000,dataType:'json',success:function(responseText){if(responseText.success){$("#h_comment").val(responseText.data);}},error:function(){}});}else{$("#updateFlag").val("0");}
$("#commentReplyId").val(commentId);alertReplyBox();$('#reply_w_comment').checkCharLength('.reply_limitNum');})}
$.fn.checkCharLength=function(errContent){var $this=$(this);$this.change(function(event){var curLength=$this.val().length;var maxlength=$this.attr('maxlength');if(curLength>maxlength){$this.val($.trim($this.val()).substr(0,maxlength)).trigger('change');return;}
$(errContent).text(maxlength-curLength).parent().toggleClass('red',curLength>maxlength);}).keyup(function(){$this.trigger('change')});if($.trim($this.val())!=''){$this.trigger('change')}}
$('#r_comment').checkCharLength('#r_limitNum');$('#w_comment').checkCharLength('.limitNum');$('#h_comment').checkCharLength('.h_limitNum');function popUpBox(){$('#popBoxPanel a.close, #popBoxPanel .comment_cancle, #dialog-overlay').click(function(){$('#dialog-overlay, .pop_box').hide();return false;});$(window).resize(function(){if(!$('#popBoxPanel .pop_box').is(':hidden'))popup();});}
function popup(){var maskHeight=$(document).height();var maskWidth=$(window).width();$('#dialog-overlay').css({height:maskHeight,width:maskWidth}).show();}
function alertCommentBox(){popup();$('#reviewBox').show();}
function alertReplyBox(){popup();$('#replyBox').show();$('#replyBox .w_comment').val("");}
(function(a){a.cookiedb=function(b){b=a.extend({"name":"cookiedb","value":"","fenge":"_","isfind":0,"maxlength":10,"expires":360},b);if(void 0===a.cookie)return window.console&&console.log("no $.cookie"),!1;var c=a.cookie(b.name);return cookieDB=null!=c?c.split(b.fenge):[],-1!=a.inArray(b.value.toString(),cookieDB)?"repeat":b.isfind?"nofound":(cookieDB.length>=b.maxlength&&cookieDB.shift(),cookieDB.push(b.value),a.cookie(b.name,cookieDB.join(b.fenge),{"expires":b.expires,"path":"/"}),"success");};})(jQuery),$(function(){function cookielike(){"0"==privateObject.CurrentUserId&&$.cookiedb({"name":"gs_link_like","value":DETAIL_API.TravelId});}
function b(a){var b=$("#float_top_bread .bread");b.find("a.first").length||b.append('<a href="/" target="_blank" class="first">游记</a> ');if(a){var d=a.des,h=a.desLink,f=a.poi;a=a.poiLink;var g="";b.find(".first").nextAll().remove(),d&&(g+="<i> &gt; </i>",g=h?g+('<a href="'+h+'">'+d+"</a>"):g+("<span>"+d+"</span>")),f&&(g+="<i> &gt; </i>",g=a?g+('<a href="'+a+'">'+f+"</a>"):g+("<span>"+f+"</span>")),b.find(".first").after(g);}else 1!==b.find("a").length&&b.find(".first").nextAll().remove();}
$(".img_block").hover(function(){$(this).addClass("over").find(".img_text div").css({"height":$(this).find(".img_text").height()+"px"}).end().siblings(".img_block.over").removeClass("over"),290>$(this).find("img").width()?$(this).find(".describe").hide():$(this).find(".describe").show();},function(){var a=$(this);setTimeout(function(){"none"!=$("#bdshare").css("display")?a.find(".img_text div").css({"height":a.find(".img_text").height()+"px"}):a.removeClass("over").find(".img_text div").css({"height":"30px"});},50);}),function(){function a(b){return b<=B;}
function c(){x=$(window).scrollTop(),0==C&&(u.each(function(){q.push($(this).offset().top);}),y=q.length-1,maxLastPos=q[y]+u.eq(y).height()-z,C++),x>maxLastPos?n():k(x);}
function n(){b({});}
function k(c){B=c+z,c=q.filter(a);var f=c.length;if(0<f){c=q.indexOf(c[f-1]);var f=u.length,g=showNum-1;if(-1<c){var h=showNum-f;var h=poiList[c],k=h.len,p=h.top,t=p.filter(a),f=t.length,p=p.indexOf(t[f-1]),t={};0<=p&&(t.des=h.destination[p],t.desLink=h.desLink[p],t.poi=h.name[p],t.poiLink=h.link[p]),b(t);}}}
var d=0,w=0,u=$("#daybox .room"),v=$(".daylinkbox ul"),C=0,q=[],maxLastPos=0,r=$(".readers ").offset().top+$(".readers ").outerHeight()+10,z=r+50;showNum=5,$upbtn=$(".daylink .upbtn"),$downbtn=$(".daylink .downbtn"),poiList=[];(function(){var a=u.length,b=null,c=0;for(c;c<a;c++){var e=u.eq(c),f=e.attr("id"),f=f.substring(1,f.length);id=parseInt(f,10);var g="",g=0<c?'<li><a href="javascript:;" data-id="#d'+id+'">'+id+"</a></li>":'<li class="current"><a href="javascript:;" data-id="#d'+id+'">'+id+"</a></li>",g=$(g);3<f.length?g.find("a").css({"font-size":"16px"}):2<f.length&&g.find("a").css({"font-size":"20px"}),v.append(g);var e=e.find(".room-city"),h=[],k=[],l=[],n=[],q=[],s=[];e.each(function(){var a=$(this),b=$.trim(a.find("p").text()),c=a.offset().top-40,d=a.find("p").attr("data-destination")||"",e=$.trim(a.find("p").attr("data-destination-href")),a=$.trim(a.find("p a").attr("href")),d=$.trim(d),b=b.replace(/\'|\"/g,"");h.push(b),50<b.replace(/\s/ig,"x").replace(/[^x00-xff]/g,"xx").length&&(b=$.gsSubstring(b,25,1)+"..."),k.push(b),l.push(c),n.push(d),q.push(e),s.push(a);}),poiList.push({"name":k,"top":l,"len":e.length,"destination":n,"link":s,"desLink":q,"title":h});}})();$(window).scroll(function(){c();});}();});