// Función simulada que retorna una promesa que se resuelve o se rechaza después de un cierto tiempo
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
  
  // Definimos tres promesas simuladas, una de ellas se rechazará
  const promise1 = simulateAsyncOperation("Promesa 1", 2000, true);
  const promise2 = simulateAsyncOperation("Promesa 2", 1500, false);
  const promise3 = simulateAsyncOperation("Promesa 3", 1800, true);
  
  // Utilizamos Promise.allSettled() para esperar a que todas las promesas se cumplan o se rechacen
  Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
      results.forEach(result => {
        if (result.status === "fulfilled") {
          console.log("Promesa cumplida:", result.value);
        } else {
          console.error("Promesa rechazada:", result.reason);
        }
      });
    });
  