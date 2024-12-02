#include <stdio.h>
// This code is for perimeter of rectangle
int main()
{
    float length, width;

    printf("Enter the length of rectangle : ");
    scanf("%f", &length);
    printf("Enter the width of rectangle : ");
    scanf("%f", &width);

    printf("The perimeter of rectangle is : %f", 2 * length + 2 * width);
}