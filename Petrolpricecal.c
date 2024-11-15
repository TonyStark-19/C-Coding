#include<stdio.h>
//This program is to find amount of money we have to pay for petrol
int main()
{
    float a,b,c,d,e;

    printf("Enter the price of 1 litre petrol : ");
    scanf("%f",&a);
    printf("Enter the value of average of your vehicle : ");
    scanf("%f",&b);
    printf("How much distance you want to cover by yourvehicle :");
    scanf("%f",&c);

    d = 1/b;
    e = d*c;
    printf("\nSo you will need %f litres of petrol\n",e);
    printf("\nSo for %f km you have to pay\n%f rupees",c,e*a);
}