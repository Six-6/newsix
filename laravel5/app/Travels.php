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
     */
	/*protected $table = 'travels';
	
	protected $primaryKey = 't_id';
	
	public $timestamps = false;
	
	//protected $dateFormat = 'U';
	*/



	public function falset($page)
	{
		$xia=($page-1)*15;					 //??Ò³???Ä¸??Â±ê¿ªÊ¼
		$count = DB::table('travels')->where('t_unwilling',1)->get();
		$num = count($count);
		$mexpage = ceil($num/15);			 //????È¡??
		$num = 15;							 //Ã¿Ò³????
	public function falset($page)
	{
		$xia=($page-1)*15;					 //·ÖÒ³´ÓÄÄ¸öÏÂ±ê¿ªÊ¼
		$count = DB::table('travels')->where('t_unwilling',1)->get();
		$num = count($count);
		$mexpage = ceil($num/15);			 //ÏòÉÏÈ¡Õû
		$num = 15;							 //Ã¿Ò³ÌõÊı
		//Êı¾İ
		$arr['data']=DB::table('travels')
            ->Join('login', 'travels.u_id', '=', 'login.u_id')
            ->Join('order', 'login.u_id', '=', 'order.u_id')
			->where('t_unwilling',1)
			->where('t_state',1)
			->skip($xia)
			->take(15)
			->get();
		
		$arr['page'] = $page;				 //??Ç°Ò³
		$arr['mexpage'] = $mexpage;			 //??Ò²Ò³??
		return	$arr;
	}
	
	


	/*???Ë²?Ñ¯*/

	/*ÉóºË²éÑ¯*/

	public function audits($page)
	{
		$xia=($page-1)*15;					//??Ò³???Ä¸??Â±ê¿ªÊ¼
		$count = DB::table('travels')->where('t_state',0)->get();//??Ñ¯?Ğ¶???????
		$num = count($count);
		$mexpage = ceil($num/15);			//????È¡??
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
	


	/*?????Ø¹Ë²?Ñ¯*/
	public function classic($page)
	{
		$date = date('Y-m-d H:i:s',time());
		$xia=($page-1)*15;					//??Ò³???Ä¸??Â±ê¿ªÊ¼
		$count = DB::table('travels')->where('t_state',1)->get();//??Ñ¯?Ğ¶???????

	/*¾­µä»Ø¹Ë²éÑ¯*/
	public function classic($page)
	{
		$date = date('Y-m-d H:i:s',time());
		$xia=($page-1)*15;					//·ÖÒ³´ÓÄÄ¸öÏÂ±ê¿ªÊ¼
		$count = DB::table('travels')->where('t_state',1)->get();//²éÑ¯ÓĞ¶àÉÙÊı¾İ
		$num = count($count);			
		$mexpage = ceil($num/15);			//????È¡??
		$num = 15;
		$arr['data']=DB::table('travels')
				->join('login', 'travels.u_id', '=', 'login.u_id')
				->Join('login', 'travels.u_id', '=', 'login.u_id')
				->where('t_state',1)
				->where('t_times','<',$date)
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
		//Ö´??É¾??
		return DB::table('travels')->where('t_id',$id)->delete();
	}
	
	public function updata($id)
	{
		//Ö´???Ş¸?
		return DB::table('travels')
            ->where('t_id',$id)
            ->update(['t_state' => 1]);
	}
	
	/**
    *?Î¼? ?Ó¾?
    *ÓÎ¼Ç ¼Ó¾«
    * @return 
    */
	public function essence($id)
	{
		//Ö´???Ş¸?
		//Ö´ĞĞĞŞ¸Ä
		return DB::table('travels')
            ->where('t_id',$id)
            ->update(['t_essence' => 1]);
	}
	
	/**
	*@?????Æ¼?
	*@µ±¼¾ÍÆ¼ö
	*/
	public function season()
	{
		return DB::table('inseason')->get();
	}
}



