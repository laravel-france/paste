<?php

class PastesController extends BaseController {

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = new Services\Validators\Paste(Input::json()->get('paste'));

		if($validator->passes())
		{
			$paste = Paste::create(Input::json()->get('paste'));
			return Response::json(array("paste" => $paste->toArray()), '201');
		}
		return Response::json(array("errors" => $validator->getErrors()->toArray()), 422);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		if ($paste = Paste::find($id)) {
			return Response::json(array("paste" => Paste::find($id)->toArray()));
		}
		return Response::json(array("messages" => "paste not found")); 
	}
}