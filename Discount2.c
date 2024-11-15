#include <stdio.h>
// This program is for discount
int main()
{
    float item, sum, price;

    printf("Enter the number of items : ");
    scanf("%f", &item);

    for (int i = 1; i <= item; i++)
    {
        printf("Enter price of item %d : ", i);
        scanf("%f", &price);
        sum += price;
    }
    printf("\nTotal price is %f rupees\n", sum);

    if (sum >= 1000)
    {
        printf("\nDiscount is applicable\n");
        printf("Total price after discount is\n%f rupees\n", sum - sum * 0.1);
    }
    else
    {
        printf("\nDiscount is not applicable\n");
        printf("So total price remains the same which is\n%f rupees\n", sum);
    }
}