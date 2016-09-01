function getCookie(c_name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){ 
        	  c_start=c_start + c_name.length+1;
        	  c_end=document.cookie.indexOf(";",c_start);
        	  if (c_end==-1){
            	  c_end=document.cookie.length;
        	  }
        	  return unescape(document.cookie.substring(c_start,c_end));
        } 
    }
    return "";
}
function init_compare(){
    compareCookie = getCookie("_compare");
    if(compareCookie !=''){
    	show_slide_Down();
        get_compare_info(compareCookie);
        var check_count = (compareCookie.split(',')).length;
        compare_num_change(check_count);
       //默认加勾
        var compare_checkbox_obj = document.getElementsByName("general_route_compare");
        for(var i=0;i<compare_checkbox_obj.length;i++){
            if(compareCookie.indexOf(compare_checkbox_obj[i].value) != -1){
                compare_checkbox_obj[i].checked = true;
                if(typeof(compare_checkbox_obj[i].parentNode) != "undefined"){
                    if(compare_checkbox_obj[i].parentNode.parentNode.className == "comparison_bg select"){
                        compare_checkbox_obj[i].parentNode.parentNode.className = "comparison_bg";
                    }
                }
                var word = document.getElementById('compare_word'+compare_checkbox_obj[i].value);
                if((word != null) && (typeof(word) != 'undefined')){
                    word.innerHTML = "取消对比";
                }
            }else{
            	compare_checkbox_obj[i].checked = false;
            	if(typeof(compare_checkbox_obj[i].parentNode) != "undefined"){
                    if(compare_checkbox_obj[i].parentNode.parentNode.className == "comparison_bg"){
                        compare_checkbox_obj[i].parentNode.parentNode.className = "comparison_bg select";
                    }
                }
                var word = document.getElementById('compare_word'+compare_checkbox_obj[i].value);
                if((word != null) && (typeof(word) != 'undefined')){
                    word.innerHTML = "加入对比";
                }
            }
        }
    }
}

//提示已满
function has_full(){
	$(".top_notice").html('');
    $(".top_notice").html('<span>对不起，您最多只可以添加三个产品，请先删除对比栏中的一些产品后再添加。</span>');
    $(".top_notice").show();
    setTimeout('$(".top_notice").hide()',5000);
}


function del_all_compare(){
	for(i=0;i<3;i++){
		clean_item(i);
	}//去勾
    var compare_checkbox_obj = document.getElementsByName("general_route_compare");
    for(var i=0;i<compare_checkbox_obj.length;i++){
        compare_checkbox_obj[i].checked = false;
        if(typeof(compare_checkbox_obj[i].parentNode) != "undefined"){
            if(compare_checkbox_obj[i].parentNode.parentNode.className == "comparison_bg"){
                compare_checkbox_obj[i].parentNode.parentNode.className = "comparison_bg select";
            }
        }
        checkbox_click(compare_checkbox_obj[i].value);
    }
    delCookie("_compare");
    compare_num_change(0);
	hide_slide_Down();
}
//清空内容
function clean_item(i){
	$("#item-empty"+i).html('');
    $("#item-empty"+i).removeClass('prod_line');
    $("#item-empty"+i).addClass('add_more');
    $("#item-empty"+i).html('<p>您还可以继续添加产品</p>');
    document.getElementById('del_compare'+i).href='javascript:void(0);';
}


//改变数字和按钮颜色
function compare_num_change(check_count){
    $("#slideDown").html('');
	if(check_count >0){
		$("#slideDown").html('对比中的产品('+check_count+'/3)<b>▼</b>');
	}else{
		$("#slideDown").html('对比中的产品('+check_count+'/3)<b>▲</b>');
	}
    if(check_count < 2){
    	document.getElementById('goto-contrast').className ='com_btn grey';
    }
}

//点击显示
function show_slide_Down(){
	$('.compared_prod').css({
        position:'fixed',
        display:"block"
    });
	$('.compared_prod').removeClass('hide');
    if($('.top_detail').length){
		$('.top_detail').addClass('show');
        $('.com_prod_lists').show();
		$('.top_detail').find("b").html("▼");
    }
    var hei = $(window).height();
    if ($.browser.msie && ($.browser.version == "6.0")) {
        $(".compared_prod").css("top", hei + $(window).scrollTop() - 108);
    }
}
//隐藏显示
function hide_slide_Down(){
	$('.compared_prod').css({
		position:'static',
		display:"none"
	});
	$('.compared_prod').addClass('hide');
    if($('.top_detail').hasClass("show")){
        $('.top_detail').removeClass('show');
        $('.com_prod_lists').hide();
        $('.top_detail').find("b").html("▲");
    }
    var hei = $(window).height();
    if ($.browser.msie && ($.browser.version == "6.0")) {
         $(".compared_prod").css("top", hei + $(window).scrollTop() - 32);
    }
}
//初始化函数
$(function(){
    var compare_checkbox_show = document.getElementsByName('general_route_compare');
    var init_flag = 0;
    if(compare_checkbox_show.length != 0){
        init_flag = 1;
        for(var i in compare_checkbox_show){
            if(compare_checkbox_show[i].value == ''){
                init_flag = 0; 
            }
        }
    }
    var routeId = $("#online_ask_route_id").val();
    if(typeof(routeId) !='undefined'){
    	init_flag =1;
    }
    if(init_flag == 1){
        init_compare();
    }else if(init_flag == 0){
        //初始化失败不执行函数
        return false;
    }
})
//设置checkbox状态js
function checkbox_click(routeId){
    var routeId = routeId;
    var checkbox = document.getElementById('compare_checkbox'+routeId);
    var word = document.getElementById('compare_word'+routeId);
    if((typeof(checkbox) != "undefined") && (checkbox != null)){
        if(checkbox.checked == true){
            word.innerHTML = "取消对比";
        }else{
            word.innerHTML = "加入对比";
        }
    }
}

