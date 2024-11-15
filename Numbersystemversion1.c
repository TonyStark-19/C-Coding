#include<stdio.h>
#include<math.h>
#include<string.h>

int btod(int n);
int otod(int n);
int dtob(int n);
int dtoo(int n);
int htod(char arr[]);
int dtoh(int n);
int btoo(int n);
int otob(char arr[]);
int btoh(int n);
int htob(char arr[]);
int htoo(char arr[]);
int otoh(char arr[]);
void reverse(char arr[],int n);

int main()
{
    int a,n;
    char str;
    char octal;
    char hexadecimal;

    printf("\tNumber system Conversions :\n");
    printf("\n  Select any of these conversios below :\n");
    printf("\nOption 1 : Binary to decimal\n");
    printf("Option 2 : Decimal to binary\n");
    printf("Option 3 : Octal to decimal\n");
    printf("Option 4 : Decimal to octal\n");
    printf("Option 5 : Hexadecimal to decimal\n");
    printf("Option 6 : Decimal to hexadecimal\n");
    printf("Option 7 : Binary to octal\n");
    printf("Option 8 : Octal to binary\n");
    printf("Option 9 : Binary to hexadecimal\n");
    printf("Option 10 : Hexadecimal to binary\n");
    printf("Option 11 : Hexadecimal to ocatal\n");
    printf("Option 12 : Octal to hexadecimal\n");

    printf("\nYour response : ");
    scanf("%d",&a);

    if(a==1) {
        btod(n);
    }
    else if(a==2) {
        otod(n);
    }
    else if(a==3) {
        dtob(n);
    }
    else if(a==4) {
        dtoo(n);
    }
    else if(a==5) {
        htod(str);
    }
    else if(a==6) {
        dtoh(n);
    }
    else if(a==7) {
        btoo(n);
    }
    else if(a==8) {
        otob(str);
    }
    else if(a==9) {
        btoh(n);
    }
    else if(a==10) {
        htob(str);
    }
    else if(a==11) {
        htoo(octal);
    }
    else if(a==12) {
        otoh(hexadecimal);
    }
    else {
        printf("\nValid input only :(\n");
    }
}
int btod(int n) {
    int r,s = 0;
    printf("\nEnter the Binary number : ");
    scanf("%d",&n);

    for(int i = 0; n>0; i++) {
        r = n%10;
        s = s + pow(2,i)*r;
        n = n/10;
    }
    printf("\nBinary to decimal is %d\n",s);
}
int otod(int n) {
    int r,s = 0;
    printf("\nEnter the octal number : ");
    scanf("%d",&n);

    for(int i = 0; n>0; i++) {
        r = n%10;
        s = s + pow(8,i)*r;
        n = n/10;
    }
    printf("\nOctal to decimal is %d\n",s);
}
int dtob(int n) {
    int r,count = 0;
    char decimal[50];

    printf("\nEnter the decimal number : ");
    scanf("%d",&n);

    for(int i = 0; n>0; i++) {
        r = n%2;
        decimal[i] = r;
        n = n/2;
        count++;
    }
    printf("\nDecimal to binary is ");
    for(int i = count-1; i>=0; i--) {
        printf("%d",decimal[i]);
    }
    printf("\n");
}
int dtoo(int n) {
    int r,count = 0;
    char decimal[50];

    printf("\nEnter the decimal number : ");
    scanf("%d",&n);

    for(int i = 0; n>0; i++) {
        r = n%8;
        decimal[i] = r;
        n = n/8;
        count++;
    }
    printf("\nDecimal to octal is ");
    for(int i = count-1; i>=0; i--) {
        printf("%d",decimal[i]);
    }
    printf("\n");
}
int htod(char arr[]) {
    char str[50];
    int s = 0,s1 = 0,s2 = 0,s3 = 0,s4 = 0,s5 = 0,s6 = 0;

    printf("\nEnter the hexadecimal number : ");
    scanf("%s",&str);

    int n = strlen(str);

    reverse(str,n);

    for(int i = 0; i<n; i++) {
        if(str[i]=='A') {
            str[i] = 10;
            s = s + pow(16,i)*str[i];
        }
        else if(str[i]=='B') {
            str[i] = 11;
            s1 = s1 + pow(16,i)*str[i];
        }
        else if(str[i]=='C') {
            str[i] = 12;
            s2 = s2 + pow(16,i)*str[i];
        }
        else if(str[i]=='D') {
            str[i] = 13;
            s3 = s3 + pow(16,i)*str[i];
        }
        else if(str[i]=='E') {
            str[i] = 14;
            s4 = s4 + pow(16,i)*str[i];
        }
        else if(str[i]=='F') {
            str[i] = 15;
            s5 = s5 + pow(16,i)*str[i];
        }
        else if (str[i]=='1') {
            str[i] = 1;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='2') {
            str[i] = 2;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='3') {
            str[i] = 3;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='4') {
            str[i] = 4;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='5') {
            str[i] = 5;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='6') {
            str[i] = 6;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='7') {
            str[i] = 7;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='8') {
            str[i] = 8;
            s6 = s6 + pow(16,i)*str[i];
        }
        else if (str[i]=='9') {
            str[i] = 9;
            s6 = s6 + pow(16,i)*str[i];
        }
    }
    printf("\nHexadecimal to decimal is %d\n",s + s1 + s2 + s3 + s4 + s5 + s6);
}
void reverse(char arr[],int n) {
    for(int i = 0; i<n/2; i++) {
        int firstval = arr[i];
        int secondval = arr[n-i-1];
        arr[i] = secondval;
        arr[n-i-1] = firstval;
    }
}
int dtoh(int n) {
    int r,count= 0;
    char str[50];

    printf("\nEnter the decimal number : ");
    scanf("%d",&n);

    for(int i = 0; n>0; i++) {
        r = n%16;
        str[i] = r;
        n = n/16;
        count++;
    }
    for(int i = 0; i<count; i++) {
        if(str[i]==10) {
            str[i] = 'A';
        }
        else if(str[i]==11) {
            str[i] = 'B';
        }
        else if(str[i]==12) {
            str[i] = 'C';
        }
        else if(str[i]==13) {
            str[i] = 'D';
        }
        else if(str[i]==14) {
            str[i] = 'E';
        }
        else if(str[i]==15) {
            str[i] = 'F';
        }
        else if (str[i]==1) {
            str[i] = '1';
        }
        else if (str[i]==2) {
            str[i] = '2';
        }
        else if (str[i]==3) {
            str[i] = '3';
        }
        else if (str[i]==4) {
            str[i] = '4';
        }
        else if (str[i]==5) {
            str[i] = '5';
        }
        else if (str[i]==6) {
            str[i] = '6';
        }
        else if (str[i]==7) {
            str[i] = '7';
        }
        else if (str[i]==8) {
            str[i] = '8';
        }
        else if (str[i]==9) {
            str[i] = '9';
        }
    }
    reverse(str,count);

    printf("\nDecimal to hexadecimal is ");
    for(int i = 0; i<count; i++) {
        printf("%c",str[i]);
    }
    printf("\n");
}
int btoo(int n) {
    int r,s = 0,count = 0;
    char octal[20];

    printf("\nEnter the binary number : ");
    scanf("%d",&n);

    for(int i=0; n>0; i++) {
        r = n%10;
        s = s + r*1;
        n = n/10;
        r = n%10;
        s = s + r*2;
        n = n/10;
        r = n%10;
        s = s + r*4;
        n = n/10;
        octal[i] = s;
        s = 0;
        count++;
    }
    printf("\nBinary to octal is ");
    for(int i = count-1; i>=0; i--) {
        printf("%d",octal[i]);
    }
    printf("\n");
}
int btoh(int n) {
    int r,count = 0,s = 0;
    char str[50];

    printf("\nEnter the binary number : ");
    scanf("%d",&n);

    for(int i=0; n>0; i++) {
        r = n%10;
        s = s + r*1;
        n = n/10;
        r = n%10;
        s = s + r*2;
        n = n/10;
        r = n%10;
        s = s + r*4;
        n = n/10;
        r = n%10;
        s = s + r*8;
        n = n/10;
        str[i] = s;
        s = 0;
        count++;
    }
    printf("\nBinary to hexadecimal is ");
    for(int i = count-1; i>=0; i--) {
        if(str[i]==10) {
            str[i] = 'A';
        }
        else if(str[i]==11) {
            str[i] = 'B';
        }
        else if(str[i]==12) {
            str[i] = 'C';
        }
        else if(str[i]==13) {
            str[i] = 'D';
        }
        else if(str[i]==14) {
            str[i] = 'E';
        }
        else if(str[i]==15) {
            str[i] = 'F';
        }
        else if (str[i]==1) {
            str[i] = '1';
        }
        else if (str[i]==2) {
            str[i] = '2';
        }
        else if (str[i]==3) {
            str[i] = '3';
        }
        else if (str[i]==4) {
            str[i] = '4';
        }
        else if (str[i]==5) {
            str[i] = '5';
        }
        else if (str[i]==6) {
            str[i] = '6';
        }
        else if (str[i]==7) {
            str[i] = '7';
        }
        else if (str[i]==8) {
            str[i] = '8';
        }
        else if (str[i]==9) {
            str[i] = '9';
        }
        printf("%c",str[i]);
    }
    printf("\n");
}
int otob(char arr[]) {

    char str[20];
    int a = 0,b = 1;

    printf("\nEnter octal number : ");
    scanf("%s",&str);

    int length = strlen(str);

    printf("\nOctal to binary is ");
    for(int i = 0; i<length; i++) {
        if(str[i]=='0') {
            printf("%d",a);
            printf("%d",a);
            printf("%d",a);
        }
        else if(str[i]=='1') {
            printf("%d",a);
            printf("%d",a);
            printf("%d",b);
        }
        else if(str[i]=='2') {
            printf("%d",a);
            printf("%d",b);
            printf("%d",a);
        }
        else if(str[i]=='3') {
            printf("%d",a);
            printf("%d",b);
            printf("%d",b);
        }
        else if(str[i]=='4') {
            printf("%d",b);
            printf("%d",a);
            printf("%d",a);
        }
        else if(str[i]=='5') {
            printf("%d",b);
            printf("%d",a);
            printf("%d",b);
        }
        else if(str[i]=='6') {
            printf("%d",b);
            printf("%d",b);
            printf("%d",a);
        }
        else if(str[i]=='7') {
            printf("%d",b);
            printf("%d",b);
            printf("%d",b);
        }
    }
    printf("\n");
}
int htob(char arr[]) {

    char str[20];
    int a = 0,b = 1;

    printf("\nEnter hexadecimal number : ");
    scanf("%s",&str);

    int length = strlen(str);

    printf("\nHexadecimal to binary is ");
    for(int i = 0; i<length; i++) {
        if(str[i]=='0') {
            printf("%d",a);
            printf("%d",a);
            printf("%d",a);
            printf("%d",a);
        }
        else if(str[i]=='1') {
            printf("%d",a);
            printf("%d",a);
            printf("%d",a);
            printf("%d",b);
        }
        else if(str[i]=='2') {
            printf("%d",a);
            printf("%d",a);
            printf("%d",b);
            printf("%d",a);
        }
        else if(str[i]=='3') {
            printf("%d",a);
            printf("%d",a);
            printf("%d",b);
            printf("%d",b);
        }
        else if(str[i]=='4') {
            printf("%d",a);
            printf("%d",b);
            printf("%d",a);
            printf("%d",a);
        }
        else if(str[i]=='5') {
            printf("%d",a);
            printf("%d",b);
            printf("%d",a);
            printf("%d",b);
        }
        else if(str[i]=='6') {
            printf("%d",a);
            printf("%d",b);
            printf("%d",b);
            printf("%d",a);
        }
        else if(str[i]=='7') {
            printf("%d",a);
            printf("%d",b);
            printf("%d",b);
            printf("%d",b);
        }
        else if(str[i]=='8') {
            printf("%d",b);
            printf("%d",a);
            printf("%d",a);
            printf("%d",a);
        }
        else if(str[i]=='9') {
            printf("%d",b);
            printf("%d",a);
            printf("%d",a);
            printf("%d",b);
        }
        else if(str[i]=='A') {
            printf("%d",b);
            printf("%d",a);
            printf("%d",b);
            printf("%d",a);
        }
        else if(str[i]=='B') {
            printf("%d",b);
            printf("%d",a);
            printf("%d",b);
            printf("%d",b);
        }
        else if(str[i]=='C') {
            printf("%d",b);
            printf("%d",b);
            printf("%d",a);
            printf("%d",a);
        }
        else if(str[i]=='D') {
            printf("%d",b);
            printf("%d",b);
            printf("%d",a);
            printf("%d",b);
        }
        else if(str[i]=='E') {
            printf("%d",b);
            printf("%d",b);
            printf("%d",b);
            printf("%d",a);
        }
        else if(str[i]=='F') {
            printf("%d",b);
            printf("%d",b);
            printf("%d",b);
            printf("%d",b);
        }
    }
    printf("\n");
}
int htoo(char arr[]) {
    char str[20];
    char strr[30];
    char octal[20];
    int r,a = 0,b = 1,n = 0,s = 0,count = 0;

    printf("\nEnter hexadecimal number : ");
    scanf("%s",&str);

    int length = strlen(str);

    for(int i = 0; i<length; i++) {
        if(str[i]=='0') {
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='1') {
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
        }
        else if(str[i]=='2') {
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='3') {
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
        }
        else if(str[i]=='4') {
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='5') {
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
        }
        else if(str[i]=='6') {
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='7') {
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
        }
        else if(str[i]=='8') {
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='9') {
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
        }
        else if(str[i]=='A') {
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='B') {
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
        }
        else if(str[i]=='C') {
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='D') {
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
            strr[n] = b;
            n++;
        }
        else if(str[i]=='E') {
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = a;
            n++;
        }
        else if(str[i]=='F') {
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
            strr[n] = b;
            n++;
        }
    }
    reverse(strr,n);
    for(int i=0; i<n; i++) {
        r = strr[i];
        s = s + r*1;
        i++;
        r = strr[i];
        s = s + r*2;
        i++;
        r = strr[i];
        s = s + r*4;
        octal[count++] = s + '0';
        s = 0;
    }
    octal[count] = '\0';
    printf("\nHexadecimal to octal is ");
    for(int i = count-1; i>=0; i--) {
        printf("%c",octal[i]);
    }
    printf("\n");
}
int otoh(char arr[]) {

    char strr[30];

    printf("\nEnter the Octal number : ");
    scanf("%s",&strr);

    int n = strlen(strr);

    int count = 0;
    char hexadecimal[20];
    int s = 0;

    for (int i = 0; i < n; i++) {
        s = s * 8 + (strr[i] - '0');
    }

    while (s > 0) {
        int remainder = s % 16;
        if (remainder < 10) {
            hexadecimal[count] = remainder + '0';
        } else {
            hexadecimal[count] = remainder - 10 + 'A';
        }
        s /= 16;
        count++;
    }

    printf("\nOctal to hexadecimal is ");
    for (int i = count - 1; i >= 0; i--) {
        printf("%c", hexadecimal[i]);
    }
    printf("\n");
}