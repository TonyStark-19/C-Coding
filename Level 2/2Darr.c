#include <stdio.h>
// 2D array to print table
void storetable(int tables[][10], int n, int m, int number);
int main()
{
    int tables[2][10];
    storetable(tables, 0, 10, 2);
    printf("\n");
    storetable(tables, 1, 10, 3);
}
void storetable(int tables[][10], int n, int m, int number)
{
    for (int i = 0; i < m; i++)
    {
        tables[n][i] = number * (i + 1);
        printf("%d  ", tables[n][i]);
    }
}