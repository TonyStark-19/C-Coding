#include<stdio.h>
//This program is t find simple interest
int main()
{

    float p,r,t,k;

    printf("\t    *Simple interest*\n");
    printf("\nEnter the value of principle : ");
    scanf("%f",&p);
    printf("Enter the value of the rate : ");
    scanf("%f",&r);
    printf("Enter the value of time in years : ");
    scanf("%f",&t);

    k = p*r*t;

    printf("\nAfter %f years\n\nYou will gain %f interest\n",t,k/100);
    printf("\nSo your amount will become %f\nafter %f years",k/100+p,t);
}