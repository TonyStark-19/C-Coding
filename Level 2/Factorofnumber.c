#include <stdio.h>
// This program is to find factors of any number
int main()
{
    int n;

    printf("Enter the number : ");
    scanf("%d", &n);

    printf("\nFactors are : ");

    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            printf("%d ", i);
        }
    }
    printf("\n");
}