#include <stdio.h>
// This program is to print star pattern
int main()
{
    int rows, columns;

    printf("Enter number of rows : ");
    scanf("%d", &rows);
    printf("Enter number of columns : ");
    scanf("%d", &columns);

    for (int i = 1; i <= rows; i++)
    {
        printf("\n*", i);
        for (int j = 1; j <= columns - 1; j++)
            printf(" *", j);
    }
}