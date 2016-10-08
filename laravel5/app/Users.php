<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use Request;
use DB;
use Input;
class Users extends Model{
    public $table = 'users';
    /**数据数量**/
    public static function selAll($page){
        $data=DB::table("users")
            ->join("role","users.rid","=","role.rid")
            ->get();
        $num = 10;							 //分页从哪个下标开始
        $count = count($data);
        $mexpage = ceil($count/$num);		 //向上取整
        if (empty($page))
        {
            $page = 1;
        }
        if ($page<1)
        {
            $page = 1;
        }
        if ($page>$mexpage)
        {
            $page = $mexpage;
        }
        $reg="/^\d+$/";
        if (!preg_match($reg,$page)) {
            $page=1;
        }
        $xia=($page-1)*$num;

        $transmit['data']= DB::table("users")
            ->join("role","users.rid","=","role.rid")->skip($xia)
            ->take(6)->get();
        //最大页 当前页 下一页 上一页
        $transmit['mexpage'] = $mexpage;
        $transmit['page'] = $page;
        $transmit['next'] = $page+1;
        $transmit['last'] = $page-1;
        $transmit['url'] = "userShow";
        return $transmit;
    }
    /**删除数据**/
    public static function del($id){
        self::where("u_id",$id)->delete();
    }

    /**
     * 获取用户积分
     */
    public static function finds($u_id){
        $re=self::where(["u_id"=>$u_id])->lists("i_id");
        return $re;
    }
    /**
     * 查询头像
     */
    public static function img($u_id){
        $re=self::where(['u_id'=>$u_id])->lists("path");
        return $re;
    }

}
