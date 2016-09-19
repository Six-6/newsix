<?php

namespace App;

use DB;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Pagination\Paginator;

class Note extends Model{
    /**
     * 获取表中所有数据
     */
	/*protected $table = 'travels';
	
	protected $primaryKey = 't_id';
	
	public $timestamps = false;
	
	//protected $dateFormat = 'U';
	/**
    *人在 旅途
    * @return 
    */
	public function falset($page)
	{
		/**加精的游记**/
		$num = 10;							 //分页从哪个下标开始
		$count = DB::table('travels')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_essence',1)->where('t_state',1)->get();
		$count = count($count);
		$mexpage = ceil($count/$num);		 //向上取整
		if (empty($page))
		{
			$page = 1;
		}
		if ($page<1) 
		{
			$page = 1;
		}
		if ($page>$mexpage) 
		{
			$page = $mexpage;
		}
		$reg="/^\d+$/";
		if (!preg_match($reg,$page)) {
			$page=1;
		}
		$xia=($page-1)*$num;
		//查询
		$data['refined'] = DB::table('travels')
			->join('login', 'login.u_id', '=', 'travels.u_id')
			->join('bination','travels.tt_id','=','bination.tt_id')
			->where('f_id',0)
			->where('t_essence',1)
			->where('t_state',1)
			->orderBy('t_zambia', 'desc')
			->skip($xia)
			->take(10)
			->get();
			
		$data['mexpage'] = $mexpage;
		$data['page'] = $page;
		$data['next'] = $page+1;
		$data['last'] = $page-1;
					
			
		//取前四
		//转化成数组
		$counts = DB::table('travels')->join('login', 'login.u_id', '=', 'travels.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_essence',1)->where('t_state',1)->orderBy('t_zambia', 'desc')->get();
		$datas = json_decode(json_encode($counts),true);
		/**轮播 已经通过审核 加精审核 被赞倒序**/
		foreach($datas as $value)
		{
			for($i=0;$i<4;$i++)
			{
				$data['carousel'][$i] = $datas[$i];
			}
		}

		return $data;
		
	}
	
	
	public function lnews($page)
	{
		/**加精的游记**/
		$num = 10;							 //分页从哪个下标开始
		$q_time = date("Y-m-d",strtotime("-1 week"));
		$count = DB::table('travels')->join('bination','travels.tt_id','=','bination.tt_id')
			->where('f_id',0)->where('t_essence',1)->where('t_state',1)
		->where('t_times','>',$q_time)->get();
		$count = count($count);
		$mexpage = ceil($count/$num);		 //向上取整
		if (empty($page))
		{
			$page = 1;
		}
		if ($page<1) 
		{
			$page = 1;
		}
		if ($page>$mexpage) 
		{
			$page = $mexpage;
		}
		$reg="/^\d+$/";
		if (!preg_match($reg,$page)) {
			$page=1;
		}
		$xia=($page-1)*$num;
		//查询
		$data['refined'] = DB::table('travels')
			->join('login', 'login.u_id', '=', 'travels.u_id')
			->join('bination','travels.tt_id','=','bination.tt_id')
			->where('f_id',0)
			->where('t_essence',1)
			->where('t_state',1)
			->orderBy('t_zambia', 'desc')
			->skip($xia)
			->take(10)
			->get();
			
		$data['mexpage'] = $mexpage;
		$data['page'] = $page;
		$data['next'] = $page+1;
		$data['last'] = $page-1;
		
		//取前四
		//转化成数组
		$counts = DB::table('travels')->join('login', 'login.u_id', '=', 'travels.u_id')->join('bination','travels.tt_id','=','bination.tt_id')
			->where('f_id',0)->where('t_essence',1)->where('t_state',1)->orderBy('t_zambia', 'desc')->get();
		$datas = json_decode(json_encode($counts),true);
		/**轮播 已经通过审核 加精审核 被赞倒序**/
		foreach($datas as $value)
		{
			for($i=0;$i<4;$i++)
			{
				$data['carousel'][$i] = $datas[$i];
			}
		}
		
		return $data;
	}


	public function search()
	{
		echo 1;
	}
}



