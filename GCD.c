#include <stdio.h>
// This program is to find GCD of two numbers
int GCD(int a, int b);

int main()
{
    int a, b;

    printf("Enter first number : ");
    scanf("%d", &a);
    printf("Enter second number : ");
    scanf("%d", &b);

    printf("\nGCD of %d and %d is %d\n", a, b, GCD(a, b));
}
int GCD(int a, int b)
{
    while (b != 0)
    {
        int c = b;
        b = a % b;
        a = c;
    }
    return a;
}