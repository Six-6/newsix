<?php namespace App;

use Illuminate\Database\Eloquent\Model;
header('content-type:text/html;charset=utf-8');
use DB;
class Evaluate extends Model
{
	public static function evalSelect()
	{
		$fraction=DB::table('evaluate')->lists('fraction');
		$count=count($fraction);
		$total=$count*3;
		$num=0;
		foreach($fraction as $key=>$val){
			$num=$val+$num;
		}
		$number=substr($num/$total*100,0,2).'%';
		$evalArr=[0=>$count,1=>$number];
		return $evalArr;
	}
}