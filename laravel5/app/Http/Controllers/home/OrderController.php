<?php
/**
 * @订单管理
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
use App\Order;
use App\Integral;
use App\View;
use App\Hotel;
use Session;
use DB;
use Input;

session_start();

class OrderController extends BaseController{
    /**订单添加**/
    public function add(Request $request){
        return view("home.order.add");
	}
    /**路线订单查看**/
    public function line(Request $request){
        $order=Order::selAll();
        //print_r($order);die;
        return view("home.order.line",["order"=>$order]);
    }
    /**
     * 酒店订单查看
     */
    public function hotel(){
        $hotel=Hotel::selAll();
        return view("home.order.hotel",["hotel"=>$hotel]);
    }
    /**
     * 积分页面显示
     */
    public function integral(){
        $integral=Integral::selAll();
        return view("home.order.integral",["integral"=>$integral]);
    }
    /**
     * 我的评论
     */
    public function view(){
        $view=View::selAll();
        //print_r($view);die;
        return view("home.content.view",["view"=>$view]);
    }
    /**
     * 主页面显示
     */
    public function show(){
        return view("home/common/common");
    }

}