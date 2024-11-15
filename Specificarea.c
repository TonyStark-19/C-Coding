#include<stdio.h>
#include<math.h>
//This code is to find area of rectangle,square,and circle
int printsquarearea(int n);
float printrectanglearea(float l,float b);
float printcirclearea(float r);

int main()
{
    int n,l,b,r;
    char shape;
    
    printf("This program will help you find area of\nCircle,square or rectangle :\n");
    printf("\nEnter s for square");
    printf("\nEnter r for rectangle");
    printf("\nEnter c for circle\n");
    printf("\nSo you want to find area of : ");
    scanf("%s",&shape);

    if(shape =='s') {
        printf("Area of square is : %d",printsquarearea(n));
    }
    else if(shape =='r') {
        printf("Area of rectangle is : %f",printrectanglearea(l,b));
    }
    else if(shape =='c') {
        printf("Area of circle is : %f",printcirclearea(r));
    }
    else {
        printf("Invalid response :(");
    }
    printf("\nThankyou :)");
}

int printsquarearea(int n) {
    printf("\nEnter the side : ");
    scanf("%d",&n);
    return pow(n,2);
}

float printrectanglearea(float l,float b) {
    printf("\nEnter length : ");
    scanf("%f",&l);
    printf("Enter width :  ");
    scanf("%f",&b);
    return l*b;
}

float printcirclearea(float r) {
    printf("\nEnter radius of circle : ");
    scanf("%f",&r);
    return 3.14*r*r;
}