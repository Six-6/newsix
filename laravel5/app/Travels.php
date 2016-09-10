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
	*/

	/*评论查询*/
	public function falset($page)
	{
		$time = date('Y-m-d H:i:s',time());
		$xia=($page-1)*15;					 //分页从哪个下标开始
		$count = DB::table('travels')
            ->Join('users', 'travels.u_id', '=', 'users.u_id')
            ->Join('order', 'users.u_id', '=', 'order.u_id')
			->where('start_time','>' ,$time);//查询有多少数据
		$num = count($count);				 
		$mexpage = ceil($num/15);			 //向上取整
		$num = 15;							 //每页条数
		//数据
		$arr['data']=DB::table('travels')

            ->Join('login', 'travels.u_id', '=', 'login.u_id')
            ->Join('order', 'login.u_id', '=', 'order.u_id')
			->where('t_unwilling',1)
			->where('t_state',1)

            ->Join('users', 'travels.u_id', '=', 'users.u_id')
            ->Join('order', 'users.u_id', '=', 'order.u_id')
			->where('start_time','>' ,$time)

			->skip($xia)
			->take(15)
			->get();
		
		$arr['page'] = $page;				 //当前页
		$arr['mexpage'] = $mexpage;			 //总也页数
		return	$arr;
	}
	
	

	/*审核查询*/
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
	

	/*经典回顾查询*/
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
	

	
	public function del($id)
	{
		//执行删除
		return DB::table('travels')->where('t_id',$id)->delete();
	}
	
	public function updata($id)
	{
		//执行修改
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



