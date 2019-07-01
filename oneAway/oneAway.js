let oneAway = function(str1, str2){
  var diff = 0;
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  if(str1.length - 1 == str2.length || str1.length + 1 == str2.length){
    var m = 0;
    var n = 0;
    while(m < str1.length && n < str2.length ){
      if(str1[m] == str2[n]){
        m++;
        n++;
      }
      if(str1[m]!=str2[n] && str1.length > str2.length){
        m++;
        diff++;
      }
      if(str1[m]!=str2[n] && str1.length < str2.length){
        n++;
        diff++;
      }
    }
    return diff <= 1;
  }
  if(str1.length == str2.length){
    for(var i = 0; i < str1.length; i++){
      if(str1[i]!=str2[i]){
        diff++;
      }
    }
    return diff <= 1;
  }

  return false;
}
console.log(oneAway('lox','plox'))
console.log(oneAway('ple','plea'))
console.log(oneAway('bake','baxe'))
console.log(oneAway('bale','blea'))
console.log(oneAway('blox','plox'))

