<?php 
namespace App\Http\Controllers\season;
use Illuminate\Pagination\LengthAwarePaginator;
use DB,Input,Session;
use Request;
use App\Http\Controllers\Controller;
use Illuminate\Pagination\Paginator;
use App\Note;
header("content-type:text/html;charset=utf-8");
class NoteController extends Controller {

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
	
	/**
	*@推荐游记
	*/
	public function index()
	{	
		//页数
		$page=Request::get('page');

		$model = new Note();					//调用model层		
		$data = $model->falset($page);				//调用查询方法
		//print_r($data);die;
		return view('home.note',['data'=>$data]);
	}
	
	/**
	*@最新发布
	*/
	public function lnews()
	{
		//页数
		$page=Request::get('page');

		$model = new Note();					//调用model层		
		$data = $model->lnews($page);				//调用查询方法
		//print_r($data);die;
		return view('home.note',['data'=>$data]);
	}
	
	/**
	*@游记搜索
	*/
	public function search()
	{
		echo 1;
	}
}