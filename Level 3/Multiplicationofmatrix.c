#include <stdio.h>
// This is a program for multiplication of matrices
int main()
{
    int a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
    int A11, A12, A13, A21, A22, A23, A31, A32, A33;
    char A, B, C, D, E;

    printf("\tMultiplication of matrices\n");
    printf("\nWhat is the order and type of matrices?\n");
    printf("\nOption A: 2*2 and same matrix");
    printf("\nOption B: 2*2 and different matrix");
    printf("\nOption C: 3*3 and same matrix");
    printf("\nOption D: 3*3 and different matrix\n");
    printf("\nYour response is : ");
    scanf("%c", &E);

    if (E == 'A')
    {
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d", &a);
        printf("Second Element : ");
        scanf("%d", &b);
        printf("\nEnter the value of second row elements:\n");
        printf("\nThird Element : ");
        scanf("%d", &c);
        printf("Fourth Element : ");
        scanf("%d", &d);

        printf("\nThe matrix A is as follows:\n");
        printf("\n\t%d\t%d", a, b);
        printf("\n\t%d\t%d\n", c, d);

        A11 = a * a + b * c;
        A12 = a * b + b * d;
        A21 = c * a + d * c;
        A22 = c * b + d * d;

        printf("\nValue of first row elements:\n");
        printf("\nFirst Element : %d", A11);
        printf("\nSecond Element : %d\n", A12);
        printf("\nValue of second row elements:\n");
        printf("\nThird Element : %d", A21);
        printf("\nFourth Element : %d\n", A22);

        printf("\nThe matrix A.A is as follows:\n");
        printf("\n\t%d\t%d", A11, A12);
        printf("\n\t%d\t%d\n", A21, A22);
    }
    else if (E == 'B')
    {
        printf("\nMatrix A :\n");
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d", &a);
        printf("Second Element : ");
        scanf("%d", &b);
        printf("\nEnter the value of second row elements:\n");
        printf("\nThird Element : ");
        scanf("%d", &c);
        printf("Fourth Element : ");
        scanf("%d", &d);

        printf("\nThe matrix A is as follows:\n");
        printf("\n\t%d\t%d", a, b);
        printf("\n\t%d\t%d\n", c, d);

        printf("\nMatrix B :\n");
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d", &e);
        printf("Second Element : ");
        scanf("%d", &f);
        printf("\nEnter the value of second row elements:\n");
        printf("\nThird Element : ");
        scanf("%d", &g);
        printf("Fourth Element : ");
        scanf("%d", &h);

        printf("\nThe matrix B is as follows:\n");
        printf("\n\t%d\t%d", e, f);
        printf("\n\t%d\t%d\n", g, h);

        A11 = a * e + b * g;
        A12 = a * f + b * h;
        A21 = c * e + d * g;
        A22 = c * f + d * h;

        printf("\nValue of first row elements:\n");
        printf("\nFirst Element : %d", A11);
        printf("\nSecond Element : %d\n", A12);
        printf("\nValue of second row elements:\n");
        printf("\nThird Element : %d", A21);
        printf("\nFourth Element : %d\n", A22);

        printf("\nThe matrix AB is as follows:\n");
        printf("\n\t%d\t%d", A11, A12);
        printf("\n\t%d\t%d\n", A21, A22);
    }
    else if (E == 'C')
    {
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d", &a);
        printf("Second Element : ");
        scanf("%d", &b);
        printf("Third Element : ");
        scanf("%d", &c);
        printf("\nEnter the value of second row elements:\n");
        printf("\nFourth Element : ");
        scanf("%d", &d);
        printf("Fifth Element : ");
        scanf("%d", &e);
        printf("Sixth Element : ");
        scanf("%d", &f);
        printf("\nEnter the value of third row elements:\n");
        printf("\nSeventh Element : ");
        scanf("%d", &g);
        printf("Eighth Element : ");
        scanf("%d", &h);
        printf("Nineth Element : ");
        scanf("%d", &i);

        printf("\nThe matrix A is as follows:\n");
        printf("\n\t%d\t%d\t%d", a, b, c);
        printf("\n\t%d\t%d\t%d", d, e, f);
        printf("\n\t%d\t%d\t%d\n", g, h, i);

        A11 = a * a + b * d + c * g;
        A12 = a * b + b * e + c * h;
        A13 = a * c + b * f + c * i;
        A21 = d * a + e * d + f * g;
        A22 = d * b + e * e + f * h;
        A23 = d * c + e * f + f * i;
        A31 = g * a + h * d + i * g;
        A32 = g * b + h * e + i * h;
        A33 = g * c + h * f + i * i;

        printf("\nValue of first row elements:\n");
        printf("\nFirst Element : %d", A11);
        printf("\nSecond Element : %d", A12);
        printf("\nThird Element : %d\n", A13);
        printf("\nValue of second row elements:\n");
        printf("\nFourth Element : %d", A21);
        printf("\nFifth Element : %d", A22);
        printf("\nSixth Element : %d\n", A23);
        printf("\nValue of third row elements:\n");
        printf("\nSeventh Element : %d", A31);
        printf("\nEighth Element : %d", A32);
        printf("\nNineth Element : %d\n", A33);

        printf("\nThe matrix A.A is as follows:\n");
        printf("\n\t%d\t%d\t%d", A11, A12, A13);
        printf("\n\t%d\t%d\t%d", A21, A22, A23);
        printf("\n\t%d\t%d\t%d\n", A31, A32, A33);
    }
    else if (E == 'D')
    {
        printf("\nMatrix A :\n");
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d", &a);
        printf("Second Element : ");
        scanf("%d", &b);
        printf("Third Element : ");
        scanf("%d", &c);
        printf("\nEnter the value of second row elements:\n");
        printf("\nFourth Element : ");
        scanf("%d", &d);
        printf("Fifth Element : ");
        scanf("%d", &e);
        printf("Sixth Element : ");
        scanf("%d", &f);
        printf("\nEnter the value of third row elements:\n");
        printf("\nSeventh Element : ");
        scanf("%d", &g);
        printf("Eighth Element : ");
        scanf("%d", &h);
        printf("Nineth Element : ");
        scanf("%d", &i);

        printf("\nThe matrix A is as follows:\n");
        printf("\n\t%d\t%d\t%d", a, b, c);
        printf("\n\t%d\t%d\t%d", d, e, f);
        printf("\n\t%d\t%d\t%d\n", g, h, i);

        printf("\nMatrix B :\n");
        printf("\nEnter the value of first row elements:\n");
        printf("\nFirst Element : ");
        scanf("%d", &j);
        printf("Second Element : ");
        scanf("%d", &k);
        printf("Third Element : ");
        scanf("%d", &l);
        printf("\nEnter the value of second row elements:\n");
        printf("\nFourth Element : ");
        scanf("%d", &m);
        printf("Fifth Element : ");
        scanf("%d", &n);
        printf("Sixth Element : ");
        scanf("%d", &o);
        printf("\nEnter the value of third row elements:\n");
        printf("\nSeventh Element : ");
        scanf("%d", &p);
        printf("Eighth Element : ");
        scanf("%d", &q);
        printf("Nineth Element : ");
        scanf("%d", &r);

        printf("\nThe matrix B is as follows:\n");
        printf("\n\t%d\t%d\t%d", j, k, l);
        printf("\n\t%d\t%d\t%d", m, n, o);
        printf("\n\t%d\t%d\t%d\n", p, q, r);

        A11 = a * j + b * m + c * p;
        A12 = a * k + b * n + c * q;
        A13 = a * l + b * o + c * r;
        A21 = d * j + e * m + f * p;
        A22 = d * k + e * n + f * q;
        A23 = d * l + e * o + f * r;
        A31 = g * j + h * m + i * p;
        A32 = g * k + h * n + i * q;
        A33 = g * l + h * o + i * r;

        printf("\nFirst row elements of matrix AB:\n");
        printf("\nFirst Element : %d", A11);
        printf("\nSecond Element : %d", A12);
        printf("\nThird Element : %d\n", A13);
        printf("\nSecond row elements of matrix AB:\n");
        printf("\nFourth Element : %d", A21);
        printf("\nFifth Element : %d", A22);
        printf("\nSixth Element : %d\n", A23);
        printf("\nThird row elements of matrix AB:\n");
        printf("\nSeventh Element : %d", A31);
        printf("\nEighth Element : %d", A32);
        printf("\nNineth Element : %d\n", A33);

        printf("\nThe matrix AB is as follows:\n");
        printf("\n\t%d\t%d\t%d", A11, A12, A13);
        printf("\n\t%d\t%d\t%d", A21, A22, A23);
        printf("\n\t%d\t%d\t%d\n", A31, A32, A33);
    }
    else
    {
        printf("\nEnter valid input only :(");
    }
}