#include <stdio.h>
// Grades
int main()
{
    int marks;

    printf("Enter your marks (1-100) : ");
    scanf("%d", &marks);

    if (marks < 30)
    {
        printf("C grade");
    }
    else if (marks >= 30 && marks < 70)
    {
        printf("B grade");
    }
    else if (marks >= 70 && marks < 90)
    {
        printf("A grade");
    }
    else if (marks >= 90 && marks <= 100)
    {
        printf("A++ grade");
    }
    else
    {
        printf("Enter valid marks only");
    }
}