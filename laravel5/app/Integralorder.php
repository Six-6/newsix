<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Integralorder extends Model {
    public $table="integralorder";
    /**
     * @订单
     */
    public static function order($re){
        $ar=self::insert($re);
        return $ar;
    }
    /**
     * 订单查询
     */
    public static function selAll(){
        $re=self::orderBy('a_id', 'desc')->limit(1)->get()->toArray();
        return $re;
    }
}
