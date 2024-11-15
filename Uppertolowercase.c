#include<stdio.h>
//This program converts lowwecase alphabets to uppercase and vice-versa 
void uppercaseconversion(char *str);
void lowercaseconversion(char *str);

int main()
{
    char str[100];
    int n;

    printf("Enter the string :\n");
    printf("\n");
    fgets(str,sizeof(str),stdin);

    printf("\nWhich conversion you want :\n");
    printf("\n1. Uppercase");
    printf("\n2. lowercase\n");
    printf("\nYour response : ");
    scanf("%d",&n);

    if(n==1) {
        uppercaseconversion(str);

        printf("\nString after conversion :\n");
        printf("\n%s",str);
    }
    else if(n==2) {
        lowercaseconversion(str);

        printf("\nString after conversion :\n");
        printf("\n%s",str);
    }
    else {
        printf("\nValid input only :(\n");
    }
}
void uppercaseconversion(char *str) {
    for(int i = 0; str[i]!='\0'; ++i) {
        if(str[i] == 'a' || str[i] == 'b' || str[i] == 'c'
                || str[i] == 'd' || str[i] == 'e' ||
                str[i] == 'f' || str[i] == 'g' || str[i] == 'h'
                || str[i] == 'i' || str[i] == 'j' ||
                str[i] == 'k' || str[i] == 'l' || str[i] == 'm'
                || str[i] == 'n' || str[i] == 'o' ||
                str[i] == 'p' || str[i] == 'q' || str[i] == 'r'
                || str[i] == 's' || str[i] == 't' ||
                str[i] == 'u' || str[i] == 'v' || str[i] == 'w'
                || str[i] == 'x' || str[i] == 'y' || str[i] == 'z') {
            str[i] = str[i] - 32;
        }
    }
}
void lowercaseconversion(char *str) {
    for(int i = 0; str[i]!='\0'; ++i) {
        if(str[i] == 'A' || str[i] == 'B' || str[i] == 'C'
                || str[i] == 'D' || str[i] == 'E' ||
                str[i] == 'F' || str[i] == 'G' || str[i] == 'H'
                || str[i] == 'I' || str[i] == 'J' ||
                str[i] == 'K' || str[i] == 'L' || str[i] == 'M'
                || str[i] == 'N' || str[i] == 'O' ||
                str[i] == 'P' || str[i] == 'Q' || str[i] == 'R'
                || str[i] == 'S' || str[i] == 'T' ||
                str[i] == 'U' || str[i] == 'V' || str[i] == 'W'
                || str[i] == 'X' || str[i] == 'Y' || str[i] == 'Z') {
            str[i] = str[i] + 32;
        }
    }
}