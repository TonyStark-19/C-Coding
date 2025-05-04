#include <stdio.h>
// Recursive function to calculate nth Fibonacci number

int fib(int n)
{
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}

int main()
{
    int n;

    printf("Enter number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci sequence up to %d terms:\n", n);
    for (int i = 0; i < n; i++)
    {
        printf("%d ", fib(i));
    }
    printf("\n");

    return 0;
}