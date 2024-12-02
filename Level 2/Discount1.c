#include <stdio.h>
// This is a program to check and apply discount
int main()
{
    float number, quantity, quantity1, sum = 0;

    printf("Enter the prices of the items you have\npurchased (Enter 0 to stop) : \n");

    do
    {
        printf("Enter prize of item : ");
        scanf("%f", &number);

        sum += number;
    } while (number != 0);

    printf("\nTotal price is %f rupees\n", sum);

    quantity = sum;
    if (quantity >= 1000)
    {
        quantity1 = 0.1 * quantity;
        quantity = quantity - quantity1;
        printf("\nDiscount is applied");
        printf("\nFinal price after discount is %f\nrupees", quantity);
    }
    else
    {
        printf("\nDiscount is not applicable");
        printf("\nSo your final price remains the same");
        printf("\nwhich is %f rupees", sum);
    }
}
