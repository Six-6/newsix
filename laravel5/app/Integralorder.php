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

}
