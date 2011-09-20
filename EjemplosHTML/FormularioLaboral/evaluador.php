<?php 
	abstract class Evaluador{
		public static function run(){
		
			$nombre = $_POST['txt_nombre'];
			
			$lenguajes = $_POST['ch_01'] + $_POST['ch_02'] + $_POST['ch_03'] + $_POST['ch_04'];
			
			$nivel = $_POST['rd_nivel'] + $lenguajes;
			self::resultado($nombre,$nivel);
		
		}
		
		private static function resultado($nombre, $nivel){
			echo "Hola, ".$nombre." tu puntaje es: ".$nivel;		
		}	
	}
Evaluador::run();
?>