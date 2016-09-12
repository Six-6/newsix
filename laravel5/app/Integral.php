<?php namespace App;
/**
 * @积分管理
 * @兑换管理
 */
use Illuminate\Database\Eloquent\Model;

class Integral extends Model {
	public $table="integral";
    public $timestamps = false;
    /**
     * @积分查询
     */
    public static function selAll(){
        $re=self::get();
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

}
