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
	*@�Ƽ��μ�
	*/
	public function index()
	{	
		//ҳ��
		$page=Request::get('page');

		$model = new Note();					//����model��		
		$data = $model->falset($page);				//���ò�ѯ����
		//print_r($data);die;
		return view('home.note',['data'=>$data]);
	}
	
	/**
	*@���·���
	*/
	public function lnews()
	{
		//ҳ��
		$page=Request::get('page');

		$model = new Note();					//����model��		
		$data = $model->lnews($page);				//���ò�ѯ����
		//print_r($data);die;
		return view('home.note',['data'=>$data]);
	}
	
	/**
	*@�μ�����
	*/
	public function search()
	{
		echo 1;
	}
}