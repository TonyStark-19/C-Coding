#include<stdio.h>
//Matrix code
int main()
{
    int matrix[] = {1,2,3,4,5,6,7,8,9};
    int *ptr = &matrix[0];

    for(int i = 1; i<=3; i++) {
        printf("%d\t",i);
    }
    printf("\n");
    for(int i = 4; i<=6; i++) {
        printf("%d\t",i);
    }
    printf("\n");
    for(int i = 7; i<=9; i++) {
        printf("%d\t",i);
    }

}