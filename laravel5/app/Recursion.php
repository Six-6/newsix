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

    /**
     * @根据地区ID查地区名
     * 
     * @return [$rid] [根据地区rid查询当前地区展示至多搜页面]
     */
    function splic($rid){
        $sqlSel = DB::table('region')
            ->where('region.p_id',$rid)
            ->get();
        $data = json_decode(json_encode($sqlSel),true);
        if (empty($data)) {
            $sqlSel = $this->regionClass($rid);
            $data = json_decode(json_encode($sqlSel),true);
        }
        //返回值
        return $data;
    }

    function regionClass($rid){
        $sqlSel = DB::table('scenic_spot')
            ->join('region','scenic_spot.r_id','=','region.r_id')
            ->where('scenic_spot.r_id',$rid)
            ->skip(0)
            ->take(1)
            ->select('region.r_region','region.r_id')
            ->get();
        //返回值
        return $sqlSel;
    }

    /**
     * 前台根据目的地查景点
     * @param  [type] $data['ss'] [出发地]     $data['rid'] [目的地]
     * @return [type] 返回景点
     */
    function gitDestination($data){
        $beginning = $data['ss'];
        $destination = $data['destination'];
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

    /**
     * 根据地区ＩＤ倒推上级地区
     * @param  [type] $rid [description]
     * @return [type]      [description]
     */
    function pushClass($rid){
        $downSmailClass = DB::table('region')
            ->where('r_id',$rid)
            ->get();
        $downSmailClass = json_decode(json_encode($downSmailClass),true);
        if (empty($downSmailClass[0]['p_id'] == 0)) {
            $downInClass = DB::table('region')
                ->where('r_id',$downSmailClass[0]['p_id'])
                ->get();
            $downInClass = json_decode(json_encode($downInClass),true);
            if (empty($downInClass[0]['p_id'] == 0)) {
                $downClass = DB::table('region')
                    ->where('r_id',$downInClass[0]['p_id'])
                    ->get();
                return $downClass;
            }else{
                return $downInClass;
            }
        }else{
            return $downSmailClass;
        }
        
    }

    /**
     * 将传过来的数据转换为树型
     * @param [type] &$info [需要转换的数据]
     * @param [type] $child [生成的树形数组]
     * @param [type] $pid   [根据pid转换]
     * @return  [返回生成的树形数组]
     */
    public function Cate(&$info, $child, $pid)  
    {  
        $child = array();  
        if(!empty($info)){
            foreach ($info as $k => &$v) {  
                if($v['p_id'] == $pid){
                    $v['child'] = $this->Cate($info, $child, $v['r_id']);
                    $child[] = $v;
                    unset($info[$k]); 
                }  
            }  
        }  
        return $child;
    }

    /**
     * 递归地区
     * @param  [type] $rid [地区id]
     * @return [type] $ast [递归后的数组]
     */
    function pushDown($rid){
        $pushClassId = $this->pushClass($rid);
        $pushClass = json_decode(json_encode($pushClassId),true);

        $pushClassData = DB::table('region')->get();
        $push = json_decode(json_encode($pushClassData),true);

        $ast = $this->Cate($push,0,$pushClass[0]['r_id']);

        $data = json_decode(json_encode($ast),true);

        return $data;
    }

    /**
     * 调用根据地区id查景点的方法
     * @param  [type] $rid [当前地区的id]
     * @return [type] $InClass [当前地区下的景点]
     */
    function pushInClass($rid){

        $InClass =  $this->regionid($rid);

        return $InClass;
    }

    /**
     * 父类地区下的子类
     * @param  [type] $rid [父类id]
     * @return [type] $pushSmailClass [父类下的子类]
     */
    function pushSmailClass($rid){

        $pushSmailClass = DB::table('region')
            ->where('p_id',$rid)
            ->get();

        $pushSmailClass = json_decode(json_encode($pushSmailClass),true);


        return $pushSmailClass;
    }

    /**
     * 多选页面排序方式
     * @param  [type] $content [排序方式]
     * @return [type] $content [排序后的数据]
     */
    function contentChange($content){
        $emails = $content['emails'];
        $contentId = $content['content'];
        $emailId = DB::table('region')->where('r_region',$emails)->lists('r_id');
        $rid = $emailId[0];

        if ( $contentId == 1 ) {
            $sqlSel = $this->regionid($rid);
        }else
        if ( $contentId == 2 ) {
            $sqlSel = DB::table('scenic_spot')
                ->where('r_id',$rid)
                ->orderBy('s_day', 'asc')
                ->get();
        }else
        if ( $contentId == 3 ) {
            $sqlSel = DB::table('scenic_spot')
                ->where('r_id',$rid)
                ->orderBy('s_day', 'desc')
                ->get();
        }else
        if ( $contentId == 4 ) {
            $sqlSel = DB::table('scenic_spot')
                ->where('r_id',$rid)
                ->orderBy('s_sprice', 'asc')
                ->get();
        }else
        if ( $contentId == 5 ) {
            $sqlSel = DB::table('scenic_spot')
                ->where('r_id',$rid)
                ->orderBy('s_sprice', 'desc')
                ->get();
        }
        
        $content = json_decode(json_encode($sqlSel),true);

        return $content;
    }

    function domestic(){
        $data = DB::table('scenic_spot')
            ->orderBy('s_sign_number','desc')
            ->limit(3)
            ->get();
            
        return $data;
    }

}



