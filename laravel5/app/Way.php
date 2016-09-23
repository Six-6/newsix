<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Request,DB,Input,Session;

class Way extends Model{
   

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
     * 用户评论
     * @return [type] $data [评论]
     */
    function toExamine(){
        $jid='';
        $data = DB::table('travel_reviews')
            //->select("")
            ->join('scenic_spot','travel_reviews.s_id','=','scenic_spot.s_id')
            ->join('login','travel_reviews.u_id','=','login.u_id')
            ->get();

        //$data = json_decode(json_encode($data),true);

        return $data;
    }

    /**
     * 后台管理员审核用户的评论
     * @param  [type] $gid [要审核的评论]
     * @return [type] $update [审核后的结果]
     */
    function examine($gid){

        $update = DB::table('travel_reviews')
            ->where('tr_id',$gid)
            ->update(['to_examine'=>1]);

        return $update;
    }

    /**
     * 修改用户评论所得分值
     * @param  [type] $data [修改条件]
     * @return [type] $uploads [修改后的数据]
     */
    function jgaiExamine($data){

        $uploads = DB::table('travel_reviews')
            ->where('tr_id', $data['s_id'])
            ->update(['comment_integral' => $data['vals']]);
        if ($uploads) {
            return 1;
        }else{
            return 0;
        }
    }

    function lefts(){
        $gittable = DB::table('power')->get();

        $ast = $this->Cate($gittable,0,0);
        return $ast;
    }

    function Cate(&$info, $child, $pid) 
    { 
        $child = array(); 
        if(!empty($info)){//当$info中的子类还没有被移光的时候 
            foreach ($info as $k => &$v) { 
                if($v->parent_id == $pid){//判断是否存在子类pid和返回的父类id相等的 
                    $v->child = $this->Cate($info, $child, $v->pid);//每次递归参数为当前的父类的id 
                    $child[] = $v;//将$info中的键值移动到$child当中 
                    unset($info[$k]);//每次移动过去之后删除$info中当前的值 
                } 
            } 
        } 
        return $child;//返回生成的树形数组 
    } 
}



