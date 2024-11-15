#include<stdio.h>
//This code is to find sum of n natural numbers
int sum(int n);

int main()
{
    int n;

    printf("Enter value of n : ");
    scanf("%d",&n);

    printf("Sum is : %d",sum(n));
}

int sum(int n) {
    if(n == 1) {
        return 1;
    }
    int sumNm1 = sum(n-1);
    int sumN = sumNm1 + n;
    return sumN;

}