<?php
/**
 * @后台主页
 * @李来恩编写
 **/
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

class IndexController extends BaseController
{
	/**
    *首页
    * @return Request $request 接收值
    */
    public function index(Request $request)
    {

    	$u_id=Session::get('u_id');

    	$name=Session::get('name');

		$res=DB::table('users')->where('u_id',$u_id)->lists('rid');

		$arr=DB::table('r_p')
		->join('power','r_p.pid','=','power.pid')
		->where('r_p.rid',$res[0])
		->get();
		$arrs=$this->cate($arr,0,0); 
    	return view('admin/index/index',['ar'=>$arrs,'name'=>$name]);
    }
    /**
    *无限极分类
    * @return &$info, $child, $pid 传的参数
    */
     public function cate(&$info, $child, $pid)  
	{  
	    $child = array();  
	    if(!empty($info))
	    {
	    	//当$info中的子类还没有被移光的时候  
	        foreach ($info as $k => &$v) 
	        {  
	            if($v->parent_id == $pid)
	            {
					//判断是否存在子类pid和返回的父类id相等的  
					$v->child = $this->cate($info, $child, $v->pid);//每次递归参数为当前的父类的id  
					
					    $child[] = $v;//将$info中的键值移动到$child当中  
					  
					    unset($info[$k]);//每次移动过去之后删除$info中当前的值  
	            }  
	        }  
	          // print_r($child);
	        return $child;//返回生成的树形数组  
		}
	}      
	public function unsession()
	{
		session_unset();
		echo "<script>alert('请登录');location.href='lo'</script>";
	} 
}

	