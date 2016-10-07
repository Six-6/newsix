<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Request,DB,Input,Session;
header('content-type:text/html;charset=utf-8');
class Recursions extends Model{
	/**
	 *
     * 多 项 条 件 搜 索
	 *
     * @param  [type] $data [搜索的条件]
	 *
     * @return [type] 返回搜索的数据
     */
	 function numberDay($data)
	 {
		$dayid = $data['dayid'];
		$capital = $data['capital'];
		$destination = $data['destination'];
		$start = $data['start'];
		/*旅游天数*/
		if($dayid){
			 $days = "s_day = '$dayid'";
		 }else{
			 $days = "1 = 1";
		 }
		 /*旅游资金*/
		 if($capital){
			 $moneys1 = explode(3,$capital);
             $moneySmail1 = $moneys1[0];
             $moneyLarge1 = $moneys1[1];
			 $moneys = "s_sprice between $moneySmail1 AND $moneyLarge1";
		 }else{
			 $moneys = "1 = 1";
		 }
		 /*旅游目的地*/
		 if($destination){
			 $destination2 = "destination_id = '$destination'";
		 }else{
			 $destination2 = "1 = 1";
		 }
		 /*旅游出发地*/
		 if($start){
			 $start2 = "r_id = '$start'";
		 }else{
			 $start2 = "1 = 1";
		 }
		$data = DB::select("select * from scenic_spot where $days and $destination2 and $start2 and $moneys");
		$data = json_decode(json_encode($data),true);
		//$ccc = "select * from scenic_spot where $days and $destination2 and $start2 and $moneys";
		return $data; 
	 }
	 
    /* function numberDay2($data){
        if (($data['dayid'] != 0) or ($data['capital'] != 0) or ($data['destination'] != 0) or ($data['start'] != 0)) {
            $moneys1 = $data['capital'];
            $moneys1 = explode(3,$moneys1);
            $moneySmail1 = $moneys1[0];
            $moneyLarge1 = $moneys1[1];

            $dayid = $data['dayid'];
            $destination = $data['destination'];
            $start = $data['start'];
            $dataArray = DB::table('scenic_spot')
                ->where(['s_day'=>$dayid,'destination_id'=>$destination,'r_id'=>$start])
                ->whereBetween('s_sprice', [$moneySmail1,$moneyLarge1])
                ->get();
            return $dataArray;
        }else
        if(($data['dayid'] == 0) or ($data['capital'] != 0) or ($data['destination'] != 0) or ($data['start'] != 0)){
            $moneys2 = $data['capital'];
            $moneys2 = explode(3,$moneys2);
            unset($data['dayid']);

            $moneySmail2 = $moneys2[0];
            $moneyLarge2 = $moneys2[1];
            $destination = $data['destination'];
            $start = $data['start'];
            $dataArray = DB::table('scenic_spot')
                ->where(['destination_id'=>$destination,'r_id'=>$start])
                ->whereBetween('s_sprice', [$moneySmail2,$moneyLarge2])
                ->get();
            return $dataArray;
        }else
        if(($data['dayid'] != 0) or ($data['capital'] == 0) or ($data['destination'] != 0) or ($data['start'] != 0)){
            unset($data['capital']);
            $dayid = $data['dayid'];
            $destination = $data['destination'];
            $start = $data['start'];

            $dataArray = DB::table('scenic_spot')
                ->where(['s_day'=>$dayid,'destination_id'=>$destination,'r_id'=>$start])
                ->get();
            return $dataArray;
        }else
        if(($data['dayid'] != 0) or ($data['capital'] != 0) or ($data['destination'] == 0) or ($data['start'] != 0)){
            $moneys4 = $data['capital'];
            $moneys4 = explode(3,$moneys4);

            unset($data['destination']);
            $dayid = $data['dayid'];
            $start = $data['start'];
            $moneySmail4 = $moneys4[0];
            $moneyLarge4 = $moneys4[1];
            $dataArray = DB::table('scenic_spot')
                ->where(['s_day'=>$dayid,'r_id'=>$start])
                ->whereBetween('s_sprice', [$moneySmail1,$moneyLarge1])
                ->get();
            return $dataArray;
        }else
        if(($data['dayid'] != 0) or ($data['capital'] != 0) or ($data['destination'] != 0) or ($data['start'] == 0)){
            $moneys5 = $data['capital'];
            $moneys5 = explode(3,$moneys5);
            unset($data['start']);
            $dayid = $data['dayid'];
            $destination = $data['destination'];
            $moneySmail5 = $moneys5[0];
            $moneyLarge5 = $moneys5[1];
            $dataArray = DB::table('scenic_spot')
                ->where(['s_day'=>$dayid,'destination_id'=>$destination])
                ->whereBetween('s_sprice', [$moneySmail1,$moneyLarge1])
                ->get();
            return $dataArray;
        }
    } */

}



