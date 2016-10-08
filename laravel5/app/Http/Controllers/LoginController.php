<?php
namespace App\Http\Controllers;

header('content-type:text/html;charset=utf-8');

use App\Login;
use DB, Input, Session;
use Validator;
use Response;
use Illuminate\Http\Request;
use Redirect;

class LoginController extends Controller
{
    //前台登录
    public function index(Request $request)
    {
        $url=$request->url;
        $sid=$request->sid;
        return view('home/login/login',['url'=>$url,'sid'=>$sid]);
    }

    public function bloin(Request $request)
    {
        $Token = $request->input("_token");
        $u_name = $request->input("name");
        $u_pwd = $request->input("pwd");
        $url = $request->url;
        $sid = $request->sid;
        if (isset($u_name) && isset($u_pwd)) {
            $name = trim($u_name);  //姓名清理空格
            $pwd = trim($u_pwd);  //密码清理空格
            $name = strip_tags($name);   //过滤姓名html标签
            $pwd = strip_tags($pwd);   //过滤密码html标签
            $name = htmlspecialchars($name);   //将字符内容转化为html实体
            $pwd = htmlspecialchars($pwd);   //将字符内容转化为html实体
            $name = addslashes($name);
            $pwd = addslashes($pwd);
            $res = DB::table('login')
                ->where('pwd', $pwd)
                ->Where('user', $name)
                ->orWhere('email', $name)
                ->orWhere('phone', $name)
                ->first();
            if ($res) {
                Session::put('u_id', $res->u_id);
                Session::put('name', $name);
                if(!empty($url) && !empty($sid)){
                    return Redirect::to($url.'?sid='.$sid);
                }else if(!empty($url)){
                    return Redirect::to($url);
                }else{
                    return Redirect::to("home/indexShow");
                }
            } else {
                echo "<script>alert('用户名或密码错误,请从新登陆');location.href='blo'</script>";
            }
        }
    }
    /**
     * @return \Illuminate\View\View
     * @褚玉密前台登陆用户名验证
     */
    public function uname(Request $request)
    {
        $u_name = $request->username;
        $re = Login::name($u_name);
        // print_r($re);die;
        if (empty($re)) {
            return 1;
        }
    }
    //注册
    public function register()
    {
        return view('home/login/register');
    }

    public function onregister(Request $request)
    {
        $name = $request->name;
        $pwd = MD5($request->pwd);
        $email = $request->email;
        $phone = $request->phone;
        $user = $request->user;
        $res = DB::table('login')->insertGetId(['name' => $name, 'pwd' => $pwd, 'user' => $user, 'email' => $email, 'phone' => $phone]);
        if ($res) {
            Session::put('id', $res);
            Session::put('name', $name);
            echo "<script>alert('注册成功');location.href='blo'</script>";
        } else {
            echo "失败";
        }
    }
    /**
     * 用户名验证唯一性
     */
    public function checkName(Request $request)
    {
        $re=$request->all();

            unset($re['_token']);
            $res = Login::names($re['name']);
    //        print_r($res);die;
            if (empty($res)) {
                echo 0;
            }else{
                echo 1;
            }
    }

    /**
     * 手机号验证唯一
     */
    public function checkPhone(Request $request)
    {
        $re=$request->all();
        unset($re['_token']);
        $res = Login::checkPhone($re['phone']);
        if (empty($res)) {
            return 0;
        }else{
            return 1;
        }
    }
    /**
     * 获取验证码
     */
    public function number(Request $request){
        $phone=$request->input("phone");
        $code=rand(1000,9999);
        setcookie('code',$code,time()+600);
        $url ='http://api.sms.cn/sms/?ac=send
                &uid=summer0908&pwd=chuyumi211314
                &template=100000&mobile='.$phone.'
                &content={"code":"'.$code.'"}';
        $data=array();
        $method='POST';
        $res=$this->curlPost($url,$data,$method);
        echo $res;
    }
    /**
     * 手机号验证
     */
    /*curlpost传值*/
    public function curlPost($url,$data,$method){
        $ch = curl_init();   //1.初始化
        curl_setopt($ch, CURLOPT_URL, $url); //2.请求地址
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);//3.请求方式
        //4.参数如下
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');//模拟浏览器
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER,array('Accept-Encoding: gzip, deflate'));
        curl_setopt($ch, CURLOPT_ENCODING, 'gzip,deflate');
        if($method=="POST"){//5.post方式的时候添加数据
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $tmpInfo = curl_exec($ch);//6.执行
        if (curl_errno($ch)) {//7.如果出错
            return curl_error($ch);
        }
        curl_close($ch);//8.关闭
        return $tmpInfo;
    }
}

	