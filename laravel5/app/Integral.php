<?php namespace App;
/**
 * @积分管理
 * @兑换管理
 */
use Illuminate\Database\Eloquent\Model;
use DB;
use Input;
class Integral extends Model {
	public $table="integral";
    public $timestamps = false;
    /**
     * @积分查询
     */
    public static function selAll($u_id){
        $re=self::where(["u_id"=>$u_id])->get();
        return $re;
    }
    /**
     * @获取积分数据
     */
    public static function details($id){
        $re=self::where(["i_id"=>$id])->get();
        return $re;
    }
    /**积分减少**/
    public static function upd($num,$id){
        $re=self::where("u_id",$id)->update(['i_num'=>$num]);
        return $re;
    }
    /**
     * 获取用户积分
     */
    public static function gets($i_id){
        $re=self::where(["i_id"=>$i_id])->lists("i_num");
        return $re;
    }
    /**
     * 添加用户积分
     */

    public static function adds($re){
        $res=self::insert($re);
        return $res;
    }

    /**
     * 查询用户积分
     */
    public static function sel($u_id){
        $row=self::where('u_id',$u_id)->lists('i_num');
        return $row;
    }

    /**
     * 查询用户积分
     */
    public static function upds($re,$u_id){
        $row=self::where('u_id',$u_id)->update($re);
        return $row;
    }
}
