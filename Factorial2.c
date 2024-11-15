#include<stdio.h>
//This program is to find factorial of n numbers
int fact(int n);

int main()
{
    int n;

    printf("Enter value of n : ");
    scanf("%d",&n);

    printf("value is : %d",fact(n));
}

int fact(int n) {
    if(n == 0) {
        return 1;
    }
    int factNm1 = fact(n-1);
    int factN = factNm1 * n;
    return factN;

}