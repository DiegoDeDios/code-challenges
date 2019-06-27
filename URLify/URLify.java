public class URLify {

  static String URLfy(String s, int size){
      char[] url = s.toCharArray();
      char[] spaces = {'%','2','0'};
      int nSpaces = countSpaces(url, size);
      int index = url.length - 1;
      for(int i = size - 1; i >= 0; i--){
        if(url[i] == ' '){
            url[index--] = spaces[2];
            url[index--] = spaces[1];
            url[index--] = spaces[0];
            nSpaces--;
        }
        else{
          if(nSpaces > 0){
           url[index--] = url[i];
          }
        }
        
      }
      return new String(url);
  }
  static int countSpaces(char[] arr, int size ){
    int spaces = 0;
    for(int i = 0; i < size; i++){
      if(arr[i]== ' '){
        spaces++;
      }
    }
    return spaces;
  }
  static void printArray(char[] arr){
    for(int i = 0; i < arr.length; i++){
      System.out.print(arr[i]);
    }
  }
  public static void main(String[] args) {
    String s = "Amo Java Mucho    ";
    String s2 = "Mr  John Smith      ";
    System.out.println(URLfy(s,14));
    System.out.println(URLfy(s2,14));
  }
}
