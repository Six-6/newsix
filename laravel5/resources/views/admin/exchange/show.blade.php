@include("admin/index/index")
<div class="public-ifame-content">
<head>
    <meta charset="UTF-8">
    <title>后台欢迎页</title>
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/public.css" />
    <link rel="stylesheet" href="./css/content.css" />
</head>
<body marginwidth="0" marginheight="0">
<div class="container">
    <div class="public-nav">您当前的位置：<a href="">管理首页</a>><a href="">信息管理</a><a href="">会员信息</a></div>
    <div class="public-content">
        <div class="public-content-cont">
            <form action="exchangeAdd" method="post" onsubmit="return check()" enctype="multipart/form-data">
                <input type="hidden" name="_token" id="token" value="{{csrf_token()}}" />
                <div class="form-group">
                    <label for="">商品名称</label>
                    <input class="form-input-txt" onblur="return checkuname()" type="text" name="e_name" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">商品图片</label>
                    <input type="file" name="e_img"/>
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">商品链接</label>
                    <input class="form-input-txt"  type="text" name="e_href" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">库存数量</label>
                    <input class="form-input-txt"  type="text" name="e_num" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">商品价格</label>
                    <input class="form-input-txt"  type="text" name="e_price" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">市场价格</label>
                    <input class="form-input-txt" type="text" name="r_price" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">商品简介</label>
                    <input class="form-input-txt"  type="text" name="e_content" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">到期时间</label>
                    <input class="form-input-txt"  type="text" name="e_time" value="" />
                    <spsn id="u_name"></spsn>
                </div>
                <div class="form-group">
                    <label for="">请选择类型</label>
                    <select name="t_id" class="form-select">
                        @foreach($type as $v)
                            <option value="{{$v->t_id}}">{{$v->t_name}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group" style="margin-left:150px;">
                    <input type="submit" class="sub-btn" value="提  交" />
                    <input type="reset" class="sub-btn" value="重  置" />
                </div>
            </form>
        </div>
    </div>
</div>
</body>
</div>
<script src="./kingediter/kindeditor-all-min.js"></script>
<script src="./js/laydate.js"></script>
<script src="./jq.js"></script>
<script>
    KindEditor.ready(function(K) {
        window.editor = K.create('#editor_id');
    });
    /**提交验证**/
    function check(){
        if(checkuname()){
            return true;
        }else{
            return false;
        }
    }
    /**管理员验证**/
    function checkuname(){
        var uname=$("input[name=e_name]").val();
        var unames=document.getElementById("u_name");
        var tok=$("#token").val();
        if(uname=="" || uname==null){
            unames.innerHTML="<font color='red'>商品名称不能为空！</font>";
            return false;
        }
        $.post("checkName",{uname:uname,_token:tok},function(msg){
            if(msg==2){
                unames.innerHTML="<font color='red'>商品名称已存在！</font>";
                return false;
            }
        });
        unames.innerHTML="<font color='green'>商品名称可以使用！</font>";
        return true;
    }
</script>
</body>
</html>