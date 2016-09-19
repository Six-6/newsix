<?php

namespace App;

use DB;

use Illuminate\Database\Eloquent\Model;


class Theme extends Model
{
	public static function youse($page)
	{
		//首页
		$data = DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_state',1)->get();
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

		$transmit['data']= DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)
		->where('t_state',1)->skip($xia)->take(12)->orderBy('t_times','desc')->get();
		
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;
		$transmit['url'] = "freshs";
		
		return $transmit;
	}

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
		$data= DB::table('travels')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->whereIn('u_id',$new_id)->where('t_state',1)->orderBy('t_times','desc')->get();
		
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

		$transmit['data']= DB::table('travels')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->whereIn('u_id',$new_id)->where('t_state',1)->skip($xia)
			->take(12)->orderBy('t_times','desc')->get();
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;
		$transmit['url'] = "themes";

		return $transmit;
	}
	
	
	public static function frsh($page)
	{
		//尝鲜
		$data = DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('rank','>',5)->where('t_state',1)->get();
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

		$transmit['data']= DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('rank','>',5)->where('t_state',1)->skip($xia)->take(12)->orderBy('t_times','desc')->get();
		
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;
		$transmit['url'] = "freshs";
		
		return $transmit;
	}
	
	
	public static function shutter($page)
	{
		//快门
		$data = DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',1)->where('t_state',1)->get();
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

		$transmit['data']= DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',1)->where('t_state',1)->skip($xia)->take(12)->orderBy('t_times','desc')->get();
		
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;
		$transmit['url'] = "shutter";
		
		return $transmit;
	}
	                 
	
	public static function cate($page)
	{
		//美食
		$data = DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',2)->where('t_state',1)->get();
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

		$transmit['data']= DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',2)->where('t_state',1)->skip($xia)->take(12)->orderBy('t_times','desc')->get();
		
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;
		$transmit['url'] = "cate";
		
		return $transmit;
	}
	
	public static function shopping($page)
	{
		//购物
		$data = DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',3)->where('t_state',1)->get();
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

		$transmit['data']= DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',3)->where('t_state',1)->skip($xia)->take(12)->orderBy('t_times','desc')->get();
		
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;
		$transmit['url'] = "shopping";
		
		return $transmit;
	}
	
	public static function literature($page)
	{
		//文艺
		$data = DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',4)->where('t_state',1)->get();
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

		$transmit['data']= DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',0)->where('t_type',4)->where('t_state',1)->skip($xia)->take(12)->orderBy('t_times','desc')->get();
		
		//最大页 当前页 下一页 上一页	
		$transmit['mexpage'] = $mexpage;
		$transmit['page'] = $page;
		$transmit['next'] = $page+1;
		$transmit['last'] = $page-1;
		$transmit['url'] = "literature";
		
		return $transmit;
	}
	
	
	//游记详情
	public static function details($id)
	{
		//当前游记
		$bination['host'] = DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->where('tt_id',$id)->get();
		
		//每天的游记
		$data = DB::table('bination')->where('tt_id',$id)->get();
		$datas = json_decode(json_encode($data),true);
		$bination['form']= DB::table('travels')->join('login', 'travels.u_id', '=', 'login.u_id')->join('bination','travels.tt_id','=','bination.tt_id')->where('f_id',$datas[0]['b_id'])->get();
		
		return $bination;
		
	}
	
	//游记详情评论
	public static function dsession()
	{
		
	}
	
}



