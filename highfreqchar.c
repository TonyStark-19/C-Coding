#include <stdio.h>
#include <string.h>
// This program finds highest frequency character
#define ASCII_SIZE 256

char highestfrequencychar(char *str);

int main()
{
    char str[100];

    printf("Enter the string : ");
    fgets(str, sizeof(str), stdin);

    char highestfreqchar = highestfrequencychar(str);

    printf("\nCharcter with highest frequency : %c\n", highestfreqchar);

    return 0;
}

char highestfrequencychar(char *str)
{
    int freq[ASCII_SIZE] = {0};
    int maxfreq = 0;
    char result;

    for (int i = 0; str[i] != '\0'; ++i)
    {
        ++freq[str[i]];
    }
    for (int i = 0; i < ASCII_SIZE; ++i)
    {
        if (freq[i] > maxfreq)
        {
            maxfreq = freq[i];
            result = (char)i;
        }
    }
    return result;
}