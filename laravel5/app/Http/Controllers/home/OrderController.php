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
use Session;
use DB;
use Input;

session_start();

class OrderController extends BaseController{
    /**订单添加**/
    public function add(Request $request){
        return view("home.order.add");
    }

}