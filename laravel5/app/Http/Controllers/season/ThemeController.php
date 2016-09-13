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
	
	public function themes()
	{
		//页数
		$page=Request::get('page');
		
		$data = Theme::seldata($page);				//调用查询方法
		//print_r($data);die;
		return view('home.theme',['data' => $data]);
	}
	
	public function freshs()
	{		
		//页数
		$page=Request::get('page');
		
		$data = Theme::frsh($page);				//调用查询方法
		print_r($data);die;
		//return view('home.theme',['data' => $data]);		
	}
}