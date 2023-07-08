let array = [2, 4, 1, 5, 6, 3];

maxAdyacentSum(array);

function maxAdyacentSum(array){
    const m = array.reduce((mayor, element) => {
        if(element > mayor){
            mayor = element;
        }
        return mayor;
    }, 0);
    
    let index = array.indexOf(m);
    let sum; 
    array.forEach((element) => {
        if(m == element){
            let previous = array[index - 1];
            let next = array[index + 1];
            if(previous > next){
                sum = element + previous;
            }else{
                sum = element + next;
            }
        }
    })
    console.log(array);
    console.log(sum);
}

