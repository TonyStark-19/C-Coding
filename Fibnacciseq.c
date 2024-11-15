#include<stdio.h>
//This program prints Fibnacci sequence
int fib(int n);

int main()
{
    int n;

    printf("Enter value of n : ");
    scanf("%d",&n);
    fib(n);
}

int fib(int n) {
    if(n==0) {
        return 0;
    }
    if(n==1) {
        return 1;
    }

    int fibNm1 = fib(n-1);
    int fibNm2 = fib(n-2);
    int fibN = fibNm1 + fibNm2;
    
    printf("\nFibnacci of %d is : %d\n",n,fibN);
    return fibN;
}