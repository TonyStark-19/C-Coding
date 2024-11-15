#include <stdio.h>
#include <math.h>
// This code is for the cube of a number n
int main()
{
    float n;

    printf("Enter the number : ");
    scanf("%f", &n);

    int power = pow(n, 3);

    printf("The cube of the number is : %f", power);
}