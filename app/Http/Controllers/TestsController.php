<?php

namespace App\Http\Controllers;

use App\Question;
use App\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestsController extends Controller
{
    public function getTests(string $slug = null){
        if($slug){
            return response()->json([
                'status' => 'success',
                'test' => Test::with(['questions', 'user'])->where('slug', $slug)->first(),
            ]);
        }else{
            return response()->json([
                'status' => 'success',
                'tests' => Test::with(['questions', 'user'])->orderBy('id', 'desc')->take(6)->get(),
            ]);
        }
    }

    public function save(Request $request){

        // Validate request
        $validatedData = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'questions' => 'required',
            'expected' => 'required',
            'passedMessage' => 'required',
            'failedMessage' => 'required'
        ]);

        // If request passes validation
        if (!$validatedData->fails()) {

            // Save test
            $test = Test::firstOrCreate([
                'user_id' => \Auth::user()->id,
                'slug' => strtolower( str_slug($request->get('title')) ),
                'title' => $request->get('title'),
                'description' => $request->get('description'),
                'expected' => $request->get('expected'),
                'passedMessage' => $request->get('passedMessage'),
                'failedMessage' => $request->get('failedMessage')
            ]);

            // Save questions
            $questions = $request->get('questions');
            foreach ($questions as $question){
                Question::firstOrCreate([
                    'test_id' => $test->id,
                    'description' => $question['description']
                ]);
            }

            return response()->json([
                'status' => 'success',
            ]);
        }

        return response()->json([
            'status' => 'error',
        ]);

    }
}
