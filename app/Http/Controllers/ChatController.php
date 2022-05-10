<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('chats');
    }

    public function test(){
        return view('test');
    }

    public function fetchMessages(){
        $messages = Message::with('user')->get();
        return $messages;
    }

    public function sendMessage(Request $request){
//        dd($request->all());
        $message = auth()->user()->messages()->create([
            'message' => $request->message
        ]);

        broadcast(new MessageSent($message->load('user')))->toOthers();

        return ['status' => 'success'];
    }
}
