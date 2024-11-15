#include <stdio.h>
// This code is to print your given details
int main()
{
    char name[30];
    char address[40];
    int age;

    printf("Enter your name : ");
    scanf("%s", &name);
    printf("Enter your age : ");
    scanf("%d", &age);
    printf("Enter your address : ");
    scanf("%s", &address);

    printf("\nSo as per your input:\n");
    printf("\nYour name is : %s ", name);
    printf("\nYour age is : %d ", age);
    printf("\nYour address is : %s ", address);
}