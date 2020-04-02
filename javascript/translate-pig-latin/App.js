function translatePigLatin(str) {
    var vowelArray = ["a","e","i","o","u"];  
    var firstConsonantCluster = '';
    
    for(var i = 0; i < str.length;i++) {
      if(!vowelArray.includes(str[i])) {
        firstConsonantCluster += str[i];
      } else {
        break;    
      }
    } 
  
    if(i > 0) {
      console.log(str.slice(i,str.length) + firstConsonantCluster + 'ay')
      return str.slice(i,str.length) + firstConsonantCluster + 'ay'
    } else {
      console.log(str + 'way')
      return str + 'way'
    }  
  }
  
  translatePigLatin("glove");