import { verificar_cantidad_gasolina } from "../Verificar_datos_registro/Verificar_campos";

const cantidad_gasolina = document.querySelector("#cantidad-gasolina");
const boton_registrar_llegada_gasolina = document.querySelector("#registrar-llegada-gasolina-button");
const formulario_registrar_llegada_gasolina = document.querySelector("#registrar-llegada-gasolina-form");
const gasolinaDisponibleElemento = document.querySelector("#gasolina-disponible");
const estadoActualElemento = document.querySelector("#estado-actual");

boton_registrar_llegada_gasolina.addEventListener("click", (event) => {
  event.preventDefault();
  const cantidad_gasolina_value = cantidad_gasolina.value;

  const todos_los_campos_son_validos = verificar_cantidad_gasolina(cantidad_gasolina_value);
  if (todos_los_campos_son_validos) {
    const cantidadNumerica = parseInt(cantidad_gasolina_value);

    gasolinaDisponibleElemento.textContent = cantidadNumerica;

    if (cantidadNumerica < 100) {
      estadoActualElemento.textContent = "Agotado";
    } else {
      estadoActualElemento.textContent = "Disponible";
    }

    alert("Registro de gasolina realizado correctamente");
  } else {
    alert("Por favor, ingrese los datos de llegada de gasolina correctamente");
  }
});
