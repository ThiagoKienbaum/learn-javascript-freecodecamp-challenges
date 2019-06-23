//retorna a frase com apenas a primeira letra de cada palavra maiuscula
function titleCase(str){

    //passa a frase para caixa baixa e divide em palavras
    str = str.toLowerCase().split(" ");
    console.log(str);
    
    //pega a palavra dada e coloca a primeira letra em maiuscula
    //remove a primeira letra e junta com a maiuscula
    for (let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    //junta todas as palavras
    str = str.join(" ");
    
    //retorna a frase com apenas a primeira letra de cada palavra maiuscula
    console.log(str);
    return str;
}

//teste do codigo
titleCase("sHoRt AnD sToUt");