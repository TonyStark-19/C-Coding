#include <stdio.h>
// This code is to find factorial of any number
int main()
{
    int n;

    printf("Enter number : ");
    scanf("%d", &n);

    int factorial = 1;
    for (int i = 1; i <= n; i++)
    {
        factorial = factorial * i;
    }
    printf("factorial is : %d", factorial);
}