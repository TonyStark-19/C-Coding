#include <stdio.h>
// This code is to check whether the given character is lower or upper case
int main()
{
    char ch;

    printf("Enter character : ");
    scanf("%c", &ch);

    if (ch >= 'a' && ch <= 'z')
    {
        printf("Lower case character");
    }
    else if (ch >= 'A' && ch <= 'Z')
    {
        printf("Upper case character");
    }
    else
    {
        printf("Enter valid character");
    }
}