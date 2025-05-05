#include <stdio.h>
// This program is to print the elements of the Fibnacci sequence
void printFibonacci(int n);

int main()
{
    int n;

    printf("Enter the nth term : ");
    scanf("%d", &n);

    printFibonacci(n);
}

void printFibonacci(int n)
{
    int a = 0, b = 1, c;
    printf("\nFibnacci sequence:\n");

    for (int i = 1; i <= n; i++)
    {
        printf("%d ", a);
        c = a + b;
        a = b;
        b = c;
    }
}