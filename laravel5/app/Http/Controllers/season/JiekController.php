<?php 
namespace App\Http\Controllers\season;
use Illuminate\Pagination\LengthAwarePaginator;
use DB,Input,Session;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Pagination\Paginator;
use App\Note;

header("content-type:text/html;charset=utf-8");
class JiekController extends Controller {

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
	public function index(Request $request)
	{
		$data = $request->input(); 
		print_r($data);
	}
	

}