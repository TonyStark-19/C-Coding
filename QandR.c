#include <stdio.h>
// This code is to find quotient and remainder of a number divided by 2
int main()
{
    int a, b, c;

    printf("Enter numerator : ");
    scanf("%d", &a);
    printf("Enter denominator ; ");
    scanf("%d", &b);

    printf("\nQuotient : %d", c = a / b);
    printf(" Remainder : %d", c = a % b);
}