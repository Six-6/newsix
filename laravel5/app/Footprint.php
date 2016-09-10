<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Request,DB,Input,Session;

class Footprint extends Model{
    /** 
     * @查询我去过的景点信息 
     *
     * @return
     * 
     */  
    function getViewHistory(){  
        $uid = session('u_id');
        $userFootprint = DB::table('order')
            ->join('login', 'order.u_id', '=', 'login.u_id')
            ->where('login.u_id',$uid)
            ->get();
        return $userFootprint;
    }  

    /**
     * @用户收藏
     *
     * @return   [description]
     */
    function userCollect(){
        $uid = session('u_id');
        $collect = DB::table('scenic_spot')
            ->join('collect','scenic_spot.s_id','=','collect.s_id')
            ->join('login','collect.u_id','=','login.u_id')
            ->where('login.u_id','=',$uid)
            ->get();
        return $collect;
    }
}



