<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    public $table="order";
    public static function selAll(){
        $re=self::all();
        return $re;
    }
}
