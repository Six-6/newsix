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































































































































Route::get('admin/lo', 'admin\loginController@index');//后台登录
Route::post('admin/loin', 'admin\loginController@l');//后台登录
Route::get('admin/unsession', 'admin\IndexController@unsession');//退出                                                                                                               


Route::group(['middleware' => ['common']], function () {
	Route::get('admin/in', 'admin\IndexController@index');//后台主页
	Route::get('admin/userShow', 'admin\IndexController@i');//后台管理员列表
	
});










