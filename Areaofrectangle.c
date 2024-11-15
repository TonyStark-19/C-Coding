#include <stdio.h>
// This code is to find area of rectangle
int main()
{
    float length, width;

    printf("Enter the value of length : ");
    scanf("%f", &length);
    printf("Enter the value of width : ");
    scanf("%f", &width);

    printf("The area of rectangle is : %f", length * width);
}