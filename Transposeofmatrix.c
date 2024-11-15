#include<stdio.h>
//This program prints the transpose of Matrix
int main()
{
    int a[3][3];
    int b[3][3];

    printf("Enter value of first Matrix :\n");
    printf("\n");
    for(int i = 0; i<3; i++) {
        for(int j = 0; j<3; j++) {
            scanf("%d",&a[i][j]);
        }
    }
    for(int i = 0; i<3; i++) {
        for(int j = 0; j<3; j++) {
            b[i][j] = a[j][i];
        }
    }
    printf("\n");
    printf("Transpose of Matrix :\n");
    printf("\n");
    for(int i = 0; i<3; i++) {
        for(int j = 0; j<3; j++) {
            printf("%d ",b[i][j]);
        }
        printf("\n");
    }
}