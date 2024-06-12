function calcularNota() {
    // Obtener los valores de las notas
    var notaProducto1 = parseFloat(document.getElementById("notaProducto1").value);
    var notaProducto2 = parseFloat(document.getElementById("notaProducto2").value);
    var notaProducto3 = parseFloat(document.getElementById("notaProducto3").value);
    var notaDesempeno1 = parseFloat(document.getElementById("notaDesempeno1").value);
    var notaDesempeno2 = parseFloat(document.getElementById("notaDesempeno2").value);
    var notaConocimiento = parseFloat(document.getElementById("notaConocimiento").value);

    // Calcular los promedios
    var promedioProducto = (notaProducto1 + notaProducto2 + notaProducto3) / 3;
    var promedioDesempeno = (notaDesempeno1 + notaDesempeno2) / 2;

    // Calcular los porcentajes
    var porcentajeProducto = promedioProducto * 0.4;
    var porcentajeDesempeno = promedioDesempeno * 0.3;
    var porcentajeConocimiento = notaConocimiento * 0.3;

    // Calcular la nota final
    var notaFinal = porcentajeProducto + porcentajeDesempeno + porcentajeConocimiento;

    // Mostrar resultados en la página
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <h2>Resultados:</h2>
      <p>40% del promedio de las tres evidencias de producto: ${porcentajeProducto.toFixed(2)}</p>
      <p>30% del promedio de las dos evidencias de desempeño: ${porcentajeDesempeno.toFixed(2)}</p>
      <p>30% de la evidencia de conocimiento: ${porcentajeConocimiento.toFixed(2)}</p>
      <p>La nota final del estudiante es: ${notaFinal.toFixed(2)}</p>
    `;

    // Comprobar si aprobó o reprobó
    if (notaFinal >= 70) {
        resultadoDiv.innerHTML += "<p style='color: green;'>¡Felicitaciones! El estudiante aprobó.</p>";
    } else {
        resultadoDiv.innerHTML += "<p style='color: red;'>Lo siento, el estudiante reprobó.</p>";
    }
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("resultado").innerHTML = "";
}

var btn = document.querySelector("#Calcular")
btn.addEventListener("click", calcularNota)