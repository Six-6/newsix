var swfu='';var uploadNumMax=400;$(document).ready(function(){try{var uploadUrl='http://'+window.location.host+'/tripsajax/uploadimage';swfu=new SWFUpload({flash_url:"http://images.tuniucdn.com/img/20140000/guide/swfupload.swf",upload_url:uploadUrl,post_params:{"session_id":apiParams.sessionId,"tuniuuser":getCookie('tuniuuser'),"tid":apiParams.tid},debug_enabled:true,file_upload_limit:400,file_queue_limit:50,file_post_name:"Filedata",file_size_limit:"10MB",file_types:"*.jpg;*.jpeg;*.png",file_types_description:"All Files",button_image_url:"http://img1.tuniucdn.com/img/20141011/blogs/upload.png",button_width:117,button_height:30,button_placeholder_id:"btn_photoUpload",button_text_style:"",button_text_top_padding:0,button_text_left_padding:0,button_window_mode:SWFUpload.WINDOW_MODE.TRANSPARENT,button_cursor:SWFUpload.CURSOR.HAND,custom_settings:{progressTarget:"photoList",numLimit:50},file_dialog_start_handler:fileDialogStart,file_queued_handler:fileQueued,file_queue_error_handler:fileQueueError,file_dialog_complete_handler:fileDialogComplete,upload_start_handler:uploadStart,upload_progress_handler:uploadProgress,upload_error_handler:uploadError,upload_success_handler:uploadSuccess,upload_complete_handler:uploadComplete});}catch(e){}
var fls=flashChecker();var s="";if(fls.f&&fls.v>10)1;else $(".btn_upload_swf").empty().append("<span style=\"color:red;\" >您没有启用Flash或版本需要更新</span> <a href=\"http://get.adobe.com/cn/flashplayer/\" target=\"_blank\" rel=\"nofollow\">点击获取</a>");});function getCookie(name){var strCookie=document.cookie;var arrCookie=strCookie.split("; ");for(var i=0;i<arrCookie.length;i++){var arr=arrCookie[i].split("=");if(arr[0]==name)return arr[1];}
return"";}
function flashChecker()
{var hasFlash=0;　　　　
var flashVersion=0;　　
if(document.all)
{try{var swf=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');}catch(e){}
if(swf){hasFlash=1;VSwf=swf.GetVariable("$version");flashVersion=parseInt(VSwf.split(" ")[1].split(",")[0]);}}else{if(navigator.plugins&&navigator.plugins.length>0)
{var swf=navigator.plugins["Shockwave Flash"];if(swf)
{hasFlash=1;var words=swf.description.split(" ");for(var i=0;i<words.length;++i)
{if(isNaN(parseInt(words[i])))continue;flashVersion=parseInt(words[i]);}}}}
return{f:hasFlash,v:flashVersion};}
function fileDialogStart(){}
function fileQueued(file){if(file!=null){this.setButtonImageURL("http://img1.tuniucdn.com/img/20141011/blogs/upload.png");this.setButtonDimensions("117","30");var id=file.id;$("#uploadDefault").addClass("upload-proccess-swfupload");$("#uploadDefault .btn_upload_swf").addClass("procdcessed_tit_swfupload");$(".local_pic").addClass('hide');$(".phone_pic").addClass('hide');$(".proccess_num").removeClass('hide');$(".photo_submit").removeClass('hide');$(".photo_list").removeClass('hide');content='<li id="'+id+'"><div class="uploadify-progress"><div style="width: 0%;" class="uploadify-progress-bar"></div></div></li>';$("#photoList").prepend(content);}}
function fileDialogComplete(numFilesSelected,numFilesQueued){try{var stats=swfu.getStats();if(stats.files_queued>swfu.settings.file_queue_limit){alert("您此游记上传的图片，已经超出"+uploadNumMax+"张最大数量，请重新上传");}else{this.startUpload();}}catch(ex){this.debug(ex);}}
function uploadStart(file){return true;}
function uploadProgress(file,bytesLoaded,bytesTotal){var percent=Math.ceil((bytesLoaded/bytesTotal)*100);var id=file.id;$("#"+id+" div").css("width",percent+"%");if(percent==100){$("#"+id).append("<span class=\"processing\">处理中...</span>");}}
function uploadSuccess(file,serverData){progressTarget=this.customSettings.progressTarget;att_show(serverData,file,progressTarget);}
function uploadComplete(file){if(this.getStats().files_queued>0){this.startUpload();}}
function uploadError(file,errorCode,message){var msg;switch(errorCode){case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:msg="上传错误: "+message;break;case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:msg="上传错误";break;case SWFUpload.UPLOAD_ERROR.IO_ERROR:msg="服务器 I/O 错误";break;case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:msg="服务器安全认证错误";break;case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:msg="附件安全检测失败，上传终止";break;case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:msg='上传取消';break;case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:msg='上传终止';break;case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:msg='对不起，您此游记上传已超过'+uploadNumMax+'张图片，为了让您编辑游记更方便，建议您编辑好已有图片后再添加。';break;default:msg=message;break;}
alert(msg);}
function fileQueueError(file,errorCode,message){var errormsg;switch(errorCode){case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:errormsg="请不要上传空文件";break;case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:errormsg='对不起，您此游记上传已超过'+swfu.settings.file_queue_limit+'张图片，请重新上传。';break;case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:errormsg="您上传的图片中，有大于"+swfu.settings.file_size_limit+"的图片，请重新上传。";break;case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:errormsg="文件类型不合法";default:errormsg='上传错误，请与管理员联系！';break;}
alert(errormsg);}
function att_show(serverData,file,processTarget){var serverData=jQuery.parseJSON(serverData);var src=serverData.data.host+serverData.data.path+"_w200_h200_c1_t0."+serverData.data.type;if(serverData.success==false){$("#"+file.id).remove();return false;}
if(serverData.data.insertId==-1){var stats=swfu.getStats();stats.successful_uploads--;swfu.setStats(stats);$("#"+file.id).remove();swfu.startUpload();try{alert("您上传的图片中，有低于600px像素的图片，请重新上传。");}catch(firefoxAccessException){}}else{var img="";img='<img width="130" height="130" src="'+src+'"><span class="delete" onclick="att_cancel('+serverData.data.tid+','+serverData.data.insertId+',\''+file.id+'\');"></span>';$("#"+file.id).html(img);num=parseInt($("#p_num").html())+1;$("#p_num").html(num);setUploadImageLimit(num);}}
function att_cancel(tid,insertId,fileId){var d={tid:tid,imgId:insertId};$.ajax({type:"POST",url:"/tripsajax/deleteimg",data:d,success:function(s){$("#"+fileId).remove();if(!fileId){$("#"+insertId).remove();}
num=parseInt($("#p_num").html())-1;$("#p_num").html(num);setUploadImageLimit(num);var stats=swfu.getStats();stats.successful_uploads--;swfu.setStats(stats);}});}
function setUploadImageLimit(num){num=parseInt(num);var remainNum=uploadNumMax-num;if(remainNum>=50){swfu.setFileQueueLimit(50);$("#SWFUpload_0").css("visibility","visible");$("#imagTip").html("您可以继续上传");}else if(remainNum==1){swfu.setFileQueueLimit(1);$("#SWFUpload_0").css("visibility","visible");$("#imagTip").html("您可以继续上传");}else if(remainNum<=0){swfu.setFileQueueLimit(1);$("#SWFUpload_0").css("visibility","hidden");$("#imagTip").html("不能继续上传了哦");}else{swfu.setFileQueueLimit(remainNum);$("#SWFUpload_0").css("visibility","visible");$("#imagTip").html("您可以继续上传");}}