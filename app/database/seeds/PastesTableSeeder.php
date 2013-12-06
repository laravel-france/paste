<?php

class PastesTableSeeder extends Seeder {

	public function run()
	{
		$pastes = array(
			array('content' => 'first content', 'created_at' => new DateTime(), 'updated_at' => new DateTime()),
			array('content' => 'second content', 'created_at' => new DateTime(), 'updated_at' => new DateTime()),
		);

		// Uncomment the below to run the seeder
		DB::table('pastes')->insert($pastes);
	}

}
