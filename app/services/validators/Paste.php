<?php

namespace Services\Validators;

class Paste extends Base {
	static $rules = array(
		'content' => 'required'
	);

	static $messages = array(
		'content.required' => 'Le contenu est requis'
	);
}