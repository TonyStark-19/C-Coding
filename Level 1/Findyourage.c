#include <stdio.h>
// This code is to find your age as per your year of birth
int main()
{
    int a = 2024;
    int b;

    printf("Enter your year of birth : ");
    scanf("%d", &b);

    printf("So you're %d years old", a - b);
}