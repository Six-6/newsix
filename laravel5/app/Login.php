<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use Input;
class Login extends Model {
    public $table="login";
    /**个人信息**/
    public static function selAll(){
        $re=DB::table("login")
            ->join("type","login.t_id","=","type.t_id")
            ->get();
        return $re;
    }
    /**
     * 用户名验证
     */
    public static function name($u_name){
        $re=self::Where('user', $u_name)
            ->orWhere('email', $u_name)
            ->orWhere('phone', $u_name)
            ->first();
        return $re;
    }
    /**
     * 密码验证
     */
    public static function pwds($u_pwd){
        $re=self::where(["pwd"=>$u_pwd])->get();
        return $re;
    }
    /**
     * 用户名唯一验证
     */
    public static function names($re){
        $re=self::where(["name"=>$re])->lists("name");
        return $re;
    }
    /**
     * 手机号唯一验证
     */
    public static function checkPhone($re){
        $re=self::where(["phone"=>$re])->lists("phone");
        return $re;
    }
    /*
   *查询登录人信息
   **/
    public static function rowSelect($uid)
    {
        $arr=DB::table('login')->where('u_id',$uid)->first();
        return $arr;
    }
}
