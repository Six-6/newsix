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

























/************************* 后台 游记管理 ******************************/
//Route::get('admin/in', 'admin\IndexController@index');//后台主页

Route::get('admins', 'admin\TravelnotesController@indexs');//游记管理
Route::get('admin/travelnotes', 'admin\TravelnotesController@index');//游记管理
Route::get('admin/travelsupdata', 'admin\TravelnotesController@updata');//审核
Route::get('admin/classics', 'admin\TravelnotesController@classics');//经典回顾
Route::get('admin/travelsdelete', 'admin\TravelnotesController@deletes');//游记删除
Route::get('admin/travelsdelet', 'admin\TravelnotesController@delet');//游记删除
Route::get('admin/audit', 'admin\TravelnotesController@audit');//展示待审核





























































































































































































/*****************************风 向 标*********************************/
Route::any('home/siterecommend', 'HomeController@siterecommend');//风向标页面
