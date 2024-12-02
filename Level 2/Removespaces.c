#include <stdio.h>
// This program remove blank spaces from the string
void removespaces(char *str);

int main()
{
    char str[100];

    printf("Enter the string : ");
    fgets(str, sizeof(str), stdin);

    removespaces(str);

    printf("\nString after removing spaces :\n \n%s", str);
}
void removespaces(char *str)
{
    int count = 0;
    for (int i = 0; str[i]; i++)
    {
        if (str[i] != ' ')
        {
            str[count++] = str[i];
        }
    }
    str[count] = '\0';
}