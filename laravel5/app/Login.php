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
    /****/
    /**图片上传**/
    public static function image(){

    }
}
