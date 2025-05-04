#include <stdio.h>
// This program prints the sum of matrix
int main()
{
    int a[3][3];
    int b[3][3];
    int c[3][3];

    printf("Enter value of first Matrix :\n");
    printf("\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("\n");
    printf("Enter value of second Matrix :\n");
    printf("\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            scanf("%d", &b[i][j]);
        }
    }
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    printf("\nSum of A and B Matrix is :\n");
    printf("\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf(" %d ", c[i][j]);
        }
        printf("\n");
    }
}