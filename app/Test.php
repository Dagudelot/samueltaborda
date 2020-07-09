<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $fillable = ['user_id', 'slug', 'title', 'description', 'expected', 'passedMessage', 'failedMessage'];

    public function questions(){
        return $this->hasMany('App\Question');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
