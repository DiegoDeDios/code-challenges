#include <iostream>
using namespace std;

int firstBit(int t);

int main() {
	int T;
	cin >> T;
	int testCases[T];
	for(int i = 0; i < T; i++){
	    cin >> testCases[i];
	}
	for(int i = 0; i < T; i++){
	    cout << firstBit(testCases[i]) << endl;
	}
	
	return 0;
}

int firstBit(int t){
	if(t == 0){
	    return 0;
	}
	int n = 1;
    int pos = 1;
	while(true){
	    if((n & t) != 0 ){
	        return pos;
	    }
      pos++;
      n = n << 1;
	}
}
