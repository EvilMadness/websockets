@extends('layouts.app')

@section('content')
    <div class="container">
        <chats-component :user="{{auth()->user()}}"></chats-component>
    </div>
@endsection
