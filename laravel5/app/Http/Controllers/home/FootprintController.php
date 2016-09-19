<?php
/**
 * @前台用户管理
 * 
 * @韦森编写
 **/
namespace App\Http\Controllers\home;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

use App\Footprint;
use Session,DB,Input,Redirect;


session_start();
class FootprintController extends BaseController{
    /**
     * @用户中心
     * @return [type] [description]
     */
    public function userhome(){
        
        $model = new Footprint();//调用model层
        
        $userhome = $model->userhome();//调用查询方法
        
        return view('home.content.userhome',['userhome'=>$userhome]);//展示给用户
    }

    /**
     * 我的足迹*
     * @return [type] [description]
     */
    public function footprint(){
        
        $model = new Footprint();//调用model层
        
        $flights = $model->getViewHistory();//调用查询方法
        
        return view('home.content.footprint',['flights'=>$flights]);//展示给用户
    }
    /**
     * 用户退出*
     * @return [type] [description]
     */
    public function personDel(Request $request){

        $flush = $request->session()->flush();

        if ($flush) {

            echo "<script>alert('退出失败');location.href='personAdd'</script>";

        }else{

            return redirect('blo');

        }
    }

    /**
     * @用户收藏
     *
     * @return   [description]
     */
    public function yhCollect(){
        $model = new Footprint();//调用model

        $collectSql = $model->userCollect();//调用查询方法

        $num = ceil(count($collectSql)/5);//页数

        $p = Input::get('p');//页码
        if (empty($p)) {
            $p=1;
            //调用查询方法
        }

        $datapage = $model->pages($p);

        return view('home.content.collect',['collect' => $datapage,'nums'=>$num,'p'=>$p]);
    }

    /**
     * @用户取消收藏
     *
     * @return   [description]
     */
    public function cancel(){
        $sid = Input::get('xid');
        //调用model
        $model = new Footprint();
        //调用查询方法
        $cancel = $model->cancel($sid);

        return $cancel;
    }


    /**
     * @用户评价
     *
     * @return  [description]
     */
    public function evaluate(){
        $data = Input::get('evaluatename');
        $sid = Input::get('sid');
        $model = new Footprint();//调用model
        $assess = $model->assess($data);//调用查询方法
        $datas = json_decode(json_encode($assess),true);//转换为数组
        $uid = Session::get('u_id'); //当前登录用户id
        $times = date('y-m-d H:i:s',time());
        if (empty($datas['status'])) {
            echo -1; //请求服务器失败
        }else{
            if ($datas['status']=='OK') {
                //评价成功
                if ($datas['is_ad']==1) {
                    return -2; //有广告
                }else{
                    //没有广告
                    if ($datas['is_nonsense']==0) {
                        $dataOk = DB::table('travel_reviews')->insert([
                            'u_id' => $uid,
                            'comment_name' => $data,
                            'comment_time' => $times,
                            's_id' => $sid
                        ]);
                        //正常文本
                        if ($dataOk) {
                            return 4; //评论OK
                        }else{
                            return -4; //评论NO
                        }
                    }else{
                        return -3; //无意义文本
                    }
                }
            }else{
                return 0; //评价失败
            }
        }
    }

    /**
     *  @我的点评
     *
     *  @return  [description]
     */
    public function record(){
        //调用model
        $model = new Footprint();
        //调用查询方法
        $record = $model->record();

        return view('home.content.record',['recorddata' => $record]);
    }

    /**
     *  @用户积分明细
     *
     *  @return  [description]
     */
    public function integralDetails(){
        //调用model
        $model = new Footprint();
        //调用查询方法
        $integralDetails = $model->integralDetails();
        $num ='';
        $ok ='';
        for ($i=0; $i < count($integralDetails) ; $i++) { 
            $num = $num.$integralDetails[$i]['lo_integral'];
            //echo "\$num=''".$integralDetails[$i]['lo_integral'];
        }

        $num = substr($num, 1);

        print_r($num);die;

        //return view('home.content.record',['recorddata' => $record]);
    }

}