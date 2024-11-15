#include<stdio.h>
//This code is to check license eligibility
int main()
{
    int age;

    printf("\t  Licence eligibility\n");
    printf("\nWhat's your age : ");
    scanf("%d",&age);

    if(age<18) {
        printf("You are not eligible for licence :(");
    }
    if(18<=age) {
        printf("You are eligible for licence :)");
    }
    
}