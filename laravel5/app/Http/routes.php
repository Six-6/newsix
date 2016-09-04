<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', 'WelcomeController@index');

Route::any('/', 'HomeController@login');//网站首页

Route::any('abroad', 'AbroadController@index');//出境

Route::any('users', 'UserController@index');//会员中心

Route::any('domestic', 'DomesticController@index');//国内


Route::any('admin/lo', 'admin/loginController@index');//后台登录


/**管理员添加**/
Route::any('admin/userAdd',"admin\AdminController@add");
/**管理员信息完善查看**/
Route::get('admin/userInfo',"admin\AdminController@info");
/**管理员信息完善**/
Route::post('admin/infoAdd',"admin\AdminController@perfect");
/**管理员查看**/
Route::get('admin/userShow',"admin\AdminController@show");
/**管理员验证**/
Route::post('admin/checkUser',"admin\AdminController@check");
/**管理员删除**/
Route::get('admin/userDel',"admin\AdminController@del");

/**订单列表**/
Route::get('home/orderAdd',"home\OrderController@add");
/**前台用户管理**/
Route::get('home/personAdd',"home\UserController@add");//个人信息展示
Route::get('home/personUpd',"home\UserController@upd");//个人信息修改
Route::get('home/personVer',"home\UserController@ver");//个人信息验证
Route::any('home/imageAdd',"home\UserController@image");//头像上传
Route::get('home/pswAdd',"home\UserController@psw");//密码改动






















/************************* 后台 游记管理 ******************************/
//Route::get('admin/in', 'admin\IndexController@index');//后台主页

Route::get('admins', 'admin\TravelnotesController@indexs');//游记管理
Route::get('admin/travelnotes', 'admin\TravelnotesController@index');//游记管理
Route::get('admin/travelsupdata', 'admin\TravelnotesController@updata');//审核
Route::get('admin/classics', 'admin\TravelnotesController@classics');//经典回顾
Route::get('admin/travelsdelete', 'admin\TravelnotesController@deletes');//游记删除
Route::get('admin/travelsdelet', 'admin\TravelnotesController@delet');//游记删除
Route::get('admin/audit', 'admin\TravelnotesController@audit');//展示待审核




















































//后台主页
Route::any('admins', 'AdminsController@index');
Route::get('admin/way', 'WayController@index');//旅游方式
Route::get('admin/wayadd', 'WayController@wayadd');
Route::get('admin/addway', 'WayController@addway');//旅游方式添加
Route::get('admin/waysel', 'WayController@waysel');//旅游景点
Route::get('admin/jgaiWay', 'WayController@jgaiWay');//旅游方式即点即改
Route::get('admin/jgaitypes', 'WayController@jgaitypes');//旅游类型即时修改
Route::get('admin/types','WayController@types');
Route::get('admin/typedel','WayController@typedel');//删除大分类
//Route::get('admin/waySel','WayController@waySel');
Route::get('admin/delsmall','WayController@delsmall');//删除小分类
Route::get('admin/delway','WayController@delway');//删除景点
Route::get('admin/waydetail','WayController@waydetail');//景点详情
//图片上传
Route::post('admin/uploas', 'WayController@uploas');//旅游景点添加





















































Route::get('admin/lo', 'admin\loginController@index');//后台登录
Route::post('admin/loin', 'admin\loginController@l');//后台登录
Route::get('admin/unsession', 'admin\IndexController@unsession');//退出                                                                                                               


Route::group(['middleware' => ['common']], function () {
	Route::get('admin/in', 'admin\IndexController@index');//后台主页
	Route::get('admin/userShow', 'admin\IndexController@i');//后台管理员列表
	
});

























































































/*****************************风 向 标*********************************/
Route::any('home/siterecommend', 'HomeController@siterecommend');//风向标页面

