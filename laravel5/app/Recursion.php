<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Request,DB,Input,Session;

class Recursion extends Model{
    /** 
     * @根据地区查询景点
     *
     * @return 
     * 
     */  
    function getScenic($sid){  
        $data = DB::table('scenic_spot')
            ->join('region','scenic_spot.r_id','=','region.r_id')
            ->where('scenic_spot.r_id',$sid)
            ->get();
        return $data;
    }  
}



