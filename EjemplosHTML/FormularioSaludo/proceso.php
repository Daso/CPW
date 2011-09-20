<?php
	abstract class Proceso{
		public static function run(){
			$nombre = $_POST['txt_nombre'];		
			$ama = $_POST['r_ama'];
			$actividad1 = $_POST['ch_1'];
			$actividad2 = $_POST['ch_2'];
			$actividad3 = $_POST['ch_3'];
			$suma = $actividad1 + $actividad2 + $actividad3;
			
			
			
			self::saluda($nombre,$ama,$suma);
		}
		private static function saluda($nombre,$ama,$suma){
			echo 'Hola '.$nombre.'<br />';		
			echo 'Su nivel de amor por la institución es: '.$ama.'<br />';		
			echo 'Su puntaje como militar es: '.$suma;
		}
	}
Proceso::run();