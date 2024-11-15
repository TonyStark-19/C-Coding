#include<stdio.h>
#include<math.h>
//This code is to find square root of a number
float root(float number);

int main()
{
    float number;

    printf("Enter the number : ");
    scanf("%f",&number);

    printf("\nSquare root of %f is : %f",number,root(number));
}

float root(float number) {
    float root = pow(number,0.5);
    return root;
}