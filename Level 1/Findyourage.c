#include <stdio.h>
// This code is to find your age as per your year of birth
int main()
{
    int a = 2025; // add current year
    int b;

    printf("Enter your year of birth : ");
    scanf("%d", &b);

    printf("So you're %d years old", a - b);
}