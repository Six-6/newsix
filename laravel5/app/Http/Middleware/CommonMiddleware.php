<?php
/**
 * @权限完善
 * @褚玉密
 */
namespace App\Http\Middleware;
use Closure;
use Session;
use Route;
use DB;
use Illuminate\Http\Request;

class CommonMiddleware 
{

	public function handle(Request $request, Closure $next)
	{
		return $next($request);
		$u_id=Session::get('u_id');
		if (empty($u_id)) {
			echo "<script>alert('请先登录');location.href='lo'</script>";
			die;
		}
		$res=DB::table('users')->where('u_id',$u_id)->lists('rid');
		$arr=DB::table('r_p')
		->join('power','r_p.pid','=','power.pid')
		->where('r_p.rid',$res[0])
		->get();
		$url=$request->path();
			echo "<script>alert('对不起, 您没有此权限')</script>";
			die;
		
		return $next($request);
	}

    /**
     * @param $info
     * @param $child
     * @param $pid
     * @return array
     * @多级联动
     */
    public function Cate(&$info, $child, $parent_id)
    {
        $child = array();
        if(!empty($info)){//当$info中的子类还没有被移光的时候
            foreach ($info as $k => &$v) {
                if($v->parent_id == $parent_id){//判断是否存在子类pid和返回的父类id相等的
                    $v->child = $this->Cate($info, $child, $v->pid);//每次递归参数为当前的父类的id
                    $child[] = $v;//将$info中的键值移动到$child当中
                    unset($info[$k]);//每次移动过去之后删除$info中当前的值
                }
            }
        }
        return $child;//返回生成的树形数组
    }
}
