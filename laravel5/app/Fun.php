<?php
namespace App;
/**
 * 志同道合
 * @褚玉密
 */
use Illuminate\Database\Eloquent\Model;
class Fun extends Model {
    public $table = "fun";
    public $timestamps = false;
    /**
     * @志同道合展示展示
     */
    public static function selAll(){
        $re = self::join("f_type","fun.f_tid","=","f_type.f_tid")->get()->toArray();
        return $re;
    }
    /**
     * 志同道合详情页
     */
    public static function gets($id){
        $re=self::join("f_type","fun.f_tid","=","f_type.f_tid")->where(["f_id"=>$id])->get()->toArray();
        return $re;
    }
    /**
     * 志同道合列表展示
     */
    public static function lists(){
        $re=self::get();
        return $re;
    }
    /**
     * 志同道合添加
     */
    public static function add($re){
        $res=self::insert($re);
        return $res;
    }
    /**
     * 查询参加人数
     */
    public static function person($f_id){
        $re=self::where(['f_id'=>$f_id])->first()->toArray();
        return $re;
    }
    /**
     * 修改参加人数
     */
    public static function upd($f_id,$person){
        $re=self::where(["f_id"=>$f_id])->update(["p_num"=>$person]);
        return $re;
    }

    /**
     * 获取当前的开始时间
     */
    public static function nows($f_id){
        $re=self::where(["f_id"=>$f_id])->select("start_time","end_time")->first()->toArray();
        return $re;
    }
}
