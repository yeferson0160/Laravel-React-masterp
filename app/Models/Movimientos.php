<?php

namespace App\Models;

use \Illuminate\Database\Eloquent\Model;

/**
 * @property int $cmovi
 * @property int $cvehi
 * @property string $fecha_entrada
 * @property string $fecha_salidal
 * @property string $tiempo
 * @property int $valtotal
 * @property string $placa
 * @property boolean $ifsalida
 * @property string $created_at
 * @property string $updated_at
 * @property Vehiculo $vehiculo
 */
class Movimientos extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'movimientos';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'cmovi';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['cvehi', 'fecha_entrada', 'fecha_salidal', 'tiempo', 'valtotal', 'placa', 'ifsalida', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function vehiculo()
    {
        return $this->belongsTo('App\Models\Vehiculos', 'cvehi', 'cvehi');
    }
}
