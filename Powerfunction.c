#include<stdio.h>
//This program is to make my own pow function
int pow(int base,int power);

int main()
{
    int base,power;

    printf("Enter the base : ");
    scanf("%d",&base);
    printf("Enter the power : ");
    scanf("%d",&power);

    printf("\n%d to the power %d is %d",base,power,pow(base,power));
}
int pow(int base,int power) {
    int powervalue = 1;
    for(int i = 1; i<=power; i++) {
        powervalue = powervalue*base;
    }
    return powervalue;
}