<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Request,DB,Input,Session;

class Footprint2 extends Model{
    /** 
     * @用户主页详情
     *
     * @return
     * 
     */  
    function userhome(){  
        $uid = session('u_id');
        $userFootprint = DB::table('login')
            ->where('u_id',$uid)
            ->get();
		$userFootprint = json_decode(json_encode($userFootprint),true);
        return $userFootprint;
    }  

    /**
     * 用户简介
     * @param  [type] $ucontent [description]
     * @return [type]           [description]
     */
    function userContent($ucontent)
    {
        $uid = Session::get('u_id');
        $data = DB::table('login')
            ->where('u_id',$uid)
            ->update(['userController' => $ucontent]);
        return $ucontent;
    }

    /**
     * 用户基本信息
     * @param  [type] $ucontent [description]
     * @return [type]           [description]
     */
    function userInformation(){
        $uid = Session::get('u_id');
        $userInformation = DB::table('login')
            ->where('u_id',$uid)
            ->get();
        $userInformation = json_decode(json_encode($userInformation),true);
        return $userInformation;
    }

    /**
     * 用户基本信息修改
     * @param  [type] $ucontent [description]
     * @return [type]           [description]
     */
    function userInformationUpdates($data)
    {
        if ($data['gender'] == 1) {
            $sex = "男";
        }else
        if ($data['gender'] == 0) {
            $sex = "女";
        }else{
            $sex = "保密";
        }
        $uid = Session::get('u_id');
        $data = DB::table('login')
            ->where('u_id', $uid)
            ->update([
                'name' => $data['name'],
                'sex' => $sex,
                'address' => $data['city'],
                'birthday' => $data['birthday'],
                'userController' => $data['intro']
            ]);
        $dataController = DB::table('login')->where('u_id',$uid)->get();
        $dataController = json_decode(json_encode($dataController),true);
        return $dataController;
    }
    function userInformationUpdate()
    {
        $uid = Session::get('u_id');
        $userInformation = DB::table('login')
            ->where('u_id',$uid)
            ->get();
        $userInformation = json_decode(json_encode($userInformation),true);
        return $userInformation;
    }
    /**
     * 用户的点评信息
     * @param  [type] $ucontent [description]
     * @return [type]           [description]
     */
    function userCommentAll()
    {
        $uid = Session::get('u_id');
        $userComment = DB::table('travel_reviews')
            ->join('scenic_spot','travel_reviews.s_id','=','scenic_spot.s_id')
            ->where('u_id',$uid)
            ->get();
        $userComment = json_decode(json_encode($userComment),true);
        for ($i=0; $i < count($userComment); $i++) { 
            $comment_img = $userComment[$i]['comment_img'];
            $commentimg = explode('*', $comment_img);
            $userComment[$i]['tup'] = $commentimg;
        }
        return $userComment;
    }

    /**
     * 用户点评
     * @param  [type] $ucontent [description]
     * @return [type]           [description]
     */
    function userComment()
    {
        $uid = Session::get('u_id');
        $userComment = $this->userInformationUpdate();
        $userCommentAll = $this->userCommentAll();
        $userComment = json_decode(json_encode($userComment),true);
        return array($userComment,$userCommentAll);
    }

    /**
     * 选择点评页
     * @param  [type] $ucontent [description]
     * @return [type]           [description]
     */
    function userChoice()
    {
        $userComment = $this->userCommentAll();
        //$userComment = json_decode(json_encode($userComment),true);
        return $userComment;
    }

    /**
     * 点评详情页
     * @param  [type] $ucontent [description]
     * @return [type]           [description]
     */
    function userDetails($sid)
    {
        $data = DB::table('travel_reviews')
            ->join('scenic_spot','travel_reviews.s_id','=','scenic_spot.s_id')
            ->join('region', 'scenic_spot.r_id', '=', 'region.r_id' )
            ->where('travel_reviews.s_id',$sid)
            ->get();
        $userDetails = json_decode(json_encode($data),true);
        return $userDetails;
    }

    /**
     * 用户收藏
     * @return [type]           [description]
     */
    function userCollection()
    {
        $uid = Session::get('u_id');
        $userCollection = DB::table('travel_reviews')
            ->join('scenic_spot','travel_reviews.s_id','=','scenic_spot.s_id')
            ->where('u_id',$uid)
            ->select('s_img', 's_name as sname', 'tr_id as trid')
            ->get();
        $userCollection = json_decode(json_encode($userCollection),true);
        return $userCollection;
    }

    /**
     * 用户收藏的详情
     * @return [type]           [description]
     */
    function userCollectionDetails($sname)
    {
        $datas = DB::table('scenic_spot')
            ->where('s_name', '=', $sname)
            ->lists('s_id');
        $data2 = DB::table('scenic_spot')
            ->where('s_name', $sname)
            ->select('s_img')
            ->get();
        $data = DB::table('travel_reviews')
            ->where('s_id', $datas[0])
            ->get();
        return array($data2,$data);
    }
    
    /**
     * 用户收藏删除
     * @return [type]           [description]
     */
    function userCollectionDetailsDelete($sname)
    {
        $data = DB::table('scenic_spot')->where('s_name',$sname)->get();
        $data = json_decode(json_encode($data),true);
        if ($data) {
            $userCollectionDetailsDelete = DB::table('travel_reviews')->where('s_id',$data[0]['s_id'])->delete();
            return $userCollectionDetailsDelete;
        }
    }
     
    /**
     * 用户订单详情
     * @return [type] [description]
     */
    function userOrderDetails()
    {
        $uid = Session::get('u_id');
        /*$uname = DB::table('attace_order')
            ->where('u_id',$uid)
            ->get();
        $uname = json_decode(json_encode($uname),true);*/
        $data = DB::table('order')
            ->where('u_id',$uid)
            ->get();
        $data = json_decode(json_encode($data),true);
        return $data;
    }

    /**
     * 用户订单详情删除
     * @return [type] [description]
     */
    function userOrderDetailsDelete($did)
    {
        $uid = Session::get('u_id');
        $data = DB::table('order')->where('o_id',$did)->delete();
        return $data;
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
        $data = DB::table('integral')
            ->where('u_id',$uid)
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
     * 详情页添加收藏
     * @param  [type] $sid [景点ID]
     * @return [type] 1 [景点已收藏]
     * @return [type] $data [景点收藏]
     * @return [type] 0 [用户未登录]
     * @return [type] 2 [收藏成功]
     * @return [type] 3 [收藏失败]
     */
    function exits($sid)
    {
        $uid = session::get('u_id');
        if ($uid) {
            $selSel = DB::table('collect')
                ->where('s_id', $sid)
                ->where('u_id', $uid)
                ->get();
            if ($selSel) {
                return 1;
            }else{
                $data = DB::table('collect')->insert([
                    's_id' => $sid, 
                    'u_id' => $uid
                ]);
                if($data){
					return 2;
				}else{
					return 3;
				}
            }
        }else{
            return 0;
        }
        
    }
}



