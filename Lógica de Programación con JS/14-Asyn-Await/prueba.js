// Función simulada que retorna una promesa que se resuelve después de un cierto tiempo
function simulateAsyncOperation(value, delay, shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(value);
        } else {
          reject(`Error: ${value}`);
        }
      }, delay);
    });
  }
  
  
  async function exampleAsyncFunction() {
    try {
      console.log("Iniciando operaciones asincrónicas...");
      
      const result1 = await simulateAsyncOperation("Hola", 2000, true);
      console.log(result1); // Se resolverá correctamente
  
      const result2 = await simulateAsyncOperation("Mundo", 1500, false);
      console.log(result2); // Se rechazará y el control irá al bloque catch
  
      console.log("Todas las operaciones asincrónicas han sido completadas.");
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  }
  
  exampleAsyncFunction();
  
  