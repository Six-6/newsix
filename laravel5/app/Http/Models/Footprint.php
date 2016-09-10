<?php

namespace App;

use DB;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class Footprint extends Model{
    /** 
     * 通过cookie获取浏览记录中的商品信息 
     */  
    function viewHistory(){ 
        return "footprint";die; 
        $product_info = array();  
        $pids = explode(",",zp_getcookie(VIEW_HISTORY_COOKIE_NAME));  
        return $pids;die;
        /*$pids = array_reverse($pids);  
        if(!empty($pids)){  
            $product_mod = M::load_model('product');  
            foreach($pids as $v){  
                if (intval($v) > 0) {  
                    $product_info[] = $product_mod->get_base_info($v);  
                }  
            }  
        }  
        // 修复，如果不存在该商品信息（下架或被删除）则不显示  
        foreach($product_info as $key=>$val){  
            if(empty($val)) {  
                unset($product_info[$key]);  
            }  
        }  
        //dump($product_info);  
        return $product_info;  */
    }  
}



