#include <stdio.h>
// This code is to check whether you are pass or fail
int main()
{
    int marks;

    printf("Enter your marks (1-100) : ");
    scanf("%d", &marks);

    if (marks >= 0 && marks <= 32)
    {
        printf("Fail");
    }
    else if (marks > 32 && marks <= 100)
    {
        printf("Pass");
    }
    else
    {
        printf("please enter valid marks ");
    }
}