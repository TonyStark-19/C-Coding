#include<stdio.h>
//Specific operations code
int main()
{
    char op;
    int a,b;

    printf("\t  Menu of operations :\n");
    printf("\n1: Addition");
    printf("\n2: Subtraction");
    printf("\n3: Multiplication");
    printf("\n4: Divison");
    printf("\n5: Modulus");
    printf("\n6: Exit \n");

    printf("\nEnter your choice (1-6) : ");
    scanf("%c",&op);

    if(op=='6') {
        printf("\nExiting the code bye :)\n");
    }
    else {
        switch(op) {
        case'1':
                printf("\nEnter value of a : ");
            scanf("%d",&a);
            printf("Enter value of b : ");
            scanf("%d",&b);

            printf("\nResult is %d\n",a+b);
            break;
        case'2':
                printf("\nEnter value of a : ");
            scanf("%d",&a);
            printf("Enter value of b : ");
            scanf("%d",&b);

            printf("\nResult is %d\n",a-b);
            break;
        case'3':
                printf("\nEnter value of a : ");
            scanf("%d",&a);
            printf("Enter value of b : ");
            scanf("%d",&b);

            printf("\nResult is %d\n",a*b);
            break;
        case'4':
                printf("\nEnter value of a : ");
            scanf("%d",&a);
            printf("Enter value of b : ");
            scanf("%d",&b);

            if(b!=0) {
                printf("\nResult is %d\n",a/b);
            }
            else {
                printf("\nCannot divide by zero :(\n");
            }
            break;
        case'5':
                printf("\nEnter value of a : ");
            scanf("%d",&a);
            printf("Enter value of b : ");
            scanf("%d",&b);

            if(b!=0) {
                printf("\nResult is %d\n",a%b);
            }
            else {
                printf("\nCannot divide by zero :(\n");
            }
            break;
        default:
            printf("\nInvalid operator :(\n");
        }
    }
}