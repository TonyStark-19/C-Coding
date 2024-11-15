#include <stdio.h>
// This program combines two given string
int main()
{
    char a[20], b[20];
    int i = 0, j = 0;

    printf("Enter first string : ");
    gets(a);
    printf("\nEnter second string : ");
    gets(b);

    while (a[i] != '\0')
    {
        i++;
    }
    while (b[j] != '\0')
    {
        a[i] = b[j];
        i++;
        j++;
    }
    a[i] = '\0';

    printf("\nCombined string is\n");
    printf("\n%s\n", a);
}