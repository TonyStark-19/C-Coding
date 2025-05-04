#include <stdio.h>
// This program is to find amount of money we have to pay for petrol
int main()
{
    float a, b, c, d, e;

    printf("Enter the price of 1 litre petrol : ");
    scanf("%f", &a);
    printf("Enter the value of average of your vehicle : ");
    scanf("%f", &b);
    printf("How much distance you want to cover by your vehicle : ");
    scanf("%f", &c);

    d = 1 / b;
    e = d * c;

    printf("\nSo you will need %f litres of petrol\n", e);
    printf("So for %f km you have to pay : %f rupees\n", c, e * a);
}