<?php
/**
 * @首页二次优化
 * @褚玉密
 */
namespace App\Http\Controllers\home;

use Redirect,Session,DB,Input;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Index;
use Illuminate\Pagination\Paginator;
use App\Recursion;
use App\Recursions;

session_start();

class IndexController extends BaseController
{
    /**首页展示**/
    public function show(){
        $model = new Recursion();//调用model层
        $navigation = $model->navigation();//调用地区
        $gittable = $model->gittable();//调用查询方法
        $data = $model->data();//调用某个地区下的景点
        $ast = $this->Cate($gittable, 0, 0);
        //print_r($ast);die;
        return view('home.index.demo', ['arr1' => $ast, 'arr2' => $navigation, 'arr3' => $data]);//展示给用户
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
}