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
