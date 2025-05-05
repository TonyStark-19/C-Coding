#include <stdio.h>
// This program is to find total price of item with gst
int main()
{
    int n;

    printf("Enter the number of items : ");
    scanf("%d", &n);

    float price[n];

    for (int i = 1; i <= n; i++)
    {
        printf("\nEnter the price of %d item : ", i);
        scanf("%f", &price[i]);
    }
    for (int i = 1; i <= n; i++)
    {
        printf("\nTotal price of %d item : %f\n", i, price[i] + (price[i] * 0.18));
    }
}