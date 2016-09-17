<?php 
namespace App\Http\Controllers\season;
use DB,Input,Session;
use Request;
use App\Http\Controllers\Controller;
use App\Theme;
header("content-type:text/html;charset=utf-8");
class ThemeController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Welcome Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders the "marketing page" for the application and
	| is configured to only allow guests. Like most of the other sample
	| controllers, you are free to modify or remove it as you desire.
	|
	*/

	/**
	 * Create a new controller instance.
	 * 
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('guest');
	}
	
	//首页权威
	public function them()
	{
		//页数
		$page=Request::get('page');
		
		$data = Theme::youse($page);				//调用查询方法
		return view('home.theme',['data' => $data]);
	}
	
	//首页权威
	public function themes()
	{
		//页数
		$page=Request::get('page');
		
		$data = Theme::seldata($page);				//调用查询方法
		return view('home.theme',['data' => $data]);
	}
	
	//尝鲜
	public function freshs()
	{		
		//页数
		$page=Request::get('page');
	
		$data = Theme::frsh($page);					//调用查询方法
		return view('home.theme',['data' => $data]);		
	}
	
	//快门
	public function shutter()
	{
		$page=Request::get('page');
		
		$data = Theme::shutter($page);		//调用查询方法
		return view('home.theme',['data' => $data]);
	}
	
	//美食
	public function cate()
	{
		$page=Request::get('page');
		
		$data = Theme::cate($page);		//调用查询方法
		return view('home.theme',['data' => $data]);
	}
	
	//购物
	public function shopping()
	{
		$page=Request::get('page');
		
		$data = Theme::shopping($page);		//调用查询方法
		return view('home.theme',['data' => $data]);
	}
	
	//文艺
	public function literature()
	{
		$page=Request::get('page');
		
		$data = Theme::literature($page);		//调用查询方法
		return view('home.theme',['data' => $data]);
	}
	
	//详情
	public function details()
	{
		$id=Request::get('id');
		
		$data = Theme::details($id);		//调用查询方法
		//print_r($data);die;
		return view('home.details',['data' => $data]);
	}
	
	//详情评论
	public function dcomment()
	{	
		$u_id = Session::get('u_id');
		$data=Request::all();
		if(empty($u_id))
		{
			return redirect('home/bloin');
		
		}
		
		$data = Theme::dsession($u_id);
		
		return redirect('home/details',['id' => $data['idf']]);

		
				
	}
}