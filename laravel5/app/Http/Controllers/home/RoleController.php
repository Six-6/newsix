<?php
/**
 * @前台用户管理
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
use App\Login;
use App\Type;
use Session,DB,Input;

session_start();

class RoleController extends BaseController
{
    /**个人资料展示**/
    public function roleSel()
    {
		echo 2332;die;
        $person = Login::selAll();
        print_r($person);die;
        $type = Type::selAll();
        return view("home.user.person", ["person" => $person, "type" => $type]);
    }

}