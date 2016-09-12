<?php namespace App;

/**
 * 兑换类型显示
 * @褚玉密
 */
use Illuminate\Database\Eloquent\Model;

class E_type extends Model {
    public $table="e_type";
    /**
     * @兑换查询
     */
    public static function selAll(){
        $re=self::get();
        return $re;
    }

}
