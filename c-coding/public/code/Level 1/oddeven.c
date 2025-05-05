#include <stdio.h>
// This code is to check whether the number is even or odd
// This code can also be used to check whether the given number is divisible by 2 or not
int main()
{
    int x;

    printf("Enter your number : ");
    scanf("%d", &x);

    if (x % 2 == 0)
    {
        printf("\nThe number %d is even", x);
    }
    else
    {
        printf("\nThe number %d is odd", x);
    }
}