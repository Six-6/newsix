<?php 
namespace App\Http\Controllers;
use DB,Input,Session;

use Illuminate\Http\Request;


class WayController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Welcome Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders the "marketing page" for the application and
	| is configured to only allow guests. Like most of the other sample
	| controllers, you are free to modify or remove it as you desire.
	|
	*/

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('guest');
	}

	public function avatar()
    {

        return view('users.avatar');
    }

  public function avatarUpload()
    {
    //some codes to deal with upload avatar
    }
    public function avatar()
  {
    $this->wrongTokenAjax();
    $file = Input::file('image');
    $input = array('image' => $file);
    $rules = array(
      'image' => 'image'
    );
    $validator = Validator::make($input, $rules);
    if ( $validator->fails() ) {
      return Response::json([
        'success' => false,
        'errors' => $validator->getMessageBag()->toArray()
      ]);
    }
    $destinationPath = 'uploads/';
    $filename = $file->getClientOriginalName();
    $file->move($destinationPath, $filename);
        return Response::json(
          [
            'success' => true,
            'avatar' => asset($destinationPath.$filename),
          ]
        );
      }
  }

  public function wrongTokenAjax()
  {
    if ( Session::token() !== Request::get('_token') ) {
      $response = [
        'status' => false,
        'errors' => 'Wrong Token',
      ];
      return Response::json($response);
    }
  }


}

	