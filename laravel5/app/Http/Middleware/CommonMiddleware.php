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
		return $next($request);
		$u_id=Session::get('u_id');
		if (empty($u_id)) {
			echo "<script>alert('请先登录');location.href='lo'</script>";
			die;
		}
		
		return $next($request);
	}
	

}
