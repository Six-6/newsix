<?php namespace App;
/**
 * 我的评论
 * @褚玉密
 */
use Illuminate\Database\Eloquent\Model;

class View extends Model {
    public $table="view";

    /**
     * 我的评论
     */
    public static function selAll(){
        $re=self::get();
        return $re;
    }

}
