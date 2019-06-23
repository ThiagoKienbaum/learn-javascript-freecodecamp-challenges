//retorna a frase traduzida de acordo com o codigo ROT13
function rot13(str) { 
  let RegExp = ["?", " ", "!", "."];
  //ROT13 Decoder
  let decode = {
    "A":"N",
    "B":"O",
    "C":"P",
    "D":"Q",
    "E":"R",
    "F":"S",
    "G":"T",
    "H":"U",
    "I":"V",
    "J":"W",
    "K":"X",
    "L":"Y",
    "M":"Z",
    "N":"A",
    "O":"B",
    "P":"C",
    "Q":"D",
    "R":"E",
    "S":"F",
    "T":"G",
    "U":"H",
    "V":"I",
    "W":"J",
    "X":"K",
    "Y":"L",
    "Z":"M",
  }
  //splita a str em letras
  let arr = str.split("");
  let result = [];
  console.log(arr);
  
  //procura a letra informada no dicionario ROT13
  for (let i = 0; i < arr.length; i++){
    for (let j of Object.keys(decode)){
      if(arr[i] === j){
        //quando encontrado coloca a letra traduzida na arr result
        result.push(decode[j]);
      }
      //se a letra informada consta no RegExp coloca na arr result
      else if(RegExp.indexOf(arr[i]) >= 0){
        result.push(arr[i]);
        break;
      }
    }
  }
  //junta a frase
  result = result.join("");
  //retorna a frase traduzida de acordo com o codigo ROT13
  console.log(result);
  return result;
}

//testes para o codigo
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
rot13("SERR PBQR PNZC");
rot13("LBH QVQ VG!");