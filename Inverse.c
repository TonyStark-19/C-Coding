#include<stdio.h>
//This is a program to find the inverse of any matrix
int main()
{
    int X,Y,a1,b1,c1,a,b,c,d,e,f,g,h,i,j,k,l,m;
    char C,B,A;
    int A11,A12,A13,A21,A22,A23,A31,A32,A33;
    int M11,M12,M21,M22;

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

        a1 = a*e*i - a*f*h;
        b1 = b*d*i - b*g*f;
        c1 = c*d*h - c*e*g;

        X = a1-b1+c1;

        A11 = e*i - f*h;
        A12 = (d*i - g*f)*-1;
        A13 = d*h - e*g;
        A21 = (b*i - h*c)*-1;
        A22 = a*i - g*c;
        A23 = (a*h - g*b)*-1;
        A31 = b*f - e*c;
        A32 = (a*f - d*c)*-1;
        A33 = a*e - d*b;

        printf("\nSo the adjoint matrix is as follows:\n");

        printf("\nFirst row elements of adjoint:\n");
        printf("\nFirst Element : %d",A11);
        printf("\nSecond Element : %d",A21);
        printf("\nThird Element : %d\n",A31);
        printf("\nSecond row elements of adjoint:\n");
        printf("\nFourth Element : %d",A12);
        printf("\nFifth Element : %d",A22);
        printf("\nSixth Element : %d\n",A32);
        printf("\nThird row elements of adjoint:\n");
        printf("\nSeventh Element : %d",A13);
        printf("\nEighth Element : %d",A23);
        printf("\nNineth Element : %d\n",A33);

        printf("\nThe given matrix is as follows:\n");
        printf("\n\t%d\t%d\t%d",A11,A21,A31);
        printf("\n\t%d\t%d\t%d",A12,A22,A32);
        printf("\n\t%d\t%d\t%d\n",A13,A23,A33);

        printf("\nValue of the determinant is %d\n",X);
        printf("\nDivide the adjoint matrix by the value of\nthe determinant to get the inverse of the\nmatrix :)");
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

        M11 = m;
        M21 = -k;
        M12 = -l;
        M22 = j;

        printf("\nFirst row elements of adjoint:\n");
        printf("\nFirst Element : %d",M11);
        printf("\nSecond Element : %d\n",M21);
        printf("\nSecond row elements of adjoint:\n");
        printf("\nThird Element : %d",M12);
        printf("\nFourth Element : %d\n",M22);

        printf("\nThe Adjoint matrix is as follows:\n");
        printf("\n\t%d\t%d",M11,M21);
        printf("\n\t%d\t%d\n",M12,M22);

        printf("\nValue of the determinant is %d\n",Y);
        printf("\nDivide the adjoint matrix by the value of\nthe determinant to get the inverse of the\nmatrix :)");
    }
    else {
        printf("\nEnter valid input only :(");
    }

}