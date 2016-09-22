<?php
/**
 * 志同道合类型表
 */
namespace App;

use Illuminate\Database\Eloquent\Model;

class F_type extends Model {
    public $table="f_type";
    /**
     * 类型展示
     */
    public static function selAll(){
        $re=self::get()->toArray();
        return $re;
    }

}
