#include<stdio.h>
//This code is to find sum of n natural numbers
int main()
{

    int n,sum=0;

    printf("Enter value of n : ");
    scanf("%d",&n);

    for(int i = 1; i<=n; i++) {
        sum = sum + i;
    }
    printf("Sum is : %d\n",sum);

}