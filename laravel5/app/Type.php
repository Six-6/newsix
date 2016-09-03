<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model {
    public $table="type";
    public static function selAll(){
        $re=self::all()->toArray();
        return $re;
    }
}
