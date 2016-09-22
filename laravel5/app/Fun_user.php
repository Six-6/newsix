<?php
/**
 * 志同道合好友
 */
namespace App;

use Illuminate\Database\Eloquent\Model;

class Fun_user extends Model {
    protected $table="fun_user";
    /**
     * 查询志同道合好友
     */
    public static function friend($u_id){
        $re=self::where(["u_id"=>$u_id])->lists("f_id");
        return $re;
    }

    /**
     *志同道合好友添加
     */
    public static function user($u_id,$f_id,$time){
        $re=self::insert(["f_id"=>$f_id,"u_id"=>$u_id,"u_times"=>$time]);
        return $re;
    }
    /**
     * 获取参加人员
     */
    public static function persons($id){
        $re=self::join("login","fun_user.u_id","=","login.u_id")
            ->where(["fun_user.f_id"=>$id])
            ->get();
        return $re;
    }
    /**
     * 查询除当下旅游的结束时间
     */
    public static function start($u_id){
        $re=self::join("fun","fun_user.f_id","=","fun.f_id")->where(["fun_user.u_id"=>$u_id])->select("start_time","end_time")->get()->toArray();
        return $re;
    }

}
