(function(){var fixed=function(){var f_dom=$('.fixed');var f_redx=$('.wrap').width();_wy=$(window).height();_wx=$(window).width();if(_wx>=1200){f_dom.css('marginLeft','550px');}else{f_dom.css({left:'inherit',right:'0'});}}()
function placeholder(e,d){var f_dom=$(e);$.each(f_dom,function(index,val){_this=$(val);if(_this.val().length!=0){_this.next(d).hide();_this.next(d).next('.typetips01').hide();};_this.focus(function(){_this.next(d).hide();})
_this.focusout(function(){if(_this.val().length==0){_this.next(d).next('.typetips01').show();_this.next(d).show();}else{_this.next(d).next('.typetips01').hide();};});_this.bind('input propertychange',function(){if(_this.val().length>200){var slicetext=_this.val().slice(0,200);_this.val(slicetext);};})});}
placeholder('.textarea','.simulate');})()