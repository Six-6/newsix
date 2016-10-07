<?php
/**
 * @用户管理
 * @褚玉密编写
 **/
namespace App\Http\Controllers\admin;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Redirect;
use App\Users;
use Session;
use DB;
use Input;
session_start();
class AdminController extends BaseController
{

    /**用户添加管理**/
    public function add(Request $request)
    {
        if (empty($_POST)) {
            $user = DB::table("role")->get();
            //print_r($user);die;
            return view("admin.user.add", ['user' => $user]);
        } else {
            $rid = $request->input("rid");
            $uname = $request->input("u_name");
            $pwd = $request->input("u_pwd");
            DB::table("users")->insert(['u_name' => $uname, 'u_pwd' => $pwd, 'rid' => $rid]);
            return Redirect::to("userAdd");
        }
    }
    /**用户信息完善查看**/
    public function info(Request $request)
    {
        $id = $request->input("id");
        $user = DB::table('users')
            ->join('role', 'users.rid', '=', 'role.rid')
            ->where("users.u_id", $id)
            ->get();
        return view("admin.user.info", ['user' => $user]);
    }
    /**用户信息完善**/
    public function perfect(Request $request)
    {
        $id = $request->input("id");
        $email = $request->input("u_email");
        $phone = $request->input("u_phone");
        $file = $request->file("path");
        $time = $request->input("u_time");
        $clientName = $file->getClientOriginalName();//获得文件名字
        $entension = $file->getClientOriginalExtension(); //上传文件的后缀.
        $newName = md5(date('ymdhis') . $clientName) . "." . $entension;//改名字
        $path = $file->move('./admin/upload', $newName);//将图片放到storage/uploads下
        $path1 = str_replace('\\', '/', $path);
        $paths = "." . $path1;
        DB::table("users")->where("u_id", $id)->update(['u_email' => $email, 'u_phone' => $phone, 'path' => $paths, "u_time" => $time]);
        return Redirect::to("userShow");
    }
    /**用户信息展示**/
    public function show(Request $request){
        $page=$request->input("page");
        $data=Users::selAll($page);
        return view("admin.user.show",["data"=>$data]);
    }
    /**用户信息验证**/
    public function check(Request $request)
    {
        $user = $request->input("user");
        $uname = DB::table("users")->where(["u_name" => $user])->get();
        if ($uname) {
            echo 1;
        }
    }
    /**用户删除**/
    public function del(Request $request)
    {
        $id = $request->input("id");
        Users::del($id);
        return Redirect::to("userShow");
    }
}