#include<stdio.h>
//This is a program to find the determinant of any matrix
int main()
{
    int X,Y,a,b,c,d,e,f,g,h,i,j,k,l,m;
    char C,B,A;

    printf("\tDeterminat value Calculator\n");
    printf("\nWhat is the order of the matrix?\n");
    printf("A: 2×2 or B: 3×3 : ");
    scanf("%c",&C);

    if(C=='B') {
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d",&a);
        printf("Second Element : ");
        scanf("%d",&b);
        printf("Third Element : ");
        scanf("%d",&c);
        printf("\nEnter the value of second row elements:\n");
        printf("\nFourth Element : ");
        scanf("%d",&d);
        printf("Fifth Element : ");
        scanf("%d",&e);
        printf("Sixth Element : ");
        scanf("%d",&f);
        printf("\nEnter the value of third row elements:\n");
        printf("\nSeventh Element : ");
        scanf("%d",&g);
        printf("Eighth Element : ");
        scanf("%d",&h);
        printf("Nineth Element : ");
        scanf("%d",&i);

        printf("\nThe given matrix is as follows:\n");
        printf("\n\t%d\t%d\t%d",a,b,c);
        printf("\n\t%d\t%d\t%d",d,e,f);
        printf("\n\t%d\t%d\t%d\n",g,h,i);

        a = a*e*i - a*f*h;
        b = b*d*i - b*g*f;
        c = c*d*h - c*e*g;

        X = a-b+c;

        printf("\nValue of the determinant is %d",X);
    }
    else if(C=='A') {
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d",&j);
        printf("Second Element : ");
        scanf("%d",&k);
        printf("\nEnter the value of second row elements:\n");
        printf("\nThird Element : ");
        scanf("%d",&l);
        printf("Fourth Element : ");
        scanf("%d",&m);

        printf("\nThe given matrix is as follows:\n");
        printf("\n\t%d\t%d",j,k);
        printf("\n\t%d\t%d\n",l,m);

        Y = j*m - k*l;

        printf("\nValue of the determinant is %d",Y);
    }
    else {
        printf("\nEnter valid input only :(");
    }

}