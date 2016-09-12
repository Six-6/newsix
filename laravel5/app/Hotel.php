<?php namespace App;
/**
 * @褚玉密
 * @酒店管理
 */


use Illuminate\Database\Eloquent\Model;

class Hotel extends Model {
    public $table="hotel";

    /**
     * 订单查询
     */
    public static function selAll(){
        $re=self::get();
        return $re;
    }

}
