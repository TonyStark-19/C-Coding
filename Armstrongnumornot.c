#include<stdio.h>
#include<math.h>
//Program to check if the given number is Armstrong or not 
int main()
{
    int d,n,a,sum = 0,num;

    printf("Enter number of digits : ");
    scanf("%d",&d);
    if(d==0 || d<0) {
        goto End;
    }

    printf("Enter the number : ");
    scanf("%d",&n);

    num = n;
    while(n>0) {
        a = n%10;
        sum = sum + pow(a,d);
        n = n/10;
    }
    if(num==sum) {
        printf("\n%d is Armstrong number\n",num);
    }
    else if(num!=sum) {
        printf("\n%d is not a Armstrong number\n",num);
    }
    else {
End :
        printf("\nEnter valid number of digits only :(\n");

    }
}