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

/**
 * 后台用户管理
 */

//Route::get('/', 'WelcomeController@index');
Route::any('/', 'HomeController@login');//网站首页
Route::any('abroad', 'AbroadController@index');//出境
Route::any('users', 'UserController@index');//会员中心
Route::any('domestic', 'DomesticController@index');//国内



/**管理员管理**/

Route::any('admin/userAdd',"admin\AdminController@add");/**管理员添加**/
Route::get('admin/userInfo',"admin\AdminController@info");/**管理员信息完善查看**/
Route::post('admin/infoAdd',"admin\AdminController@perfect");/**管理员信息完善**/
Route::get('admin/userShow',"admin\AdminController@show");/**管理员查看**/
Route::post('admin/checkUser',"admin\AdminController@check");/**管理员验证**/
Route::get('admin/userDel',"admin\AdminController@del");/**管理员删除**/

/**订单管理**/
Route::get('home/orderAdd',"home\OrderController@line");
/**前台用户管理**/
Route::get('home/personAdd',"home\UserController@add");//个人信息展示
Route::post('home/personUpd',"home\UserController@upd");//个人信息修改
Route::post('home/personVer',"home\UserController@ver");//个人信息验证
Route::any('home/imageAdd',"home\UserController@image");//头像上传
Route::get('home/pswAdd',"home\UserController@psw");//密码改动
Route::post('home/pswUpd',"home\UserController@ate");//密码修改
Route::post('home/checkPwd',"home\UserController@pwd");//密码验证
Route::get('home/hotelAdd',"home\OrderController@hotel");//酒店订单显示
Route::get('home/integralAdd',"home\OrderController@integral");//积分显示
Route::get('home/viewAdd',"home\OrderController@view");//我的评论
Route::get('home/orderAdd',"home\OrderController@line");/**订单列表**/
Route::get('home/viewAdd',"home\OrderController@view");/**评论管理**/

/**兑换管理**/





















/************************* 后台 游记管理 ******************************/
//Route::get('admin/in', 'admin\IndexController@index');//后台主页

Route::get('admins', 'admin\TravelnotesController@indexs');//游记管理
Route::get('admin/travelnotes', 'admin\TravelnotesController@index');//游记管理
Route::get('admin/travelsupdata', 'admin\TravelnotesController@updata');//审核
Route::get('admin/classics', 'admin\TravelnotesController@classics');//经典回顾
Route::get('admin/travelsdelete', 'admin\TravelnotesController@deletes');//游记删除
Route::get('admin/travelsdelet', 'admin\TravelnotesController@delet');//游记删除
Route::get('admin/audit', 'admin\TravelnotesController@audit');//展示待审核

/*****************************当季 推荐*********************************/
Route::get('admin/inseason', 'admin\InseasonController@index');//游记管理
Route::post('admin/seaadd', 'admin\InseasonController@seaadd');//游记管理



























Route::any('admin/lo', 'admin/loginController@index');//后台登录



















































































































Route::get('admin/lo', 'admin\loginController@index');//后台登录
Route::post('admin/loin', 'admin\loginController@l');//后台登录
Route::get('admin/unsession', 'admin\IndexController@unsession');//退出                                                                                                               


Route::group(['middleware' => ['common']], function () {
	Route::get('admin/in', 'admin\IndexController@index');//后台主页
	Route::get('admin/userShow', 'admin\IndexController@i');//后台管理员列表
	
});









/*****************************风 向 标*********************************/
Route::get('home/siterecommend', 'season\IndicatorController@siterecommend');//风向标首页
Route::get('home/month', 'season\IndicatorController@month');//季节推荐
Route::get('home/ranking', 'season\RankingController@index');//排行榜


