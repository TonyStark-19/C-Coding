#include <stdio.h>
// This code is to find average of given five numbers
int main()
{
    float a, b, c, d, e;

    printf("Enter first number : ");
    scanf("%f", &a);
    printf("Enter second number : ");
    scanf("%f", &b);
    printf("Enter third number : ");
    scanf("%f", &c);
    printf("Enter fourth number : ");
    scanf("%f", &d);
    printf("Enter fifth number : ");
    scanf("%f", &e);

    printf("\nSo average of the given numbers : %f", (a + b + c + d + e) / 5);
}