#include <stdio.h>
// This code is to check whether you are pass or fail
int main()
{
    int marks;

    printf("Enter your marks (1-100) : ");
    scanf("%d", &marks);

    marks <= 32 ? printf("Fail") : printf("Pass");
}