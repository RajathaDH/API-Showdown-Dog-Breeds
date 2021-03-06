<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Breed;

class BreedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Breed::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'breed_name' => 'required'
        ]);

        return Breed::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Breed::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $breed = Breed::find($id);

        $breed->update($request->all());

        return $breed;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Breed::destroy($id);
    }

    // search route
    /**
     * Search for a breed
     *
     * @param  str  $breedName
     * @return \Illuminate\Http\Response
     */
    public function search($breedName)
    {
        // match exact
        //return Breed::where('breed_name', $breedName)->get();

        return Breed::where('breed_name', 'like', '%'.$breedName.'%')->get();
    }
}
