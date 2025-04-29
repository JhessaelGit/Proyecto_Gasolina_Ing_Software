import { verificar_cantidad_gasolina } from "../Verificar_datos/Verificar_campos";
const cantidad_gasolina = document.querySelector("#cantidad-gasolina");
const boton_registrar_llegada_gasolina= document.querySelector("#registrar-llegada-gasolina-button")
const formulario_registrar_llegada_gasolina = document.querySelector("#registrar-llegada-gasolina-form")

boton_registrar_llegada_gasolina.addEventListener("click", (event) => {
  event.preventDefault();
  const cantidad_gasolina_value = cantidad_gasolina.value;

  const todos_los_campos_son_validos = verificar_cantidad_gasolina(cantidad_gasolina_value);
  if (todos_los_campos_son_validos){
    window.location.href = "Usuario_administrador_surtidor";
  }
  else{
    alert("Por favor, ingrese los datos de llegada de gasolina correctamente")
  }

});