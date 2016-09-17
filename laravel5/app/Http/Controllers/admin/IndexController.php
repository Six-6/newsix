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
 session_start();
class IndexController extends BaseController
{
   public function index(){
       return view("admin/index/index");
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

   public function unsession(Request $request){
       $request->session()->flush();
       echo "<script>location.href='lo'</script>";
   } 

}
