// Dichiarazione delle variabili 
const fizz = "Fizz"
const buzz = "Buzz"
const fizzBuzz = "FizzBuzz"

//Inizio del ciclo da 1 a 100
for (let i = 1; i <= 100; i++){ //Aggiunta delle condizioni IF ed ELSE IF

     if(i % 3 === 0 && i % 5 === 0){ //FizzBuzz per multipli di 3 e 5
        console.log(fizzBuzz)
     } else if (i % 3 === 0) { //Fizz per multipli di 3
         console.log(fizz)
     } else if (i % 5 === 0){  // Buzz per multipli di 5
        console.log(buzz)
     } else {                  // Numeri normali 
        console.log(i)
     }
}