<?php
/*
* 搜索查询
*
* @韦森编写 
 */
namespace App\Http\Controllers\home;

use Redirect,Session,DB,Input;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

use App\Recursion;

session_start();//开启session
class RecursionController extends BaseController{
    /*
     * @递归展示首页侧边栏
     *
     * @return  [description]
     */
    public function recursion(){

        $model = new Recursion();//调用model层
        
        $navigation = $model->navigation();//调用地区

        $gittable = $model->gittable();//调用查询方法

        $data = $model->data();//调用某个地区下的景点

        $ast = $this->Cate($gittable,0,0);

        //print_r($ast);die;

        return view('home.home3',['arr1' => $ast,'arr2' => $navigation,'arr3' => $data]);//展示给用户
    }

    public function Cate(&$info, $child, $pid)  
    {  
        $child = array();  
        if(!empty($info)){
            foreach ($info as $k => &$v) {  
                if($v->p_id == $pid){
                    $v->child = $this->Cate($info, $child, $v->r_id);
                    $child[] = $v;
                    unset($info[$k]); 
                }  
            }  
        }  
        return $child;//返回生成的树形数组  
    }

    /*
     *@首页全文检索
     *
     * @return  [description]
     */
    public function searchs(Request $request){
        $sou = $request->input('sous'); 

        $model = new Recursion();//调用model层

        $sqlSel = $model->fulltextRetrieval($sou);//调用某个地区下的景点
        
        $nums = count($sqlSel);
        if ($sqlSel) {
            return view('home.search',['souarr'=>$sqlSel,'count'=>$nums,'sou'=>$sou]);
        }else{
            echo "<script>alert('抱歉，没有您输入的信息，请联系网站管理员');location.href='recursion'</script>";
        }
    }

    /*
     *@行程天数
     *
     * @return  [description]
     */
    public function searchDay(){
        $traffic = Input::get('ss'); 
        $days = Input::get('dayid'); 
        $sqlSel = DB::table('scenic_spot')
            ->where(['s_day'=>$days,'s_name'=>$traffic])
            ->orwhere(['s_day'=>$days,'s_traffic'=>$traffic])
            ->get();
        $nums = count($sqlSel);
        echo json_encode($sqlSel);
    }

    /*
     *@行程资金
     *
     * @return 
     */
    public function searchMoney(){
        $traffic = Input::get('ss'); 
        $price = Input::get('price'); 
        $begin = $price[0];
        $ends = $price[1];
        $sqlSel = DB::table('scenic_spot')
            ->where('s_name',$traffic)
            ->whereBetween('s_sprice', [$begin,$ends])
            ->get();
        $nums = count($sqlSel);
        echo json_encode($sqlSel);
    }

    /**
     *@根据地区查询景点[国内游、出境游、北京游。。。]
     *
     * @return  [description]
     */
    public function scenic(){
        $sid = Input::get('showsjd');
        //调用model层
        $model = new Recursion();
        //调用查询方法
        $flights = $model->getScenic($sid);
        //展示
        return $flights;
    }

    /**
     *@根据地区查询景点[首页无限极]
     *
     * @return  [description]
     */
    public function regionid(){
        $rid = Input::get('rid');
        //调用model层
        $model = new Recursion();
        //调用查询方法
        $region = $model->regionid($rid);
        $regionName = $model->regionName($rid);
        $splic = $model->splic($rid);

        //print_r($splic);die;
        
        $nums = count($region);
        return view('home.search',['souarr'=>$region,'count'=>$nums,'sous'=>$regionName,'splic'=>$splic]);
    }

    /**
     * @根据旅游景点的目的地查询
     *
     * @return [description]
     */
    function destination(){
        $data = Input::get();
        //调用model层
        $model = new Recursion();
        //调用查询方法
        $region = $model->gitDestination($data);

        //print_r($region);
        return $region;
    }

}