(function(){var loadCss=function(link){try{if(document.createStyleSheet){document.createStyleSheet(link);}else{var myLink=document.createElement("link");myLink.type="text/css";myLink.rel="stylesheet";myLink.href=link;document.getElementsByTagName("head")[0].appendChild(myLink);}}catch(e){}}
var Cookie={get:function(key){var ret,m;try{if(key){if((m=String(document.cookie).match(new RegExp('(?:^| )'+key+'(?:(?:=([^;]*))|;|$)')))){ret=m[1]?decodeURIComponent(m[1]):'';}}}catch(e){ret=null;}
return ret;},set:function(key,value,maxAge,path,domain,secure){var cookie=key+"="+encodeURIComponent(value);if(maxAge){cookie+="; max-age="+maxAge;}
if(path){cookie+="; path="+path;}
if(domain){cookie+="; domain="+domain;}
if(secure){cookie+="; secure="+secure;}
document.cookie=cookie;}};var Base64={encode:function(str){var out,i,len;var c1,c2,c3;var encodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=encodeChars.charAt(c1>>2);out+=encodeChars.charAt((c1&0x3)<<4);out+="==";break;}
c2=str.charCodeAt(i++);if(i==len){out+=encodeChars.charAt(c1>>2);out+=encodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=encodeChars.charAt((c2&0xF)<<2);out+="=";break;}
c3=str.charCodeAt(i++);out+=encodeChars.charAt(c1>>2);out+=encodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=encodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=encodeChars.charAt(c3&0x3F);}
return out;},decode:function(str){var c1,c2,c3,c4;var i,len,out;var decodeChars=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];len=str.length;i=0;out="";while(i<len){do{c1=decodeChars[str.charCodeAt(i++)&0xff];}
while(i<len&&c1==-1);if(c1==-1)
break;do{c2=decodeChars[str.charCodeAt(i++)&0xff];}
while(i<len&&c2==-1);if(c2==-1)
break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)
return out;c3=decodeChars[c3];}
while(i<len&&c3==-1);if(c3==-1)
break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)
return out;c4=decodeChars[c4];}
while(i<len&&c4==-1);if(c4==-1)
break;out+=String.fromCharCode(((c3&0x03)<<6)|c4);}
return out;},utf16to8:function(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i);}else
if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F));}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F));}}
return out;},utf8to16:function(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break;}}
return out;}}
var MobileApp=function(){if(!~location.search.indexOf('showBottomSlider=0')){this.init();this.bindEvents();}}
MobileApp.prototype={init:function(){this.querySetting();loadCss('//ssl3.tuniucdn.com/s/201606011932/ad_mask/mask.css');},bindEvents:function(){$(window).on("afterMobileappdataload",$.proxy(this.onAppDataLoad,this));},querySetting:function(){$.ajax({url:"//www.tuniu.com/yii.php?r=api/actapi/activity",type:"GET",dataType:"jsonp",jsonp:"jsoncallback",data:{system:"WEB",pageType:"unhomepage"},success:function(ret){if(ret&&ret.success){var tgInfo=ret.data.GTInfo;for(var i=0,len=tgInfo.length;i<len;i++){if(tgInfo[i].activity_style==8||tgInfo[i].activity_style==15){var is_open_phone_valid=(tgInfo[i].is_open_phone_valid!=0&&!!tgInfo[i].submit_button_url)?1:0;$(window).trigger("mobileappdataload",tgInfo[i]);$(window).trigger("afterMobileappdataload",{tg:tgInfo[i],type:is_open_phone_valid});break;}}}}});},onAppDataLoad:function(e,data){var newOpen=data.tg.activity_frequence,newClose=data.tg.activity_closelimit;var oldOpen=Cookie.get("MOBILE_APP_SETTING_OPEN-"+data.tg.activity_id),oldState=Cookie.get("MOBILE_APP_SETTING_STATE-"+data.tg.activity_id)||"OPEN",oldReceived=Cookie.get("MOBILE_APP_SETTING_RECEIVED-"+data.tg.activity_id);var open,state;if(data.tg.activity_style==15&&oldReceived){state='CLOSE';}else{if(newOpen==0){Cookie.set("MOBILE_APP_SETTING_OPEN-"+data.tg.activity_id,newOpen,0,"/",".tuniu.com");state="OPEN";}else{if(oldOpen){state=oldState;}else{Cookie.set("MOBILE_APP_SETTING_OPEN-"+data.tg.activity_id,newOpen,newOpen*24*3600,"/",".tuniu.com");state="OPEN";}}}
var self=this;if((newClose!=-1)&&(oldState=="OPEN")){this.closeTimer=setTimeout(function(){self.close();},newClose*1000);}
this.build(data,state);this.openElt&&this.openElt.data('open-config-data',data);},build:function(data,state){if(data.tg.activity_style==8){if(data.type=="1"){this.openElt=$(MobileApp.OpenHtml1).appendTo(document.body);}
else{this.openElt=$(MobileApp.OpenHtml2).appendTo(document.body);}
this.openElt.find(".box-background").css("background-color","#"+data.tg.color);this.openElt.find(".background-img img").attr("src",data.tg.bkg.bkg_url);this.openElt.find(".background-img a").attr("href",data.tg.bkg.bkg_linkurl);this.openElt.find(".btn-close img").attr("src",data.tg.button_close.img_url);this.openElt.find(".btn-download a").each(function(index,item){$(this).attr("href",data.tg.button_other[index].btn_url);$(this).find("img").attr("src",data.tg.button_other[index].url);});this.closeElt=$(MobileApp.CloseHtml).appendTo(document.body);this.closeElt.find(".background-img img").attr("src",data.tg.button_other[3].url);if(state=="OPEN"){this.openElt.css("left","0");this.openElt.show();this.closeElt.css("left","-100%");}else{var left=this.checkScreen();this.openElt.css("left","-100%");this.openElt.hide();this.closeElt.css("left",left);}
this.openElt.find(".btn-close").on("click",$.proxy(this.close,this));this.closeElt.on("click",$.proxy(this.open,this));this.openElt.find(".get-packet").on("click",$.proxy(this.packetFromConfig,this));this.openElt.find(".inputIphone").on("focus",$.proxy(this.inputIphone,this));}else if(data.tg.activity_style==15){this.openElt=$(MobileApp.MakeOpenHtml(data)).appendTo(document.body);this.openElt.find(".btn-close, .m-app-bg").on("click",$.proxy(this.close,this));this.openElt.find(".get-packet").on("click",$.proxy(this.packetFromConfig,this));this.openElt.find(".inputIphone").on("focus",$.proxy(this.inputIphone,this));this.openElt.toggle(state=="OPEN");}},open:function(){var self=this,data=self.openElt?self.openElt.data('open-config-data'):{},id=data.tg&&data.tg.activity_id;if(id>0){if(data.tg.activity_style==8){self.closeElt.animate({left:"-100%"},"normal","swing",function(){self.openElt.show();self.openElt.animate({left:"0"},"normal","swing",function(){Cookie.set("MOBILE_APP_SETTING_STATE-"+id,"OPEN",365*24*3600,"/",".tuniu.com");})});}else if(data.tg.activity_style==15){Cookie.set("MOBILE_APP_SETTING_STATE-"+id,"OPEN",365*24*3600,"/",".tuniu.com");self.openElt.show();}}},close:function(){var self=this,data=self.openElt?self.openElt.data('open-config-data'):{},id=data.tg&&data.tg.activity_id,left;if(id>0){if(data.tg.activity_style==8){left=self.checkScreen();self.openElt.animate({left:"-100%"},"normal","swing",function(){self.closeElt.animate({left:left},"normal","swing",function(){id&&Cookie.set("MOBILE_APP_SETTING_STATE-"+id,"CLOSE",365*24*3600,"/",".tuniu.com");if(self.closeTimer){clearTimeout(self.closeTimer);}
self.openElt.hide();})});}else if(data.tg.activity_style==15){id&&Cookie.set("MOBILE_APP_SETTING_STATE-"+id,"CLOSE",365*24*3600,"/",".tuniu.com");if(self.closeTimer){clearTimeout(self.closeTimer);}
self.openElt.hide();}}},inputIphone:function(){var $noticeMess=this.openElt.find('.noice-mess');$noticeMess.html(' ');},getP:function(){var paramArr=window.location.hash.slice(1).split("&").concat(window.location.search.slice(1).split("&"));var hashObj={};for(var i=0;i<paramArr.length;i++){var keyValue=paramArr[i].split("=");hashObj[keyValue[0]]=keyValue[1];}
if(hashObj.p){return hashObj.p;}
if(!Cookie.get("tuniu_partner")){return"";}
return Base64.decode(unescape(Cookie.get("tuniu_partner"))).split(",")[0]||0;},errorCode:{getCommonError:function(errorCode,msg){var result;switch(+errorCode){case 710000:result={success:true,key:'SUCCESS',text:'<i></i>成功！请在会员中心"优惠券"中查看！'};break;case 710001:result={key:'INPUT_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710002:result={key:'UNLOGIN',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710003:result={key:'EXPIRED',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710004:result={key:'MAX',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710005:result={key:'INFO_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710006:result={key:'INFO_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710007:result={key:'TEL_INVALID',text:'<i class="error"></i>对不起，您填写的手机号码不正确！'};break;case 710008:result={success:true,key:'PRIZE_MAX',text:'<i></i>已领取！请在会员中心"优惠券"中查看！'};break;case 710009:result={key:'SERVER_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710010:result={key:'CUSTOM_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710011:result={key:'PREPARE',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710099:result={key:'SERVER_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;default:result={key:'UNKNOWN',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;}
return result;},getVoiceError:function(errorCode,msg){var result;switch(+errorCode){case 710000:result={success:true,key:'SUCCESS',text:'<i></i>成功！请在会员中心"优惠券"中查看！'};break;case 710001:result={key:'INPUT_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710002:result={key:'TEL_INVALID',text:'<i class="error"></i>对不起，您填写的手机号码不正确！'};break;case 710003:result={key:'PREPARE',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710004:result={key:'EXPIRED',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710005:result={success:true,key:'CHARGING',text:'<i></i>您已领取，请稍后查看！'};break;case 710006:result={success:true,key:'CHARGED',text:'<i></i>已领取！请在会员中心"优惠券"中查看！'};break;case 710007:result={key:'INFO_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710008:result={success:true,key:'PRIZE_MAX',text:'<i></i>已领取！请在会员中心"优惠券"中查看！'};break;case 710009:result={key:'ACTIVITY_MAX',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710010:result={key:'SERVER_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710011:result={key:'PRIZE_OVER',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;case 710098:result={key:'CUSTOM_ERROR',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;default:result={key:'UNKNOWN',text:'<i class="error"></i>小牛在玩命处理中，请稍后重试！'};break;}
return result;},check:function(url,errorCode,msg){var result={key:'UNKNOWN',text:'小牛在玩命处理中，请稍后重试！'};if(/http(s)?:\/\/tv\.tuniu\.com/.test(url)){result=this.getVoiceError(errorCode,msg)||result;}else{result=this.getCommonError(errorCode,msg)||result;}
return result;}},packetFromConfig:function(){var self=this;var configData=self.openElt.data('open-config-data');var $noticeMess=self.openElt.find('.noice-mess');var inputIphone=$.trim(self.openElt.find(".inputIphone").val());var httpUrl=location.protocol+configData.tg.submit_button_url;$.ajax({url:httpUrl,dataType:"jsonp",type:"get",data:{'tel':inputIphone,'p':self.getP(),"isJsonp":"1"},success:function(data){var errorInfo=self.errorCode.check(httpUrl,data.errorCode,data.msg);if(errorInfo.success){Cookie.set("MOBILE_APP_SETTING_RECEIVED-"+configData.tg.activity_id,1,10*24*3600,"/",".tuniu.com");}
$noticeMess.html(errorInfo.text);},error:function(){$noticeMess.html('小牛在玩命处理中，请稍后重试！');}});},packetForSummer:function(){var $noticeMess=self.openElt.find('.noice-mess');var self=this;var inputIphone=$.trim(self.openElt.find(".inputIphone").val());var httpUrl=location.protocol+"//tv.tuniu.com/event/gift/getPrizeAjax";$.ajax({url:httpUrl,dataType:"jsonp",type:"get",data:{'tel':inputIphone,'p':self.getP(),'mark':"2016heatHurried","isJsonp":"1"},success:function(data){if(data.success){if(data.errorCode=='710000'){$noticeMess.html('<i></i>成功！请在会员中心"优惠券"中查看！');}
else{$noticeMess.html('小牛在玩命处理中，请稍后重试！');}}
else{if(data.errorCode=='710008'){$noticeMess.html('<i></i>已领取！请在会员中心"优惠券"中查看！');}
else if(data.errorCode=='710002'){$noticeMess.html('对不起，您填写的手机号码不正确！');}
else if(data.errorCode=='710005'){$noticeMess.html('<i></i>您已领取，请稍后查看！');}
else{$noticeMess.html('小牛在玩命处理中，请稍后重试！');}}},error:function(){$noticeMess.html('小牛在玩命处理中，请稍后重试！');}});},packet:function(){var $noticeMess=this.openElt.find('.noice-mess');var self=this;var inputIphone=$.trim(this.openElt.find(".inputIphone").val());var httpUrl=location.protocol+"//dynamic.m.tuniu.com/event/lottery/opeLottery/keyLotteryAjax";$.ajax({url:httpUrl,dataType:"jsonp",type:"get",data:{'tel':inputIphone,'actId':492,'mark':"wudi",'itemId':16700,'sysType':2,'type':1,"isJsonp":"1"},success:function(data){if(data.success){if(data.errorCode=='710000'){$noticeMess.html('<i></i>成功！请在会员中心"优惠券"中查看！');}
else{$noticeMess.html('小牛在玩命处理中，请稍后重试！');}}
else{if(data.errorCode=='710008'){$noticeMess.html('<i></i>已领取！请在会员中心"优惠券"中查看！');}
else{$noticeMess.html('小牛在玩命处理中，请稍后重试！');}}},error:function(){$noticeMess.html('小牛在玩命处理中，请稍后重试！');}});},checkResize:function(){var self=this,data=self.openElt?self.openElt.data('open-config-data'):{},id=data.tg&&data.tg.activity_id,open,state;state=Cookie.get("MOBILE_APP_SETTING_STATE-"+id)||'OPEN';if(id>0){if(data.tg.activity_style==8){if(state=="OPEN"){self.openElt.css("left","0");self.closeElt&&self.closeElt.css("left","-100%");}else if(state=="CLOSE"){var left=self.checkScreen();self.openElt.css("left","-100%");self.closeElt&&self.closeElt.css("left",left);}}else if(data.tg.activity_style==15){var top=($(window).height()-450)/2;top=top>0?top:0;var left=($(window).width()-400)/2;left=left>0?left:0;if(state=="OPEN"){self.openElt.find('.m-app-container').css({top:top,left:left})
self.openElt.show();}else if(state=="CLOSE"){self.openElt.hide();}}}},checkScreen:function(){var winWith=$(window).width(),min=1410,left=0;if(winWith<min){left=-80;}
return left;}}
MobileApp.OpenHtml1=['<div class="m-app-open">','<div class="box-background">','</div>','<div class="box-inner">','   <div class="box-extra">','       <input class="inputIphone" type="text" placeholder="输入手机号码" />','       <a href="javascript:void(0)" class="get-packet"></a>','       <p class="noice-mess"></p>','   </div>','   <div class="background-img">','       <a target="_blank" href=""></a>','       <img src="" alt="">','   </div>','   <div class="btn-download">','       <a href="" target="_blank">','           <img src="" alt="">','       </a>','       <a href="" target="_blank">','           <img src="" alt="">','       </a>','       <a href="" target="_blank">','           <img src="" alt="">','       </a>','   </div>','   <div class="btn-close">','       <img src="" alt="">','   </div>','</div>','</div>'].join("\n");MobileApp.OpenHtml2=['<div class="m-app-open">','<div class="box-background">','</div>','<div class="box-inner">','   <div class="background-img">','       <a target="_blank" href=""></a>','       <img src="" alt="">','   </div>','   <div class="btn-download">','       <a href="" target="_blank">','           <img src="" alt="">','       </a>','       <a href="" target="_blank">','           <img src="" alt="">','       </a>','       <a href="" target="_blank">','           <img src="" alt="">','       </a>','   </div>','   <div class="btn-close">','       <img src="" alt="">','   </div>','</div>','</div>'].join("\n");MobileApp.CloseHtml=['<div class="m-app-close">','   <div class="background-img">','       <img src="" alt="">','   </div>','</div>'].join("\n");MobileApp.MakeOpenHtml=function(data){var top=($(window).height()-450)/2;top=top>0?top:0;var left=($(window).width()-400)/2;left=left>0?left:0;var html=['<div class="m-app-box">','   <div class="m-app-bg" style="background:#'+data.tg.color+';">','   </div>','   <div class="m-app-container" style="background-image:url('+data.tg.button_other[1].url+');top:'+top+'px;left:'+left+'px;">','       <div class="m-app-input"><input type="text" class="inputIphone" placeholder="输手机号领36元无敌券" /></div>','       <div class="noice-mess"></div>','       <div class="get-packet-box">','          <a class="get-packet" style="background-image:url('+data.tg.button_other[0].url+')"></a>','       </div>','       <img class="btn-close" src="'+data.tg.button_other[2].url+'" alt="关闭" />','   </div>','</div>'],result=html.join('\n');return result;};var init=true;document.onmousemove=function(){if(init){if(!window.XMLHttpRequest){init=false;return false;}
(new MobileApp());}
init=false;}})();;var _zeus=_zeus||(function(){var windowAlias=window,visitUrl=windowAlias.location.href,currentTime='',hostName='tuniu.com';var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break;}
c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break;}
c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F);}
return out;}
function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff];}
while(i<len&&c1==-1);if(c1==-1)
break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff];}
while(i<len&&c2==-1);if(c2==-1)
break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)
return out;c3=base64DecodeChars[c3];}
while(i<len&&c3==-1);if(c3==-1)
break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)
return out;c4=base64DecodeChars[c4];}
while(i<len&&c4==-1);if(c4==-1)
break;out+=String.fromCharCode(((c3&0x03)<<6)|c4);}
return out;}
function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i);}
else
if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F));}
else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F));}}
return out;}
function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break;}}
return out;}
function getCookie(name){var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr!=null)return unescape(arr[2]);return null;}
function addCookie(objName,objValue,objHours,objPath,objDomain){var str=objName+"="+escape(objValue);if(objHours>0){var date=new Date();var ms=objHours*3600*1000;date.setTime(date.getTime()+ms);str+="; expires="+date.toGMTString();}
if(objPath!=''&&objPath!=undefined){str+="; path="+objPath;}
if(objDomain!=''&&objDomain!=undefined){str+="; domain="+objDomain;}
document.cookie=str;}
function isInCookie(needle,haystack){for(s=0;s<haystack.length;s++){thisEntry=haystack[s].toString();if(thisEntry==needle){return true;}}}
Date.prototype.Format=function(fmt)
{var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(fmt))
fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));for(var k in o)
if(new RegExp("("+k+")").test(fmt))
fmt=fmt.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)));return fmt;}
function getCurrentTime(){return new Date().Format("yyyy-MM-dd hh:mm:ss");}
function getHostname(url){var e=new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'),matches=e.exec(url);return matches?matches[1].substring(matches[1].indexOf('.')):url;}
function setZeusCookie(code){currentTime=getCurrentTime();hostName=getHostname(visitUrl);var zeusStr=base64encode(utf16to8(code+'::'+visitUrl+'::'+currentTime));var zeusCookieStrArr,zeusCookieStr=getCookie('tuniu_zeus');if(zeusCookieStr!=''&&zeusCookieStr!=null){var zeusCookieStrArr=String(zeusCookieStr).split(",");if(zeusCookieStrArr.length>10){zeusCookieStrArr.shift();}
zeusCookieStr=zeusCookieStrArr.join(",");if(!isInCookie(zeusStr,zeusCookieStrArr)){var value=zeusCookieStr+','+zeusStr;addCookie('tuniu_zeus',value,24*30,'/',hostName);}}else{addCookie('tuniu_zeus',zeusStr,24*30,'/',hostName);}}
function Recorder(){return{push:function(code){if(code!=undefined&&code!=''){setZeusCookie(code);}}};}
return{getRecorder:function(){return new Recorder();}};}());