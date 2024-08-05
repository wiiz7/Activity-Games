
function nuevoNumero(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num);
      }, 1000);
    });
  }
  
 
  function ejecutarSecuencia() {
    let resultado = 1; // Número inicial
    let numeros = [resultado]; // Array para almacenar los resultados
    let conteo = 1; // Inicia el conteo en 1
  
    function sumarYActualizar() {
      return nuevoNumero(resultado + conteo) // Suma el conteo al resultado actual
        .then(res => {
          resultado = res; 
          numeros.push(resultado);
          console.log(`Después de sumar ${conteo}: ${resultado}`); 
          if (conteo <= 10) { // Continua hasta que el conteo sea 10
            return sumarYActualizar(); // Recursión para la siguiente suma
          }
        });
    }
  
    sumarYActualizar().then(() => {
      console.log('Array final:', numeros); // Muestra el array final con todos los resultados
      console.log('Resultado final:', resultado); // Muestra el resultado final después de sumar hasta el 10
    });
  }
  
  // Ejecutar la secuencia
  ejecutarSecuencia();
  
  
  
  
  
  
