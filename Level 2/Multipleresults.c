#include <stdio.h>
// This program is to find multiple results in a single function
void dowork(int a, int b, int *sum, int *prod, int *avg);

int main()
{
    int a, b;

    printf("Enter the value of a : ");
    scanf("%d", &a);
    printf("Enter the value of b : ");
    scanf("%d", &b);

    int sum, prod, avg;
    dowork(a, b, &sum, &prod, &avg);

    printf("Sum is %d\nProduct is %d\naverage is %d", sum, prod, avg);
    return 0;
}

void dowork(int a, int b, int *sum, int *prod, int *avg)
{
    *sum = a + b;
    *prod = a * b;
    *avg = (a + b) / 2;
}