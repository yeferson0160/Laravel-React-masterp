<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $cempre
 * @property string $nempre
 * @property string $nit
 * @property string $direccion
 * @property string $created_at
 * @property string $updated_at
 */
class Empresa extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'empresa';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'cempre';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    protected $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['nempre', 'nit', 'direccion', 'created_at', 'updated_at'];

}
