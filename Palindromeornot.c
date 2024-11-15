#include <stdio.h>
// This program is to find whether the number is palindrome or not
int main()
{
    int r, n, p, sum = 0;

    printf("Enter the number : ");
    scanf("%d", &n);

    p = n;
    while (n > 0)
    {
        r = n % 10;
        sum = r + (sum * 10);
        n = n / 10;
    }
    if (p == sum)
    {
        printf("\n%d is a palindrome number\n", p);
    }
    else
    {
        printf("\n%d is not a palindrome number\n", p);
    }
}