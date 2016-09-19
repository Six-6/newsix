<?php namespace App;
/**
 * @数据类型
 */
use Illuminate\Database\Eloquent\Model;

class F_type extends Model {
	protected $table="f_type";
    protected $PRIMARY_KEY="f_tid";
    /**
     * 查询数据
     */
    public static function sel(){
        $re=self::get();
        return $re;
    }
    /**
     *类型数据显示
     */
    public function selAll(){
        return $this->hasMany("App\F_show","f_tid","f_tid");
    }
    /**
     * 地址查询
     */
    public function typeAll(){
        return $this->hasOne("");
    }

}
