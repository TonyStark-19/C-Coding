#include<stdio.h>
//This program is to insert an element at the end of an array 
int main()
{
    int n,a;

    printf("Enter the size of array : ");
    scanf("%d",&n);

    int arr[n];

    printf("\nEnter %d elements :\n",n);
    printf("\n");
    for(int i = 0; i<n; i++) {
        scanf("%d",&arr[i]);
    }

    printf("\nEnter the value to insert at the end : ");
    scanf("%d",&a);

    arr[n] = a;
    n++;
    
    printf("\nArray after insertion :\n");
    printf("\n");
    for(int i = 0; i<n; i++) {
        printf("%d ",arr[i]);
    }
    printf("\n");
}