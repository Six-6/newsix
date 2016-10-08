/*! http://mths.be/placeholder v2.0.8 by @mathias */
(function(i,k,f){var b=Object.prototype.toString.call(i.operamini)=="[object OperaMini]";var a="placeholder" in k.createElement("input")&&!b;var g="placeholder" in k.createElement("textarea")&&!b;var l=f.fn;var e=f.valHooks;var c=f.propHooks;var n;var m;if(a&&g){m=l.placeholder=function(){return this};m.input=m.textarea=true}else{m=l.placeholder=function(){var p=this;p.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":d,"blur.placeholder":h}).data("placeholder-enabled",true).trigger("blur.placeholder");return p};m.input=a;m.textarea=g;n={get:function(q){var p=f(q);var r=p.data("placeholder-password");if(r){return r[0].value}return p.data("placeholder-enabled")&&p.hasClass("placeholder")?"":q.value},set:function(q,s){var p=f(q);var r=p.data("placeholder-password");if(r){return r[0].value=s}if(!p.data("placeholder-enabled")){return q.value=s}if(s==""){q.value=s;if(q!=o()){h.call(q)}}else{if(p.hasClass("placeholder")){d.call(q,true,s)||(q.value=s)}else{q.value=s}}return p}};if(!a){e.input=n;c.value=n}if(!g){e.textarea=n;c.value=n}f(function(){f(k).delegate("form","submit.placeholder",function(){var p=f(".placeholder",this).each(d);setTimeout(function(){p.each(h)},10)})});f(i).bind("beforeunload.placeholder",function(){f(".placeholder").each(function(){this.value=""})})}function j(q){var p={};var r=/^jQuery\d+$/;f.each(q.attributes,function(t,s){if(s.specified&&!r.test(s.name)){p[s.name]=s.value}});return p}function d(q,r){var p=this;var s=f(p);if(p.value==s.attr("placeholder")&&s.hasClass("placeholder")){if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(q===true){return s[0].value=r}s.focus()}else{p.value="";s.removeClass("placeholder");p==o()&&p.select()}}}function h(){var t;var p=this;var s=f(p);var r=this.id;if(p.value==""){if(p.type=="password"){if(!s.data("placeholder-textinput")){try{t=s.clone().attr({type:"text"})}catch(q){t=f("<input>").attr(f.extend(j(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":s,"placeholder-id":r}).bind("focus.placeholder",d);s.data({"placeholder-textinput":t,"placeholder-id":r}).before(t)}s=s.removeAttr("id").hide().prev().attr("id",r).show()}s.addClass("placeholder");s[0].value=s.attr("placeholder")}else{s.removeClass("placeholder")}}function o(){try{return k.activeElement}catch(p){}}}(this,document,jQuery));(function(b){function a(){this.defaults={submitClass:"submit",submitCallback:null,loading:function(){},success:function(){},failed:function(){return false},customFuncs:{}};this.allRules={phone:{regex:/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/g},postcode:{regex:/^\d{6}$/g},mobile:{regex:/^(\d{11}|[0\+]\d+)$/g},email:{regex:/^([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/g},date:{regex:[/^\d{4}-\d{2}-\d{2}$/g,/^\d{4}\/\d{2}\/\d{2}$/g]}};this.original=null;this.options={};this.timer=null;this.init=function(e,d){var c=this;c.original=e;c.options=b.extend(true,{},c.defaults,d);b(e).find("[class*=verification][type=text],[class*=verification][type=password],textarea[class*=verification]").bind("blur.verification",function(){c.verifyField(b(this))});if(("form"===e.nodeName.toLowerCase())){b(e).bind("submit.verification",function(){if(b(e).find('input[type="submit"]').hasClass("disabled")){return false}c.verifyFields();return c.manageSubmit()})}else{b(e).find("."+c.options.submitClass).click(function(){if(b(this).hasClass("disabled")){return false}c.verifyFields();return c.manageSubmit()})}};this.manageSubmit=function(){var c=this;if(b(c.original).find("[class*=verification][data-verification-result=failed]").size()>0){return false}else{if(b(c.original).find("[class*=verification][data-verification-result=loading]").size()>0){this.timer=setTimeout(function(){c.manageSubmit()},100);return false}else{if(b(c.original).find("[class*=verification]").size()===b(c.original).find("[class*=verification][data-verification-result=success]").size()){if(("form"===c.original.nodeName.toLowerCase())){if("function"===typeof c.options.submitCallback){c.options.submitCallback.call(c,c.original);return false}else{b(c.original).unbind("submit.verification").submit();return false}}else{c.options.submitCallback.call(c,c.original);return false}}else{return false}}}};this.verifyFields=function(){var d=this,c=null;b(d.original).find("[class*=verification]").each(function(){var e=b(this);if(c!==false){c=d.verifyField(e)}});return c};this.verifyField=function(d){var o=this,f=d.attr("data-verification-name")?d.attr("data-verification-name"):"该项",p=d.attr("class"),y=/verification\[(.*)\]/.exec(p);if(!y){return false}var q=y[1],l=q.split(/\[|,|\]/),m=false;for(var u=0;u<l.length;u++){l[u]=l[u].replace(" ","");if(l[u]===""){delete l[u]}}for(var u=0;u<l.length;u++){switch(l[u]){case"required":m=true;if(!b.trim(d.val())||d.val()==d.attr("data-verification-placeholder")||d.val()==d.attr("placeholder")){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"不能为空")}return false}else{d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}}break;case"custom":var e=l[u+1],g=o.allRules[e],n;if(g){if(g.regex){if(g.regex.length){for(var s=0;s<g.regex.length;s++){if(false===n){break}var x=g.regex[s],w=new RegExp(x);if(m){n=(!w.test(d.val()))}else{n=(""!==b.trim(d.val())&&!w.test(d.val()))}}}else{var x=g.regex,w=new RegExp(x);if(m){n=(!w.test(d.val()))}else{n=(""!==b.trim(d.val())&&!w.test(d.val()))}}if(n){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"格式不正确")}return false}else{d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}}}else{if(g.func){}}}break;case"minSize":var r=l[u+1],v=d.val().length;if(v<r){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"不能小于"+r+"个字符")}return false}else{d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}}break;case"maxSize":var t=l[u+1],v=d.val().length;if(v>t){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"不能大于"+t+"个字符")}return false}else{d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}}break;case"equals":var C=l[u+1];if(d.val()!=b(o.original).find('input[name="'+C+'"]').val()){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,"输入的"+f+"不一致")}return false}else{d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}}break;case"ajax":var B=l[u+1],A=d.val();switch(B){case"checkEmail":d.attr("data-verification-result","loading");o.options.loading.call(o,d,"正在验证...");b.post("/ajax/ajax_email.php",{email:A},function(i){if(i.ret==1){d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}return false}else{if(i.ret==2){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"格式不正确")}}else{if(i.ret==3){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"已经存在")}}}}},"json");break;case"checkMobile":d.attr("data-verification-result","loading");o.options.loading.call(o,d,"正在验证...");b.post("/ajax/ajax_mobile.php",{action:"verifymobile",mobile:A},function(i){if(i.ret==1){d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}return false}else{if(i.ret==3){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"格式不正确")}}else{if(i.ret==2){d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"已经存在")}}}}},"json");break;case"checkMCode":d.attr("data-verification-result","loading");o.options.loading.call(o,d,"正在验证...");b.post("/ajax/ajax_mobile.php",{action:"nlmvc",mobile:b(o.original).find('input[name="'+l[u+2]+'"]').val(),v_code:A},function(i){if(i.ret==1){d.attr("data-verification-result","success");if("function"===typeof o.options.success){o.options.success.call(o,d)}return false}else{d.attr("data-verification-result","failed");if("function"===typeof o.options.failed){o.options.failed.call(o,d,f+"输入有误")}}},"json");break;default:break}break;case"funcCall":d.attr("data-verification-result","loading");var z=l[u+1],h;if(z.indexOf(".")>-1){var k=z.split("."),c=window;while(k.length){c=c[k.shift()]}h=c}else{h=window[z]||o.options.customFuncs[z]}if("function"==typeof(h)){h(d)}break;default:break}}}}b.verification={init:function(d,c){return d.each(function(){var e=b.extend(true,{},c),f;f=new a();f.init(this,e);b.data(this,"verification",f)})},verifyField:function(c,e){var d=c.data("verification");if(!d||!e.size()){return undefined}return d.verifyField(e)},verifySuccess:function(c){c.attr("data-verification-result","success")},verifyFailed:function(c){c.attr("data-verification-result","failed")}};b.fn.verification=function(d){var c=arguments;if("undefined"!==typeof b.verification[d]){c=Array.prototype.concat.call([c[0]],[this],Array.prototype.slice.call(c,1));return b.verification[d].apply(b.verification,Array.prototype.slice.call(c,1))}else{if("object"===typeof d||!d){Array.prototype.unshift.call(c,this);return b.verification.init.apply(b.verification,c)}else{console.log('Method "'+d+'" does not exist in verification')}}}})(jQuery);$(function(){$("input, textarea").placeholder();$("body").delegate('a[href!="#"][target!="_blank"]',"click",function(b){b.preventDefault();var a=$(this).attr("href");if(!~a.indexOf("http://")){a="http://passport.mafengwo.cn"+a}parent.window.location=a}).delegate(".login-box .login-code img","click",function(){$(this).attr("src","/api.php/verifyCode/?"+new Date().getTime())});$("#_j_login_form").verification({customFuncs:{checkShowCode:function(b){var a=$.trim(b.val());$.get("/api.php/checkShowCode",{passport:a},function(f){if(f){var d=$('input[name="code"]',"#_j_login_form");var c=d.closest(".login-input");var e=d.closest(".login-box");e.addClass("has-code");if(c.is(":hidden")){c.show();d.attr("class",d.attr("class").replace("verification[checkCode]","verification[required,funcCall[checkCode]]"));$.verification.verifyFailed(d)}}$.verification.verifySuccess(b)})},checkCode:function(b){if(b.closest(".login-input").is(":hidden")){$.verification.verifySuccess(b);return}var a=$.trim(b.val());$.get("/api.php/checkCode",{code:a},function(c){if(!c){b.closest(".login-box").find(".errer-info").html("验证码不正确").show();$.verification.verifyFailed(b)}else{b.closest(".login-box").find(".errer-info").html("").hide();$.verification.verifySuccess(b)}})}},success:function(a){a.closest(".login-box").find(".errer-info").html("").hide()},failed:function(b,a){b.closest(".login-box").find(".errer-info").html(a).show()}})});