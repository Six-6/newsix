<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Request,DB,Input,Session;

class Footprint extends Model{
    /** 
     * @用户详情
     *
     * @return
     * 
     */  
    function userhome(){  
        $uid = session('u_id');
        $userFootprint = DB::table('login')
            ->where('login.u_id',$uid)
            ->get();
        return $userFootprint;
    }  


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

        $footpfrint = json_decode(json_encode($userFootprint),true);

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

        $dataArray = json_decode(json_encode($collect),true);//转换为数组

        return $dataArray;
    }

    /**
     * @用户取消收藏
     *
     * @return   [description]
     */
    function cancel($sid){
        $uid = session('u_id');
        
        $collect = DB::table('collect')
            ->where(['s_id'=>$sid,'u_id'=>$uid])
            ->delete();

        if ($collect) {
            return 1;
        }else{
            return 0;
        }
        
    }

    /**
     * @用户评价
     *
     * @return   [description]
     * 
     */
    function assess($data){
        $ch = curl_init();//创建新链接
        $url = 'http://apis.baidu.com/datagrand/spam_comment_filtering/spam_comment_filtering';
        $header = array(
            'Content-Type:application/x-www-form-urlencoded',
            'apikey:638003cdf4d5c2987c82dc06cd4d9eb0',
        );
        $data = "text='$data'";
        // 添加apikey到header
        curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
        // 添加参数
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // 执行HTTP请求
        curl_setopt($ch , CURLOPT_URL , $url);
        $res = curl_exec($ch);

        return json_decode($res);
    }

    /**
     * @用户评论记录
     *
     * @return   [description]
     * 
     */
    function record(){
        $uid = Session::get('u_id');
        $data = DB::table('travel_reviews')
            ->where('u_id',$uid)
            ->orwhere('to_examine',1)
            ->join('scenic_spot','travel_reviews.s_id','=','scenic_spot.s_id')//转换为数组
            ->get();

        $dataArray = json_decode(json_encode($data),true);

        return $dataArray;
    }

    /**
     * @用户积分明细
     *
     * @return   [description]
     * 
     */
    function integralDetails(){
        $uid = Session::get('u_id');
        $data = DB::table('login_integral')
            ->where('u_id',$uid)
            ->select('lo_integral')
            ->get();

        $dataArray = json_decode(json_encode($data),true);//转换为数组

        return $dataArray;
    }

    /**
     * @收藏分页
     *
     * @return   [description]
     * 
     */
    function pages($p){
        $size=4;
        $limits = ($p-1)*5;
        $uid = session('u_id');
        $collect = DB::table('scenic_spot')
            ->join('collect','scenic_spot.s_id','=','collect.s_id')
            ->join('login','collect.u_id','=','login.u_id')
            ->where('login.u_id','=',$uid)
            ->skip($limits)
            ->take($size)
            ->get();

        $dataArray = json_decode(json_encode($collect),true);//转换为数组

        return $dataArray;
    }
}



