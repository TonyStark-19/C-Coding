#include <stdio.h>
// This code is to swap the digits
int main()
{
    int a, b;

    printf("Enter first digit : ");
    scanf("%d", &a);
    printf("Enter second digit : ");
    scanf("%d", &b);

    a = a + b;
    b = a - b;
    a = a - b;

    printf("Value is : %d %d ", a, b);
}