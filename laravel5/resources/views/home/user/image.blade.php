@include('includes.hemotop')
@include("home/common/left")
<div id="pictable">
    <div id='uploadwait' class='uploadwait'></div>
    <div id='divpicview' class='divpre'>
        <h2>我的头像：</h2>
        @foreach($image as $v)
            <input type="hidden" name="id" value="{{$v->u_id}}"/>
            @if(empty($v->path))
                <img src="http://www.byts.com.cn//uploads/userup/noface.jpg" />
            @else
                <img src="{{$v->path}}" />
        @endif
        @endforeach
       </div>
    <form name="form1" action="imageAdd" enctype="multipart/form-data" method="post">
        <input type="hidden" name="_token" value="{{csrf_token()}}" />
        <iframe name='path' id='uplitpicfra' src='' width='200' height='200' style='display:none'></iframe>

        <span class="litpic_span"><h2>在线上传：</h2>
            <input name="path" type="file" />

        </span><br/>
        <input type="submit" value="提交"/>
    </form>

</div>
@include("home/common/footer")
