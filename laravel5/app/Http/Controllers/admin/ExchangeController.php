<?php
/**
 * 后台兑换管理
 * @褚玉密
 */
namespace App\Http\Controllers\admin;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Redirect;
use App\Exchange;
use App\E_type;
use Session;
use DB;
use Input;
session_start();
class ExchangeController extends BaseController{
    /**
     * 兑换页面展示
     */
    public function add(Request $request){
        if(empty($_REQUEST)){
            $type=E_type::selAll();
            return view("admin/exchange/show",['type'=>$type]);
        }else{
            $re=$request->input();
            unset($re['_token']);
            $file = $request->file("e_img");
			print_r($file);die;
            $clientName = $file->getClientOriginalName();//获得文件名字
			
            $entension = $file->getClientOriginalExtension(); //上传文件的后缀.
            $newName = md5(date('ymdhis') . $clientName) . "." . $entension;//改名字
            $path = $file->move('./admin/upload', $newName);//将图片放到storage/uploads下
            $path1 = str_replace('\\', '/', $path);
            $re['e_img'] = "." . $path1;
            Exchange::add($re);
            return Redirect::to("admin/exchangeShow");
        }
    }
    /**
     * 兑换信息验证
     */
    public function check(Request $request){
        $res=$request->input();
        unset($res['_token']);
        $ar=Exchange::name($res);
        if($ar){
            echo 2;
        }
    }
    /**
     *兑换展示
     */
    public function show(){
        $re=Exchange::show();
        return view("admin/exchange/lists",['re'=>$re]);
    }
}