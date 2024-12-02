#include <stdio.h>
// This program is to find sum of digits
int main()
{
    int number, r, sum = 0;

    printf("Enter the number : ");
    scanf("%d", &number);

    while (number > 0)
    {
        r = number % 10;
        sum = sum + r;
        number = number / 10;
    }
    printf("Sum of digits is %d", sum);
}