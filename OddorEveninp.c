#include<stdio.h>
//This code is to check which number in the input is odd
int main()
{
    int n;

    do {
        printf("Enter number : ");
        scanf("%d",&n);

        if(n%2!=0) {
            break;
        }

    } while(1);
    printf("It's an odd number\nThankyou :)");

}