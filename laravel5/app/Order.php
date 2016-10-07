<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    public $table="order";
    public static function selAll($u_id){
        $re=self::where(["u_id"=>$u_id])->get();
        return $re;
    }
}
