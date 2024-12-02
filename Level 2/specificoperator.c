#include <stdio.h>
// This code is to perform a specific operation on the given numbers a and b
int main()
{
    char op;
    float a, b;

    printf("Enter the operation : ");
    scanf("%c", &op);
    printf("Enter first number : ");
    scanf("%f", &a);
    printf("Enter second number : ");
    scanf("%f", &b);

    switch (op)
    {
    case '+':
        printf("Sum is : %f\n", a + b);
        break;
    case '-':
        printf("Subtraction is : %f\n", a - b);
        break;
    case '*':
        printf("Multiplication is : %f\n", a * b);
        break;
    case '/':
        printf("Division is : %f\n", a / b);
        break;
    default:
        printf("Invalid operator\n");
    } /*End of switch*/
} /*End of main()*/