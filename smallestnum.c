#include<stdio.h>
//This code is to find the smallest number amongst given two numbers
int main()
{
    int a,b;
    printf("Enter first number : ");
    scanf("%d",&a);
    printf("Enter second number : ");
    scanf("%d",&b);

    if(a>b) {
        printf("%d is smaller",b);
    }
    else if(b>a) {
        printf("%d is smaller",a);
    }
    else {
        printf("Both are equal");
    }
}