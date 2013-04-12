<?php

class PastesControllerTest extends TestCase {
	public function testIndex()
	{
		$response = $this->call('GET', 'pastes');
		$this->assertTrue($response->isOk());
	}

	public function testShow()
	{
		$response = $this->call('GET', 'pastes/1');
		$this->assertTrue($response->isOk());
	}

	public function testCreate()
	{
		$response = $this->call('GET', 'pastes/create');
		$this->assertTrue($response->isOk());
	}

	public function testEdit()
	{
		$response = $this->call('GET', 'pastes/1/edit');
		$this->assertTrue($response->isOk());
	}
}
