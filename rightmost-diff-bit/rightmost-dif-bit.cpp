#include <iostream>
using namespace std;
int rightmostBit(int m, int n);

int main() {
	int T;
	int m, n;
	cin >> T;
	for(int i = 0; i < T; i++){
	    cin >> m >> n;
	    cout << rightmostBit(m, n) << endl;
	}
	return 0;
}

int rightmostBit(int m, int n){
	if(m == n){
	    return -1;
	}
	  int bit = 1;
    int pos = 1;
    int t = m ^ n; 
	while(true){
	    if((bit & t) != 0 ){
	        return pos;
	    }
      pos++;
      bit = bit << 1;
	}
}
