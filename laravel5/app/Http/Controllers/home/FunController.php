<?php
/**
 * @志同道合
 * @褚玉密编写
 **/
namespace App\Http\Controllers\home;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Redirect;
use App\F_hot;
use Session;
use DB;
use Input;

session_start();

class FunController extends BaseController{
    /*
     * 志同道合页面显示
     */
    public function show(){
        $res=F_hot::selAll();
        return view("home.fun.show",['res'=>$res]);
    }
}