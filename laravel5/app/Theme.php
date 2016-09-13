<?php

namespace App;

use DB;

use Illuminate\Database\Eloquent\Model;


class Theme extends Model
{

	/**
	*@主题推荐
	*/
	public static function seldata($page)
	{
		//权威控
		$user = DB::table('login')->get();
		
		//转化数组
		$datas = json_decode(json_encode($user),true);
		
		//取出用户id
		foreach($datas as $key => $value)
		{
			$u_id[]=$datas[$key]['u_id'];
		}
		
		//查询出用户下过的订单个数
		foreach($u_id as $key =>$value)
		{
			$delsr = DB::table('order')->where('u_id',$value)->get();
			$num[$value] = count($delsr);
		}
		
		//查询下单数超过五个的用户
		foreach($num as $key => $value)
		{
			if($value > 5)
			{
				$new_id[]=$key;
			}
		}
		
		//查询对应的id 发表的评论
		$data= DB::table('travels')->whereIn('u_id',$new_id)->where('t_unwilling',1)->orderBy('t_times','desc')->get();
		$num = 10;							 //分页从哪个下标开始
		$count = count($data);
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

		$transmit['data']= DB::table('travels')->whereIn('u_id',$new_id)->where('t_unwilling',1)->skip($xia)
			->take(12)->orderBy('t_times','desc')->get();
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;

		return $transmit;
	}
	
	public static function frsh()
	{
		$data['fresh'] = DB::table('login')->join('travels', 'login.u_id', '=', 'travels.u_id')->where('rank','>',5)->where('t_unwilling',1)->get();
	}
}



