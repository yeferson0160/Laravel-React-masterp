<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Empresa;
use App\Models\Movimientos;
use App\Models\Parametros;
use App\Models\Tarifas;
use App\Models\Vehiculos;

class APIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

		 //-----------MOVIMIENTOS----------
    public function getMovimientos(Request $request){
        $movimientos = Movimientos::All();
        return response()->json($movimientos);
	}

	public function addMovimientos(Request $request){
			$data = $request->all();
			$registro = Movimientos::create([
			'placa'	=> $data['placa'],
            'fecha_entrada' => Carbon::now('America/Bogota'),
			'cvehi' => $data['vehiculo'],
            'ifsalida'  => 0,
			]);			
			// return response()->json($registro);
			$registro -> save();
			return response()->json($registro);
	}
    public function outMovimiento(Request $request){
        $data = $request->all();
        $movimiento = Movimientos::where("cmovi",$data['id'])->first();
        $fechaIngreso = Carbon::createFromTimeString($movimiento->fecha_entrada,'America/Bogota');
        $fechaSalida = Carbon::now('America/Bogota');
        $tiempo = $fechaIngreso->diffInHours($fechaSalida);
        $valtotal = $tiempo * $movimiento->vehiculo->tarifa->valhora;
        $movimiento->fecha_salidal = $fechaSalida;
        $movimiento->tiempo = $tiempo;
        $movimiento->valtotal = $valtotal;
        $movimiento->ifsalida = 1;
        $movimiento->save();
        return response()->json($movimiento);
    }
		
		//-----------MOVIMIENTOS----------
    public function getVehiculos(){
        $vehiculos = Vehiculos::All();
        return response()->json($vehiculos);
    }
    public function getTarifas(){
        $tarifas = Tarifas::All();
        return response()->json($tarifas);
    }
}
