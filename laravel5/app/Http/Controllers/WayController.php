<?php 
namespace App\Http\Controllers;
use DB,Input,Session;

use Illuminate\Http\Request;

use App\libs\sphinxapi;


class WayController extends Controller {
	public function __construct()
	{
		$this->middleware('guest');
	}
	//左侧展示
	public function lefts()
	{
		//Yii::$classMap['SphinxClient'] ="@vendor/yiisoft/yii2/sphinx/sphinxapi.php";

        /*$cl = new SphinxClient ();
        print_r($cl);die;
        $cl->SetServer ( '127.0.0.1', 9312);
        $cl->SetMatchMode ( SPH_MATCH_ALL);	//匹配格式  任意匹配
        $cl->SetArrayResult ( true );	 //作为数组返回
        $cl->SetMaxQueryTime(10); //设置最大搜索时长
        //$cl->SetFilter('cat_id', array(1));//过滤条件
        $cl->setSortMode(SPH_SORT_EXTENDED,'@id desc'); //排序
        $res=$cl->Query ( "$name", "*" ); //执行搜索*/

        return view('admin.index');
	}
    //类型展示
	public function index()
	{
		$tables = DB::table('region')->get();
		$ast = $this->Cate($tables,0,0);
		//print_r($ast);
        return view('admin.types',['arr' => $ast]);
	}
	public function wayadd(){
		$tables = DB::table('region')->get();
		return view('admin.article_add',['arr' => $tables]);
	}
	//展示旅游方式
	public function waysel(){
		$tables = DB::table('scenic')->get();
		return view('admin.admin_cardTemplate2',['arr' => $tables]);
	}
	//旅游景点修改
	public function jgaiWay(){
		$tables = Input::get();
		$uploads = DB::table('scenic')
            ->where('s_id', $tables['s_id'])
            ->update(['s_name' => $tables['vals']]);
        if ($uploads) {
        	echo 1;
        }
	}
	public function Cate(&$info, $child, $pid)  
	{  
	    $child = array();  
	    if(!empty($info)){
	        foreach ($info as $k => &$v) {  
	            if($v->p_id == $pid){
	                $v->child = $this->Cate($info, $child, $v->r_id);
	                $child[] = $v;
	                unset($info[$k]); 
	            }  
	        }  
	    }  
	    return $child;//返回生成的树形数组  
	}

	public function types(){
		$id = Input::get('id');
		$name = Input::get('name');
		$typeSel = DB::table('region')->where('p_id',$id)->get();
		return view('admin.small_types',['typearr' => $typeSel , 'names' => $name]);
	}	
	//旅游分类即时修改
	public function jgaitypes(){
		$tables = Input::get();
		$uploads = DB::table('region')
            ->where('r_id', $tables['s_id'])
            ->update(['r_region' => $tables['vals']]);
        if ($uploads) {
        	echo 1;
        }
	}
	//删除大分类
	public function typedel(){
		$rid = Input::get('rid');
		$sel = DB::table('region')->where('p_id',$rid)->get();
		if ($sel) {
			echo 1;
		}else{
			$del = DB::table('region')->where('r_id',$rid)->delete();
			if ($del) {
				echo 2;
			}
		}
	}


	/*public function waySel(){
		$table = DB::table('scenic')
			->join('region','scenic.r_id','=','region.r_id')
			->get();
		//print_r($table);die;
		return view('admin.way',['wayarr' => $table]);
	}

	public function waydetail(){
		$id = Input::get('id');
		$waydetail = DB::table('region')->where('p_id',$id)->lists();
		print_r($waydetail);
	}*/
	//删除小分类
	public function delsmall(){
		$id = Input::get('id');
		$delsmall = DB::table('region')->where('r_id', $id)->delete();
		if ($delsmall) {
			echo 1;
		}
	}
	//删除景点
	public function delway(){
		$id = Input::get('sid');
		$del = DB::table('scenic')->where('s_id', $id)->delete();
		if ($del) {
			echo 1;
		}
	}


	//添加旅游方式
	public function addway(){
		$data = Input::get();

		$addway = DB::table('scenic')->insert([
			'r_id' => $data['types'],
			's_name' => $data['SiteName'],
			's_traffic' => $data['traffic'],
			's_img' => $data['files'],
			's_day' => $data['day']
		]);

		if ($addway) {
			echo 1;
		}
	}
	//图片上传
	public function uploas(Request $request){
		$data = $request->all();
		$file = $request->file('file');
		if($data['SiteName']==''||$data['traffic']==''||$data['day']==''||$data['file']==''){
			echo "<script>alert('不能有空');location.href='wayadd'</script>";
		}else{
	 	$file_name = $file->getClientOriginalName();//图片名
		$file_ex = $file->getClientOriginalExtension();    //上传文件的后缀	
		//判断文件格式
		if(!in_array($file_ex, array('jpg', 'gif', 'png'))){
			echo "<script>alert('文件格式错误,仅支持 jpg ,gif,png');location.href='admin/wayadd'</script>";
		}
		$newname = md5(date('ymdhis').$file_name).".".$file_ex;
		$savepath = base_path().'/public/image/one/shopphoto/';
		$filepath = $request->file('file')->move($savepath, $file_name);
		if ($filepath) {
			$fileadd = "/image/one/shopphoto/".$file_name;
			$id = DB::table('scenic')->insertGetId(['s_img' => $fileadd]);
			if ($id) {
				$tuadd = DB::table('scenic')->where('s_id',$id)->update([
	            	's_name' => $data['SiteName'],
	            	's_traffic' => $data['traffic'],
	            	's_day' => $data['day'],
	            	's_sprice' => $data['sprice']
	            ]);
	            if ($tuadd) {
	            	//return http_redirect();
	            	return redirect('admin/waysel');
	            }else{
	            	echo "<script>alert('添加失败');location.href='{{URL('admin/wayadd')}}'</script>";
	            }
				
			}
		}else{
			echo "<script>alert('上传失败');location.href='{{URL('admin/wayadd')}}'</script>";
		}

	}
	}


}

	