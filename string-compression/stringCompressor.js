var test = 'AAAaacddd'

var compress = function(str){
    var compressedString = '';
    var index = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] != str[i+1]){
            compressedString+=str[i];
            compressedString+= i - index + 1;
            index = i + 1;
        }
    }
    if(compressedString.length < str.length){
        return compressedString;
    }
    return str
}
var result = compress(test);
console.log(result);
