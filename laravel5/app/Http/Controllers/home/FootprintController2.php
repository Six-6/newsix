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
use App\Footprint2;
use Session,DB,Input,Redirect;


session_start();
class FootprintController2 extends BaseController{
    /**
     * @用户中心
     * @return [type] [description]
     */
    public function uhome()
	{        
        $uid = Session::get('u_id');
        if ( $uid ) {
            $model = new Footprint2();//调用model层        
            $userhome = $model->userhome();//调用查询方法
            //print_r($userhome);die;
            return view('home.user.userHome',['userhome'=>$userhome]);//展示给用户
        }else{
            echo "<script>alert('请先登录！');location.href='blo'</script>";
        }
    }

    /**
     * 用户简介
     * @return [type] [description]
     */
    public function userContent()
    {
        $uController = Input::get('userContent');
        $model = new Footprint2();
        $uController = $model->userContent($uController);
        print_r($uController);die;
    }

    /**
     * 用户头像
     * @return   [description]
     */ 
    public function userHeadPortrait()
    {
        return view('home.user.userHeadPortrait');
    }

    /**
     * 用户信息
     * @return   [description]
     */ 
    public function userInformation()
    {
        $model = new Footprint2();
        $userInformation = $model->userInformation();
        return view('home.user.userInformation',['userInformation'=>$userInformation]);
    }

    /**
     * 用户信息修改
     * @return   [description]
     */ 
    public function userInformationUpdate(Request $request)
    {
        $data = $request->input();
        $model = new Footprint2();
        $userInformation = $model->userInformationUpdates($data);
        return view('home.user.userInformation',['userInformation'=>$userInformation]);
    }

    /**
     * 用户点评 展示  一
     * @return   [description]
     */ 
    public function userComment()
    {
        $model = new Footprint2();
        $userComment = $model->userComment();
        $shang = $userComment['0'];
        $xia = $userComment['1'];
        //print_r($userComment);die;
        $num = count($xia);
        return view('home.user.userComment',['shang' => $shang, "xia" => $xia, 'nums' => $num]);
    }
    public function userCommentAll()
    {
        $model = new Footprint2();
        $userCommentAll = $model->userCommentAll();
        print_r($userCommentAll);die;
        return $userCommentAll;
    }

    /**
     * 用户选择点评   二
     * @return [type] [description]
     */
    public function userChoice()
    {
        $model = new Footprint2();
        $data = $model->userChoice();
        return view('home.user.userChoice',['arrChoice' => $data]);
    }

    /**
     * 用户点评详情   三
     * @return [type] [description]
     */
    public function userDetails(Request $request)
    {
        $sid = $request->input('sid');
        $model = new Footprint2();
        $data = $model->userDetails($sid);
        //print_r($data);die;
        return view('home.user.userDetails',['userDetails' => $data]);
    }

    /**
     * 用户收藏
     * @return [type] [description]
     */
    public function userCollection()
    {
    	$Model = new Footprint2();
    	$userCollection = $Model->userCollection();
        return view('home.user.userCollection',['userCollection' => $userCollection]);
    }

    /**
     * 用户收藏的详情
     * @return [type] [description]
     */
    public function userCollectionDetails(Request $request)
    {
    	$sname = $request->input('sname');
    	$Model = new Footprint2();
    	$userCollectionDetails = $Model->userCollectionDetails($sname);
    	$userCollectionDetails = json_decode(json_encode($userCollectionDetails),true);
//print_r($userCollectionDetails);die;
    	$userCollectionDetails1 = $userCollectionDetails[0];
    	$userCollectionDetails2 = $userCollectionDetails[1];
    	//
        return view('home.user.userCollectionDetails',['details1' => $userCollectionDetails1, 'details2' => $userCollectionDetails2, 'sname' => $sname]);
    }

    /**
     * 用户收藏删除
     * @return [type] [description]
     */
    public function userCollectionDetailsDelete(Request $request)
    {
    	$sname = $request->input('sname');
    	$model = new Footprint2();
    	$userCollectionDetailsDelete = $model->userCollectionDetailsDelete($sname);
        if ($userCollectionDetailsDelete) {
            $userCollection = $model->userCollection();
            return view('home.user.userCollection',['userCollection' => $userCollection]);
        }
    }

    /**
     * 用户订单详情
     * @return [type] [description]
     */
    public function userOrderDetails()
    {

        $model = new Footprint2();
        $userOrderDetails = $model->userOrderDetails();
        //print_r($userOrderDetails);die;
        return view('home.user.userOrderDetails',['userOrderDetails' => $userOrderDetails]);
    }

    /**
     * 用户订单详情删除
     * @return [type] [description]
     */
    public function userOrderDetailsDelete()
    {
        $did = Input::get('did');
        $model = new Footprint2();
        $userOrderDetailsDelete = $model->userOrderDetailsDelete($did);
        if ($userOrderDetailsDelete) {
            return 1;
        }else{
            return 0;
        }
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
		//print_r($integralDetails);die;
        return view('home.content.reads',['recorddata' => $integralDetails]);
    }

    /**
     * 详情页收藏景点
     * @return [type] $exits [返回1/0]
     */
    function exits(){
        $sid = Input::get('sid');
        $model = new Footprint();
        $exits = $model->exits($sid);
        return $exits;
    }

}