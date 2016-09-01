<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTravelsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('travels', function(Blueprint $table)
		{
		$table->increments('t_id');
		$table->integer('u_id');
		$table->text('s_desc');
		$table->string('t_img');
		$table->integer('t_hot');
		$table->date('t_times');
		$table->integer('t_zambia');
		$table->integer('t_commentint');
		$table->string('t_title',30);
		$table->tinyInteger('t_state');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}
