<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $ctarifas
 * @property string $nomtarifa
 * @property int $valhora
 * @property string $created_at
 * @property string $updated_at
 * @property Vehiculo[] $vehiculos
 */
class Tarifas extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'tarifas';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'ctarifas';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['nomtarifa', 'valhora', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function vehiculos()
    {
        return $this->hasMany('App\Models\Vehiculos', 'ctarifas', 'ctarifas');
    }
}
