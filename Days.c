#include<stdio.h>
//This code is to print day name as per the input value
int main()
{
    int day;

    printf("Enter day(1-7) : ");
    scanf("%d",&day);

    switch(day) {
    case 1 :
        printf("Monday\n");
        break;
    case 2 :
        printf("Tuesday\n");
        break;
    case 3 :
        printf("wednesday\n");
        break;
    case 4 :
        printf("Thursday\n");
        break;
    case 5 :
        printf("Friday\n");
        break;
    case 6 :
        printf("Saturday\n");
        break;
    case 7 :
        printf("Sunday\n");
        break;
    default :
        printf("Enter number between 1 to 7 only");
    }
    
}