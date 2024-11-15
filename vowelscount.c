#include <stdio.h>
// This code counts number of vowels occurence in a string
int countvowels(char str[]);

int main()
{
    char str[100];

    printf("Enter the string : ");
    fgets(str, sizeof(str), stdin);

    countvowels(str);
}
int countvowels(char str[])
{
    int count = 0;
    for (int i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||
            str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')
        {
            count++;
        }
    }
    return printf("\nNumber of vowels are %d\n", count);
}