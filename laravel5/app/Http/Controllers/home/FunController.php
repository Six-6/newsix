<?php
/**
 * @志同道合
 * @褚玉密编写
 **/
namespace App\Http\Controllers\home;

use App\F_show;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Redirect;
use App\Fun;
use App\F_type;
use Session;
use DB;
use Input;

session_start();

class FunController extends BaseController{
    /*
     * 志同道合页面显示
     */
    public function show(){
      
        $res=Fun::selAll();
        $ar=F_type::sel();
        foreach($ar as $v){
            $v->selAll;
        }
       // print_r($ar->toArray());die;
        return view("home.fun.show",['res'=>$res,"ar"=>$ar]);
    }
    /**
     * 更换页面
     */
    public function exchange(Request $request){
        $id=$request->input("id");
        $res=F_show::exchange($id);
        print_r($res);die;
    }
}