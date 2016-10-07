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
use Mail;
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
        $u_id = Session::get('u_id');
        //echo $u_id;die;
        if(empty($u_id))
        {
            $url = $_SERVER['HTTP_REFERER'];
            Session::put('url',$url);
            return redirect('blo');
        }else {
            $uid = Session::get("u_id");
            $re = Integral::sel($uid);
            Session::put("i_num", $re);
            $res = Exchange::selAll();
            //print_r($res);die;
            return view("home/exchange/all", ["re" => $re, "res" => $res]);
        }
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
        $u_id = Session::get('u_id');
        //echo $u_id;die;
        if(empty($u_id))
        {
            $url = $_SERVER['HTTP_REFERER'];
            Session::put('url',$url);
            return redirect('blo');
        }else {
            $id = Session::get("e_id");
            $re = Exchange::shows($id);
            return view("home/exchange/details", ['re' => $re]);
        }
    }
    /**
     * @兑换商品订单
     */
    public function order(Request $request){
        $re=$request->input();
        unset($re['_token'],$re['e_num']);
        if(!empty($re)){
            Session::put("re",$re);
        }
        return view("home/exchange/order");
    }
    /**
     * @确认兑换
     */
    public function orderAdd(Request $request){
        $re=Session::get("re");
        $re['a_name']=$request->input("a_name");
        $re['a_phone']=$request->input("a_phone");
        $re['sum']=Session::get("re")['num']*Session::get("re")['e_price'];
        $re['u_id']=Session::get("u_id");
        $res=Session::put("res",$re);
        Integralorder::order($re);
        $i_num=Session::get("i_num");
        $num=$i_num-$re['sum'];
        $id=$re['u_id'];
        Integral::upd($num,$id);
        $email=Session::get('u_email');
        Mail::send("home/exchange/mails", ['res' => $res], function($message) use ($email){
            $message->to($email)->subject('welcome to 惠玩！' );
        });
        echo"<script>alert('兑换成功');location.href='indexShow';</script>";
    }
    /**
     * 发送邮件给用户
     *
     */
    /*public function sendEmail(){
        $re=Integralorder::selAll();
        //print_r($re);die;
        $email="13041203572@sina.cn";
        Mail::send("home/exchange/mails",function ( $message ) use ($email ) {
            $message->to($email)->subject('welcome!' );
        } );
        return view("home/exchange/mails", ['re' => $re]);
    }*/
}