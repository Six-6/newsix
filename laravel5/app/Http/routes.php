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

