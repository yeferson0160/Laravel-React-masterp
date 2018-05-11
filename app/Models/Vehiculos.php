<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $cvehi
 * @property int $ctarifas
 * @property string $nvehi
 * @property string $created_at
 * @property string $updated_at
 * @property Tarifa $tarifa
 * @property Movimiento[] $movimientos
 */
class Vehiculos extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'vehiculos';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'cvehi';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['ctarifas', 'nvehi', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tarifa()
    {
        return $this->belongsTo('App\Models\Tarifas', 'ctarifas', 'ctarifas');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function movimientos()
    {
        return $this->hasMany('App\Models\Movimientos', 'cvehi', 'cvehi');
    }
}
