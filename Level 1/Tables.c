#include <stdio.h>
// This code is to print table of any number
int main()
{
    int n;

    printf("Enter the number : ");
    scanf("%d", &n);

    for (int i = n; i <= n * 10; i = i + n)
    {
        printf("%d\n", i);
    }
}