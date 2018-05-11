<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $cparam
 * @property string $detalle
 * @property string $valtext
 * @property int $valint
 * @property boolean $valbool
 */
class Parametros extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'parametros';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    protected $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['cparam', 'detalle', 'valtext', 'valint', 'valbool'];

}
