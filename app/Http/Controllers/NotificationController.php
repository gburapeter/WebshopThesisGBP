<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;

class NotificationController extends Controller
{
    public function delete($id)
    {
        DatabaseNotification::find($id)->delete();
        // $notification->delete();
    }
}
