<?php

namespace App\Http\Controllers\admin;
header('content-type:text/html;charset=utf-8');
use DB;
use Redirect; 
use Session;
use Illuminate\Http\Request;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
// session_start();
class IndexController extends BaseController
{
    // public $enableCsrfValidation = false;
    public function index(Request $request)
    {
    	// $url=$request->path();
    	$u_id=Session::get('u_id');
    	// echo $u_id;die;
    	$name=Session::get('name');
		$res=DB::table('users')->where('u_id',$u_id)->lists('rid');
		$arr=DB::table('r_p')
		->join('power','r_p.pid','=','power.pid')
		->where('r_p.rid',$res[0])
		->get();
		$ar=$this->cate($arr,0,0);
		

    	return view('admin/index/index',['ar'=>$ar,'name'=>$name]);
    }
    public function cate(&$info, $child, $pid)  
	{  
	    $child = array();  
	    if(!empty($info)){//当$info中的子类还没有被移光的时候  
	        foreach ($info as $k => &$v) {  
	            if($v->parent_id == $pid){//判断是否存在子类pid和返回的父类id相等的  
	                $v->child= $this->cate($info, $child, $v->pid);//每次递归参数为当前的父类的id  
	                $child[] = $v;//将$info中的键值移动到$child当中  
	                unset($info[$k]);//每次移动过去之后删除$info中当前的值  
	            }  
	        }  
	    }
	      print_r($child);die;
	    // return $child;//返回生成的树形数组  
	}
	public function i()
	{
		// echo '<table>';
		// echo '<tr>';
		// echo '<td>111</td>';
		// echo '<td>222</td>';
		// echo '<td>333</td>';
		// echo '</tr>';
		// echo '<tr>';
		// echo '<td>aaa</td>';
		// echo '<td><a href="b">修改</a</td>';
		// echo '<td><a href="a">删除</a></td>';
		// echo '</tr>';
		// echo '</table>';
		$name=Session::get('name');
		echo $name;
	}  
	public function unsession()
	{
		session_unset();
		echo "<script>alert('请登录');location.href='lo'</script>";
	} 
}
