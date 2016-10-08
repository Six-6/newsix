<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
class Order extends Model {
    public $table="order";
    public static function selAll($u_id){
        $re=self::where(["u_id"=>$u_id])->get();
        return $re;
    }
    public static function countSelete()
    {
    	$count=count(self::get());

    	return $count;
    }

   public static function orderSelect($uid,$sid)
    {
        //查询是否有下单未付款的订单
       $arr=DB::table('order')
       ->where('u_id',$uid)
       ->where('s_id',$sid)
       ->where('state',0)
       ->first();
       if(isset($arr)){
        return 1;
       }else{
        return 0;
       }
    } 
     public static function startSelect($uid,$sid,$times)
    {
        //查询是否重复下单
       $arrs=DB::table('order')
       ->where('u_id',$uid)
       ->where('s_id',$sid)
       ->where('state',1)
       ->first();
       if($arrs)
       {
        $endtime=strtotime($arrs->end_time);
        $starttime=strtotime($times);
           $time=time();
           if($time < $endtime && $starttime < $endtime){
                return 1;
           }else{
                return 0;
           }
       }else{
            return 0;
       }
       
    }
}
