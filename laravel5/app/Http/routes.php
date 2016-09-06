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


/**管理员管理**/
Route::any('admin/userAdd',"admin\AdminController@add");/**管理员添加**/
Route::get('admin/userInfo',"admin\AdminController@info");/**管理员信息完善查看**/
Route::post('admin/infoAdd',"admin\AdminController@perfect");/**管理员信息完善**/
Route::get('admin/userShow',"admin\AdminController@show");/**管理员查看**/
Route::post('admin/checkUser',"admin\AdminController@check");/**管理员验证**/
Route::get('admin/userDel',"admin\AdminController@del");/**管理员删除**/
/**兑换管理**/
Route::any('admin/exchangeAdd',"admin\ExchangeController@add");/**兑换添加**/
Route::post('admin/checkName',"admin\ExchangeController@check");/**兑换验证**/
Route::get('admin/exchangeShow',"admin\ExchangeController@show");/**兑换展示**/

/**前台用户管理**/
Route::get('home/personAdd',"home\UserController@add");//个人信息展示
Route::post('home/personUpd',"home\UserController@upd");//个人信息修改
Route::post('home/personVer',"home\UserController@ver");//个人信息验证
Route::any('home/imageAdd',"home\UserController@image");//头像上传
Route::get('home/pswAdd',"home\UserController@psw");//密码查看
Route::post('home/pswUpd',"home\UserController@ate");//密码修改
Route::post('home/checkPwd',"home\UserController@pwd");//密码验证
Route::get('home/orderAdd',"home\OrderController@add");/**订单列表**/
Route::get('home/viewAdd',"home\ViewController@add");/**评论管理**/

/**积分管理**/
Route::get('home/integralAdd',"home\IntegralController@add");//页面显示
Route::get('home/exchangeAdd',"home\IntegralController@exchange");//积分详情页
Route::get('home/detailsAdd',"home\IntegralController@details");//积分兑换页
Route::get('home/detailsButton',"home\IntegralController@button");//积分兑换


















































































































Route::get('admin/lo', 'admin\loginController@index');//后台登录
Route::post('admin/loin', 'admin\loginController@l');//后台登录
Route::get('admin/unsession', 'admin\IndexController@unsession');//退出                                                                                                               


Route::group(['middleware' => ['common']], function () {
	Route::get('admin/in', 'admin\IndexController@index');//后台主页
	Route::get('admin/userShow', 'admin\IndexController@i');//后台管理员列表
	
});










