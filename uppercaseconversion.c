#include<stdio.h>
//This program converts lowercase vowels to uppercase 
void uppercaseconversion(char *str);

int main()
{
    char str[100];

    printf("Enter the string :\n");
    printf("\n");
    fgets(str,sizeof(str),stdin);

    uppercaseconversion(str);

    printf("\nString after conversion :\n");
    printf("\n%s",str);
}
void uppercaseconversion(char *str) {
    for(int i = 0; str[i]!='\0'; ++i) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i'
                || str[i] == 'o' || str[i] == 'u') {
            str[i] = str[i] - 32;
        }
    }
}