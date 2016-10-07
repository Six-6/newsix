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
    public function index()
    {
        return view('home/login/login');
    }

    public function bloin(Request $request)
    {
        $Token = $request->input("_token");
        $u_name = $request->input("name");
        $u_pwd = $request->input("pwd");

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
                $url = Session::get('url');
                Session::put('u_id', $res->u_id);
                Session::put('name', $name);
                if (!empty($url)) {
                    return Redirect::to($url);
                } else {
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
     * 注册页面2
     */
    public function registers()
    {
        return view("home/login/register2");
    }

    /**
     * 用户名验证唯一性
     */
    public function checkName(Request $request)
    {
        //echo "23454";die;
        $name = $request->input("name");
        $token = $request->input("_token");
        $res = Login::names($name);
        if ($res) {
            return 0;
        }
    }

    /**
     * 手机号验证唯一
     */
    public function checkPhone(Request $request)
    {
        //echo "23454";die;
        $phone = $request->input("phone");
        $token = $request->input("_token");
        $res = Login::checkPhone($phone);
        if ($res) {
            return 0;
        }
    }
    /**
     * 接收注册手机号
     */
    public function phone(Request $request){
        $phone=$request->input("phone");
        $url="<div class='login-box' id='_j_login_box'>
                <div class='inner'>
                    <form action='indexShow' method='post' id='_j_login_form'>
                        <div class='form-field'>
                            <input name='passport' placeholder='您的邮箱/手机号' type='text'>

                            <div class='err-tip'></div>
                        </div>
                        <div class='form-field'>
                            <input name='password' placeholder='您的密码' type='password'>

                            <div class='err-tip'></div>


                        </div>
                        <div class='form-field hide'>
                            <div class='clearfix'>
                                <a href='#' class='vcode-send verify-code-send'><img src='./home/login/verifyCode.jpg'></a>
                                <input name='code' placeholder='验证码' type='text'>
                            </div>
                            <div class='err-tip clearfix'></div>
                        </div>
                        <div class='form-link'><a href='https://passport.mafengwo.cn/forget'>忘记密码</a></div>
                        <div class='submit-btn'>
                            <button>登 录</button>
                        </div>
                    </form>
                    <div class='connect'>
                        <p class='hd'>用合作网站账户直接登录</p>

                        <div class='bd'>
                            <a href='https://passport.mafengwo.cn/weibo' class='weibo'><i></i>新浪微博</a>
                            <a href='https://passport.mafengwo.cn/qq' class='qq'><i></i>QQ</a>
                            <a href='https://passport.mafengwo.cn/wechat' class='weixin'><i></i>微信</a>
                            <a href='https://passport.mafengwo.cn/renren' class='renren'><i></i>人人网</a>

                            <div class='clear'></div>
                        </div>
                    </div>
                </div>
                <div class='bottom-link'>
                    还没有帐号?<a href='#'>马上注册</a>
                </div>
            </div>";
        echo json_encode($url);
    }
}

	