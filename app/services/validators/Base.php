<?php

namespace Services\Validators;

abstract class Base {

	protected $input;
	protected $errors;

	public function __construct($input = null)
	{
		if ($input === null)
		{
			$this->input = \Input::all();
		} 
		else
		{
			$this->input = $input;
		}
	}

	public function passes()
	{
		$validation = \Validator::make($this->input, static::$rules, static::$messages);

		if($validation->passes())
		{
			return true;
		}

		$this->errors = $validation->messages();
		return false;
	}

	public function fails()
	{
		return !$this->passes();
	}

	public function getErrors()
	{
		return $this->errors;
	}
}