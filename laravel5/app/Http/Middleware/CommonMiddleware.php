<?php 
namespace App\Http\Middleware;	
header('content-type:text/html;charset=utf-8');
use Closure;
use Session;
use Route;
use DB;
use Illuminate\Http\Request;
class CommonMiddleware 
{

	public function handle(Request $request, Closure $next)
	{
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

		$urls=substr($url,6);
		// if(!in_array($urls,$arr))
		// {
		// 	echo "<script>alert('对不起,您没有此权限')</script>";
		// 	die;
		// }
		return $next($request);
	}
	

}
