<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Breed extends Model
{
    use HasFactory;
    // protected $table = 'breeds_table' to change table name if different
    protected $fillable = [
        'breed_name',
        'info'
    ];
}
