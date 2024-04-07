#include<iostream>
#include<cmath>
using namespace std;
int main(){
    int n;
    cin>>n;
    bool flot = 0;
    for(int i=2; i<=sqrt(n);i++){
        if(n%i==0){
            flot=1;
            cout<<"this is not a prime number"<<endl;
            break;
        }
    }

    if(flot==0){
        cout<<"this is a prime number"<<endl;
    }
}