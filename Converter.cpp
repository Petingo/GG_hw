/*
* generate something for the video
*/

#include <bits/stdc++.h>
#include <windows.h>
using namespace std;
main(){
	srand(time(NULL));
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE),FOREGROUND_INTENSITY | FOREGROUND_GREEN);
	for(int i = 0 ; i < 20; i++){
		int r = rand();
		int t = rand()%5;
		for(int i = 0 ; i < r%14 ; i++){
			int a = rand()*10000007;
			printf("0x%x:",a);
			for(int k=256*64,t=0;k;k>>=1){
				printf(k&a?"1":"0");
				t++;
			}
			printf("\n");
			Sleep(r%14);
		}
		Sleep(t*100);
	}
	printf("-------------------------------------\n  Succeed, converter rate: %.2f\%\n-------------------------------------\n\n",float(rand()%1000/100.0+90.0));
	printf("press any key to continue..\n\n");
	getchar();
}