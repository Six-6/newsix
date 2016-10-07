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
use App\Recursions;

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
            return view('home.searchs',['souarr'=>$sqlSel,'count'=>$nums,'sous'=>$sou]);
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
        $data = Input::get();
		
        $model = new Recursions();

        $numDays = $model->numberDay($data);

        //return $numDays;
		print_r($numDays);
    }

    /*
     *@行程资金
     *
     * @return 
     */
    public function searchMoney(){
        $data = Input::get();

        $model = new Recursions();

        $numDays = $model->numberDay($data);

        return $numDays;
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
     * @return [type] $regionName [根据$regionName查询]
     * @return [type] $region [查询的景点]
     * @return [type] $pushDown [根据地区ＩＤ递归展示]
     * @return [type] $splic [查询地区名]
     * @return [type] $nums [景点总数]
     */
    public function regionid(){
        $rid = Input::get('rid');

        $model = new Recursion();
        
        $region = $model->regionid($rid);
        $regionName = $model->regionName($rid);
        $splic = $model->splic($rid);
        $pushDown = $model->pushDown($rid);

        $nums = count($region);
        return view('home.search',[
            'souarr'=>$region,
            'count'=>$nums,
            'sous'=>$regionName,
            'splic'=>$splic,
            'pushDown'=>$pushDown
        ]);
    }

    /**
     * @根据旅游景点的目的地查询
     *
     * @return [description]
     */
    function destination(){
        $data = Input::get();

        $model = new Recursion();

        $region = $model->gitDestination($data);

        return $region;
    }

    /**
     * 多项搜索页面操作
     * @return [type] $pushInClass [查询景点]
     * @return [type] $pushSmailClass [查询子地区]
     * @return [type] $regionName [地名]
     * @return [type] $nums [景点总数]
     */
    function pushClass(){
        $rid = Input::get('jid');

        $model = new Recursion();

        $pushInClass = $model->regionid($rid);

        $pushSmailClass = $model->pushSmailClass($rid);

        $regionName = $model->regionName($rid);
        $pushDown = $model->pushDown($rid);

        $nums = count($pushInClass);
        //print_r($pushDown);die;
        return view('home.search',[
            'souarr'=>$pushInClass,
            'count'=>$nums,
            'sous'=>$regionName,
            'splic'=>$pushSmailClass,
            'pushDown'=>$pushDown
        ]);
    }

    function contentChange(){
        $content = Input::get();

        $model = new Recursion();

        $change = $model->contentChange($content);

        return $change;
    }
	
}