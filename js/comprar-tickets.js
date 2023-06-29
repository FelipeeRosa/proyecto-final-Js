// Función para calcular el total a pagar
function calcularTotal() {
  // Los valores del formulario
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let categoria = document.getElementById("categoria").value;

  // El descuento según la categoría seleccionada
  let descuento = 0;
  if (categoria === "Estudiante") {
    descuento = 0.8; // 80% de descuento
  } else if (categoria === "Trainee") {
    descuento = 0.5; // 50% de descuento
  } else if (categoria === "Junior") {
    descuento = 0.15; // 15% de descuento
  }

  // Calcular el total a pagar
  let valorTicket = 200; // Valor de los tickets
  let total = cantidad * valorTicket * (1 - descuento);

  // Mostrar el total en el elemento con id "totalPagar"
  document.getElementById("totalPagar").textContent = "Total a pagar: $" + total.toFixed(2);
}

// Función para borrar los valores del formulario
function borrarFormulario() {
  document.getElementById("myForm").reset();
  document.getElementById("totalPagar").textContent = "";
}

// Función para mostrar el resumen en una nueva ventana
function mostrarResumen() {
  let cantidad = document.getElementById("cantidad").value;
  let categoria = document.getElementById("categoria").value;
  let total = document.getElementById("totalPagar").textContent;

  let resumen = "Resumen de compra:\n" +
                "Cantidad de Tickets: " + cantidad + "\n" +
                "Categoría: " + categoria + "\n" +
                total;

  // Abrir una nueva ventana con el resumen
  window.open().document.write(resumen);
}