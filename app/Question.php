<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['test_id', 'description'];

    public function test(){
        return $this->belongsTo('App\Test');
    }
}
