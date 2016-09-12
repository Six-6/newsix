<?php

namespace App;

use DB;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class Theme extends Model{
    /**
     * 获取表中所有数据
     */
	/*protected $table = 'travels';
	
	protected $primaryKey = 't_id';
	
	public $timestamps = false;
	
	//protected $dateFormat = 'U';
	*/

	/**
	*@当季玩什么 我玩我风格 月度推荐
	*/
	public function seldata()
	{
		echo 1;
		//return $data;
	}
	
}



