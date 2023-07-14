const array = [1, 2, 3, 4, 5];

sumWithoudMeans(array);

function sumWithoudMeans(array){
    let suma = 0;
    let middleIndex = Math.trunc(array.length / 2);

    if(array.length % 2 == 0){
        // El array tiene longitud par
        suma = array.reduce((accumulator, element, index) => {
            if (index === middleIndex || index === middleIndex - 1) {
              return accumulator; // Omitir elementos del medio
            }
            return accumulator + element;
        }, 0);
    }else{
        // El array tiene longitud impar
        suma = array.reduce((accumulator, element, index) => {
            if (index === middleIndex) {
            return accumulator; // Omitir elemento del medio
            }
            return accumulator + element;
        }, 0);
    }

    console.log(array);
    console.log(suma);
}

