<?php
/**
 * @兑换管理
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
use App\Integralorder;
use App\Integral;
use App\Exchange;
use Session;
use DB;
use Input;

session_start();

class ExchangeController extends BaseController{
    /**
     * @兑换详情页展示
     */
    public function show(Request $request){
        $id=$request->input("id");
        $re=Integral::details($id);
        $res=Exchange::selAll();
        //print_r($res);die;
        return view("home/exchange/all",["re"=>$re,"res"=>$res]);
    }
    /**
     * @获取兑换商品的id
     */
    public function id(Request $request){
        $e_id=$request->input("e_id");
        $i_num=$request->input("i_num");
        Session::put("i_num",$i_num);
        Session::put("e_id",$e_id);
        return Redirect::to("home/detailsSel");
    }
    /**
     * @兑换商品的详情
     *
     */
    public function details(){
        $id=Session::get("e_id");
        $re=Exchange::shows($id);
        return view("home/exchange/details",['re'=>$re]);
    }
    /**
     * @兑换商品订单
     */
    public function order(Request $request){
        $re=$request->input();
        unset($re['_token'],$re['e_num']);
        return view("home/exchange/order",['re'=>$re]);
    }
    /**
     * @确认兑换
     */
    public function orderAdd(Request $request){
        $re=$request->input();
        unset($re['_token'],$re['productIds']);
        $re['sum']=$re['num']*$re['e_price'];
        Integralorder::order($re);
        $i_num=Session::get("i_num");
        $num=$i_num-$re['sum'];
        $id=1;
        //$id=Session::get("u_id");
        Integral::upd($num,$id);
        echo"<script>alert('兑换成功');location.href='integralAdd';</script>";
    }
}