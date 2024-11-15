#include<stdio.h>
//This program is to find prime numbers in a range
int main()
{
    int range,start,count=0;

    printf("Enter the starting point : ");
    scanf("%d",&start);
    printf("Enter the range : ");
    scanf("%d",&range);

    for(int i = start; i<=range; i++) {
        count=0;
        for(int j = 1; j<=i; j++) {
            if(i%j==0) {
                count++;
            }
        }
        if(count==2) {
            printf("Prime number : %d\n",i);
        }
    }
}