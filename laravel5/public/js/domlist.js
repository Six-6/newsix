(function($){var domlist=domlist||{};$.extend(domlist,{checkMobileNum:function(){var f_dom=$('.checkinfor');f_dom.on('blur',function(){var re=/^1\d{10}$/;var _thisval=$(this).val();var showico=$(this).next('.typetips01');var showico1=$(this).next('.typetips01.fea');if(re.test(_thisval)){showico.addClass('typetips');showico.html('');}else{if(_thisval.length==0){showico.removeClass('typetips');showico.html('请输入手机号');showico1.html('请输入详细描述')
showico.show();return false;};showico.removeClass('typetips');showico.html('请输入正确手机号');showico.show();}});},suggsum:function(){var f_dom=$('.tnote-suggest');$('.mod-connect').click(function(){$.layer({type:1,title:'意见反馈',closeBtn:[0,true],btns:1,btn:['提交'],area:['570','396'],page:{dom:'.tnote-suggest'},yes:function(index){var sugcont=$('#J_FeedbackCon').val();var mobcont=$('#J_FeedbackMobile').val();var emacont=$('#J_FeedbackEmail').val();var showico=$(this).next('.typetips01');var showico1=$(this).next('.typetips01.fea');var sentData={content:sugcont,tel:mobcont,email:emacont}
if(sugcont.length==0&&mobcont.length!=11){$('.typetips01').show();return false;}
if(sugcont.length==0||mobcont.length!=11){if(sugcont.length==0){$('#J_FeedbackCon').parent().find('i').show();}else{$('#J_FeedbackMobile').parent().find('i').show();};return false;}
interaction.checkMobile(sentData,function(data){var data={rep:true}
function slideuptips(){_THIS.slideUp()}
if(!data.rep){var _THIS=f_dom.find('.msg');_THIS.html('对不起，系统繁忙请您再尝试一次！').show();setTimeout(slideuptips,3000);return false;}
$('#J_FeedbackCon').val('');$('#J_FeedbackMobile').val('');$('#J_FeedbackEmail').val('');$('.typetips01').hide();layer.close(index);})}})});}});domlist.checkMobileNum();domlist.suggsum();window.domlist=domlist;})(jQuery)