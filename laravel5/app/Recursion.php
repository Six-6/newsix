<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Request,DB,Input,Session;

class Recursion extends Model{
    /** 
     * @根据地区查询景点
     *
     * @return [$sid] [景点所在的地区id] 
     * 
     */  
    function getScenic($sid){  
        $data = DB::table('scenic_spot')
            ->join('region','scenic_spot.r_id','=','region.r_id')
            ->where('scenic_spot.r_id',$sid)
            ->limit(4)
            ->get();
        return $data;
    }  

    /** 
     * @递归展示首页侧边栏
     *
     * @return 
     * 
     */  
    function navigation(){  
        $navigation = DB::table('types')->get();
        return $navigation;
    }

    /**
     * @查询某个地区下的景点
     * 
     * @return [type] [description]
     */
    function data(){  
        $data = DB::table('scenic_spot')
            ->join('region','scenic_spot.r_id','=','region.r_id')
            ->limit(4)
            ->get();
        return $data;
    }

    /**
     * @地区
     * 
     * @return [type] [description]
     */
    function gittable(){  
        $gittable = DB::table('region')->get();
        return $gittable;
    }

    /**
     * @首页全文检索
     * 
     * @return [$sou] [根据$sou进行检索景点]
     */
    function fulltextRetrieval($sou){  
        //执行检索
        $sqlSel = DB::select("SELECT * FROM scenic_spot WHERE match(s_name,s_traffic) against('$sou')");
        //返回值s
        return $sqlSel;
    }

    /**
     * @搜索天
     * 
     * @return [$data] [$data包含天数和旅游景点名/交通方式]
     */
    function gitSearchDay($data){  
        $dayid = $data['dayid'];
        $names = $data['ss'];
        //执行检索
        $sqlSel = DB::table('scenic_spot')
            ->where(['s_day'=>$dayid,'s_name'=>$names])
            ->orwhere(['s_day'=>$dayid,'s_traffic'=>$names])
            ->get();
        //返回值
        return $sqlSel;
    }

    /**
     * @根据地区查询景点[首页无限极]
     * 
     * @return [$rid] [根据地区rid查询当前地区下的景点]
     */
    function regionid($rid){
        $sqlSel = DB::table('scenic_spot')
            ->where('r_id',$rid)
            ->get();
        $data = json_decode(json_encode($sqlSel),true);
        //返回值
        return $data;
    }
    function regionName($rid){
        $sqlSel = DB::table('scenic_spot')
            ->join('region','scenic_spot.r_id','=','region.r_id')
            ->where('scenic_spot.r_id',$rid)
            ->skip(0)
            ->take(1)
            ->lists('region.r_region');
        //返回值
        return $sqlSel;
    }

    function splic($rid){
        $sqlSel = DB::table('region')
            ->where('region.p_id',$rid)
            ->get();
        //返回值
        return $sqlSel;
    }

    /**
     * 前台根据目的地查景点
     * @param  [type] $data['ss'] [出发地]     $data['rid'] [目的地]
     * @return [type] 
     */
    function gitDestination($data){
        $beginning = $data['ss'];
        $destination = $data['rid'];
        $begin = DB::table('region')
           ->where('r_region',$beginning)
           ->get();
        $beginArray = json_decode(json_encode($begin),true);
        $begi = $beginArray[0]['r_id'];

        $dataName = DB::table('scenic_spot')
            ->where('r_id',$begi)
            ->where('destination_id',$destination)
            ->get();

        $tableArray = json_decode(json_encode($dataName),true);
        return $tableArray;
    }
}



