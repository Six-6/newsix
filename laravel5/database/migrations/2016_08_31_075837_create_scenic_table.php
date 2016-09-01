<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScenicTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('scenic', function(Blueprint $table)
		{
			$table->increments('s_id');
			$table->string('s_name',60);
			$table->integer('r_id');
			$table->decimal('s_sprice');
			$table->integer('s_number');
			$table->string('s_traffic',10);
			$table->date('s_times');
			$table->integer('s_day');
			$table->integer('s_degree');
			$table->string('s_img');
			$table->integer('s_frequency');
			// $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('scenic');
	}

}
