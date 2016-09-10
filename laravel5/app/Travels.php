<?php

namespace App;

use DB;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class Travels extends Model{
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
		$xia=($page-1)*15;					 //分页从哪个下标开始
		$count = DB::table('travels')->where('t_unwilling',1)->get();
		$num = count($count);
		$mexpage = ceil($num/15);			 //向上取整
		$num = 15;							 //每页条数
		//数据
		$arr['data']=DB::table('travels')
            ->Join('login', 'travels.u_id', '=', 'login.u_id')
            ->Join('order', 'login.u_id', '=', 'order.u_id')
			->where('t_unwilling',1)
			->where('t_state',1)
			->skip($xia)
			->take(15)
			->get();
		print_r($arr['data']);die;
		$arr['page'] = $page;				 //当前页
		$arr['mexpage'] = $mexpage;			 //总也页数
		return	$arr;
	}
	
	
	/**
    *待审核游记
    * @return 
    */

	//审核查询
	public function audits($page)
	{
		$xia=($page-1)*15;					//分页从哪个下标开始
		$count = DB::table('travels')->where('t_state',0)->get();//查询有多少数据
		$num = count($count);
		$mexpage = ceil($num/15);			//向上取整
		$num = 15;
		$arr['data']=DB::table('travels')
				->Join('login', 'travels.u_id', '=', 'login.u_id')
				->where('t_state',0)
				->skip($xia)
				->take(15)
				->get();
		$arr['page'] = $page;
		$arr['mexpage'] = $mexpage;
		return	$arr;
	}
	
	/**
    *经典回顾
    * @return 
    */
	public function classic($page)
	{
		$xia=($page-1)*15;					//分页从哪个下标开始
		$count = DB::table('travels')->where('t_state',1)->get();//查询有多少数据
		$num = count($count);			
		$mexpage = ceil($num/15);			//向上取整
		$num = 15;
		$arr['data']=DB::table('travels')
				->Join('login', 'travels.u_id', '=', 'login.u_id')
				->where('t_state',1)
                ->orderBy('t_hot','desc')
				->skip($xia)
				->take(15)
				->get();
		$arr['page'] = $page;
		$arr['mexpage'] = $mexpage;
		return	$arr;
	}
	
	
	/**
    *游记删除
    * @return 
    */
	
	public function del($id)
	{
		//执行删除
		return DB::table('travels')->where('t_id',$id)->delete();
	}
	
	/**
    *游记 审核
    * @return 
    */
	public function updata($id)
	{		
		$auths = DB::table('travels')
            ->where('t_id',$id)
			->get();
		$datas = json_decode(json_encode($auths),true);

		$ubtle = DB::table('travels')->Join('order', 'travels.u_id', '=', 'order.u_id')->where('travels.u_id',$datas[0]['u_id'])->where('start_time','<',$datas[0]['t_times'])->get();
		if(!empty($ubtle))
		{
			DB::table('travels')
            ->where('t_id',$id)
            ->update(['t_unwilling' => 1]);
		}
		
		return DB::table('travels')
            ->where('t_id',$id)
            ->update(['t_state' => 1]);
		
	}
	
	/**
    *游记 加精
    * @return 
    */
	public function essence($id)
	{
		//执行修改
		return DB::table('travels')
            ->where('t_id',$id)
            ->update(['t_essence' => 1]);
	}
}



