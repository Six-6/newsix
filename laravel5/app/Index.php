<?php
namespace App;
/**
 * 首页面图片展示
 * @褚玉密
 */
use Illuminate\Database\Eloquent\Model;
class Index extends Model {
    protected $table="index";
    /**
     * 首页图片展示
     */
    public static function selAll(){
        $re=self::get();
        return $re;
    }
}