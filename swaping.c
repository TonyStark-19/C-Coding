#include<stdio.h>
//This code is to swap the digits
int main()
{
    int a,b,c;

    printf("Enter first digit : ");
    scanf("%d",&a);
    printf("Enter second digit : ");
    scanf("%d",&b);

    c = b;
    b = a;
    a = c;

    printf("Value is : %d%d ",a,b);

}