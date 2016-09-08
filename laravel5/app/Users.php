<?php namespace App;

use Illuminate\Database\Eloquent\Model;
use Request;
use DB;
use Input;
class Users extends Model{
    public $table = 'users';
    /**数据数量**/
    public static function selAll($page){
        $count = count(self::all());
        $num=2;
        $pagecount=ceil($count/$num);
        $start=($page-1)*$num;
        $data['user']=self::limit($start,$num)->get();
        $data['last']=$page<1?1:$page-1;
        $data['next']=$page<$pagecount?$page+1:$pagecount;
        $data['pagecount']=$pagecount;
        return $data;
    }
    /**删除数据**/
    public static function del($id){
        self::where("u_id",$id)->delete();
    }

}
