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
   public function index(){
       return view("admin/index/index");
   }
   public function unsession()
   {
	session_unset();
	echo "<script>alert('请登录');location.href='lo'</script>";
   } 
}
