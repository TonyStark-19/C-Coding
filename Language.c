#include <stdio.h>
// This code is to print namaste or bonjour
void printnamaste();
void printbonjour();

int main()
{
    char ch;
    printf("Write i for Indian and f for French : ");
    scanf("%s", &ch);

    if (ch == 'i')
    {
        printnamaste();
    }
    else
    {
        printbonjour();
    }
    return 0;
}

void printnamaste()
{
    printf("Nameste!");
}

void printbonjour()
{
    printf("Bonjour!");
}