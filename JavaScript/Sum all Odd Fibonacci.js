//soma todos os numeros impares da sequencia de Fibonacci
//menores ou iguais ao numero fornecido
function sumFibs(num) {
  //arr para armazenar a sequencia de Fibonacci
  let fib = [];
  //primeiro numero da sequencia de Fibonacci
  fib[0] = 0;
  //segundo numero da sequencia de Fibonacci
  fib[1] = 1;
  //variavel usada para guardar o ultimo numero calculado
  let z = 0;
  //variavel usada para guardar o resultado da soma
  let result = 0;

  //calcula o proximo numero da sequencia de Fibonacci
  //o "i" inicia em 2 pois a posição 0 e 1 do arr ja foram informadas
  //enquanto o ultimo nº calculado for menor que o nº informado continua calculando
  //a posição atual da sequencia será a soma dos dois numeros antecessores
  for (let i = 2; z < num; i++) {
    fib[i] = fib[i-1] + fib[i-2]
    z = fib[i]
  }

  //retorna a sequencia calculada
  console.log(fib);

  //separa os numeros impares e soma ao resultado
  for (let i = 0; i < fib.length -1; i++) {
    if(fib[i] %2 !== 0){
      result = result + fib[i];
    }
  }
  //retorna a soma de todos os numeros impares que são menores ou
  //iguais ao numero informado
  console.log(result);
}

//teste do código
sumFibs(75024)
sumFibs(4000000)