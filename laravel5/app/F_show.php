<?php namespace App;
/**
 * 志同道合数据
 */
use Illuminate\Database\Eloquent\Model;
use App\F_type;
use DB;
use Input;
class F_show extends Model {

    /**
     * 志同道合数据
     */
	protected $table="f_show";
    protected $PRIMARY_KEY="id";
    /**
     * 查询数据
     */
    public static function sel(){
        $re=self::get();
        return $re;
    }
    /**
     * @数据查询
     */
    public function selAll(){
        return $this->hasOne("App\F_type","f_tid","f_tid");
    }
    /**
     * 更换页面
     */
    public static function exchange($id){
        $re=self::where(["f_tid"=>$id])->get();
        return $re;
    }
}
