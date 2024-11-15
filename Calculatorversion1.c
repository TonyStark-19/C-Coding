#include<stdio.h>
#include<math.h>
//Calculator version 1
int sum(int a, int b);
int minus(int a, int b);
int product(int a, int b);
int power(int a, int b);
float divide(float a, float b);

int main()
{
    int a,b;
    char op;

    printf("\t\tCALCULATOR:\n");
    printf("\nEnter the operation : ");
    scanf("%d %c %d",&a,&op,&b);

    if(op=='+') {
        printf("\nSolution is %d\n",sum(a,b));
    }
    else if(op=='-') {
        printf("\nSolution is %d\n",minus(a,b));
    }
    else if(op=='*') {
        printf("\nSolution is %d\n",product(a,b));
    }
    else if(op=='/') {
        printf("\nSolution is %f\n",divide(a,b));
    }
    else if(op=='^') {
        printf("\nSolution is %d\n",power(a,b));
    }
    else {
        printf("\nEnter valid input only :(\n");
    }
}
int sum(int a, int b) {
    return a+b;
}
int minus(int a, int b) {
    return a-b;
}
int product(int a, int b) {
    return a*b;
}
float divide(float a, float b) {
    return a/b;
}
int power(int a, int b) {
    return pow(a,b);
}