<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once "conexion.php";

function cargarCantidadBolsas() {
  $stmt = Conexion::conectar()->prepare("
  SELECT COUNT(idBolsa) FROM registro_dirario
  registro_dirario INNER JOIN bolsa ON registro_dirario.idBolsa = bolsa.id
    WHERE bolsa.color = '".$_GET["color"]."'
  ;");

  $stmt -> execute();

  echo json_encode($stmt -> fetchAll());

  //$stmt-> close();

  $stmt = null;
}
if($_GET["metodo"] == 'cantidadBolsas')
cargarCantidadBolsas();
