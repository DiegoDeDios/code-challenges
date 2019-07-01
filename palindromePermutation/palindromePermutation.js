let palindromePermutation = function(str){
  str = str.toLowerCase();
  str = str.replace(/\s/g,'');
  var cSet = new Set(str);
  var dic = {};
  var n = str.length;
  for(var i = 0; i < n;i++){
    if(str[i] in dic){
      dic[str[i]]+=1;
    }
    else{
      dic[str[i]] = 1;
    }
  }
  if(n%2==0){
    return getImpairs(dic,cSet) == 0;
  }
  else{
    return getImpairs(dic, cSet) == 1;
  }
};

let getImpairs = function(dic,cSet){
    var impairs = 0;
    for(let item of cSet){
      if(dic[item]%2 != 0){
        impairs++;
      }
    }
    return impairs;
}


console.log(palindromePermutation('Tact Coa')); //Taco Cat, true
console.log(palindromePermutation('aaaAaanllnvtTii')); //anita lava la tina, true
console.log(palindromePermutation('mmxxa')); //mxaxm, true
console.log(palindromePermutation('eevlL')); // Level, true
console.log(palindromePermutation('EEFRR')); // REFER, true
console.log(palindromePermutation('mGyym')); //my Gym, true
console.log(palindromePermutation('axxim')); //false
console.log(palindromePermutation('arxas')); //false
console.log(palindromePermutation('0011')); //Works with number strings too
console.log(palindromePermutation('33003')); // 30303, true
