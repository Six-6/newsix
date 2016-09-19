<?php
namespace App;
/**
 * 志同道合
 * @褚玉密
 */
use Illuminate\Database\Eloquent\Model;
class Fun extends Model {
    public $table = "fun";
    /**
     * @页面展示
     */
    public static function selAll(){
        $re = self::limit(6)->get();
        return $re;
    }

}
