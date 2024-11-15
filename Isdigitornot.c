#include<stdio.h>
#include<ctype.h>
//This program is to find whether the given character is a digit or not
int main()
{
    char character;

    printf("Enter the character : ");
    scanf("%c",& character);

    if(isdigit(character))
    {
        printf("The given character %c is a digit.\n", character);
    }
    else
    {
        printf("The given character %c is not a digit.", character);
    }

}